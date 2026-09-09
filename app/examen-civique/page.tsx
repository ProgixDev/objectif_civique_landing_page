import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Examen civique 2026 : guide complet (CSP, CR, Naturalisation)",
  description:
    "Tout savoir sur l'examen civique 2026 : format (40 questions, 45 minutes, 80% de réussite), les 3 parcours CSP / CR / Naturalisation, qui est dispensé, et où trouver les questions officielles.",
  alternates: {
    canonical: "/examen-civique",
  },
};

const PARCOURS = [
  {
    code: "CSP",
    title: "Carte de Séjour Pluriannuelle",
    desc:
      "Pour le renouvellement ou l'obtention d'une carte de séjour pluriannuelle, l'examen civique permet d'attester la connaissance des valeurs et du fonctionnement de la société française.",
  },
  {
    code: "CR",
    title: "Carte de Résident (10 ans)",
    desc:
      "Pour obtenir une carte de résident de longue durée, l'examen civique valide votre connaissance des institutions, de l'histoire et des valeurs de la République.",
  },
  {
    code: "NAT",
    title: "Naturalisation française",
    desc:
      "Pour une demande de naturalisation, l'examen civique s'ajoute à l'entretien individuel d'assimilation et vérifie votre connaissance approfondie de la France.",
  },
];

