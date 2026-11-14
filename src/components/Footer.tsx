import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { profile } from "@/data/profile";
import {
  PROFILE_IMAGE_ALT,
  PROFILE_IMAGE_HEIGHT,
  PROFILE_IMAGE_PATH,
  PROFILE_IMAGE_WIDTH,
} from "@/lib/site";
import { GitHubLogo } from "./TechIcons";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
] as const;

const legal = [
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/cookies", label: "Cookies Policy" },
  { to: "/terms", label: "Terms & Conditions" },
] as const;

export function Footer() {
  const openPrivacyNotice = () => {
    window.dispatchEvent(new Event("open-privacy-notice"));
  };

  return (
    <footer
      data-site-footer
      className="border-t border-[var(--header-border)] bg-[var(--header)] text-[var(--header-foreground)]"
    >
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 py-12 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.6fr_1fr_1fr] lg:gap-12">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-4">
            <img
              src={PROFILE_IMAGE_PATH}
              alt={PROFILE_IMAGE_ALT}
              width={PROFILE_IMAGE_WIDTH}
              height={PROFILE_IMAGE_HEIGHT}
              loading="lazy"
              decoding="async"
              className="h-14 w-14 shrink-0 rounded-full border border-[var(--header-border)] object-cover object-top"
            />
            <div>
              <p className="font-display text-lg font-semibold leading-tight text-[var(--header-foreground)]">
                Innocent Watsala
              </p>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-[var(--signal-bright)]">
                Data Analyst
              </p>
            </div>
          </div>

          <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--header-muted)]">
            {profile.tagline}
          </p>

          <p className="mt-2 text-xs tracking-wide text-[var(--header-muted)]">
            Data Analytics · Business Intelligence · AI · Automation
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--signal-bright)]">
            Navigate
          </p>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-[var(--header-muted)] transition-colors hover:text-[var(--header-foreground)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--signal-bright)]">
            Connect
          </p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a
                href={profile.links.github.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm text-[var(--header-muted)] transition-colors hover:text-[var(--header-foreground)]"
              >
                <GitHubLogo className="h-4 w-4 shrink-0 text-[var(--signal-bright)]" />
                <span>GitHub</span>
              </a>
            </li>

            <li>
              <a
                href={profile.links.email.href}
                className="inline-flex items-center gap-2.5 text-sm text-[var(--header-muted)] transition-colors hover:text-[var(--header-foreground)]"
              >
                <Mail className="h-4 w-4 shrink-0 text-[var(--signal-bright)]" aria-hidden="true" />
                <span className="break-words">{profile.links.email.address}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--header-border)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-6 text-xs text-[var(--header-muted)] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Innocent Watsala. All rights reserved.</p>

          <nav aria-label="Legal">
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {legal.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="inline-flex min-h-11 items-center underline-offset-4 transition-colors hover:text-[var(--header-foreground)] hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              <li>
                <button
                  type="button"
                  onClick={openPrivacyNotice}
                  className="inline-flex min-h-11 items-center underline-offset-4 transition-colors hover:text-[var(--header-foreground)] hover:underline"
                >
                  Privacy Notice
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
