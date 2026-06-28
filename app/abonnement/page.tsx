"use client";

import { useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "../lib/supabaseClient";
import { PLANS } from "../lib/plans";

export default function AbonnementPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);

  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(false);
  const [checkoutLoading, setCheckoutLoading] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setReady(true);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) =>
      setSession(s)
    );
    return () => sub.subscription.unsubscribe();
  }, []);

  // Pré-remplit l'e-mail quand l'app ouvre cette page (lien d'achat externe).
  useEffect(() => {
    const prefill = new URLSearchParams(window.location.search).get("email");
    if (prefill) setEmail(prefill);
  }, []);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    setAuthLoading(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email: email.trim().toLowerCase(),
          password,
          options: { data: { first_name: firstName.trim() } },
        });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: email.trim().toLowerCase(),
          password,
        });
        if (error) throw error;
      }
    } catch (err) {
      setAuthError(
        err instanceof Error ? err.message : "Erreur de connexion."
      );
    } finally {
      setAuthLoading(false);
    }
  };

  const handleSubscribe = async (planId: string) => {
    setCheckoutLoading(planId);
    try {
      const token = session?.access_token;
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId, accessToken: token }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else alert(data.error ?? "Erreur lors du paiement.");
    } catch {
      alert("Erreur lors du paiement.");
    } finally {
      setCheckoutLoading(null);
    }
  };

  if (!ready) {
    return (
      <main className="min-h-screen flex items-center justify-center text-gray-500">
        Chargement…
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-center text-3xl font-bold text-[#0055A4]">
          Achetez votre accès
        </h1>
        <p className="mt-3 text-center text-gray-600">
          <strong>Paiement unique, sans renouvellement.</strong> Choisissez la
          durée qui vous convient — l&apos;accès se débloque automatiquement dans
          l&apos;application, avec le même compte.
        </p>

        {!session ? (
          /* ─── Connexion / inscription ─── */
          <div className="mx-auto mt-10 max-w-md rounded-2xl bg-white p-6 shadow-lg">
            <div className="mb-4 flex rounded-full bg-gray-100 p-1">
              {(["login", "signup"] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className={`flex-1 rounded-full py-2 text-sm font-semibold ${
                    mode === m ? "bg-[#0055A4] text-white" : "text-gray-600"
                  }`}
                >
                  {m === "login" ? "Connexion" : "Créer un compte"}
                </button>
              ))}
            </div>
            <form onSubmit={handleAuth} className="space-y-3">
              {mode === "signup" && (
                <input
                  className="w-full rounded-lg border border-gray-300 px-4 py-3"
                  placeholder="Prénom"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              )}
              <input
                className="w-full rounded-lg border border-gray-300 px-4 py-3"
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                className="w-full rounded-lg border border-gray-300 px-4 py-3"
                type="password"
                placeholder="Mot de passe (8 caractères, lettre + chiffre)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {authError && (
                <p className="text-sm text-red-600">{authError}</p>
              )}
              <button
                type="submit"
                disabled={authLoading}
                className="w-full rounded-full bg-[#0055A4] py-3 font-semibold text-white disabled:opacity-60"
              >
                {authLoading
                  ? "…"
                  : mode === "login"
                    ? "Se connecter"
                    : "Créer mon compte"}
              </button>
            </form>
          </div>
        ) : (
          /* ─── Forfaits ─── */
          <>
            <p className="mt-6 text-center text-sm text-gray-500">
              Connecté en tant que{" "}
              <span className="font-semibold">{session.user.email}</span> ·{" "}
              <button
                onClick={() => supabase.auth.signOut()}
                className="underline"
              >
                se déconnecter
              </button>
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PLANS.map((p) => (
                <div
                  key={p.id}
                  className={`relative rounded-2xl bg-white p-6 shadow-lg ${
                    p.highlight ? "ring-2 ring-[#0055A4]" : ""
                  }`}
                >
                  {p.badge && (
                    <span className="absolute -top-3 right-4 rounded-full bg-[#0055A4] px-3 py-1 text-xs font-bold text-white">
                      {p.badge}
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-gray-900">{p.title}</h3>
                  <p className="mt-1">
                    <span className="text-2xl font-extrabold text-[#0055A4]">
                      {p.price}
                    </span>
                    <span className="text-sm text-gray-500"> {p.period}</span>
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    {p.features.map((f) => (
                      <li key={f}>✓ {f}</li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleSubscribe(p.id)}
                    disabled={checkoutLoading === p.id}
                    className="mt-6 w-full rounded-full bg-[#0055A4] py-3 font-semibold text-white disabled:opacity-60"
                  >
                    {checkoutLoading === p.id ? "Redirection…" : "Choisir"}
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
