export const metadata = {
  title: "Politique de confidentialité — Objectif Civique",
};

export default function Confidentialite() {
  return (
    <main className="min-h-screen bg-white px-4 py-16">
      <article className="mx-auto max-w-3xl prose-sm text-gray-700">
        <h1 className="text-3xl font-extrabold text-[#0055A4]">
          Politique de confidentialité
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Dernière mise à jour : juin 2026
        </p>

        <p className="mt-6">
          La présente politique décrit comment l&apos;application et le site{" "}
          <strong>Objectif Civique</strong> (« nous ») collectent et utilisent
          vos données personnelles, conformément au RGPD.
        </p>

        <h2 className="mt-8 text-xl font-bold text-gray-900">
          1. Données que nous collectons
        </h2>
        <ul className="mt-3 list-disc pl-6 space-y-1">
          <li>
            <strong>Compte</strong> : adresse e-mail, prénom, mot de passe (chiffré).
          </li>
          <li>
            <strong>Profil de préparation</strong> : objectif (naturalisation,
            carte de résident, carte de séjour), niveau, échéance.
          </li>
          <li>
            <strong>Progression</strong> : réponses aux questions, scores, séries
            réalisées, statistiques d&apos;entraînement.
          </li>
          <li>
            <strong>Abonnement</strong> : statut et historique de paiement (gérés
            par notre prestataire de paiement).
          </li>
        </ul>

        <h2 className="mt-8 text-xl font-bold text-gray-900">
          2. Pourquoi nous les utilisons
        </h2>
        <ul className="mt-3 list-disc pl-6 space-y-1">
          <li>Créer et gérer votre compte.</li>
          <li>Sauvegarder et synchroniser votre progression entre vos appareils.</li>
          <li>Gérer votre abonnement et l&apos;accès au contenu premium.</li>
          <li>Améliorer l&apos;application.</li>
        </ul>

        <h2 className="mt-8 text-xl font-bold text-gray-900">
          3. Prestataires (sous-traitants)
        </h2>
        <ul className="mt-3 list-disc pl-6 space-y-1">
          <li>
            <strong>Supabase</strong> — authentification et stockage des données
            (serveurs situés dans l&apos;Union européenne).
          </li>
          <li>
            <strong>Stripe</strong> — traitement des paiements. Nous ne stockons
            jamais vos données bancaires.
          </li>
        </ul>
        <p className="mt-3">
          Nous ne <strong>vendons pas</strong> et ne louons pas vos données.
        </p>

        <h2 className="mt-8 text-xl font-bold text-gray-900">
          4. Conservation
        </h2>
        <p className="mt-3">
          Vos données sont conservées tant que votre compte est actif. Elles sont
          supprimées lorsque vous supprimez votre compte.
        </p>

        <h2 className="mt-8 text-xl font-bold text-gray-900">
          5. Vos droits
        </h2>
        <p className="mt-3">
          Vous disposez d&apos;un droit d&apos;accès, de rectification et de
          suppression. Vous pouvez <strong>supprimer votre compte et toutes vos
          données</strong> directement dans l&apos;application
          (<em>Profil → Supprimer mon compte</em>) ou via la page{" "}
          <a href="/suppression-compte" className="text-[#0055A4] underline">
            Suppression de compte
          </a>
          .
        </p>

        <h2 className="mt-8 text-xl font-bold text-gray-900">6. Contact</h2>
        <p className="mt-3">
          Pour toute question : <strong>service.horizon224@gmail.com</strong>
        </p>

        <p className="mt-10 text-xs text-gray-400">
          Objectif Civique est une application <strong>indépendante</strong> de
          préparation à l&apos;examen civique. Elle n&apos;est affiliée à aucune
          administration ni organisme gouvernemental.
        </p>
      </article>
    </main>
  );
}
