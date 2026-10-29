import { createFileRoute } from "@tanstack/react-router";
import { jsonLdScript, webPageSchema } from "@/lib/structured-data";
import { PageHeader } from "@/components/PageHeader";
import { Skills } from "@/components/Skills";
import { absoluteUrl, socialMeta } from "@/lib/site";

const title = "Skills — Python, SQL, Power BI & AI | Innocent, Data Analyst";
const description =
  "The analytical toolkit behind the work: Python and Pandas, SQL and databases, Power BI and Excel reporting, plus AI and intelligent automation.";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      ...socialMeta({ title, description, path: "/skills" }),
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/skills") }],
    scripts: [
      jsonLdScript(
        webPageSchema({ path: "/skills", name: title, description, type: "WebPage" }),
      ),
    ],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="Tools chosen for the question, not the trend"
        description="Grouped by where they sit in the analytics workflow — extraction, analysis, reporting and automation."
      />
      <Skills />
    </>
  );
}
