import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Questions officielles de l'examen civique 2026 (exemples corrigés)",
  description:
    "29 questions officielles de l'examen civique 2026, extraites d'une session gratuite réelle, classées par thème avec réponse et explication détaillée. Institutions, histoire, valeurs, géographie, culture.",
  alternates: {
    canonical: "/questions-officielles",
  },
};

type Question = {
  id: string;
  text: string;
  choices: string[];
  correctIndex: number;
  explanation: string;
};

type ThemeGroup = {
  id: string;
  label: string;
  questions: Question[];
};

const THEME_GROUPS: ThemeGroup[] = [
  {
    id: "institutions",
    label: "Institutions de la République",
    questions: [
      {
        id: "off-015",
        text: "Qui a le droit de dissoudre l'Assemblée nationale ?",
        choices: [
          "Un droit du Sénat",
          "Aucun droit ne le permet",
          "Le Président de la République",
          "Un droit de l'Assemblée nationale",
        ],
        correctIndex: 2,
        explanation:
          "Selon l'article 12 de la Constitution, le Président de la République peut prononcer la dissolution de l'Assemblée nationale après consultation du Premier ministre et des présidents des deux assemblées. De nouvelles élections législatives doivent alors se tenir dans les 20 à 40 jours suivants.",
      },
      {
        id: "off-016",
        text: "Quel est traditionnellement le premier acte symbolique d'un nouveau Président de la République ?",
        choices: [
          "Dissoudre le Parlement",
          "Remonter les Champs-Élysées et raviver la flamme du Soldat inconnu",
          "Nommer immédiatement ses ministres",
          "Modifier la Constitution",
        ],
        correctIndex: 1,
        explanation:
          "Le jour de sa passation de pouvoirs, le nouveau Président remonte les Champs-Élysées jusqu'à l'Arc de Triomphe pour raviver la flamme du Soldat inconnu, geste symbolique d'hommage aux morts pour la France.",
      },
      {
        id: "off-017",
        text: "Qu'est-ce qu'une motion de censure ?",
        choices: [
          "Un vote des députés pour renverser le gouvernement",
          "Une interdiction de parole au Parlement",
          "Un vote de confiance demandé par le gouvernement",
          "Une interdiction de publication pour la presse",
        ],
        correctIndex: 0,
        explanation:
          "La motion de censure, prévue par l'article 49 de la Constitution, permet à l'Assemblée nationale de renverser le gouvernement. Elle doit être déposée par au moins un dixième des députés et adoptée à la majorité absolue.",
      },
      {
        id: "off-018",
        text: "Qu'est-ce que la souveraineté nationale ?",
        choices: [
          "Un concept historique inexistant aujourd'hui",
          "Le principe selon lequel le pouvoir appartient à la Nation (au peuple)",
          "Une obligation imposée aux citoyens",
          "Une décision de justice",
        ],
        correctIndex: 1,
        explanation:
          "La souveraineté nationale signifie que le pouvoir politique appartient à la Nation — c'est-à-dire au peuple français — qui l'exerce par ses représentants élus et par la voie du référendum (article 3 de la Constitution).",
      },
      {
        id: "off-019",
        text: "Quelle est la durée du mandat d'un sénateur français ?",
        choices: ["9 ans", "3 ans", "4 ans", "6 ans"],
        correctIndex: 3,
        explanation:
          "Les sénateurs sont élus pour un mandat de 6 ans au suffrage universel indirect. Le Sénat est renouvelé par moitié tous les 3 ans et compte 348 sénateurs, qui siègent au Palais du Luxembourg à Paris.",
      },
    ],
  },
  {
    id: "histoire",
    label: "Histoire de France",
    questions: [
      {
        id: "off-002",
        text: "Quel grand monument parisien a été inauguré pour l'Exposition universelle de 1889 ?",
        choices: ["Le Sacré-Cœur", "L'Arc de Triomphe", "Notre-Dame", "La Tour Eiffel"],
        correctIndex: 3,
        explanation:
          "La Tour Eiffel, conçue par l'ingénieur Gustave Eiffel, a été inaugurée le 31 mars 1889 pour l'Exposition universelle célébrant le centenaire de la Révolution française.",
      },
      {
        id: "off-003",
        text: "En quelle année l'esclavage a-t-il été définitivement aboli en France ?",
        choices: ["1848", "1789", "1794", "1905"],
        correctIndex: 0,
        explanation:
          "L'esclavage a été définitivement aboli le 27 avril 1848 par un décret de la IIᵉ République, sous l'impulsion de Victor Schœlcher. Une première abolition avait eu lieu en 1794, mais Napoléon l'avait rétablie en 1802.",
      },
      {
        id: "off-004",
        text: "Environ combien de pièces le Château de Versailles compte-t-il ?",
        choices: ["2 300 pièces", "1 200 pièces", "1 800 pièces", "500 pièces"],
        correctIndex: 0,
        explanation:
          "Le Château de Versailles compte environ 2 300 pièces réparties sur 63 154 m². Ancienne résidence des rois de France, il est classé au patrimoine mondial de l'UNESCO depuis 1979.",
      },
      {
        id: "off-005",
        text: "Qui est l'auteur de Candide ?",
        choices: ["Montesquieu", "Diderot", "Rousseau", "Voltaire"],
        correctIndex: 3,
        explanation:
          "Voltaire (1694-1778), de son vrai nom François-Marie Arouet, a publié Candide ou l'Optimisme en 1759, conte philosophique qui critique avec ironie l'optimisme de Leibniz.",
      },
    ],
  },
  {
    id: "valeurs",
    label: "Valeurs républicaines, droits et devoirs",
    questions: [
      {
        id: "off-020",
        text: "Que garantit le principe de laïcité en France ?",
        choices: [
          "Un système théocratique",
          "L'absence totale de religion dans la société",
          "La neutralité de l'État et le respect de toutes les croyances",
          "Une religion obligatoire pour tous",
        ],
        correctIndex: 2,
        explanation:
          "La laïcité, consacrée par la loi du 9 décembre 1905, garantit la neutralité de la puissance publique et la liberté de conscience. L'État ne reconnaît, ne salarie ni ne subventionne aucun culte, mais protège la liberté de chacun de croire ou non.",
      },
      {
        id: "off-021",
        text: "La laïcité garantit-elle la liberté de conscience ?",
        choices: ["Non, elle l'interdit", "Seulement pour les chrétiens", "Oui, pour tous", "Seulement pour les athées"],
        correctIndex: 2,
        explanation:
          "L'article 1er de la loi de 1905 dispose : « La République assure la liberté de conscience. » Chacun est donc libre de croire ou de ne pas croire, et de changer de conviction à tout moment.",
      },
      {
        id: "off-022",
        text: "Quels sont les principes fondamentaux du service public en France ?",
        choices: [
          "La continuité uniquement",
          "L'adaptabilité uniquement",
          "L'égalité uniquement",
          "La continuité, l'adaptabilité et l'égalité",
        ],
        correctIndex: 3,
        explanation:
          "Les trois « lois de Rolland » sont : la continuité (le service ne peut être interrompu), l'égalité (tous les usagers sont traités pareillement) et l'adaptabilité (le service évolue avec les besoins).",
      },
      {
        id: "off-023",
        text: "Qu'est-ce que le bien commun ?",
        choices: [
          "Une obligation légale individuelle",
          "Un bien appartenant à une personne privée",
          "Un concept philosophique inexistant",
          "Ce qui est bénéfique à l'ensemble de la communauté",
        ],
        correctIndex: 3,
        explanation:
          "Le bien commun désigne ce qui profite à l'ensemble de la communauté et non à des intérêts particuliers : la santé publique, l'éducation, la sécurité, l'environnement, les libertés fondamentales.",
      },
      {
        id: "off-024",
        text: "La Charte de l'environnement a-t-elle une valeur constitutionnelle en France ?",
        choices: [
          "Seulement dans les zones rurales",
          "Oui, elle a valeur constitutionnelle depuis 2004",
          "Seulement dans les parcs naturels",
          "Non, elle est facultative",
        ],
        correctIndex: 1,
        explanation:
          "La Charte de l'environnement a été adossée à la Constitution par la loi constitutionnelle du 1er mars 2005, consacrant le droit de vivre dans un environnement équilibré et les principes de précaution et de prévention.",
      },
      {
        id: "off-008",
        text: "Peut-on être expulsé de son logement sans décision de justice ?",
        choices: ["Non", "Seulement en été", "Oui", "Seulement si on ne paie pas son loyer"],
        correctIndex: 0,
        explanation:
          "Nul ne peut être expulsé de son logement sans une décision de justice rendue par un juge. La trêve hivernale (1er novembre - 31 mars) interdit par ailleurs les expulsions.",
      },
      {
        id: "off-009",
        text: "Peut-on refuser l'accès à un service public en raison de l'origine d'une personne ?",
        choices: [
          "Oui, si l'origine est connue",
          "Oui, c'est le droit du service",
          "Non, c'est interdit par la loi",
          "Seulement dans certains services",
        ],
        correctIndex: 2,
        explanation:
          "La discrimination fondée sur l'origine est strictement interdite par l'article 225-1 du Code pénal et punie jusqu'à 3 ans d'emprisonnement et 45 000 € d'amende.",
      },
      {
        id: "off-010",
        text: "Peut-on entrer au domicile d'une personne sans sa permission ?",
        choices: ["Toujours", "Non, sauf cas légaux", "Oui", "Jamais, en aucun cas"],
        correctIndex: 1,
        explanation:
          "Le domicile est inviolable. On ne peut y entrer qu'avec l'accord de l'occupant ou dans les cas strictement prévus par la loi : perquisition, flagrant délit, danger imminent, ou décision de justice.",
      },
      {
        id: "off-011",
        text: "Quel est le numéro d'appel des pompiers en France ?",
        choices: ["17", "15", "112", "18"],
        correctIndex: 3,
        explanation:
          "Le 18 est le numéro des sapeurs-pompiers. Les autres numéros essentiels : 15 SAMU, 17 Police/Gendarmerie, 112 numéro d'urgence européen.",
      },
      {
        id: "off-012",
        text: "Quel est le numéro d'appel du SAMU (urgences médicales) ?",
        choices: ["15", "17", "18", "112"],
        correctIndex: 0,
        explanation:
          "Le 15 est le numéro du SAMU (Service d'aide médicale urgente), à composer en cas de malaise, arrêt cardiaque, détresse respiratoire ou toute urgence médicale vitale.",
      },
      {
        id: "off-013",
        text: "Quel est le numéro d'appel de la Police et de la Gendarmerie ?",
        choices: ["15", "17", "18", "112"],
        correctIndex: 1,
        explanation:
          "Le 17 est le numéro de la Police nationale (en ville) et de la Gendarmerie (en zone rurale), à composer en cas de crime, délit flagrant, agression ou vol en cours.",
      },
      {
        id: "off-014",
        text: "Quel est le numéro d'urgence européen unique, accessible dans tous les pays de l'UE ?",
        choices: ["15", "17", "18", "112"],
        correctIndex: 3,
        explanation:
          "Le 112 est le numéro d'urgence européen, gratuit et accessible depuis n'importe quel téléphone dans les 27 États membres de l'Union européenne.",
      },
    ],
  },
  {
    id: "geographie",
    label: "Géographie",
    questions: [
      {
        id: "off-001",
        text: "Quelle chaîne de montagnes marque principalement la frontière entre la France et l'Italie ?",
        choices: ["Les Vosges", "Les Pyrénées", "Le Massif central", "Les Alpes"],
        correctIndex: 3,
        explanation:
          "Les Alpes s'étendent sur environ 1 200 km de la mer Méditerranée jusqu'à l'Autriche, et forment la frontière naturelle entre la France et l'Italie. Les Pyrénées séparent la France de l'Espagne.",
      },
    ],
  },
  {
    id: "culture",
    label: "Culture & société",
    questions: [
      {
        id: "off-006",
        text: "Quelle est la comédie musicale française la plus célèbre dans le monde ?",
        choices: ["Les Misérables", "Cyrano", "Moulin Rouge", "Notre-Dame de Paris"],
        correctIndex: 0,
        explanation:
          "Les Misérables, adaptation du roman de Victor Hugo, a été créée à Paris en 1980. C'est la comédie musicale française la plus vue au monde avec plus de 70 millions de spectateurs.",
      },
      {
        id: "off-007",
        text: "Parmi les cinéastes suivants, lequel est considéré comme l'un des plus récompensés de la Nouvelle Vague française ?",
        choices: ["Jacques Rivette", "François Truffaut", "Jacques Tati", "Jean-Luc Godard"],
        correctIndex: 1,
        explanation:
          "François Truffaut (1932-1984), figure majeure de la Nouvelle Vague, a reçu l'Oscar du meilleur film étranger pour La Nuit américaine (1974) et le Prix Louis-Delluc.",
      },
      {
        id: "off-025",
        text: "Combien de copies d'un acte de naissance peut-on demander en France ?",
        choices: ["3 maximum", "1 seule", "2 maximum", "Autant qu'on le souhaite"],
        correctIndex: 3,
        explanation:
          "Il n'y a aucune limite au nombre de copies d'acte de naissance que l'on peut demander. Les actes sont délivrés gratuitement par la mairie du lieu de naissance.",
      },
      {
        id: "off-026",
        text: "Qui finance principalement la Sécurité sociale en France ?",
        choices: [
          "Une police d'assurance spéciale",
          "Un impôt unique",
          "Une association caritative",
          "Les cotisations sociales et les impôts (dont la CSG)",
        ],
        correctIndex: 3,
        explanation:
          "La Sécurité sociale est financée principalement par les cotisations sociales prélevées sur les salaires et par des impôts affectés comme la CSG. Elle couvre 5 risques : maladie, accidents du travail, vieillesse, famille et autonomie.",
      },
      {
        id: "off-027",
        text: "Qui peut bénéficier de l'Aide personnalisée au logement (APL) ?",
        choices: [
          "Seulement les propriétaires",
          "Les locataires remplissant les conditions de ressources",
          "Les entreprises uniquement",
          "Toute personne, sans condition",
        ],
        correctIndex: 1,
        explanation:
          "L'APL est versée par la CAF (ou la MSA) aux locataires dont les ressources ne dépassent pas certains plafonds. Le montant dépend des revenus, de la composition du foyer, du loyer payé et de la zone géographique.",
      },
      {
        id: "off-028",
        text: "Qu'est-ce que le prélèvement à la source de l'impôt sur le revenu ?",
        choices: [
          "L'impôt est prélevé directement sur le salaire ou la pension chaque mois",
          "Une remise accordée aux nouveaux contribuables",
          "Une facture reçue une fois par an",
          "Une décision de justice fiscale",
        ],
        correctIndex: 0,
        explanation:
          "Mis en place le 1er janvier 2019, le prélèvement à la source consiste à retenir directement l'impôt sur le revenu au moment du versement du salaire, de la pension ou des indemnités.",
      },
      {
        id: "off-029",
        text: "Qu'est-ce que la protection subsidiaire ?",
        choices: [
          "Un statut pour les immigrants économiques",
          "Un statut de demandeur d'asile en attente",
          "Une protection accordée à qui ne remplit pas les critères de réfugié mais encourt une menace grave dans son pays",
          "Un concept juridique inexistant en France",
        ],
        correctIndex: 2,
        explanation:
          "La protection subsidiaire, instituée par la loi du 10 décembre 2003, est accordée par l'OFPRA aux personnes qui ne remplissent pas les critères de la Convention de Genève mais qui encourent une menace grave dans leur pays d'origine.",
      },
    ],
  },
];

