import Image from "next/image";
import StoreBadges from "./StoreBadges";

const AVATARS = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCmCL_muw1FEl44b8ILkHCm-NJ-skFKmzGW8CKhsKdKSZ3yyqT3q2EIe9_FuS_y8dtutKoXPvF3-03IvCa60DbkAwhG_42R5_00QYHk6XJrODh7s0Ij3GszJoXog2b0TR1eD6Fith2NINZO7hPizSXhQ1nU775_hqQSF1FcUGVBntjsLjJkcp89ozXI24Jeoxl4ZsEUI36zr2K_LKZXboMYhax_dhg-22m-JuZe3CzHJ3Je4G-VFaCEAW35jhElEuc9gG8tUDSQJN9R",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAMZoL2aQG8vOMnTBAD0rK53kxH3K4C6OHFKMbDRPeNh1kjvJwWGo4WyRr_5QRzMGfSUf7KHtImWmcLhKNSVREkshyU6AJG0nRT2sdqIciuD1p_Pyk7EK64Q3BHAS9d9X9BPOa9_MObN6wYVX3UlVf3RpFco4FzhEe5Kxmv0BIbZBjAILJkolyK17-vGjhPHiFhgH1f5Xej_2dfH1E3MTBe4U_qqgcaqQwJK6Ap57py9OzQ86EJiCgPL5Cw6PZlCerpqkDW4sJlqLPQ",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA30kZ68lalGbWGb33TcI0DsV_ftCKPzBW_eq1DNBErchIb7Xxde_XbWWvp3scvNV5BAqRxLPE48cvO9k0adoGFz7xCqAy05Ws_8TskPylQ0SYKeX2yho2CPztPNScgGhj-itkFWHXkV_tNSl5shIzXRj_Lc8hfqDpONgRbVKjBQlGzBaFjy0SiKjmEqESFFmmC6OFQES-s7S5R3_0xI7U7cXWTBE4O3TjYro6Aoz5Xdeu8yXGTICOQl88qaQz9khEH1pIbQyBVehh2",
];

function StarIcon() {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-10 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-pattern-dots bg-pattern-fade opacity-60 pointer-events-none -z-10" />
      <div className="hero-gradient-overlay" />
      <div className="hero-red-glow" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center text-center lg:text-left">
        <div className="z-10 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm font-bold text-gray-900">
              L&apos;application n°1 pour réussir votre examen civique
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-5 text-gray-900">
            Réussissez votre <br />
            <span className="text-brand-blue italic">examen civique</span> et{" "}
            <br />
            votre{" "}
            <span className="relative inline-block">
              <span className="relative z-6">entretien de naturalisation</span>
              <span className="absolute left-0 right-0 bottom-1 h-3 bg-brand-red/40 rounded-full -skew-x-3" />
            </span>
            .
          </h1>

          <p className="text-lg font-bold text-gray-900 mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
            Préparez votre avenir en France avec Objectif Civique. Des milliers
            de questions officielles, des simulations intelligentes et un suivi
            personnalisé.
          </p>

          <StoreBadges size="md" className="mb-8 justify-center lg:justify-start" />

          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <div className="flex -space-x-3">
              {AVATARS.map((src, i) => (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  key={i}
                  src={src}
                  alt="Utilisateur"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div>
              <p className="text-sm font-extrabold text-gray-900">
                +50 000 candidats nous font confiance
              </p>
              <div className="flex items-center gap-1">
                <span className="text-sm font-extrabold text-gray-900">4,8/5</span>
                <div className="flex text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center animate-fade-in">
          <div className="absolute -inset-6 bg-linear-to-br from-blue-100 to-red-50 rounded-[40px] -z-10 blur-2xl opacity-70" />
          <div className="relative w-full max-w-[360px] sm:max-w-[400px] animate-float-slow">
            <Image
              src="/hero2.png"
              alt="Objectif Civique — application mobile"
              width={800}
              height={800}
              priority
              quality={95}
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
