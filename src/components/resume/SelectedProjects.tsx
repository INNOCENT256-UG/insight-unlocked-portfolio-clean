import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

const selected = projects.slice(0, 3);

export function SelectedProjects() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {selected.map((project) => (
        <li key={project.slug} className="flex flex-col rounded-lg border border-border bg-card p-5">
          <h3 className="font-display text-base font-semibold">{project.title}</h3>
          <p className="mt-1 font-mono text-[11px] text-muted-foreground">
            {project.tools.slice(0, 4).join(" · ")}
          </p>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
            {project.problem.split(",")[0]}.
          </p>
          <Link
            to="/projects/$slug"
            params={{ slug: project.slug }}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-signal underline-offset-4 hover:underline"
          >
            View Case Study
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
