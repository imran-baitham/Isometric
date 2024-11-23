import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin",
    },
    sitemap: `http://localhost:3000/sitemap.xml`, // ${process.env.NEXT_PUBLIC_BASE_URL}
  };
}
