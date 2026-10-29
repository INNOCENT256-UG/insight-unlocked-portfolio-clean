import { createFileRoute } from "@tanstack/react-router";
import { jsonLdScript, webPageSchema } from "@/lib/structured-data";
import { LegalBody } from "@/components/LegalPage";
import { PageHeader } from "@/components/PageHeader";
import { absoluteUrl, socialMeta } from "@/lib/site";

const title = "Privacy Policy — Innocent Watsala, Data Analyst";
const description =
  "How this portfolio handles personal information: the current contact form does not transmit messages, and direct email is handled by the relevant email provider.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      ...socialMeta({ title, description, path: "/privacy" }),
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/privacy") }],
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
                  The contact form currently validates fields only in your browser. It does not send,
                  store or transmit the name, email address, subject or message entered there.
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
                If you contact Innocent by email, the message is used only to respond to your enquiry
                about work, collaboration or a role. It is never sold, rented or used for marketing lists.
              </p>
            ),
          },
          {
            heading: "How long it is kept",
            body: (
              <p>
                This website does not retain form entries. Email you choose to send is handled by the
                relevant email provider and kept only as long as the conversation is useful.
              </p>
            ),
          },
          {
            heading: "Your rights",
            body: (
              <p>
                You can ask for a correction or deletion of a direct email conversation. Use the email
                address on the contact page for that request.
              </p>
            ),
          },
          {
            heading: "Links to other sites",
            body: (
              <p>
                Links to GitHub and other external services lead to sites with their own privacy
                practices, which this policy does not cover.
              </p>
            ),
          },
        ]}
      />
    </>
  );
}
