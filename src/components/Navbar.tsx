import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Wordmark } from "./BrandMark";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      data-site-header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-[var(--header-border)] bg-[var(--header)] text-[var(--header-foreground)] transition-shadow duration-300",
        scrolled && "shadow-md shadow-black/15",
      )}
    >
      <div className="site-container flex h-16 items-center justify-between">
        <Link
          to="/"
          className="group rounded-md outline-none focus-visible:ring-2 focus-visible:ring-[var(--signal-bright)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--header)]"
          onClick={() => setOpen(false)}
          aria-label="Innocent — Data Analyst, home"
        >
          <Wordmark inverted />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="group relative px-3.5 py-2 text-[0.8125rem] font-medium tracking-[0.01em] text-[var(--header-muted)] transition-colors hover:text-[var(--header-foreground)]"
              activeProps={{
                className: "!text-[var(--header-foreground)]",
                "aria-current": "page",
              }}
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-3.5 -bottom-px h-0.5 origin-left rounded-full bg-gradient-to-r from-[var(--signal-bright)] to-[var(--signal-lime)] transition-transform duration-300",
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </>
              )}
            </Link>
          ))}
          <Button
            asChild
            size="sm"
            className="ml-4 h-9 rounded-sm px-4 text-[0.8125rem] cta-gradient"
          >
            <Link to="/resume">View Resume</Link>
          </Button>
        </nav>

        <Button
          ref={menuButtonRef}
          type="button"
          size="icon"
          variant="outline"
          className="h-11 w-11 rounded-sm border-[var(--header-border)] bg-transparent text-[var(--header-foreground)] shadow-none hover:border-[var(--signal-bright)] hover:bg-white/5 hover:text-[var(--signal-bright)] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </Button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-[var(--header-border)] bg-[var(--header)] text-[var(--header-foreground)] lg:hidden"
        >
          <nav aria-label="Mobile" className="site-container flex flex-col py-3">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 border-b border-[var(--header-border)] py-3 text-[0.95rem] font-medium text-[var(--header-muted)] transition-colors last-of-type:border-b-0 hover:text-[var(--header-foreground)]"
                activeProps={{
                className: "!text-[var(--header-foreground)]",
                "aria-current": "page",
              }}
              >
                {({ isActive }) => (
                  <>
                    <span
                      aria-hidden="true"
                      className={cn(
                        "h-1.5 w-1.5 rounded-full transition-colors",
                        isActive ? "bg-[var(--signal-bright)]" : "bg-transparent",
                      )}
                    />
                    {item.label}
                  </>
                )}
              </Link>
            ))}
            <Button asChild className="mt-4 mb-2 rounded-sm cta-gradient">
              <Link to="/resume" onClick={() => setOpen(false)}>
                View Resume
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
