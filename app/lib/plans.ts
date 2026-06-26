// Forfaits — miroir de l'app mobile (src/data/plans.ts).
// `mode` : "subscription" (récurrent) ou "payment" (paiement unique).
// `priceEnv` : variable d'env contenant le price_id Stripe (abonnements).
// `accessDays` : durée d'accès pour un paiement unique limité (Découverte).

export type PlanId =
  | "discovery"
  | "premium"
  | "silver"
  | "gold"
  | "diamond"
  | "vip";

export type Plan = {
  id: PlanId;
  title: string;
  price: string;
  period: string;
  amountCents: number;
  mode: "subscription" | "payment";
  priceEnv?: string;
  accessDays: number | null;
  highlight?: boolean;
  badge?: string;
  features: string[];
};

// Toutes les formules en PAIEMENT UNIQUE (aucun renouvellement automatique).
export const PLANS: Plan[] = [
  {
    id: "discovery",
    title: "Accès 7 jours",
    price: "5,99 €",
    period: "paiement unique",
    amountCents: 599,
    mode: "payment",
    accessDays: 7,
    features: ["Accès complet 7 jours", "Toutes les questions officielles", "Idéal pour tester"],
  },
  {
    id: "premium",
    title: "Accès 1 mois",
    price: "9,99 €",
    period: "paiement unique",
    amountCents: 999,
    mode: "payment",
    accessDays: 30,
    features: ["Accès complet 1 mois", "Simulations illimitées", "Suivi de progression"],
  },
  {
    id: "silver",
    title: "Accès 3 mois",
    price: "15,99 €",
    period: "paiement unique",
    amountCents: 1599,
    mode: "payment",
    accessDays: 90,
    features: ["Accès complet 3 mois", "Toutes les mises en situation", "Plus économique que le mois"],
  },
  {
    id: "gold",
    title: "Accès 6 mois",
    price: "19,99 €",
    period: "paiement unique",
    amountCents: 1999,
    mode: "payment",
    accessDays: 180,
    highlight: true,
    badge: "RECOMMANDÉ",
    features: ["Accès complet 6 mois", "Meilleur rapport qualité-prix", "Pour une préparation sereine"],
  },
  {
    id: "diamond",
    title: "Accès 1 an",
    price: "29,99 €",
    period: "paiement unique",
    amountCents: 2999,
    mode: "payment",
    accessDays: 365,
    features: ["Accès complet 1 an", "Le plus économique sur la durée", "Futures mises à jour"],
  },
  {
    id: "vip",
    title: "Accès à vie",
    price: "39,99 €",
    period: "paiement unique",
    amountCents: 3999,
    mode: "payment",
    accessDays: null,
    badge: "À VIE",
    features: ["Accès illimité, à vie", "Aucun renouvellement", "Futures mises à jour"],
  },
];

export function getPlan(id: string): Plan | undefined {
  return PLANS.find((p) => p.id === id);
}
