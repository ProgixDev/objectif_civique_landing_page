import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";
import { getPlan } from "../../lib/plans";

// Stripe a besoin du runtime Node (pas Edge).
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export async function POST(req: NextRequest) {
  try {
    // Instanciation paresseuse : évite de planter au build si la clé manque.
    const secretKey = process.env.STRIPE_SECRET_KEY;
    if (!secretKey) {
      return NextResponse.json(
        { error: "Stripe non configuré (STRIPE_SECRET_KEY)." },
        { status: 500 }
      );
    }
    const stripe = new Stripe(secretKey);

    const { planId, accessToken } = await req.json();

    const plan = getPlan(planId);
    if (!plan) {
      return NextResponse.json({ error: "Forfait inconnu." }, { status: 400 });
    }

    // Identifier l'utilisateur via son token Supabase (même compte que l'app).
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      { global: { headers: { Authorization: `Bearer ${accessToken}` } } }
    );
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();
    if (error || !user) {
      return NextResponse.json({ error: "Non connecté." }, { status: 401 });
    }

    const metadata = { user_id: user.id, plan: plan.id };
    const common: Stripe.Checkout.SessionCreateParams = {
      client_reference_id: user.id,
      customer_email: user.email ?? undefined,
      metadata,
      success_url: `${SITE}/abonnement/merci?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${SITE}/abonnement`,
    };

    let params: Stripe.Checkout.SessionCreateParams;
    if (plan.mode === "subscription") {
      const priceId = process.env[plan.priceEnv as string];
      if (!priceId) {
        return NextResponse.json(
          { error: "Tarif non configuré." },
          { status: 500 }
        );
      }
      params = {
        ...common,
        mode: "subscription",
        line_items: [{ price: priceId, quantity: 1 }],
        subscription_data: { metadata },
      };
    } else {
      // Paiement unique (Découverte 7 jours / VIP à vie).
      params = {
        ...common,
        mode: "payment",
        line_items: [
          {
            quantity: 1,
            price_data: {
              currency: "eur",
              unit_amount: plan.amountCents,
              product_data: { name: `Objectif Civique — ${plan.title}` },
            },
          },
        ],
        payment_intent_data: { metadata },
      };
    }

    const session = await stripe.checkout.sessions.create(params);
    return NextResponse.json({ url: session.url });
  } catch (e) {
    console.error("[checkout]", e);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
