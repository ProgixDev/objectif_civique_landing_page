import Image from "next/image";
import Link from "next/link";

type Feature = {
  title: string;
  desc: string;
  icon: string;
};

const FEATURES: Feature[] = [
  {
    title: "Contenu officiel",
    desc: "2500+ questions issues des sources officielles.",
    icon: "/official_content.png",
  },
  {
    title: "Simulations réelles",
    desc: "Entraînez-vous avec des examens chronométrés.",
    icon: "/reel_simulation.png",
  },
  {
    title: "Suivi personnalisé",
    desc: "Analyse de vos progrès et recommandations.",
    icon: "/personal_tracking.png",
  },
  {
    title: "Révisions thématiques",
    desc: "Apprenez par thèmes selon votre objectif.",
    icon: "/theramic_review.png",
  },
  {
    title: "Rappels intelligents",
    desc: "Révisez chaque jour avec des rappels adaptés.",
    icon: "/reminders.png",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 bg-white border border-gray-100 shadow-xl shadow-blue-900/5 rounded-3xl p-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group flex flex-col items-center text-center p-3 rounded-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-24 h-24 rounded-2xl bg-linear-to-br from-blue-50 to-red-50 flex items-center justify-center mb-4 p-3 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
                <Image
                  src={f.icon}
                  alt={f.title}
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-extrabold mb-2 text-lg text-gray-900">{f.title}</h3>
              <p className="text-base font-semibold text-gray-800 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-6">
          <Link
            href="/questions-officielles"
            className="text-brand-blue font-bold hover:underline"
          >
            Voir des exemples de questions officielles corrigées →
          </Link>
        </p>
      </div>
    </section>
  );
}
