import type { MetadataRoute } from "next";

const SITE_URL = "https://www.objectifcivique.fr";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/reinitialiser-mot-de-passe", "/suppression-compte"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
