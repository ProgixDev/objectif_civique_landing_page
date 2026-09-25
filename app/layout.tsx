import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import AppBackground from "./components/AppBackground";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const SITE_URL = "https://www.demarches-civiques.fr";
const SITE_NAME = "Démarches Civiques";
const TITLE = "Démarches Civiques | Application pour réussir l'examen civique";
const DESCRIPTION =
  "Démarches Civiques (demarches-civiques) : l'application pour réussir votre examen civique. Des milliers de questions officielles, des simulations intelligentes et un suivi personnalisé pour la naturalisation, la carte de séjour et la carte de résident.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Démarches Civiques",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    // Nom de la marque et ses variantes de saisie (tiret, sans « s », sans accent).
    "démarches civiques",
    "demarches civiques",
    "démarches civique",
    "demarches civique",
    "demarches-civiques",
    "demarches-civique",
    "demarches-civiques.fr",
    "application démarches civiques",
    "examen civique",
    "test civique France",
    "naturalisation française",
    "préparation examen civique",
    "questions officielles examen civique",
    // Ancien nom : ceux qui cherchent encore « Objectif Civique » doivent
    // continuer à trouver le site.
    "objectif civique",
  ],
  authors: [{ name: "Démarches Civiques" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Démarches Civiques",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Démarches Civiques - Application de préparation à l'examen civique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const BRAND_ALIASES = [
  "Demarches Civiques",
  "Démarches Civique",
  "Demarches Civique",
  "demarches-civiques",
  "demarches-civique",
  "demarches-civiques.fr",
];

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  alternateName: BRAND_ALIASES,
  url: SITE_URL,
  inLanguage: "fr-FR",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  alternateName: BRAND_ALIASES,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  email: "support@demarchesciviques.fr",
  description: DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${jakarta.variable} antialiased`}>
      <body className="min-h-screen flex flex-col relative">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <AppBackground />
        {children}
      </body>
    </html>
  );
}
