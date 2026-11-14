import { profile } from "@/data/profile";
import { absoluteUrl, PROFILE_IMAGE_PATH, SITE_URL } from "@/lib/site";

export const SITE_NAME = "Innocent Watsala — Data Analyst Portfolio";

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: profile.name,
  alternateName: ["Innocent"],
  jobTitle: profile.role,
  url: SITE_URL,
  image: absoluteUrl(PROFILE_IMAGE_PATH),
  email: profile.links.email.href,
  description:
    "Data Analyst turning raw data into meaningful insights, practical dashboards, and clearer business decisions using Python, SQL, Excel, and Power BI.",
  sameAs: [profile.links.github.href],
  knowsAbout: [
    "Data Analytics",
    "Business Intelligence",
    "Python",
    "SQL",
    "PostgreSQL",
    "MySQL",
    "Excel",
    "Power BI",
    "Tableau",
    "Pandas",
    "Automation",
  ],
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: profile.name,
  description: profile.tagline,
  url: SITE_URL,
  founder: { "@id": `${SITE_URL}/#person` },
  areaServed: "Worldwide",
  knowsAbout: profile.disciplines,
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en",
};

export function webPageSchema({
  path,
  name,
  description,
  type = "WebPage",
}: {
  path: string;
  name: string;
  description: string;
  type?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#person` },
    inLanguage: "en",
  };
}

export function jsonLdScript(data: unknown) {
  return { type: "application/ld+json", children: JSON.stringify(data) };
}
