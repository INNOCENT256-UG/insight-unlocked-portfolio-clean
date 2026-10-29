import { createFileRoute } from "@tanstack/react-router";
import { jsonLdScript, webPageSchema } from "@/lib/structured-data";
import { LegalBody } from "@/components/LegalPage";
import { PageHeader } from "@/components/PageHeader";
import { absoluteUrl, socialMeta } from "@/lib/site";

const title = "Terms & Conditions — Innocent, Data Analyst";
const description =
  "Terms of use for this portfolio: ownership of the work shown, how case study figures should be read, and the limits of what is offered here.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      ...socialMeta({ title, description, path: "/terms" }),
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/terms") }],
    scripts: [jsonLdScript(webPageSchema({ path: "/terms", name: title, description }))],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Terms"
        title="Terms & Conditions"
        description="The ground rules for using this portfolio and the material published on it."
      />
      <LegalBody
        updated="6 September 2026"
        sections={[
          {
            heading: "Purpose of this site",
            body: (
              <p>
                This is a personal portfolio presenting analytics work and professional background.
                It is informational: nothing here is a contract, a job offer, or professional advice
                you should act on without your own review.
              </p>
            ),
          },
          {
            heading: "Ownership",
            body: (
              <p>
                The writing, layout, visuals and case study text on this site belong to Innocent.
                You are welcome to read, quote briefly with credit, and link to any page. Republishing
                pages wholesale, or presenting this work as your own, is not permitted.
              </p>
            ),
          },
          {
            heading: "Case studies and figures",
            body: (
              <p>
                Case studies describe analyses carried out on the named datasets. Figures reflect
                those datasets as analysed and are shown to illustrate method and reasoning, not to
                promise the same result in another context.
              </p>
            ),
          },
          {
            heading: "External links",
            body: (
              <p>
                Links to repositories and profiles on other services are provided for convenience.
                Those sites are outside this site's control and carry their own terms.
              </p>
            ),
          },
          {
            heading: "Availability",
            body: (
              <p>
                This site is offered as it is, without a guarantee of uninterrupted availability, and
                content may be updated or removed at any time.
              </p>
            ),
          },
          {
            heading: "Contacting",
            body: (
              <p>
                Messages sent through the contact form are handled as described in the privacy policy.
              </p>
            ),
          },
        ]}
      />
    </>
  );
}
