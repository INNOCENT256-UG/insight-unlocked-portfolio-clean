import { createFileRoute } from "@tanstack/react-router";
import {
  jsonLdScript,
  webPageSchema,
} from "@/lib/structured-data";
import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { absoluteUrl, socialMeta } from "@/lib/site";

const title = "Innocent Watsala | Data Analyst & Business Intelligence";
const description =
  "Innocent Watsala is a Data Analyst specializing in Python, SQL, Excel, Power BI, and AI-assisted business intelligence.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      ...socialMeta({ title, description, path: "/" }),
    ],
    links: [{ rel: "canonical", href: absoluteUrl() }],
    scripts: [
      jsonLdScript(webPageSchema({ path: "/", name: title, description })),
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Projects limit={3} />
      <About withCta />
      <Skills />
    </>
  );
}
