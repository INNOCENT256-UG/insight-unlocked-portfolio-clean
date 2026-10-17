import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export type LegalSection = { heading: string; body: ReactNode };

export function LegalBody({ updated, sections }: { updated: string; sections: LegalSection[] }) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-20">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Last updated: {updated}
          </p>
        </Reveal>
        <div className="mt-10 space-y-10">
          {sections.map((section, index) => (
            <Reveal key={section.heading} delay={index * 60}>
              <article>
                <h2 className="font-display text-2xl font-semibold">{section.heading}</h2>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {section.body}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
