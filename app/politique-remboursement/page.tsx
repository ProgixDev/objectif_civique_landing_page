export const metadata = {
  title: "Politique de remboursement — Objectif Civique",
};

export default function PolitiqueRemboursement() {
  return (
    <main className="min-h-screen bg-white px-4 py-16">
      <article className="mx-auto max-w-3xl text-gray-700">
        <h1 className="text-3xl font-extrabold text-[#0055A4]">
          Politique de remboursement
        </h1>
        <p className="mt-3 text-sm text-gray-500">
          Dernière mise à jour : à compléter — <em>document à faire valider</em>.
        </p>

        <h2 className="mt-8 text-xl font-bold text-gray-900">Principe</h2>
        <p className="mt-3">
          Les accès à Objectif Civique sont des <strong>contenus numériques
          fournis immédiatement</strong>. En activant votre accès, vous acceptez
          que la prestation démarre aussitôt et renoncez à votre droit de
          rétractation pour la partie déjà exécutée, conformément à la
          réglementation applicable.
        </p>

        <h2 className="mt-8 text-xl font-bold text-gray-900">
          Achats dans l&apos;application (Google Play / Apple)
        </h2>
        <p className="mt-3">
          Pour un achat réalisé via l&apos;application mobile, le remboursement est
          géré directement par la plateforme concernée, selon ses propres règles :
        </p>
        <ul className="mt-3 list-disc pl-6 space-y-2">
          <li>
            <strong>Google Play</strong> : demande via votre compte Google Play ou
            la page d&apos;aide Google Play.
          </li>
          <li>
            <strong>Apple App Store</strong> : demande via « Signaler un problème »
            (reportaproblem.apple.com) ou les réglages de votre compte Apple.
          </li>
        </ul>
        <p className="mt-3">
          Nous ne pouvons pas traiter nous-mêmes un remboursement pour un achat
          effectué via ces plateformes, mais nous pouvons vous accompagner dans la
          démarche.
        </p>

        <h2 className="mt-8 text-xl font-bold text-gray-900">
          Achats sur le web
        </h2>
        <p className="mt-3">
          Pour un achat réalisé sur le site, contactez-nous ; chaque demande est
          étudiée de bonne foi, notamment en cas de problème technique empêchant
          l&apos;accès au service.
        </p>

        <h2 className="mt-8 text-xl font-bold text-gray-900">Contact</h2>
        <p className="mt-3">
          Pour toute demande : <strong>service.horizon224@gmail.com</strong>. Voir
          aussi les{" "}
          <a href="/conditions-generales" className="text-[#0055A4] underline">
            conditions générales
          </a>
          .
        </p>
      </article>
    </main>
  );
}
