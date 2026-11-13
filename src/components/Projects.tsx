import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { projectCategories, projects, type ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type Filter = "All" | ProjectCategory;

export function Projects({ limit, heading = true }: { limit?: number; heading?: boolean }) {
  const [filter, setFilter] = useState<Filter>("All");
  const isPreview = typeof limit === "number";

  const visible = useMemo(() => {
    const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);
    return isPreview ? list.slice(0, limit) : list;
  }, [filter, limit, isPreview]);

  return (
    <section
      id="projects"
      aria-labelledby={heading ? "projects-title" : undefined}
      aria-label={heading ? undefined : "Project case studies"}
      className="border-b border-border"
    >
      <div className={cn("mx-auto max-w-6xl px-5 sm:px-8", heading ? "py-10 sm:py-12 lg:py-14" : "py-8 lg:py-10")}>
        {heading ? (
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              id="projects-title"
              eyebrow="Projects"
              title={isPreview ? "Selected case studies" : "Case studies"}
              description="Each project is framed around the business problem, the data behind it, and what the analysis made possible."
            />
            {isPreview ? (
              <Reveal delay={60} className="shrink-0">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 text-sm font-medium text-signal underline-offset-4 hover:underline"
                >
                  View all {projects.length} projects
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Reveal>
            ) : null}
          </div>
        ) : null}

        {!isPreview ? (
          <Reveal delay={80}>
            <div
              role="group"
              aria-label="Filter projects by category"
              className={cn("flex flex-wrap gap-2", heading && "mt-6")}
            >
              {projectCategories.map((category) => {
                const active = filter === category;
                const count =
                  category === "All" ? projects.length : projects.filter((p) => p.category === category).length;
                return (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setFilter(category)}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-sm border px-3 py-1.5 text-sm transition-colors",
                      active
                        ? "border-signal bg-signal text-signal-foreground"
                        : "border-border bg-card text-muted-foreground hover:border-foreground/30 hover:text-foreground",
                    )}
                  >
                    {category}
                    <span
                      aria-hidden="true"
                      className={cn("font-mono text-[11px]", active ? "text-signal-foreground" : "text-muted-foreground")}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
            <p aria-live="polite" className="sr-only">
              Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
              {filter === "All" ? "" : ` in ${filter}`}.
            </p>
          </Reveal>
        ) : null}

        <div className={cn("grid gap-5 sm:grid-cols-2 lg:grid-cols-3", heading || !isPreview ? "mt-6" : undefined)}>
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
