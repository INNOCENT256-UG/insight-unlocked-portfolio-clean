import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { aboutStory, whatIDo } from "@/data/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About({ withCta = false }: { withCta?: boolean }) {
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
      </div>
    </section>
  );
}
