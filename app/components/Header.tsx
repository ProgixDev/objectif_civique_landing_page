"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Fonctionnalités", href: "#features" },
  { label: "Examen", href: "#journey" },
  { label: "Parcours", href: "#journey" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="Objectif Civique Logo"
            width={64}
            height={64}
            className="h-12 sm:h-14 w-auto"
            priority
          />
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-extrabold tracking-tight leading-none text-brand-blue">
              Objectif
            </span>
            <span className="text-lg sm:text-xl font-extrabold tracking-tight leading-none">
              Civique
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-base font-bold text-gray-900">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-brand-blue transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/abonnement"
            className="inline-block border-2 border-brand-blue text-brand-blue px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-50 transition-all"
          >
            Acheter
          </Link>
          <a
            href="#download"
            className="inline-block bg-brand-blue text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-blue-800 transition-all shadow-lg shadow-blue-500/20"
          >
            Télécharger l&apos;app
          </a>
        </div>

        <button
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-gray-900 hover:bg-gray-100 transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <nav className="px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-bold text-gray-900 px-3 py-3 rounded-lg hover:bg-gray-50 hover:text-brand-blue transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/abonnement"
              onClick={() => setOpen(false)}
              className="mt-2 border-2 border-brand-blue text-brand-blue text-center px-5 py-3 rounded-full text-base font-bold hover:bg-blue-50 transition-all"
            >
              Acheter
            </Link>
            <a
              href="#download"
              onClick={() => setOpen(false)}
              className="mt-2 bg-brand-blue text-white text-center px-5 py-3 rounded-full text-base font-bold hover:bg-blue-800 transition-all shadow-lg shadow-blue-500/20"
            >
              Télécharger l&apos;app
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
