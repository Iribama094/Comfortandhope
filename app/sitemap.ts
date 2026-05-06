import type { MetadataRoute } from "next";

const BASE = "https://comfortandhope.org";

const routes = [
  "",
  "/about",
  "/about/story",
  "/about/team",
  "/about/board",
  "/about/partners",
  "/about/donor-rights",
  "/about/compliance",
  "/about/annual-report",
  "/programs",
  "/donations",
  "/donations/why",
  "/donations/ways",
  "/donations/where",
  "/volunteer",
  "/partner",
  "/partner/why",
  "/partner/types",
  "/partner/impact",
  "/partner/how",
  "/contact",
  "/gallery",
  "/faqs",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/donations") ? 0.9 : 0.7,
  }));
}
