import { createFileRoute } from "@tanstack/react-router";
import { jsonLdScript, webPageSchema } from "@/lib/structured-data";
import { LegalBody } from "@/components/LegalPage";
import { PageHeader } from "@/components/PageHeader";
import { absoluteUrl, socialMeta } from "@/lib/site";

const title = "Cookies & Storage Policy — Innocent Watsala, Data Analyst";
const description =
  "This portfolio sets no tracking or advertising cookies and runs no analytics scripts. Essential browser storage is used only to remember your privacy notice preference.";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      ...socialMeta({ title, description, path: "/cookies" }),
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/cookies") }],
    scripts: [jsonLdScript(webPageSchema({ path: "/cookies", name: title, description }))],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Cookies"
        title="Cookies & Storage Policy"
        description="Short version: this site sets no tracking or advertising cookies and uses only minimal browser storage for your privacy notice preference."
      />
      <LegalBody
        updated="13 November 2026"
        sections={[
          {
            heading: "Cookies used on this site",
            body: (
              <p>
                None for tracking, advertising or analytics. Application code sets no HTTP cookies to
                identify you, profile your visits, or measure your behaviour across pages.
              </p>
            ),
          },
          {
            heading: "Essential browser storage",
            body: (
              <p>
                When you dismiss the privacy notice banner, your browser stores a single preference
                key (<code>privacy-notice-dismissed-v1</code>) in <code>localStorage</code> so the
                banner does not reappear on every page load. You can reopen the notice anytime from
                &ldquo;Privacy Notice&rdquo; in the footer, or clear it via your browser&apos;s site
                data settings.
              </p>
            ),
          },
          {
            heading: "Third-party content and external requests",
            body: (
              <p>
                Pages here do not embed videos, maps, chat widgets, comment systems or social feeds.
                Web fonts are loaded from Google Fonts, which receives standard HTTP request metadata
                (such as your IP address and browser headers) to deliver font files under
                Google&apos;s own privacy practices. Outbound links to GitHub lead to external
                services with their own privacy and cookie policies.
              </p>
            ),
          },
          {
            heading: "If this changes",
            body: (
              <p>
                If measurement or an embedded service is ever added, this page will be updated first
                and a consent choice will be shown before anything non-essential is stored.
              </p>
            ),
          },
        ]}
      />
    </>
  );
}
