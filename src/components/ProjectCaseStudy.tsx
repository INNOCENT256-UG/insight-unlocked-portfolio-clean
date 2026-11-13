import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import { projects, type Project, type ProjectImage } from "@/data/projects";
import { Reveal } from "./Reveal";
import { GitHubLogo } from "./TechIcons";

/** Frames the existing case-study headings within a consistent methodology. */
const SECTION_STAGE: Record<string, string> = {
  Problem: "Context",
  Data: "Methodology",
  Environment: "Methodology",
  Process: "Implementation",
  Analysis: "Findings",
  Evaluation: "Findings",
  Insights: "Findings",
  Outcome: "Conclusion",
};

function ProjectFigure({
  image,
  priority = false,
  className,
}: {
  image: ProjectImage;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure className={className}>
      <a
        href={image.src}
        target="_blank"
        rel="noopener noreferrer"
        className="group block overflow-hidden rounded-sm border border-border bg-white outline-none transition-colors hover:border-signal/50 focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-4 focus-visible:ring-offset-background"
        aria-label={`Open full-size image: ${image.caption ?? image.alt} (opens in a new tab)`}
      >
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          decoding="async"
          className="h-auto w-full"
        />
      </a>
      {image.caption ? (
        <figcaption className="mt-3 flex items-start justify-between gap-4 text-sm leading-relaxed text-muted-foreground">
          <span>{image.caption}</span>
          <span className="hidden shrink-0 items-center gap-1 font-mono text-[11px] uppercase tracking-wide sm:inline-flex">
            Enlarge <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
          </span>
        </figcaption>
      ) : null}
    </figure>
  );
}

function ProjectNavCard({ project, direction }: { project: Project; direction: "previous" | "next" }) {
  const isNext = direction === "next";
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className={`group flex items-center gap-4 rounded-sm border border-border bg-card p-3.5 transition-colors hover:border-signal/50 ${isNext ? "sm:flex-row-reverse sm:text-right" : ""}`}
    >
      {project.cover ? (
        <img
          src={project.cover.src}
          alt=""
          width={project.cover.width}
          height={project.cover.height}
          loading="lazy"
          decoding="async"
          className="h-16 w-24 shrink-0 rounded-md border border-border bg-white object-cover object-top"
        />
      ) : null}
      <span className="min-w-0">
        <span
          className={`flex items-center gap-1.5 text-xs text-muted-foreground ${isNext ? "sm:justify-end" : ""}`}
        >
          {isNext ? null : <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />}
          {isNext ? "Next project" : "Previous project"}
          {isNext ? <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" /> : null}
        </span>
        <span className="mt-1 block text-sm font-semibold text-foreground group-hover:text-signal">{project.title}</span>
      </span>
    </Link>
  );
}

