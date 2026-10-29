import { createFileRoute } from "@tanstack/react-router";
import {
  jsonLdScript,
  personSchema,
  webPageSchema,
} from "@/lib/structured-data";
import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { absoluteUrl, socialMeta } from "@/lib/site";

const title = "Innocent Watsala — Data Analyst | Data Analytics, Business Intelligence & AI";
const description =
  "Portfolio of Innocent Watsala, a Data Analyst turning complex data into clear, actionable insights with Python, SQL, Excel, Power BI, AI and intelligent automation.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      ...socialMeta({ title, description, path: "/" }),
    ],
    links: [{ rel: "canonical", href: absoluteUrl() }],
    scripts: [
      jsonLdScript(personSchema),
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
