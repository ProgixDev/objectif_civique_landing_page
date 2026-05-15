import Image from "next/image";

const HQ = "=w800-h1690-rw";

const STEPS = [
  {
    n: "01",
    title: "Choisissez votre objectif",
    desc: "Naturalisation, carte de séjour pluriannuelle ou carte de résident.",
    img:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDUxJ6bejQY2MHDb33-h2bgq-CKcLqnDmxTIgQI_F39neeBEO1Q8pQ5DszKrKXE9YLzCMz14nVL5BB3PweNclxvjIT23LDU4Py3C_nnAQG_avjxlHP4-FgDpHwvTe0aLVwLWVlQcdj-kmqMM-uDJ6BKuPmQTin7O8Ovlmp9wD-ly9_LPzTcNt3WH4wpBdVizUyhWa2bV72iaFLHN2r20aWEVDGsfEB8TNpDZ2DLV_YKIui2oww8JwlG_TNRb1sRyFjo0BENkjbJp7uK" +
      HQ,
  },
  {
    n: "02",
    title: "Répondez et apprenez",
    desc: "Des questions officielles expliquées pour bien comprendre.",
    img:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAqQSnCYJWDyCY6kSotOEddagwVhBegMf2AqrT-vhnjWlhQR4G9jRsmdfj6q0u0ZHJ6wPZcrSTiaUHlYIRdbUaGg6sTA_R0Kd51h1T1ZbdiOPaTzoNwuAPIZAJOBqB5RF7iQ5JItIsejX-Hu_xGEuGm_eDSr4x0MY1_UaaAhYCoOAF1ovEvaBUXd-x-5hLUOv45lqoRzMfbYQVR5bu1vWaDe4i17jWKr8pYhpF6zABn-IY8DFHR7lK5VqmV3hXUvBG3wSNmm-LLhW3E" +
      HQ,
  },
  {
    n: "03",
    title: "Suivez votre progression",
    desc: "Visualisez vos résultats et identifiez vos axes d'amélioration.",
    img:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD5rSz4RQM4ZzxiYkKqy-aUn1XsG8URrqoLTohdVhesbdFRy0E_tE6gH-WVO7hTDq8k_8uaYMWF9AUGX1Iau-7acu59hSI-Sljl_NCZTh9mg9g3nmfPdtZIIDFEi1B1p81TYJLz02QHz9b0Mp4_Hdt-RWGCxgIRa6USPbIl0Mq8pk-ojynayq3iI6PqYZ2-kVRLJvTbO-Ax_zwhJ0XyigRd-4OLb-5Ytru87x5UL1YCE2yTTn5YQf6Cvrlods0UnyOAnWM8gmCbLLfx" +
      HQ,
  },
  {
    n: "04",
    title: "Simulez l'examen réel",
    desc: "En conditions réelles pour être prêt le jour J.",
    img:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBhixPNMvRf-PBBB_uhclWcqaietQs0xC4XmUbOoKrl3UwhJqnznXgpEr47M0V-SjbLQWOKlrH8ExfbxwYtEAtFCSVCsVTzRCgeR_RLbYdQbV3H1eIijo2kLKLtd_wr7iAW63a1dnEOZub0vLo1CdqDobRN26dmP2WLsuZHem-d__Ax5MpMnn9WRnWMRChLVwiKV2JuhB7fu21L9SWKVfzxNMHI8eZTrDgyUAkM0ExanyWWwqf211xCvzNT-zQWKETV3gAR5OsRddMo" +
      HQ,
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-20 px-6 bg-brand-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-extrabold mb-3">
            Votre parcours vers <span className="text-brand-blue">la réussite</span>
          </h2>
          <p className="text-gray-500 text-sm">
            Un accompagnement complet, étape par étape.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, idx) => (
            <div key={step.n} className="group">
              <div className="relative mb-5">
                <span className="absolute -top-8 -left-2 text-6xl font-black text-gray-100/60 select-none">
                  {step.n}
                </span>
                <div className="relative z-10 w-full aspect-[9/19] rounded-[28px] border-[3px] border-slate-900 overflow-hidden shadow-lg transform transition-transform group-hover:-translate-y-2 bg-slate-900">
                  <Image
                    src={step.img}
                    alt={`Étape ${step.n} — ${step.title}`}
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 24vw"
                    quality={95}
                    priority={idx < 2}
                    className="object-cover"
                  />
                </div>
              </div>
              <h4 className="font-bold text-base mb-1">{step.title}</h4>
              <p className="text-xs text-gray-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
