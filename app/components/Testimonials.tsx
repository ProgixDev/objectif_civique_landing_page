type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  quote: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Amine B.",
    role: "Naturalisation, Paris",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCmCL_muw1FEl44b8ILkHCm-NJ-skFKmzGW8CKhsKdKSZ3yyqT3q2EIe9_FuS_y8dtutKoXPvF3-03IvCa60DbkAwhG_42R5_00QYHk6XJrODh7s0Ij3GszJoXog2b0TR1eD6Fith2NINZO7hPizSXhQ1nU775_hqQSF1FcUGVBntjsLjJkcp89ozXI24Jeoxl4ZsEUI36zr2K_LKZXboMYhax_dhg-22m-JuZe3CzHJ3Je4G-VFaCEAW35jhElEuc9gG8tUDSQJN9R",
    quote:
      "Grâce à Démarches Civiques, j'ai obtenu ma naturalisation du premier coup. Les simulations sont vraiment fidèles à l'examen.",
  },
  {
    name: "Sofia L.",
    role: "Carte de résident, Lyon",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAMZoL2aQG8vOMnTBAD0rK53kxH3K4C6OHFKMbDRPeNh1kjvJwWGo4WyRr_5QRzMGfSUf7KHtImWmcLhKNSVREkshyU6AJG0nRT2sdqIciuD1p_Pyk7EK64Q3BHAS9d9X9BPOa9_MObN6wYVX3UlVf3RpFco4FzhEe5Kxmv0BIbZBjAILJkolyK17-vGjhPHiFhgH1f5Xej_2dfH1E3MTBe4U_qqgcaqQwJK6Ap57py9OzQ86EJiCgPL5Cw6PZlCerpqkDW4sJlqLPQ",
    quote:
      "Les explications de chaque question sont claires et le suivi de progression me motivait à réviser chaque jour. Je recommande !",
  },
  {
    name: "Karim D.",
    role: "Carte de séjour, Marseille",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA30kZ68lalGbWGb33TcI0DsV_ftCKPzBW_eq1DNBErchIb7Xxde_XbWWvp3scvNV5BAqRxLPE48cvO9k0adoGFz7xCqAy05Ws_8TskPylQ0SYKeX2yho2CPztPNScgGhj-itkFWHXkV_tNSl5shIzXRj_Lc8hfqDpONgRbVKjBQlGzBaFjy0SiKjmEqESFFmmC6OFQES-s7S5R3_0xI7U7cXWTBE4O3TjYro6Aoz5Xdeu8yXGTICOQl88qaQz9khEH1pIbQyBVehh2",
    quote:
      "Une appli vraiment bien pensée. Les rappels intelligents m'ont permis de m'organiser malgré mon emploi du temps chargé.",
  },
];

function Star() {
  return (
    <svg className="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-grid opacity-50 pointer-events-none -z-10" />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-50 text-brand-blue text-sm font-extrabold uppercase tracking-wide px-3 py-1.5 rounded-full mb-3">
            Témoignages
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 text-gray-900">
            Ils ont réussi avec <span className="text-brand-blue">Démarches Civiques</span>
          </h2>
          <p className="text-gray-900 text-lg font-bold">
            Des milliers de candidats nous ont fait confiance pour leur examen.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.name}
              className="bg-white border border-gray-100 rounded-3xl p-6 shadow-md shadow-blue-900/5 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10"
            >
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <p className="text-base font-semibold text-gray-900 leading-relaxed">
                &laquo;&nbsp;{t.quote}&nbsp;&raquo;
              </p>
              <div className="flex items-center gap-3 mt-auto pt-3 border-t border-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-white shadow"
                />
                <div>
                  <p className="text-base font-extrabold text-gray-900 leading-tight">{t.name}</p>
                  <p className="text-sm font-semibold text-gray-700">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
