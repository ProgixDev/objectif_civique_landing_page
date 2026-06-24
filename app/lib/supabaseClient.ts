"use client";

import { createClient } from "@supabase/supabase-js";

/**
 * Client Supabase navigateur — MÊME projet que l'app mobile, donc les comptes
 * créés ici sont les mêmes que dans l'app (l'abonnement payé sur le site
 * débloque l'accès dans l'app).
 */
// Fallbacks neutres : évitent un crash au build si une variable d'env manque.
// En prod, ces variables DOIVENT être définies (sinon connexion impossible).
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key"
);
