import { createFileRoute } from "@tanstack/react-router";
import { jsonLdScript, webPageSchema } from "@/lib/structured-data";
import { About } from "@/components/About";
import { PageHeader } from "@/components/PageHeader";
import { absoluteUrl, socialMeta } from "@/lib/site";

const title = "About Innocent Watsala — Data Analyst";
const description =
  "How Innocent Watsala works as a Data Analyst: practical business problem solving, data quality, business intelligence and continuous learning in analytics and AI.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      ...socialMeta({ title, description, path: "/about", type: "profile" }),
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/about") }],
    scripts: [
      jsonLdScript(
        webPageSchema({ path: "/about", name: title, description, type: "ProfilePage" }),
      ),
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Data, in service of decisions"
        description="A short professional story: where the focus is now, and how it got there."
      />
      <About withCta detailed />
    </>
  );
}
