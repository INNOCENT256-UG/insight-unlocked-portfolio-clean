import { createFileRoute } from "@tanstack/react-router";
import { jsonLdScript, webPageSchema } from "@/lib/structured-data";
import { LegalBody } from "@/components/LegalPage";
import { PageHeader } from "@/components/PageHeader";
import { absoluteUrl, socialMeta } from "@/lib/site";

const title = "Cookies Policy — Innocent, Data Analyst";
const description =
  "This portfolio sets no tracking or advertising cookies and runs no analytics scripts. Here is exactly what that means.";

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
        title="Cookies Policy"
        description="Short version: this site sets no tracking cookies, so there is no consent banner to click through."
      />
      <LegalBody
        updated="6 September 2026"
        sections={[
          {
            heading: "Cookies used on this site",
            body: (
              <p>
                None for tracking, advertising or analytics. No cookie is written to identify you,
                remember you between visits, or measure your behaviour across pages.
              </p>
            ),
          },
          {
            heading: "Why there is no consent banner",
            body: (
              <p>
                Consent banners exist because sites store information that is not strictly necessary.
                This portfolio stores nothing of that kind, so asking for permission would be a
                banner with nothing behind it.
              </p>
            ),
          },
          {
            heading: "Third-party content",
            body: (
              <p>
                Pages here do not embed videos, maps, chat widgets, comment systems or social feeds,
                which are the usual sources of third-party cookies. Web fonts are loaded from Google
                Fonts, which serves the font files and sets no cookies for that request. Links to
                GitHub or LinkedIn only set cookies once you are on those sites.
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
