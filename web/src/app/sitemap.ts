import type { MetadataRoute } from "next";

const baseUrl = "https://where-are-my-keys.vercel.app/";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/behind-scenes",
    "/cast",
    "/contact",
    "/developers",
    "/faq",
    "/house",
    "/story",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
