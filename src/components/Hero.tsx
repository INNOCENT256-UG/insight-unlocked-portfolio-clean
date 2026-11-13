import { Link } from "@tanstack/react-router";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";
import { GitHubLogo, TechStrip } from "./TechIcons";

const HERO_BG_SRC = "/images/hero-bg.webp";

export function Hero() {
  return (
    <section className="border-b border-border bg-background" aria-labelledby="hero-title">
      <div className="relative overflow-hidden bg-[#0E1621] text-white">
        <img
          src={HERO_BG_SRC}
          alt=""
          aria-hidden="true"
          width={1024}
          height={374}
          loading="eager"
          decoding="async"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-right"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0B121C]/95 via-[#0B121C]/80 to-[#0B121C]/20 lg:via-[#0B121C]/65 lg:to-transparent"
        />

        <div className="relative mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-14 lg:py-16">
          <div className="max-w-xl">
            <Reveal>
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#2DD4BF]">
                Data Analyst | Business Intelligence | Automation
              </p>
              <h1
                id="hero-title"
                className="mt-3 font-display text-[clamp(2.1rem,4.2vw,3.15rem)] leading-[1.08] tracking-tight text-white"
              >
                Making data make sense.{" "}
                <span className="text-[#2DD4BF]">Turning insights into better decisions.</span>
              </h1>
            </Reveal>

            <Reveal delay={70}>
              <p className="mt-4 max-w-[48ch] text-base leading-relaxed text-slate-300">
                I work with Python, SQL, Excel, and Power BI to transform raw data into meaningful
                insights, practical dashboards, and clearer business decisions.
              </p>
            </Reveal>

            <Reveal delay={130}>
              <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg" className="rounded-sm px-6 cta-gradient sm:min-w-44">
                  <Link to="/projects">
                    Explore My Work <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-sm border-white/25 bg-white/5 px-6 text-white hover:border-white/50 hover:bg-white/10 hover:text-white sm:min-w-40"
                >
                  <Link to="/resume">View My Resume</Link>
                </Button>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-6">
                <a
                  href={profile.links.github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 text-xs font-medium text-slate-300 transition-colors hover:text-[#2DD4BF]"
                  aria-label="GitHub profile: github.com/INNOCENT256-UG (opens in a new tab)"
                >
                  <GitHubLogo className="h-4 w-4" /> GitHub
                </a>
                <a
                  href={profile.links.email.href}
                  className="inline-flex min-h-11 items-center gap-2 text-xs font-medium text-slate-300 transition-colors hover:text-[#2DD4BF]"
                  aria-label="Email watsalainnocent081@gmail.com"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" /> {profile.links.email.address}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8">
        <Reveal delay={180}>
          <TechStrip className="border-t-0 pt-0" />
        </Reveal>
      </div>
    </section>
  );
}
