import { createFileRoute } from "@tanstack/react-router";
import { jsonLdScript, webPageSchema } from "@/lib/structured-data";
import { LegalBody } from "@/components/LegalPage";
import { PageHeader } from "@/components/PageHeader";

const title = "Privacy Policy — Innocent Watsala, Data Analyst";
const description =
  "How this portfolio handles personal information: what the contact form collects, why, how long it is kept and how to ask for it to be deleted.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
    scripts: [jsonLdScript(webPageSchema({ path: "/privacy", name: title, description }))],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy"
        title="Privacy Policy"
        description="A short, plain-English explanation of what this site does and does not collect."
      />
      <LegalBody
        updated="6 September 2026"
        sections={[
          {
            heading: "Who is responsible",
            body: (
              <p>
                This portfolio is run by Innocent Watsala, an independent data analyst, as a personal
                showcase of work. Contact details for privacy questions are on the contact page.
              </p>
            ),
          },
          {
            heading: "What is collected",
            body: (
              <>
                <p>
                  Only what you choose to send through the contact form: your name, email address,
                  subject and message. Nothing else is requested, and no field is required beyond
                  what is needed to read and reply to your message.
                </p>
                <p>
                  There are no analytics tools, advertising pixels, tracking scripts or third-party
                  embeds on this site. Browsing these pages does not build a profile of you.
                </p>
              </>
            ),
          },
          {
            heading: "Why it is used",
            body: (
              <p>
                Messages are used for one purpose only: to respond to your enquiry about work,
                collaboration or a role. They are never sold, rented or used for marketing lists.
              </p>
            ),
          },
          {
            heading: "How long it is kept",
            body: (
              <p>
                Messages are kept only as long as the conversation is useful, and deleted on request
                at any time.
              </p>
            ),
          },
          {
            heading: "Your rights",
            body: (
              <p>
                You can ask what has been stored about you, ask for a correction, or ask for it to be
                deleted. Send that request through the contact page and it will be handled promptly.
              </p>
            ),
          },
          {
            heading: "Links to other sites",
            body: (
              <p>
                Links to GitHub, LinkedIn and similar services lead to sites with their own privacy
                practices, which this policy does not cover.
              </p>
            ),
          },
        ]}
      />
    </>
  );
}
