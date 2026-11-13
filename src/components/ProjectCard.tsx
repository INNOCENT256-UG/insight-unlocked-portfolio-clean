import { Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, Bot, Code2, Database, Layers, PieChart } from "lucide-react";
import type { Project, ProjectCategory } from "@/data/projects";
import { MiniBars, Sparkline } from "./DataAccents";

const CATEGORY_ICON: Record<ProjectCategory, typeof BarChart3> = {
  "Data Analytics": BarChart3,
  SQL: Database,
  Python: Code2,
  "Power BI": PieChart,
  AI: Bot,
};

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const Icon = CATEGORY_ICON[project.category] ?? Layers;
  const leadMetric = project.metrics[0];
  const tools = project.tools.slice(0, 3);
  const titleId = `project-${project.slug}-title`;

  return (
    <article
      aria-labelledby={titleId}
      className="group relative flex h-full flex-col rounded-md border border-border bg-card p-3 transition-colors duration-200 hover:border-signal/50"
    >
      <div className="relative aspect-[16/9] overflow-hidden rounded-sm border border-border/70 bg-white">
        {project.cover ? (
          <img
            src={project.cover.src}
            alt=""
            width={project.cover.width}
            height={project.cover.height}
            loading={index < 3 ? "eager" : "lazy"}
            decoding="async"
            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        ) : (
          <div className="relative flex h-full items-end bg-surface p-4">
            <div className="grid-canvas pointer-events-none absolute inset-0 opacity-70" />
            {index % 2 === 0 ? <Sparkline className="relative max-w-[60%]" /> : <MiniBars className="relative h-10" />}
          </div>
        )}

        {/* Top-left category icon badge */}
        <span
          aria-hidden="true"
          className="absolute left-0 top-0 inline-flex h-9 w-9 items-center justify-center rounded-br-md border-b border-r border-border/60 bg-card text-signal"
        >
          <Icon className="h-4.5 w-4.5" />
        </span>
      </div>

      <div className="flex flex-1 flex-col px-1 pt-3.5 pb-1">
        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
          {project.category}
        </p>

        <h3 id={titleId} className="mt-1 line-clamp-2 font-sans text-base font-semibold leading-snug text-foreground">
          <Link
            to="/projects/$slug"
            params={{ slug: project.slug }}
            className="outline-none transition-colors after:absolute after:inset-0 after:rounded-md focus-visible:after:ring-2 focus-visible:after:ring-signal group-hover:text-signal"
          >
            {project.title}
          </Link>
        </h3>

        <p className="mt-1.5 line-clamp-2 text-sm leading-snug text-muted-foreground">
          {project.summary}
        </p>

        <ul className="mt-3.5 flex flex-wrap gap-1.5" aria-label="Highlights and tools">
          {leadMetric ? (
            <li className="inline-flex items-center gap-1 rounded-sm bg-surface px-2 py-0.5 text-[11px] font-medium text-foreground">
              <Database className="h-3 w-3 text-signal" aria-hidden="true" />
              {leadMetric.value} {leadMetric.label.toLowerCase()}
            </li>
          ) : null}
          {tools.map((tool) => (
            <li
              key={tool}
              className="rounded-sm border border-border/80 bg-card px-2 py-0.5 text-[11px] text-muted-foreground"
            >
              {tool}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-3">
          <span className="inline-flex items-center gap-1 text-xs font-medium text-signal">
            View case study
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </span>
        </div>
      </div>
    </article>
  );
}
