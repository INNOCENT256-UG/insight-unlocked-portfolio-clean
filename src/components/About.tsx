import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Github, Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { aboutStory, profile, whatIDo } from "@/data/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About({ withCta = false, detailed = false }: { withCta?: boolean; detailed?: boolean }) {
  const [portraitUnavailable, setPortraitUnavailable] = useState(false);

  return (
    <section id="about" aria-labelledby="about-title" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="About"
          title="A career built around answering business questions with data"
          description="Analytics is only useful when someone can act on it. That belief shapes how I work."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-5">
            {aboutStory.map((paragraph, i) => (
              <Reveal key={i} delay={i * 80} as="p" className="text-base leading-relaxed text-muted-foreground">
                {paragraph}
              </Reveal>
            ))}
            {withCta ? (
              <Reveal delay={260}>
                <Button asChild variant="outline" className="mt-2">
                  <Link to="/projects">
                    See how I work
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </Reveal>
            ) : null}
          </div>

          <Reveal delay={120}>
            <div className="rounded-xl border border-border bg-card p-6 card-elevate">
              <h3 className="font-display text-lg font-semibold">What I Do</h3>
              <p className="mt-1 text-sm text-muted-foreground">The work I take on day to day.</p>
              <ul className="mt-5 space-y-3">
                {whatIDo.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {detailed ? (
          <div className="mt-12 grid gap-8 border-t border-border pt-10 lg:grid-cols-[0.68fr_1.32fr]">
            <Reveal>
              <div className="overflow-hidden rounded-xl border border-border bg-secondary shadow-[var(--shadow-portrait)]">
                {portraitUnavailable ? (
                  <div className="flex aspect-square items-center justify-center font-display text-6xl text-signal">IW</div>
                ) : (
                  <img
                    src="/images/innocent-portrait.jpg"
                    alt={`Portrait of ${profile.name}, ${profile.role}`}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="aspect-square w-full object-cover object-[50%_20%]"
                    onError={() => setPortraitUnavailable(true)}
                  />
                )}
              </div>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              <Reveal delay={60} className="rounded-xl border border-border bg-card p-6 card-elevate">
                <h3 className="font-display text-lg font-semibold">Career direction</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Seeking data analytics, business intelligence, reporting and dashboard opportunities where careful analysis can support decisions.
                </p>
              </Reveal>
              <Reveal delay={120} className="rounded-xl border border-border bg-card p-6 card-elevate">
                <h3 className="font-display text-lg font-semibold">AI-assisted web work</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Also available for selected AI-assisted website development work with a clear scope and useful, maintainable outcomes.
                </p>
              </Reveal>
              <Reveal delay={180} className="rounded-xl border border-border bg-card p-6 card-elevate sm:col-span-2">
                <h3 className="font-display text-lg font-semibold">Explore the evidence</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Review the case studies, skills and GitHub projects to see the tools and analytical process behind the work.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button asChild variant="outline"><Link to="/projects">View projects <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></Button>
                  <Button asChild variant="outline"><Link to="/skills">View skills</Link></Button>
                  <Button asChild variant="outline"><a href={profile.links.github.href}><Github className="h-4 w-4" aria-hidden="true" /> GitHub</a></Button>
                  <Button asChild><a href={profile.links.email.href}><Mail className="h-4 w-4" aria-hidden="true" /> Email me</a></Button>
                </div>
              </Reveal>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
