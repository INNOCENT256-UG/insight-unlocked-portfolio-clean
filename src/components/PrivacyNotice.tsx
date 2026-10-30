import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const STORAGE_KEY = "privacy-notice-dismissed-v1";

export function PrivacyNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      setIsVisible(localStorage.getItem(STORAGE_KEY) !== "true");
    } catch {
      setIsVisible(true);
    }

    const openNotice = () => setIsVisible(true);

    window.addEventListener("open-privacy-notice", openNotice);

    return () => {
      window.removeEventListener("open-privacy-notice", openNotice);
    };
  }, []);

  const dismissNotice = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // The notice can still be dismissed if storage is unavailable.
    }

    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-labelledby="privacy-notice-title"
      className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-xl rounded-xl border border-border bg-background p-5 shadow-2xl sm:inset-x-auto sm:bottom-6 sm:right-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 id="privacy-notice-title" className="font-display text-base font-semibold">
            Your Privacy Matters
          </h2>

          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            This website does not currently use analytics or advertising tracking tools. Essential
            technologies may be used to operate and protect the website. Visit our policies to learn
            more.
          </p>
        </div>

        <button
          type="button"
          onClick={dismissNotice}
          aria-label="Close privacy notice"
          className="text-xl leading-none text-muted-foreground transition-colors hover:text-foreground"
        >
          ×
        </button>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-4 text-xs">
          <Link
            to="/privacy"
            className="text-muted-foreground underline underline-offset-4 hover:text-foreground"
          >
            Privacy Policy
          </Link>

          <Link
            to="/cookies"
            className="text-muted-foreground underline underline-offset-4 hover:text-foreground"
          >
            Cookies Policy
          </Link>
        </div>

        <button
          type="button"
          onClick={dismissNotice}
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
