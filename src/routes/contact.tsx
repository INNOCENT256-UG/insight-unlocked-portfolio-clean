import { createFileRoute } from "@tanstack/react-router";
import { jsonLdScript, webPageSchema } from "@/lib/structured-data";
import { Contact } from "@/components/Contact";
import { PageHeader } from "@/components/PageHeader";
import { absoluteUrl, socialMeta } from "@/lib/site";

const title = "Contact Innocent Watsala — Data Analyst";
const description =
  "Get in touch about data analytics, business intelligence, reporting or dashboard work. Email, LinkedIn, GitHub and a direct message form.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      ...socialMeta({ title, description, path: "/contact" }),
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/contact") }],
    scripts: [
      jsonLdScript(
        webPageSchema({ path: "/contact", name: title, description, type: "ContactPage" }),
      ),
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's turn data into something useful."
        description="Open to data analytics, business intelligence and reporting opportunities."
      />
      <Contact />
    </>
  );
}
