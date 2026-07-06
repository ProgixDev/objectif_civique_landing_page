import Link from "next/link";
import { PLANS } from "../lib/plans";

export default function Pricing() {
  return (
    <section id="tarifs" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Choisissez votre formule
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Toutes les formules donnent accès à <strong>l&apos;intégralité</strong>{" "}
            du contenu (questions, simulations, fiches…). La différence, c&apos;est
            la durée. <strong>Paiement unique, sans renouvellement</strong> :
            vous payez une seule fois, et l&apos;accès se débloque automatiquement
            dans l&apos;application.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.id}
              className={`relative rounded-2xl bg-white p-6 shadow-lg transition-transform hover:-translate-y-1 ${
                p.highlight ? "ring-2 ring-brand-blue" : "border border-gray-100"
              }`}
            >
              {p.badge && (
                <span className="absolute -top-3 right-5 rounded-full bg-brand-blue px-3 py-1 text-xs font-bold text-white">
                  {p.badge}
                </span>
              )}
              <h3 className="text-lg font-bold text-gray-900">{p.title}</h3>
              <p className="mt-2">
                <span className="text-3xl font-extrabold text-brand-blue">
                  {p.price}
                </span>
                <span className="text-sm text-gray-500"> {p.period}</span>
              </p>
              <ul className="mt-5 space-y-2 text-sm text-gray-600">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-brand-blue">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/abonnement"
                className={`mt-6 block rounded-full py-3 text-center text-sm font-bold transition-all ${
                  p.highlight
                    ? "bg-brand-blue text-white hover:bg-blue-800 shadow-lg shadow-blue-500/20"
                    : "border-2 border-brand-blue text-brand-blue hover:bg-blue-50"
                }`}
              >
                Acheter
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-gray-400">
          Paiement sécurisé par Stripe. ✓ 100 % paiement unique — aucun
          renouvellement automatique.
        </p>
      </div>
    </section>
  );
}
