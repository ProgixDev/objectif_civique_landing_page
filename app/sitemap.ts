import type { MetadataRoute } from "next";

const SITE_URL = "https://www.objectifcivique.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/abonnement",
    "/examen-civique",
    "/questions-officielles",
    "/conditions-generales",
    "/confidentialite",
    "/mentions-legales",
    "/politique-cookies",
    "/politique-remboursement",
  ];

  return staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.5,
  }));
}
