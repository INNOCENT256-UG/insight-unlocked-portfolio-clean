
import { aboutStory, whatIDo } from "@/data/profile";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About({ withCta = false }: { withCta?: boolean }) {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="border-b border-border"
    >
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16 lg:py-18">
        <SectionHeading
          eyebrow="About"
          title="Analytical thinking, practical outcomes"
          description="I focus on turning business questions into clear analysis, useful reporting, and better-informed decisions."
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
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
            <div className="rounded-xl border border-border bg-card p-6 card-elevate">
              <p className="rule-label">Areas of focus</p>

              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {whatIDo.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-secondary px-3 py-2.5 text-sm text-secondary-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {withCta ? (
          <Reveal delay={150}>
            <div className="mt-8 border-t border-border pt-6">
              <p className="text-sm text-muted-foreground">
                Interested in discussing data analytics, reporting, or a
                potential collaboration?
              </p>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
