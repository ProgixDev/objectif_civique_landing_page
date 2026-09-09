const QUESTIONS = [
  {
    q: "L'application est-elle vraiment gratuite ?",
    a: "Oui, vous pouvez utiliser Objectif Civique gratuitement pour vous entraîner sur des centaines de questions officielles. Une option premium est disponible pour accéder à toutes les simulations et au suivi avancé.",
  },
  {
    q: "Les questions sont-elles à jour avec le programme officiel ?",
    a: "Toutes nos questions sont régulièrement vérifiées et mises à jour selon les sources officielles du Ministère de l'Intérieur et le programme civique de référence.",
  },
  {
    q: "Sur quels supports l'application est-elle disponible ?",
    a: "Objectif Civique est disponible sur iOS et Android. Vous pouvez télécharger l'application depuis l'App Store ou Google Play.",
  },
  {
    q: "Combien de temps faut-il pour se préparer à l'examen ?",
    a: "Cela dépend de votre niveau initial, mais nos utilisateurs constatent en moyenne une bonne maîtrise après 3 à 4 semaines de révisions régulières (15 minutes par jour).",
  },
  {
    q: "Mes données personnelles sont-elles protégées ?",
    a: "Absolument. Nous respectons le RGPD et vos données ne sont jamais partagées avec des tiers. Votre progression reste strictement confidentielle.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: QUESTIONS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-20 px-4 sm:px-6 bg-brand-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-50 text-brand-blue text-sm font-extrabold uppercase tracking-wide px-3 py-1.5 rounded-full mb-3">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 text-gray-900">
            Questions <span className="text-brand-blue">fréquentes</span>
          </h2>
          <p className="text-gray-900 text-lg font-bold">
            Tout ce que vous devez savoir avant de commencer.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {QUESTIONS.map((item, i) => (
            <details
              key={i}
              className="group bg-white border border-gray-100 rounded-2xl px-5 py-4 shadow-sm shadow-blue-900/5 open:shadow-md transition"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none gap-3">
                <span className="text-base sm:text-lg font-extrabold text-gray-900 pr-4">{item.q}</span>
                <span className="w-8 h-8 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center text-xl font-bold transition-transform group-open:rotate-45 shrink-0">
                  +
                </span>
              </summary>
              <p className="mt-3 text-base font-semibold text-gray-800 leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
