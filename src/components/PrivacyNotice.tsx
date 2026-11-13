import { Link } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";

const STORAGE_KEY = "privacy-notice-dismissed-v1";

export function PrivacyNotice() {
  const [isVisible, setIsVisible] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const dismissNotice = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // The notice can still be dismissed if storage is unavailable.
    }

    setIsVisible(false);
    if (triggerRef.current && document.contains(triggerRef.current)) {
      triggerRef.current.focus();
      triggerRef.current = null;
    }
  }, []);

  useEffect(() => {
    try {
      setIsVisible(localStorage.getItem(STORAGE_KEY) !== "true");
    } catch {
      setIsVisible(true);
    }

    const openNotice = () => {
      triggerRef.current = document.activeElement as HTMLElement | null;
      setIsVisible(true);
      window.requestAnimationFrame(() => {
        closeButtonRef.current?.focus();
      });
    };

    window.addEventListener("open-privacy-notice", openNotice);

    return () => {
      window.removeEventListener("open-privacy-notice", openNotice);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismissNotice();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isVisible, dismissNotice]);

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
            This website does not use analytics or advertising tracking tools. Your browser&apos;s{" "}
            <code>localStorage</code> is used solely to remember if you dismiss this notice, and
            standard server/CDN requests are handled to deliver the site. Visit our policies to
            learn more.
          </p>
        </div>

        <button
          ref={closeButtonRef}
          type="button"
          onClick={dismissNotice}
          aria-label="Close privacy notice"
          className="-mr-2 -mt-2 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-xl leading-none text-muted-foreground transition-colors hover:text-foreground"
        >
          ×
        </button>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-4 text-xs">
          <Link
            to="/privacy"
            className="inline-flex min-h-11 items-center text-muted-foreground underline underline-offset-4 hover:text-foreground"
          >
            Privacy Policy
          </Link>

          <Link
            to="/cookies"
            className="inline-flex min-h-11 items-center text-muted-foreground underline underline-offset-4 hover:text-foreground"
          >
            Cookies Policy
          </Link>
        </div>

        <button
          type="button"
          onClick={dismissNotice}
          className="min-h-11 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
