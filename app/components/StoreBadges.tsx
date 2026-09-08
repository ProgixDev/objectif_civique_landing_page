type Props = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const SIZES = {
  sm: "h-10",
  md: "h-12",
  lg: "h-14",
};

function AppStoreBadge({ className = "" }: { className?: string }) {
  return (
    <a
      href="https://apps.apple.com/fr/app/objectif-civique/id6793272755"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Télécharger sur l'App Store"
      className={`inline-flex items-center gap-2.5 bg-black text-white rounded-xl px-4 py-2 hover:bg-zinc-800 transition-all hover:-translate-y-0.5 hover:shadow-xl ${className}`}
    >
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.05 12.04c-.03-2.94 2.4-4.35 2.51-4.42-1.37-2-3.5-2.27-4.26-2.3-1.81-.18-3.54 1.07-4.46 1.07-.93 0-2.35-1.05-3.87-1.02-1.99.03-3.83 1.16-4.86 2.94-2.07 3.6-.53 8.92 1.49 11.84.99 1.43 2.16 3.04 3.7 2.98 1.49-.06 2.05-.96 3.85-.96 1.8 0 2.31.96 3.88.93 1.6-.03 2.62-1.46 3.6-2.9 1.13-1.66 1.6-3.27 1.62-3.36-.04-.02-3.11-1.19-3.14-4.72zm-2.92-8.68C14.93 2.41 15.46 1.08 15.3 0c-.99.05-2.18.67-2.99 1.61-.74.83-1.39 2.18-1.21 3.24 1.1.08 2.21-.56 3.03-1.49z" />
      </svg>
      <div className="flex flex-col leading-tight text-left">
        <span className="text-[10px] uppercase tracking-wide opacity-80">
          Télécharger sur
        </span>
        <span className="text-lg font-semibold -mt-0.5">App Store</span>
      </div>
    </a>
  );
}

function GooglePlayBadge({ className = "" }: { className?: string }) {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.horizon224.objectifcivique&hl=fr"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Disponible sur Google Play"
      className={`inline-flex items-center gap-2.5 bg-black text-white rounded-xl px-4 py-2 hover:bg-zinc-800 transition-all hover:-translate-y-0.5 hover:shadow-xl ${className}`}
    >
      <svg className="w-7 h-7" viewBox="0 0 24 24">
        <path
          fill="#34A853"
          d="M3.609 1.814L13.792 12 3.61 22.186a1.99 1.99 0 0 1-.61-1.435V3.249c0-.537.224-1.02.61-1.435z"
        />
        <path
          fill="#FBBC04"
          d="M16.81 15.02l-2.7-2.7-2.7 2.7 5.4 3.12c.74.43 1.66.4 2.38-.05l-2.38-3.07z"
        />
        <path
          fill="#EA4335"
          d="M20.43 10.69l-3.62-2.09-2.7 2.7 2.7 2.7 3.62-2.09a1.99 1.99 0 0 0 0-3.22z"
        />
        <path
          fill="#4285F4"
          d="M3.609 1.814a1.98 1.98 0 0 1 1-.27c.36 0 .72.1 1.04.28l11.16 6.46-2.7 2.7L3.609 1.814z"
        />
      </svg>
      <div className="flex flex-col leading-tight text-left">
        <span className="text-[10px] uppercase tracking-wide opacity-80">
          Disponible sur
        </span>
        <span className="text-lg font-semibold -mt-0.5">Google Play</span>
      </div>
    </a>
  );
}

export default function StoreBadges({ size = "md", className = "" }: Props) {
  return (
    <div className={`flex flex-wrap gap-3 ${SIZES[size]} ${className}`}>
      <AppStoreBadge className="h-full" />
      <GooglePlayBadge className="h-full" />
    </div>
  );
}

export { AppStoreBadge, GooglePlayBadge };
