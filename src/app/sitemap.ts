import type { MetadataRoute } from "next";

const LP_DEPLOY_URL = "";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: LP_DEPLOY_URL,
      lastModified: new Date("2026-06-11"),
      changeFrequency: "daily", 
      priority: 1.0,
    },
  ];
}