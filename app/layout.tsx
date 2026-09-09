import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import AppBackground from "./components/AppBackground";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const SITE_URL = "https://www.objectifcivique.fr";
const TITLE = "Objectif Civique - Réussissez votre examen civique";
const DESCRIPTION =
  "Préparez votre avenir en France avec Objectif Civique. Des milliers de questions officielles, des simulations intelligentes et un suivi personnalisé pour réussir votre examen civique.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Objectif Civique",
  },
  description: DESCRIPTION,
  keywords: [
    "examen civique",
    "test civique France",
    "naturalisation française",
    "préparation examen civique",
    "questions officielles examen civique",
    "objectif civique",
  ],
  authors: [{ name: "Objectif Civique" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Objectif Civique",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Objectif Civique - Application de préparation à l'examen civique",
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
  icons: {
    icon: "/favicon.ico",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Objectif Civique",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  email: "Contact@objectifcivique.fr",
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
        <AppBackground />
        {children}
      </body>
    </html>
  );
}
