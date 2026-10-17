import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header data-site-header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-300",
        scrolled ? "border-border bg-background/92 backdrop-blur-md" : "border-transparent bg-background",
      )}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          to="/"
          className="group rounded-md outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          onClick={() => setOpen(false)}
          aria-label="Innocent — Data Analyst, home"
        >
          <Wordmark />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="group relative px-3.5 py-2 text-[0.8125rem] font-medium tracking-[0.01em] text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-3.5 -bottom-px h-px origin-left bg-signal transition-transform duration-300",
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
            variant="outline"
            className="ml-4 h-9 rounded-full border-signal/45 px-4 text-[0.8125rem] text-signal transition-colors hover:bg-signal hover:text-signal-foreground"
          >
            <Link to="/resume">View Resume</Link>
          </Button>
        </nav>

        <Button
          type="button"
          size="icon"
          variant="outline"
          className="h-10 w-10 rounded-full border-border text-foreground shadow-none hover:border-signal/45 hover:bg-background hover:text-signal lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </Button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Mobile" className="mx-auto flex max-w-6xl flex-col px-5 py-2 sm:px-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 border-b border-border/60 py-3.5 text-[0.95rem] font-medium text-muted-foreground transition-colors last-of-type:border-b-0 hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {({ isActive }) => (
                  <>
                    <span
                      aria-hidden="true"
                      className={cn("h-1.5 w-1.5 rounded-full transition-colors", isActive ? "bg-signal" : "bg-transparent")}
                    />
                    {item.label}
                  </>
                )}
              </Link>
            ))}
            <Button asChild className="mt-4 mb-3 rounded-full">
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
