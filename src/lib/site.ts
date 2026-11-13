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
  image,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article" | "profile" | undefined;
  image?: {
    url: string;
    width?: number | undefined;
    height?: number | undefined;
    alt?: string | undefined;
  } | undefined;
}) {
  const url = absoluteUrl(path);
  const imageUrl = image ? absoluteUrl(image.url) : SOCIAL_IMAGE_URL;
  const imageWidth = String(image?.width ?? 1200);
  const imageHeight = String(image?.height ?? 630);
  const imageAlt = image?.alt ?? "Innocent Watsala — Data Analyst";

  return [
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    { property: "og:site_name", content: "Innocent Watsala" },
    { property: "og:image", content: imageUrl },
    { property: "og:image:width", content: imageWidth },
    { property: "og:image:height", content: imageHeight },
    { property: "og:image:alt", content: imageAlt },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
  ];
}
