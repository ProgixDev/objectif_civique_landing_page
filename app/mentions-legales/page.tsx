export const metadata = {
  title: "Mentions légales — Objectif Civique",
};

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-white px-4 py-16">
      <article className="mx-auto max-w-3xl text-gray-700">
        <h1 className="text-3xl font-extrabold text-[#0055A4]">
          Mentions légales
        </h1>

        <h2 className="mt-8 text-xl font-bold text-gray-900">Éditeur</h2>
        <p className="mt-3">
          Application et site <strong>Objectif Civique</strong>.
          <br />
          Éditeur : <em>[Nom / raison sociale à compléter]</em>
          <br />
          Adresse : <em>[adresse à compléter]</em>
          <br />
          Contact : contact@objectif-civique.fr
          <br />
          <em>[SIRET / forme juridique à compléter le cas échéant]</em>
        </p>

        <h2 className="mt-8 text-xl font-bold text-gray-900">Hébergement</h2>
        <p className="mt-3">
          Site hébergé par <strong>Vercel Inc.</strong> Données applicatives
          hébergées par <strong>Supabase</strong> (Union européenne).
        </p>

        <h2 className="mt-8 text-xl font-bold text-gray-900">
          Propriété & indépendance
        </h2>
        <p className="mt-3">
          Objectif Civique est une application <strong>indépendante</strong> de
          préparation à l&apos;examen civique. Elle <strong>n&apos;est affiliée à
          aucune administration</strong> ni organisme gouvernemental. Les
          informations fournies sont à but pédagogique et ne remplacent pas les
          sources officielles.
        </p>

        <h2 className="mt-8 text-xl font-bold text-gray-900">Liens utiles</h2>
        <ul className="mt-3 list-disc pl-6 space-y-1">
          <li>
            <a href="/confidentialite" className="text-[#0055A4] underline">
              Politique de confidentialité
            </a>
          </li>
          <li>
            <a href="/suppression-compte" className="text-[#0055A4] underline">
              Suppression de compte
            </a>
          </li>
        </ul>
      </article>
    </main>
  );
}
