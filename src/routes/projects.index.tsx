import { createFileRoute } from "@tanstack/react-router";
import { jsonLdScript, webPageSchema } from "@/lib/structured-data";
import { PageHeader } from "@/components/PageHeader";
import { Projects } from "@/components/Projects";

const title = "Projects — Analytics Case Studies | Innocent, Data Analyst";
const description =
  "Data analytics case studies framed around the business problem, the data, the process, the analysis and the outcome. Built with Python, SQL, Power BI and AI.";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
    scripts: [
      jsonLdScript(
        webPageSchema({ path: "/projects", name: title, description, type: "CollectionPage" }),
      ),
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Analytical work, explained end to end"
        description="Problem → Data → Process → Analysis → Insights → Outcome. Every case study follows the same structure."
      />
      <Projects />
    </>
  );
}
