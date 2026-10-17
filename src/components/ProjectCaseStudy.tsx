import { Link } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";
import { KpiCard, Sparkline } from "./DataAccents";
import { Reveal } from "./Reveal";

export function ProjectCaseStudy({ project }: { project: Project }) {
  return (
    <article>
      <header className="relative border-b border-border">
        <div aria-hidden="true" className="grid-canvas pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-5 py-16 sm:px-8 lg:py-20">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All projects
          </Link>

          <p className="rule-label mt-8">{project.category}</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">{project.title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">{project.problem}</p>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tools used">
            {project.tools.map((tool) => (
              <li
                key={tool}
                className="rounded-md border border-border bg-card px-2.5 py-1 font-mono text-xs text-muted-foreground"
              >
                {tool}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.github ? (
              <Button asChild variant="outline" size="sm">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="h-4 w-4" aria-hidden="true" /> GitHub
                </a>
              </Button>
            ) : null}
            {project.links.demo ? (
              <Button asChild variant="outline" size="sm">
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Live demo for ${project.title}`}
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" /> Live demo
                </a>
              </Button>
            ) : null}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
        <p className="rounded-lg border border-border bg-surface p-4 text-sm text-muted-foreground">
          Full case study based on a public dataset. All figures below come from the analysis in the linked
          repository.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {project.metrics.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 70}>
              <KpiCard label={metric.label} value={metric.value}>
                {i === 0 ? <Sparkline /> : null}
              </KpiCard>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 space-y-12">
          {project.caseStudy.map((section, i) => (
            <Reveal key={section.heading} delay={i * 50}>
              <section aria-labelledby={`section-${i}`}>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-signal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 id={`section-${i}`} className="text-2xl font-semibold">
                    {section.heading}
                  </h2>
                </div>
                <div className="mt-4 space-y-4 border-l border-border pl-6">
                  {section.body.map((paragraph, j) => (
                    <p key={j} className="text-base leading-relaxed text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-border bg-card p-6">
          <h2 className="font-display text-lg font-semibold">Key insight</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.insight}</p>
          <h2 className="mt-6 font-display text-lg font-semibold">Outcome</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.outcome}</p>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Button asChild variant="outline">
            <Link to="/projects">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to projects
            </Link>
          </Button>
          <Button asChild>
            <Link to="/contact">Discuss this work</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
