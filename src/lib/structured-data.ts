import { profile } from "@/data/profile";

export const SITE_NAME = "Innocent — Data Analyst Portfolio";

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "/#person",
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
  url: "/",
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "/#organization",
  name: profile.name,
  description: profile.tagline,
  url: "/",
  founder: { "@id": "/#person" },
  areaServed: "Worldwide",
  knowsAbout: profile.disciplines,
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "/#website",
  name: SITE_NAME,
  url: "/",
  publisher: { "@id": "/#organization" },
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
    "@id": `${path}#webpage`,
    url: path,
    name,
    description,
    isPartOf: { "@id": "/#website" },
    about: { "@id": "/#person" },
    inLanguage: "en",
  };
}

export function jsonLdScript(data: unknown) {
  return { type: "application/ld+json", children: JSON.stringify(data) };
}
