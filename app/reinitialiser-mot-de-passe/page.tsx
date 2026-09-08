"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

type Status = "checking" | "ready" | "invalid" | "submitting" | "done" | "error";

export default function ReinitialiserMotDePassePage() {
  const [status, setStatus] = useState<Status>("checking");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const isRecovery = window.location.hash.includes("type=recovery");

    const { data: sub } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") setStatus("ready");
    });

    supabase.auth.getSession().then(({ data }) => {
      if (data.session && isRecovery) setStatus("ready");
      else if (!isRecovery) setStatus("invalid");
    });

    const timeout = setTimeout(() => {
      setStatus((s) => (s === "checking" ? "invalid" : s));
    }, 4000);

    return () => {
      sub.subscription.unsubscribe();
      clearTimeout(timeout);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password.length < 8) {
      setError("Le mot de passe doit contenir au moins 8 caractères.");
      return;
    }
    if (password !== confirm) {
      setError("Les deux mots de passe ne correspondent pas.");
      return;
    }

    setStatus("submitting");
    const { error: updateError } = await supabase.auth.updateUser({ password });
    if (updateError) {
      setError(updateError.message);
      setStatus("ready");
      return;
    }
    setStatus("done");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 px-4 py-16">
      <div className="mx-auto max-w-md">
        <h1 className="text-center text-3xl font-bold text-[#0055A4]">
          Nouveau mot de passe
        </h1>

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-lg">
          {status === "checking" && (
            <p className="text-center text-gray-500">Vérification du lien…</p>
          )}

          {status === "invalid" && (
            <div className="text-center">
              <p className="text-gray-700">
                Ce lien de réinitialisation est invalide ou a expiré.
              </p>
              <p className="mt-3 text-sm text-gray-500">
                Retourne dans l&apos;application Objectif Civique et refais une
                demande de mot de passe oublié.
              </p>
            </div>
          )}

          {status === "done" && (
            <div className="text-center">
              <p className="text-gray-800 font-semibold">
                Mot de passe mis à jour !
              </p>
              <p className="mt-3 text-sm text-gray-500">
                Tu peux retourner dans l&apos;application Objectif Civique et te
                connecter avec ton nouveau mot de passe.
              </p>
            </div>
          )}

          {(status === "ready" || status === "submitting") && (
            <form onSubmit={handleSubmit} className="space-y-3">
              <p className="text-sm text-gray-600 mb-2">
                Choisis un nouveau mot de passe pour ton compte.
              </p>
              <input
                className="w-full rounded-lg border border-gray-300 px-4 py-3"
                type="password"
                placeholder="Nouveau mot de passe (8 caractères min.)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                className="w-full rounded-lg border border-gray-300 px-4 py-3"
                type="password"
                placeholder="Confirmer le mot de passe"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
              />
              {error && <p className="text-sm text-red-600">{error}</p>}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full rounded-full bg-[#0055A4] py-3 font-semibold text-white disabled:opacity-60"
              >
                {status === "submitting" ? "…" : "Mettre à jour"}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
