export const metadata = {
  title: "Suppression de compte — Objectif Civique",
};

export default function SuppressionCompte() {
  return (
    <main className="min-h-screen bg-white px-4 py-16">
      <article className="mx-auto max-w-3xl text-gray-700">
        <h1 className="text-3xl font-extrabold text-[#0055A4]">
          Suppression de compte
        </h1>
        <p className="mt-2 text-sm text-gray-500">Objectif Civique</p>

        <p className="mt-6">
          Vous pouvez supprimer votre compte <strong>Objectif Civique</strong> et
          l&apos;ensemble de vos données à tout moment.
        </p>

        <h2 className="mt-8 text-xl font-bold text-gray-900">
          Depuis l&apos;application (recommandé)
        </h2>
        <ol className="mt-3 list-decimal pl-6 space-y-1">
          <li>Ouvrez l&apos;application et connectez-vous.</li>
          <li>
            Allez dans <strong>Profil</strong>.
          </li>
          <li>
            Touchez <strong>« Supprimer mon compte »</strong> et confirmez.
          </li>
        </ol>
        <p className="mt-3">
          La suppression est <strong>immédiate et définitive</strong>.
        </p>

        <h2 className="mt-8 text-xl font-bold text-gray-900">
          Par e-mail (si vous n&apos;avez plus accès à l&apos;app)
        </h2>
        <p className="mt-3">
          Envoyez une demande à{" "}
          <strong>contact@objectif-civique.fr</strong> depuis l&apos;adresse
          e-mail de votre compte, avec l&apos;objet « Suppression de compte ».
          Nous traitons la demande sous 30 jours.
        </p>

        <h2 className="mt-8 text-xl font-bold text-gray-900">
          Données supprimées
        </h2>
        <ul className="mt-3 list-disc pl-6 space-y-1">
          <li>Votre compte (e-mail, prénom, identifiants).</li>
          <li>Votre profil de préparation.</li>
          <li>Votre progression (réponses, scores, statistiques).</li>
        </ul>
        <p className="mt-3 text-sm text-gray-500">
          Les éventuelles données de facturation conservées par notre prestataire
          de paiement (Stripe) le sont uniquement pour des obligations légales et
          comptables.
        </p>
      </article>
    </main>
  );
}