export function ProjectCaseStudy({ project }: { project: Project }) {
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex >= 0 && currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const gallery = project.gallery ?? [];
  const headings = new Set(project.caseStudy.map((section) => section.heading));
  const figuresFor = (heading: string) => gallery.filter((image) => image.section === heading);
  const unplacedFigures = gallery.filter((image) => !image.section || !headings.has(image.section));

  return (
    <article className="border-b border-border">
      {/* Project header */}
      <header className="relative overflow-hidden border-b border-border">
        <div aria-hidden="true" className="grid-canvas pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        <div className="relative mx-auto max-w-6xl px-5 pt-8 pb-10 sm:px-8 sm:pt-10 lg:pb-12">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to projects
          </Link>

          <div className="mt-8 max-w-4xl">
            <p className="rule-label flex items-center gap-3">
              <span aria-hidden="true" className="inline-block h-px w-8 bg-signal" />
              Case study · {project.category}
            </p>
            <h1 className="mt-4 text-4xl leading-[1.08] text-foreground sm:text-5xl lg:text-[3.4rem]">
              {project.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {project.problem}
            </p>
          </div>

          {(project.links.github || project.links.demo) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm px-5 py-2.5 text-sm cta-gradient"
                >
                  <GitHubLogo className="h-4 w-4" />
                  View on GitHub
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/30"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Live demo
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              )}
            </div>
          )}

          {project.cover ? (
            <Reveal delay={80}>
              <ProjectFigure image={project.cover} priority className="mt-10 lg:mt-12" />
            </Reveal>
          ) : null}
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:py-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-12">
          {/* Main column */}
          <div className="min-w-0">
            <Reveal>
              <section aria-labelledby="overview-title">
                <p className="rule-label">Overview</p>
                <h2 id="overview-title" className="sr-only">
                  Project overview
                </h2>
                <p className="mt-3 text-lg leading-8 text-foreground">{project.summary}</p>
              </section>
            </Reveal>

            <div className="mt-8 space-y-8">
              {project.caseStudy.map((section, index) => {
                const figures = figuresFor(section.heading);
                const stage = SECTION_STAGE[section.heading];
                const headingId = `section-${index}`;
                return (
                  <Reveal key={section.heading}>
                    <section aria-labelledby={headingId} className="border-t border-border pt-8">
                      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal">
                        {String(index + 1).padStart(2, "0")}
                        {stage ? <span className="text-muted-foreground"> · {stage}</span> : null}
                      </p>
                      <h2 id={headingId} className="mt-2 text-2xl text-foreground sm:text-[1.75rem]">
                        {section.heading}
                      </h2>
                      <div className="mt-4 space-y-4">
                        {section.body.map((paragraph, paragraphIndex) => (
                          <p key={paragraphIndex} className="text-base leading-7 text-muted-foreground">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      {figures.length > 0 ? (
                        <div className="mt-8 space-y-8">
                          {figures.map((image) => (
                            <ProjectFigure key={image.src} image={image} />
                          ))}
                        </div>
                      ) : null}
                    </section>
                  </Reveal>
                );
              })}
            </div>

            {unplacedFigures.length > 0 ? (
              <section aria-labelledby="visuals-title" className="mt-12 border-t border-border pt-8">
                <h2 id="visuals-title" className="text-2xl">
                  Project visuals
                </h2>
                <div className="mt-6 grid gap-8 md:grid-cols-2">
                  {unplacedFigures.map((image) => (
                    <ProjectFigure key={image.src} image={image} />
                  ))}
                </div>
              </section>
            ) : null}

            {/* Key insight & outcome */}
            <Reveal>
              <section
                aria-labelledby="takeaway-title"
                className="mt-10 border-l-2 border-signal bg-surface/50 py-5 pl-6 pr-5"
              >
                <h2 id="takeaway-title" className="rule-label !text-signal">
                  Key insight
                </h2>
                <p className="mt-2 font-display text-xl leading-snug text-foreground sm:text-2xl">{project.insight}</p>
                <div className="mt-6 border-t border-border pt-5">
                  <h3 className="rule-label">Outcome</h3>
                  <p className="mt-2 text-base leading-7 text-muted-foreground">{project.outcome}</p>
                </div>
              </section>
            </Reveal>
          </div>

          {/* At a glance */}
          <aside aria-labelledby="glance-title" className="lg:sticky lg:top-20 lg:self-start">
            <div className="border-t border-border pt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
              <h2 id="glance-title" className="rule-label">
                At a glance
              </h2>

              {project.metrics.length > 0 ? (
                <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="border-l-2 border-signal/50 pl-3">
                      <dd className="font-display text-2xl leading-none tabular-nums text-foreground">{metric.value}</dd>
                      <dt className="mt-1.5 text-xs leading-snug text-muted-foreground">{metric.label}</dt>
                    </div>
                  ))}
                </dl>
              ) : null}

              <div className="mt-6 border-t border-border pt-5">
                <h3 className="rule-label">Category</h3>
                <p className="mt-2 text-sm text-foreground">{project.category}</p>
              </div>

              <div className="mt-5 border-t border-border pt-5">
                <h3 className="rule-label">Tools & technologies</h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <li
                      key={tool}
                      className="rounded border border-border bg-secondary px-2 py-0.5 font-mono text-[11px] text-secondary-foreground"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>

              {project.links.github ? (
                <div className="mt-5 border-t border-border pt-5">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-signal underline-offset-4 hover:underline"
                  >
                    <GitHubLogo className="h-4 w-4" />
                    Source & data on GitHub
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </div>
              ) : null}
            </div>
          </aside>
        </div>

        {/* Navigation */}
        <div className="mt-14 flex flex-col justify-between gap-5 border-t border-border pt-8 sm:flex-row sm:items-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All projects
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Discuss this work <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        {(previousProject || nextProject) && (
          <nav aria-label="More case studies" className="mt-8 grid gap-4 sm:grid-cols-2">
            {previousProject ? <ProjectNavCard project={previousProject} direction="previous" /> : <div />}
            {nextProject ? <ProjectNavCard project={nextProject} direction="next" /> : null}
          </nav>
        )}
      </div>
    </article>
  );
}
