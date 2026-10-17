import { Link } from "@tanstack/react-router";
import { Github, Mail } from "lucide-react";
import { profile } from "@/data/profile";

const nav = [
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
  return (
    <footer data-site-footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-lg font-semibold">Innocent Watsala</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Data Analyst | Data Analytics • BI • AI • Automation
          </p>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">{profile.tagline}</p>
        </div>

        <nav aria-label="Footer">
          <p className="rule-label">Navigate</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="rule-label">Connect</p>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href={profile.links.github.href}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4" aria-hidden="true" /> GitHub
              </a>
            </li>
            <li>
              <a
                href={profile.links.email.href}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" aria-hidden="true" /> watsalainnocent081@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-6 sm:px-8">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Innocent. All rights reserved.
          </p>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap items-center gap-4">
              {legal.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
