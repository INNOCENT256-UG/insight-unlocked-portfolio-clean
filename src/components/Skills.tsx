
import { skillGroups } from "@/data/skills";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="border-b border-border bg-surface"
    >
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16 lg:py-18">
        <SectionHeading
          eyebrow="Skills"
          title="The analytical toolkit"
          description="Grouped by the part of the workflow they belong to — from raw extraction to the report someone reads."
        />

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = group.icon;

            return (
              <Reveal key={group.id} delay={i * 70}>
                <article className="h-full rounded-xl border border-border bg-card p-6 card-elevate">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent text-accent-foreground">
                      <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>

                    <h3 className="font-display text-base font-semibold">
                      {group.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-sm text-muted-foreground">
                    {group.note}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