const TOTAL_QUESTIONS = THEME_GROUPS.reduce((sum, g) => sum + g.questions.length, 0);

export default function QuestionsOfficiellesPage() {
  return (
    <>
      <Header />
      <main className="pt-20 flex-1">
        <section className="relative pt-10 pb-12 px-4 sm:px-6 overflow-hidden">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-blue-50 text-brand-blue text-sm font-extrabold uppercase tracking-wide px-3 py-1.5 rounded-full mb-4">
              Questions officielles
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900 leading-tight">
              {TOTAL_QUESTIONS} questions officielles de l&apos;
              <span className="text-brand-blue">examen civique 2026</span>, corrigées et expliquées
            </h1>
            <p className="text-lg font-semibold text-gray-800 leading-relaxed">
              Ces questions sont issues d&apos;une véritable session gratuite de l&apos;examen
              civique. Chaque question est accompagnée de la bonne réponse et d&apos;une explication
              détaillée, classées par thème du référentiel officiel.
            </p>
            <p className="mt-4 text-sm font-semibold text-gray-500">
              L&apos;application Objectif Civique propose plus de 600 questions officielles par
              parcours (carte de séjour, carte de résident, naturalisation), avec simulations
              chronométrées et suivi de progression.
            </p>
          </div>
        </section>

        {THEME_GROUPS.map((group) => (
          <section key={group.id} id={group.id} className="py-8 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-extrabold mb-5 text-gray-900">
                {group.label}
              </h2>
              <div className="flex flex-col gap-3">
                {group.questions.map((q) => (
                  <details
                    key={q.id}
                    className="group bg-white border border-gray-100 rounded-2xl px-5 py-4 shadow-sm shadow-blue-900/5 open:shadow-md transition"
                  >
                    <summary className="flex items-center justify-between cursor-pointer list-none gap-3">
                      <span className="text-base sm:text-lg font-extrabold text-gray-900 pr-4">
                        {q.text}
                      </span>
                      <span className="w-8 h-8 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center text-xl font-bold transition-transform group-open:rotate-45 shrink-0">
                        +
                      </span>
                    </summary>
                    <ul className="mt-4 flex flex-col gap-2">
                      {q.choices.map((choice, i) => (
                        <li
                          key={i}
                          className={`text-sm sm:text-base font-semibold rounded-lg px-3 py-2 border ${
                            i === q.correctIndex
                              ? "bg-green-50 border-green-200 text-green-900"
                              : "bg-gray-50 border-gray-100 text-gray-700"
                          }`}
                        >
                          {i === q.correctIndex ? "✓ " : ""}
                          {choice}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-3 text-sm font-semibold text-gray-600 leading-relaxed">
                      {q.explanation}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center bg-brand-surface rounded-3xl px-6 py-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 text-gray-900">
              Envie de vous entraîner sur toutes les questions officielles ?
            </h2>
            <p className="text-base font-semibold text-gray-700 mb-7 max-w-xl mx-auto">
              Objectif Civique propose des centaines de questions officielles supplémentaires,
              des simulations d&apos;examen chronométrées et un suivi personnalisé de votre
              progression.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/abonnement"
                className="inline-block bg-brand-blue text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-blue-800 transition-all shadow-lg shadow-blue-500/20"
              >
                Voir les formules
              </Link>
              <Link
                href="/#download"
                className="inline-block border-2 border-brand-blue text-brand-blue px-6 py-3 rounded-full text-sm font-bold hover:bg-blue-50 transition-all"
              >
                Télécharger l&apos;application
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
