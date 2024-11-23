import { NavData } from "@/utils";
import { MetadataRoute } from "next";

const WEBSITE_HOST_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

const changeFrequency: ChangeFrequency = "daily";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = NavData.map((route) => ({
    url: `${WEBSITE_HOST_URL}/${route.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency,
    priority: 1,
  }));

  return [...routes];
}
