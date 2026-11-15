import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { skillGroups } from "@/data/skills";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="border-b border-border bg-surface/60"
    >
      <div className="site-container py-10 sm:py-12 lg:py-14">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="skills-title"
            eyebrow="Skills"
            title={
              <>
                The <span className="text-signal">analytical</span> toolkit
              </>
            }
            description="Grouped by the part of the workflow they belong to — from raw extraction to the report someone reads."
          />
          <Reveal delay={60} className="shrink-0">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-signal underline-offset-4 hover:underline"
            >
              See tools in case studies
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = group.icon;

            return (
              <Reveal key={group.id} delay={i * 60}>
                <article className="border-t border-border pt-4">
                  <div className="flex items-center gap-2.5">
                    <Icon className="h-4.5 w-4.5 shrink-0 text-signal" aria-hidden="true" />
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {group.title}
                    </h3>
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {group.note}
                  </p>

                  <p className="mt-3 font-mono text-xs leading-relaxed text-foreground/85">
                    {group.items.join(" · ")}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
