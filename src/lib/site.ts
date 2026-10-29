export const SITE_URL = "https://innocent-watsala.vercel.app";
export const SOCIAL_IMAGE_URL = `${SITE_URL}/social-card.png`;

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export function socialMeta({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article" | "profile";
}) {
  const url = absoluteUrl(path);

  return [
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    { property: "og:site_name", content: "Innocent Watsala" },
    { property: "og:image", content: SOCIAL_IMAGE_URL },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: "Innocent Watsala — Data Analyst" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: SOCIAL_IMAGE_URL },
  ];
}
