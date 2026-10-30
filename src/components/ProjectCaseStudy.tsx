
import { Link } from "@tanstack/react-router";
import { Project, projects } from "@/data/projects";
import { Reveal } from "./Reveal";

export function ProjectCaseStudy({ project }: { project: Project }) {
  const currentIndex = projects.findIndex(
    (item) => item.slug === project.slug,
  );

  const previousProject =
    currentIndex > 0 ? projects[currentIndex - 1] : null;

  const nextProject =
    currentIndex >= 0 && currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : null;

  return (
    <article className="border-b border-border">
      {/* Project header */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-14 lg:py-16">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <span aria-hidden="true">←</span>
            Back to projects
          </Link>

          <div className="mt-7 max-w-4xl">
            <p className="text-sm font-medium text-signal">
              {project.category}
            </p>

            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
              {project.problem}
            </p>
          </div>

          {/* Tools */}
          <div className="mt-7 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Project links */}
          {(project.links.github || project.links.demo) && (
            <div className="mt-7 flex flex-wrap gap-3">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  View on GitHub
                  <span aria-hidden="true">↗</span>
                </a>
              )}

              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-card"
                >
                  Live demo
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Case study content */}
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-12">
        {/* Project overview */}
        <Reveal>
          <div className="max-w-4xl">
            <p className="text-sm font-medium text-signal">
              Project overview
            </p>

            <p className="mt-3 text-base leading-7 text-foreground">
              {project.summary}
            </p>
          </div>
        </Reveal>

        {/* Key metrics */}
        {project.metrics.length > 0 && (
          <Reveal delay={80}>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-border bg-card p-5"
                >
                  <p className="text-2xl font-semibold tracking-tight text-foreground">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        )}

        {/* Case study sections */}
        <div className="mt-10 space-y-9">
          {project.caseStudy.map((section, index) => (
            <Reveal key={section.heading} delay={index * 40}>
              <section className="grid gap-4 border-b border-border pb-8 md:grid-cols-[180px_1fr] md:gap-8">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-signal">
                    Step {String(index + 1).padStart(2, "0")}
                  </p>

                  <h2 className="mt-2 text-lg font-semibold text-foreground">
                    {section.heading}
                  </h2>
                </div>

                <div className="space-y-3">
                  {section.body.map((paragraph, paragraphIndex) => (
                    <p
                      key={paragraphIndex}
                      className="text-sm leading-7 text-muted-foreground sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            </Reveal>
          ))}
        </div>

        {/* Key insight */}
        <Reveal>
          <section className="mt-12 rounded-xl border border-border bg-card p-6 sm:p-8">
            <p className="text-sm font-medium text-signal">
              Key insight
            </p>

            <p className="mt-3 text-base leading-7 text-foreground">
              {project.insight}
            </p>

            <div className="mt-7 border-t border-border pt-6">
              <p className="text-sm font-medium text-signal">
                Outcome
              </p>

              <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                {project.outcome}
              </p>
            </div>
          </section>
        </Reveal>

        {/* Navigation */}
        <div className="mt-9 flex flex-col justify-between gap-5 border-t border-border pt-7 sm:flex-row sm:items-center">
          <Link
            to="/projects"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            ← All projects
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Discuss this work →
          </Link>
        </div>

        {/* Previous and next projects */}
        {(previousProject || nextProject) && (
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {previousProject ? (
              <Link
                to="/projects/$slug"
                params={{ slug: previousProject.slug }}
                className="rounded-xl border border-border p-5 transition-colors hover:bg-card"
              >
                <p className="text-xs text-muted-foreground">
                  Previous project
                </p>
                <p className="mt-2 text-sm font-semibold text-foreground">
                  ← {previousProject.title}
                </p>
              </Link>
            ) : (
              <div />
            )}

            {nextProject && (
              <Link
                to="/projects/$slug"
                params={{ slug: nextProject.slug }}
                className="rounded-xl border border-border p-5 text-left transition-colors hover:bg-card sm:text-right"
              >
                <p className="text-xs text-muted-foreground">
                  Next project
                </p>
                <p className="mt-2 text-sm font-semibold text-foreground">
                  {nextProject.title} →
                </p>
              </Link>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
