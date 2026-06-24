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

export const PLANS: Plan[] = [
  {
    id: "discovery",
    title: "Découverte",
    price: "5,99 €",
    period: "/ 7 jours",
    amountCents: 599,
    mode: "payment",
    accessDays: 7,
    features: ["Accès complet 7 jours", "Toutes les questions", "Idéal pour tester"],
  },
  {
    id: "premium",
    title: "Premium",
    price: "9,99 €",
    period: "/ mois",
    amountCents: 999,
    mode: "subscription",
    priceEnv: "STRIPE_PRICE_PREMIUM",
    accessDays: null,
    features: ["Toutes les questions", "Simulations illimitées", "Suivi de progression"],
  },
  {
    id: "silver",
    title: "Argent",
    price: "15,99 €",
    period: "/ 3 mois",
    amountCents: 1599,
    mode: "subscription",
    priceEnv: "STRIPE_PRICE_SILVER",
    accessDays: null,
    features: ["Tout Premium", "Économies vs mensuel", "Accompagnement prioritaire"],
  },
  {
    id: "gold",
    title: "Or",
    price: "19,99 €",
    period: "/ 6 mois",
    amountCents: 1999,
    mode: "subscription",
    priceEnv: "STRIPE_PRICE_GOLD",
    accessDays: null,
    highlight: true,
    badge: "RECOMMANDÉ",
    features: ["Tout Argent", "Meilleur rapport qualité-prix", "Support prioritaire"],
  },
  {
    id: "diamond",
    title: "Diamant",
    price: "29,99 €",
    period: "/ an",
    amountCents: 2999,
    mode: "subscription",
    priceEnv: "STRIPE_PRICE_DIAMOND",
    accessDays: null,
    features: ["Tout Or", "Le plus économique sur 1 an", "Futures mises à jour"],
  },
  {
    id: "vip",
    title: "Accès VIP",
    price: "39,99 €",
    period: "à vie",
    amountCents: 3999,
    mode: "payment",
    accessDays: null,
    badge: "À VIE",
    features: ["Accès illimité à vie", "Paiement unique", "Futures mises à jour"],
  },
];

export function getPlan(id: string): Plan | undefined {
  return PLANS.find((p) => p.id === id);
}
