import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import { MiniBars, Sparkline } from "./DataAccents";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card card-elevate">
      <div className="relative border-b border-border bg-surface px-5 py-6">
        <div aria-hidden="true" className="grid-canvas pointer-events-none absolute inset-0 opacity-70" />
        <div className="relative flex items-end justify-between gap-4">
          {index % 2 === 0 ? <Sparkline className="max-w-[60%]" /> : <MiniBars className="h-10" />}
          <span className="rounded-full border border-border bg-card px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
            {project.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold leading-snug">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.problem}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tools used">
          {project.tools.map((tool) => (
            <li
              key={tool}
              className="rounded border border-border bg-secondary px-2 py-0.5 font-mono text-[11px] text-secondary-foreground"
            >
              {tool}
            </li>
          ))}
        </ul>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

        <div className="mt-auto flex flex-wrap items-center gap-4 pt-6">
          <Link
            to="/projects/$slug"
            params={{ slug: project.slug }}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 hover:underline"
          >
            View Project
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          {project.links.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="h-4 w-4" aria-hidden="true" /> GitHub
            </a>
          ) : null}
          {project.links.demo ? (
            <a
              href={project.links.demo}
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              aria-label={`Live demo for ${project.title}`}
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" /> Live demo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
