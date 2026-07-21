export const metadata = {
  title: "Politique de cookies — Objectif Civique",
};

export default function PolitiqueCookies() {
  return (
    <main className="min-h-screen bg-white px-4 py-16">
      <article className="mx-auto max-w-3xl text-gray-700">
        <h1 className="text-3xl font-extrabold text-[#0055A4]">
          Politique de cookies
        </h1>
        <p className="mt-3 text-sm text-gray-500">
          Dernière mise à jour : à compléter — <em>document à faire valider</em>.
        </p>

        <h2 className="mt-8 text-xl font-bold text-gray-900">
          Qu&apos;est-ce qu&apos;un cookie ?
        </h2>
        <p className="mt-3">
          Un cookie est un petit fichier déposé sur votre appareil lors de la
          visite d&apos;un site. Il permet de faire fonctionner le service, de
          retenir vos préférences et, avec votre accord, de mesurer
          l&apos;audience.
        </p>

        <h2 className="mt-8 text-xl font-bold text-gray-900">
          Cookies utilisés
        </h2>
        <ul className="mt-3 list-disc pl-6 space-y-2">
          <li>
            <strong>Cookies essentiels</strong> : nécessaires au fonctionnement du
            site et à la connexion. Ils ne requièrent pas de consentement.
          </li>
          <li>
            <strong>Cookies de mesure d&apos;audience</strong> (le cas échéant) :
            statistiques de fréquentation, déposés uniquement avec votre accord.
          </li>
        </ul>
        <p className="mt-3">
          L&apos;<strong>application mobile</strong> Objectif Civique
          n&apos;utilise pas de cookies publicitaires. Les données de session sont
          conservées localement sur votre appareil pour vous garder connecté et
          enregistrer votre progression.
        </p>

        <h2 className="mt-8 text-xl font-bold text-gray-900">
          Gérer vos cookies
        </h2>
        <p className="mt-3">
          Vous pouvez à tout moment accepter ou refuser les cookies non essentiels
          via la bannière de consentement, ou configurer votre navigateur pour les
          bloquer. Le refus des cookies non essentiels n&apos;empêche pas
          l&apos;utilisation du service.
        </p>

        <h2 className="mt-8 text-xl font-bold text-gray-900">En savoir plus</h2>
        <p className="mt-3">
          Voir aussi la{" "}
          <a href="/confidentialite" className="text-[#0055A4] underline">
            politique de confidentialité
          </a>
          . Contact : <strong>contact@objectif-civique.fr</strong>.
        </p>
      </article>
    </main>
  );
}
