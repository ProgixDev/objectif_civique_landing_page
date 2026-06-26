import Image from "next/image";
import StoreBadges from "./StoreBadges";

const LINK_GROUPS = [
  {
    title: "Produit",
    links: [
      { label: "Fonctionnalités", href: "#features" },
      { label: "Parcours", href: "#journey" },
      { label: "Témoignages", href: "#" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Société",
    links: [
      { label: "À propos", href: "#" },
      { label: "Carrières", href: "#" },
      { label: "Presse", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "Mentions légales", href: "/mentions-legales" },
      { label: "Confidentialité", href: "/confidentialite" },
      { label: "Suppression de compte", href: "/suppression-compte" },
    ],
  },
];

function Social({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="w-9 h-9 rounded-full bg-white border border-gray-200 text-gray-500 flex items-center justify-center hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all hover:-translate-y-0.5"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 mb-10">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Objectif Civique"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight leading-none text-brand-blue">
                  Objectif
                </span>
                <span className="text-lg font-extrabold tracking-tight leading-none">
                  Civique
                </span>
              </div>
            </div>
            <p className="text-base font-semibold text-gray-800 leading-relaxed max-w-xs mb-5">
              L&apos;application n°1 pour réussir votre examen civique et
              préparer votre avenir en France.
            </p>
            <StoreBadges size="sm" />
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="text-base font-extrabold mb-4 text-gray-900">{group.title}</h4>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-base font-semibold text-gray-800 hover:text-brand-blue transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-500 mb-4 max-w-2xl">
          Objectif Civique est une application indépendante de préparation à
          l&apos;examen civique. Elle n&apos;est affiliée à aucune administration
          ni organisme gouvernemental.
        </p>
        <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-semibold text-gray-700">
            © 2026 Objectif Civique. Tous droits réservés.
          </p>
          <div className="flex items-center gap-2">
            <Social label="Twitter">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Social>
            <Social label="Facebook">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
              </svg>
            </Social>
            <Social label="Instagram">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C8.741 0 8.333.014 7.053.072 5.775.132 4.905.333 4.14.63a5.876 5.876 0 0 0-2.126 1.384A5.855 5.855 0 0 0 .63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.06 1.277.261 2.148.558 2.913a5.89 5.89 0 0 0 1.384 2.126A5.847 5.847 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.741 24 12 24c3.259 0 3.667-.014 4.947-.072 1.277-.06 2.148-.262 2.913-.558a5.89 5.89 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913C23.988 15.667 24 15.259 24 12c0-3.259-.014-3.667-.072-4.947-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.766-.297-1.636-.499-2.913-.558C15.667.012 15.259 0 12 0Zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.42.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03Zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z" />
              </svg>
            </Social>
            <Social label="LinkedIn">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Social>
          </div>
        </div>
      </div>
    </footer>
  );
}
