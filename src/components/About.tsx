import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { aboutStory, whatIDo } from "@/data/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const APPROACH = [
  {
    step: "01",
    title: "Data quality first",
    detail:
      "Operational experience taught me that reporting is only as reliable as the source records — auditing types, missing values and naming inconsistencies comes before any chart.",
  },
  {
    step: "02",
    title: "Evidence over guesswork",
    detail:
      "Every analysis starts with a clear business question, then uses SQL, Python or structured Excel models to isolate drivers, segments and trade-offs.",
  },
  {
    step: "03",
    title: "Decision-ready delivery",
    detail:
      "Findings are packaged into scannable dashboards, documented assumptions and repeatable workflows so stakeholders can act without hunting for context.",
  },
] as const;

export function About({
  withCta = false,
  showApproach = false,
}: {
  withCta?: boolean;
  showApproach?: boolean;
}) {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="border-b border-border"
    >
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-12">
        <SectionHeading
          id="about-title"
          eyebrow="About"
          title="Analytical thinking, practical outcomes"
          description="I focus on turning business questions into clear analysis, useful reporting, and better-informed decisions."
        />

        <div className="mt-7 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          <Reveal>
            <div className="space-y-4">
              {aboutStory.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="border-t border-border pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <p className="rule-label">Areas of focus</p>

              <ul className="mt-4 divide-y divide-border/70 border-b border-border/70">
                {whatIDo.map((item) => (
                  <li
                    key={item}
                    className="flex items-center justify-between py-2.5 text-sm font-medium text-foreground"
                  >
                    <span>{item}</span>
                    <span aria-hidden="true" className="h-1.5 w-1.5 bg-signal" />
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {showApproach ? (
          <Reveal delay={120}>
            <div className="mt-10 border-t border-border pt-8">
              <p className="rule-label">Working approach</p>
              <div className="mt-5 grid gap-8 md:grid-cols-3">
                {APPROACH.map((item) => (
                  <div key={item.step} className="border-t-2 border-signal/35 pt-4">
                    <p className="font-mono text-xs text-signal">{item.step}</p>
                    <h3 className="mt-1.5 font-display text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ) : null}

        {withCta ? (
          <Reveal delay={150}>
            <div className="mt-8 flex flex-col justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
              <p className="text-sm text-muted-foreground">
                Interested in discussing data analytics, reporting, or a
                potential collaboration?
              </p>
              <div className="flex shrink-0 flex-wrap items-center gap-5">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 hover:underline"
                >
                  Explore case studies
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-signal underline-offset-4 hover:underline"
                >
                  Get in touch
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