const FAQ = [
  {
    q: "Comment réussir l'examen civique ?",
    a: "Visez 32 bonnes réponses sur 40 (80 %). Entraînez-vous régulièrement, lisez les explications détaillées après chaque question, et enchaînez plusieurs simulations complètes avant le jour J.",
  },
  {
    q: "D'où viennent les questions de l'examen civique ?",
    a: "Les questions sont issues du livret du citoyen et des listes officielles publiées par le ministère de l'Intérieur sur formation-civique.interieur.gouv.fr. Le contenu est mis à jour chaque année selon les évolutions de la législation.",
  },
  {
    q: "Qui est dispensé de l'examen civique ?",
    a: "Sont dispensés : les personnes mineures, les personnes de 65 ans et plus, et les personnes en situation de handicap sur présentation d'un certificat médical officiel attestant l'impossibilité de passer l'examen.",
  },
  {
    q: "Quelle est la différence entre entraînement et simulation ?",
    a: "L'entraînement se fait à votre rythme avec un retour immédiat après chaque réponse. La simulation reproduit les conditions réelles de l'examen : 40 questions, 45 minutes chronométrées, correction à la fin.",
  },
  {
    q: "Ai-je déjà réussi l'examen si je l'ai passé pour une précédente démarche ?",
    a: "Oui, une réussite antérieure à l'examen civique reste valable pour vos démarches suivantes. Conservez votre attestation de réussite et présentez-la lors de la constitution de votre dossier.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function ExamenCiviquePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main className="pt-20 flex-1">
        <section className="relative pt-10 pb-12 px-4 sm:px-6 overflow-hidden">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-blue-50 text-brand-blue text-sm font-extrabold uppercase tracking-wide px-3 py-1.5 rounded-full mb-4">
              Guide officiel
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900 leading-tight">
              L&apos;<span className="text-brand-blue">examen civique 2026</span> : le guide
              complet
            </h1>
            <p className="text-lg font-semibold text-gray-800 leading-relaxed">
              Format de l&apos;examen, parcours CSP / CR / Naturalisation, dispenses et sources
              officielles : tout ce qu&apos;il faut savoir avant de préparer votre examen civique
              avec Objectif Civique.
            </p>
          </div>
        </section>

        <section className="py-8 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-extrabold mb-5 text-gray-900">
              Qu&apos;est-ce que l&apos;examen civique ?
            </h2>
            <p className="text-base font-semibold text-gray-700 leading-relaxed mb-4">
              L&apos;examen civique vérifie la connaissance des principes, des valeurs et du
              fonctionnement de la société française. Il se déroule dans un centre agréé par la
              préfecture, sous forme numérique.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white border border-gray-100 rounded-2xl px-5 py-4 shadow-sm shadow-blue-900/5 text-center">
                <p className="text-3xl font-extrabold text-brand-blue">40</p>
                <p className="text-sm font-bold text-gray-700 mt-1">questions à choix multiple</p>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl px-5 py-4 shadow-sm shadow-blue-900/5 text-center">
                <p className="text-3xl font-extrabold text-brand-blue">45</p>
                <p className="text-sm font-bold text-gray-700 mt-1">minutes chronométrées</p>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl px-5 py-4 shadow-sm shadow-blue-900/5 text-center">
                <p className="text-3xl font-extrabold text-brand-blue">32/40</p>
                <p className="text-sm font-bold text-gray-700 mt-1">
                  bonnes réponses requises (80 %)
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 px-4 sm:px-6 bg-brand-surface">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-extrabold mb-5 text-gray-900">
              Les 3 parcours de l&apos;examen civique
            </h2>
            <div className="flex flex-col gap-4">
              {PARCOURS.map((p) => (
                <div
                  key={p.code}
                  className="bg-white border border-gray-100 rounded-2xl px-5 py-4 shadow-sm shadow-blue-900/5"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-block bg-blue-50 text-brand-blue text-xs font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-full">
                      {p.code}
                    </span>
                    <h3 className="text-lg font-extrabold text-gray-900">{p.title}</h3>
                  </div>
                  <p className="text-sm font-semibold text-gray-700 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-extrabold mb-5 text-gray-900">
              Qui est dispensé de l&apos;examen civique ?
            </h2>
            <p className="text-base font-semibold text-gray-700 leading-relaxed">
              Sont dispensés : les personnes <strong>mineures</strong>, les personnes de{" "}
              <strong>65 ans et plus</strong>, et les personnes en{" "}
              <strong>situation de handicap</strong> sur présentation d&apos;un certificat médical
              officiel attestant l&apos;impossibilité de passer l&apos;examen. Si vous avez déjà
              réussi l&apos;examen civique lors d&apos;une précédente démarche, votre réussite
              reste valable.
            </p>
          </div>
        </section>

        <section className="py-8 px-4 sm:px-6 bg-brand-surface">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-extrabold mb-5 text-gray-900">
              D&apos;où viennent les questions officielles ?
            </h2>
            <p className="text-base font-semibold text-gray-700 leading-relaxed mb-4">
              Les questions de l&apos;examen civique sont issues du{" "}
              <strong>livret du citoyen</strong> et des listes officielles publiées par le
              ministère de l&apos;Intérieur. Objectif Civique met à jour son contenu chaque année
              selon les évolutions de la législation. Vous pouvez consulter{" "}
              <span className="inline-flex flex-col sm:inline">
                <Link
                  href="/questions-officielles"
                  className="text-brand-blue underline font-bold"
                >
                  des exemples de questions officielles corrigées
                </Link>
              </span>{" "}
              sur notre site.
            </p>
            <ul className="mt-3 flex flex-col gap-2 text-sm font-semibold">
              <li>
                <a
                  href="https://formation-civique.interieur.gouv.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-blue underline"
                >
                  Formation civique officielle — Ministère de l&apos;Intérieur
                </a>
              </li>
              <li>
                <a
                  href="https://www.immigration.interieur.gouv.fr/Integration-et-Acces-a-la-nationalite/La-nationalite-francaise/Le-livret-du-citoyen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-blue underline"
                >
                  Le Livret du Citoyen
                </a>
              </li>
              <li>
                <a
                  href="https://www.service-public.fr/particuliers/vosdroits/N111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-blue underline"
                >
                  Service-Public.fr — Naturalisation
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="py-8 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-extrabold mb-5 text-gray-900">
              Questions fréquentes
            </h2>
            <div className="flex flex-col gap-3">
              {FAQ.map((item, i) => (
                <details
                  key={i}
                  className="group bg-white border border-gray-100 rounded-2xl px-5 py-4 shadow-sm shadow-blue-900/5 open:shadow-md transition"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none gap-3">
                    <span className="text-base sm:text-lg font-extrabold text-gray-900 pr-4">
                      {item.q}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center text-xl font-bold transition-transform group-open:rotate-45 shrink-0">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm font-semibold text-gray-700 leading-relaxed">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center bg-brand-surface rounded-3xl px-6 py-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 text-gray-900">
              Prêt(e) à préparer votre examen civique ?
            </h2>
            <p className="text-base font-semibold text-gray-700 mb-7 max-w-xl mx-auto">
              Objectif Civique vous propose des centaines de questions officielles, des
              simulations chronométrées dans les conditions réelles et un suivi personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/questions-officielles"
                className="inline-block bg-brand-blue text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-blue-800 transition-all shadow-lg shadow-blue-500/20"
              >
                Voir des questions officielles
              </Link>
              <Link
                href="/abonnement"
                className="inline-block border-2 border-brand-blue text-brand-blue px-6 py-3 rounded-full text-sm font-bold hover:bg-blue-50 transition-all"
              >
                Voir les formules
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
