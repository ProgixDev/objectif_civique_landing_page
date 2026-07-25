const MARIANNE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCs-29-avmN-V0jmS0W1KTJmX0vM63zf-ns94Nk8cySIVJdQqaEcqPYyXN7VBaS-l4quiwDvU3y6FPwbh-Bhcz0TXoQt2RVY-XmsW831fj_VViq5Bm3Gd_ZWQJPTchschPzXgNnBNVwF5a1QmpGPGSx2Im79Nt9cW0mSQbaaCsJR6oORyspxlSe-YoV-H5ouOO9JEy7-eM9bpjiAgvtj2k7bSwsWOdmuWpyXQ2k5guYkPh6qwy029pSFvbat0fS_YxawNZ3h2ogkjyz";

type Stat = { value: string; label: string; icon: React.ReactNode };

const STATS: Stat[] = [
  {
    value: "50 000+",
    label: "Utilisateurs actifs",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    ),
  },
  {
    value: "3 500+",
    label: "Questions officielles",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    ),
  },
  {
    value: "95%",
    label: "Taux de satisfaction",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    ),
  },
  {
    value: "4,8/5",
    label: "Note moyenne",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    ),
  },
];

export default function Stats() {
  return (
    <section className="py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-brand-blue rounded-[28px] p-6 sm:p-10 text-white grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none translate-x-1/4 translate-y-1/4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={MARIANNE_URL}
              alt="Marianne"
              className="w-80 grayscale invert"
            />
          </div>
          {STATS.map((s) => (
            <div key={s.label} className="flex items-center gap-3 sm:gap-4 z-10">
              <div className="w-12 h-12 shrink-0 rounded-full bg-white/10 flex items-center justify-center">
                {s.icon}
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold">{s.value}</div>
                <div className="text-sm font-bold opacity-95">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
