import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";
import { TechStrip } from "./TechIcons";
import portrait from "@/assets/INNOCENT-portrait.jpg.asset.json";

const FALLBACK_INITIALS = profile.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
const WORKFLOW = ["Data", "Analysis", "Insight", "Decision"] as const;

export function Hero() {
  const imgRef = useRef<HTMLImageElement>(null);
  const [portraitError, setPortraitError] = useState(false);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && (img.naturalWidth === 0 || img.naturalHeight === 0)) setPortraitError(true);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-border" aria-labelledby="hero-title">
      <div aria-hidden="true" className="dot-canvas pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(19rem,0.72fr)] lg:gap-14">
          <div className="min-w-0 text-center lg:text-left">
            <Reveal>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Hello, I&apos;m</p>
              <h1 id="hero-title" className="mt-2.5 font-display text-[clamp(3.4rem,10vw,5.8rem)] leading-[0.9] tracking-tight">
                Innocent Watsala<span className="text-signal">.</span>
              </h1>
            </Reveal>
            <Reveal delay={60}>
              <p className="mt-5 font-mono text-[0.7rem] uppercase tracking-[0.3em] text-foreground sm:text-xs sm:tracking-[0.38em]">Data Analyst</p>
              <p className="mt-2 text-[0.8rem] text-muted-foreground sm:text-sm">Business Intelligence <span aria-hidden="true">&bull;</span> Data Analytics <span aria-hidden="true">&bull;</span> AI</p>
            </Reveal>
            <Reveal delay={120}>
              <p className="mx-auto mt-7 max-w-[25ch] font-display text-[clamp(2rem,5vw,3.35rem)] leading-[1.04] lg:mx-0">
                Turning complex data into{" "}<em className="not-italic text-signal underline decoration-signal/25 decoration-1 underline-offset-[6px]">clear, actionable insights.</em>
              </p>
              <p className="mx-auto mt-5 max-w-[54ch] text-sm leading-relaxed text-muted-foreground lg:mx-0">Python, SQL, Excel, Power BI and intelligent automation &mdash; shaped into decisions people can act on.</p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center lg:justify-start">
                <Button asChild size="lg" className="rounded-full px-7 sm:min-w-48"><Link to="/projects">View Case Studies <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-7 sm:min-w-40"><Link to="/resume">View Resume</Link></Button>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-6 flex items-center justify-center gap-6 lg:justify-start">
                <a href={profile.links.github.href} className="inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-signal" aria-label="GitHub profile: github.com/INNOCENT256-UG"><Github className="h-4 w-4" aria-hidden="true" /> GitHub</a>
                <a href={profile.links.email.href} className="inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-signal" aria-label="Email watsalainnocent081@gmail.com"><Mail className="h-4 w-4" aria-hidden="true" /> Email</a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100} className="flex justify-center lg:justify-end">
            <div className="relative my-4">
              <span aria-hidden="true" className="orbit-ring orbit-slow absolute -inset-6 rounded-full" />
              <span aria-hidden="true" className="orbit-ring orbit-reverse absolute -inset-12 rounded-full" />
              <figure tabIndex={0} role="img" aria-label={`Portrait of ${profile.name}, ${profile.role}, specialising in analytics, business intelligence and intelligent automation`} className="relative h-36 w-36 overflow-hidden rounded-full border-[3px] border-card bg-secondary shadow-[var(--shadow-portrait)] outline-none ring-offset-4 ring-offset-background transition focus-visible:ring-2 focus-visible:ring-signal sm:h-44 sm:w-44 lg:h-52 lg:w-52">
                {portraitError ? <div className="flex h-full w-full items-center justify-center font-display text-3xl text-signal lg:text-4xl" aria-hidden="true">{FALLBACK_INITIALS}</div> : <img ref={imgRef} src={portrait.url} alt={`Portrait of ${profile.name}, ${profile.role}`} width={1339} height={1024} loading="eager" decoding="async" onError={() => setPortraitError(true)} className="h-full w-full scale-[1.15] object-cover object-[50%_22%] sm:scale-110 sm:object-[50%_20%] lg:scale-105 lg:object-[50%_18%]" />}
              </figure>
            </div>
          </Reveal>
        </div>

        <Reveal delay={280}><TechStrip className="mt-10" /></Reveal>
        <Reveal delay={340} className="w-full">
          <ol aria-label="Analytical workflow" className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-muted-foreground sm:gap-x-4 sm:text-[0.6rem]">
            {WORKFLOW.map((step, i) => <li key={step} className="flex items-center gap-3 sm:gap-4"><span className={i === WORKFLOW.length - 1 ? "text-signal" : undefined}>{step}</span>{i < WORKFLOW.length - 1 ? <span aria-hidden="true" className="text-border">&rarr;</span> : null}</li>)}
          </ol>
          <div className="mt-4 flex justify-center"><Link to="/projects" className="inline-flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-signal"><ArrowDown className="h-3.5 w-3.5 animate-bounce text-signal" aria-hidden="true" /> Selected work</Link></div>
        </Reveal>
      </div>
    </section>
  );
}






