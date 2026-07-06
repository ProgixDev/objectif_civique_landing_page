export default function MerciPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-50 px-4">
      <div className="max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
          ✅
        </div>
        <h1 className="text-2xl font-bold text-[#0055A4]">
          Merci pour votre achat !
        </h1>
        <p className="mt-3 text-gray-600">
          Votre paiement est validé. Votre accès premium est désormais actif.
          <br />
          <br />
          Ouvrez l&apos;application <strong>Objectif Civique</strong> et
          connectez-vous avec le même compte : tout le contenu est débloqué
          automatiquement. 🎉
        </p>
      </div>
    </main>
  );
}
