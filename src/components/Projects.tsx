import { useMemo, useState } from "react";
import { projectCategories, projects, type ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type Filter = "All" | ProjectCategory;

export function Projects({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = useMemo(() => {
    const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);
    return typeof limit === "number" ? list.slice(0, limit) : list;
  }, [filter, limit]);

  return (
    <section id="projects" aria-labelledby="projects-title" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Projects"
          title="Case studies, not screenshots"
          description="Each project is framed around the business problem, the data behind it, and what the analysis made possible."
        />

        <Reveal delay={80}>
          <div
            role="group"
            aria-label="Filter projects by category"
            className="mt-9 flex flex-wrap gap-2"
          >
            {projectCategories.map((category) => {
              const active = filter === category;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(category)}
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 text-sm transition-colors",
                    active
                      ? "border-signal bg-signal text-signal-foreground"
                      : "border-border bg-card text-muted-foreground hover:text-foreground",
                  )}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <Reveal key={project.slug} delay={i * 60} className="h-full">
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="mt-10 text-sm text-muted-foreground">No projects in this category yet.</p>
        ) : null}
      </div>
    </section>
  );
}
