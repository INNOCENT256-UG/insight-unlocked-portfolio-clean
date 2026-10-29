import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ProjectCaseStudy } from "@/components/ProjectCaseStudy";
import { getProject } from "@/data/projects";
import { jsonLdScript, webPageSchema } from "@/lib/structured-data";
import { absoluteUrl, socialMeta } from "@/lib/site";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project unavailable — Innocent" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.project.title} — Case Study | Innocent, Data Analyst`;
    const description = loaderData.project.problem;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        ...socialMeta({ title, description, path: `/projects/${params.slug}`, type: "article" }),
      ],
      links: [{ rel: "canonical", href: absoluteUrl(`/projects/${params.slug}`) }],
      scripts: [
        jsonLdScript(
          webPageSchema({
            path: `/projects/${params.slug}`,
            name: title,
            description,
            type: "ItemPage",
          }),
        ),
      ],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  return <ProjectCaseStudy project={project} />;
}

function ProjectNotFound() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-28 text-center sm:px-8">
      <h1 className="text-3xl font-semibold">Project not found</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        This case study doesn&apos;t exist or has been moved.
      </p>
      <Link
        to="/projects"
        className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
      >
        All projects
      </Link>
    </div>
  );
}
