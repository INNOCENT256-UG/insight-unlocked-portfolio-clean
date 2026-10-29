import { profile } from "@/data/profile";
import { absoluteUrl, SITE_URL } from "@/lib/site";

export const SITE_NAME = "Innocent — Data Analyst Portfolio";

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: profile.name,
  jobTitle: profile.role,
  description: profile.intro,
  knowsAbout: [
    "Data Analytics",
    "Business Intelligence",
    "Python",
    "SQL",
    "Excel",
    "Power BI",
    "Artificial Intelligence",
    "Intelligent Automation",
  ],
  url: SITE_URL,
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
