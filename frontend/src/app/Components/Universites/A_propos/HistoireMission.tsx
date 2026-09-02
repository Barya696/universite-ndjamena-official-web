import { BRAND } from "../../Utils/brand";

const NAVY = BRAND.navy;
const NAVY_DEEP = BRAND.navyDeep;
const GOLD = BRAND.gold;
const PARCHMENT = "#FAF6EC";
const PARCHMENT_ALT = "#F1E8D4";
const SHADOW_SM = "0 6px 16px -6px rgba(12,26,51,0.28)";
const SHADOW_LG = "0 20px 45px -18px rgba(12,26,51,0.4)";

const NOISE_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E";

const JALONS = [
  { annee: "1971", titre: "Fondation", texte: "Création de l'Université de N'Djamena (alors Université du Tchad), première université publique du pays, par décret n°015/PR/MESRS." },
  { annee: "1972", titre: "Premières promotions", texte: "Ouverture des trois premières facultés : Lettres, Droit, et Sciences Économiques. 600 étudiants inscrits à la rentrée." },
  { annee: "1978", titre: "Faculté des Sciences Exactes", texte: "Création de la FSEA (Faculté des Sciences Exactes et Appliquées) au campus de Toukra." },
  { annee: "1985", titre: "Institut Supérieur Pédagogique", texte: "Mise en place de l'ISP pour la formation des enseignants du secondaire et du supérieur." },
  { annee: "1990", titre: "Faculté de Médecine", texte: "Création de la Faculté de Médecine et des Sciences de la Santé sur le campus de Farcha, avec l'appui de la coopération française." },
  { annee: "1998", titre: "Autonomie", texte: "L'université acquiert le statut d'Établissement Public à Caractère Scientifique et Technologique (EPST)." },
  { annee: "2005", titre: "Réforme LMD", texte: "Adoption du système Licence-Master-Doctorat, alignant les formations sur les standards internationaux." },
  { annee: "2012", titre: "École Doctorale", texte: "Création de l'École Doctorale unique pour structurer la recherche et le troisième cycle." },
  { annee: "2021", titre: "Cinquantenaire", texte: "12 facultés et instituts, 3 campus, plus de 30 000 étudiants et 1 200 enseignants-chercheurs." },
];

const MISSION = [
  { t: "Former", d: "Former des citoyens éclairés, des cadres compétents et des professionnels capables de relever les défis du Tchad et du continent africain.", dark: false },
  { t: "Produire", d: "Produire des connaissances de qualité adaptées aux réalités sahéliennes et contribuer à la communauté scientifique internationale.", dark: true },
  { t: "Servir", d: "Mettre l'expertise de l'université au service du développement local, de la souveraineté nationale et de l'épanouissement des populations.", dark: false },
];

const VALEURS = [
  { v: "Excellence académique", big: true },
  { v: "Rigueur scientifique", big: false },
  { v: "Intégrité", big: true },
  { v: "Ouverture internationale", big: false },
  { v: "Engagement sociétal", big: false },
  { v: "Diversité & inclusion", big: true },
  { v: "Promotion des cultures nationales", big: false },
  { v: "Innovation & créativité", big: false },
];

export default function HistoireMission() {
  return (
    <div style={{ background: PARCHMENT }} className="min-h-screen">
      {/* HERO */}
      <section
        className="relative overflow-hidden py-20 md:py-28 px-4 md:px-[50px]"
        style={{
          backgroundImage: `url("${NOISE_SVG}"), radial-gradient(ellipse 900px 520px at 82% -8%, rgba(198,161,91,0.22), transparent 60%), linear-gradient(175deg, ${NAVY_DEEP} 0%, ${NAVY} 100%)`,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 94%)",
        }}
      >
        <div
          aria-hidden
          className="absolute right-0 top-0 pointer-events-none select-none hidden md:block"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "260px",
            fontWeight: 700,
            color: GOLD,
            opacity: 0.09,
            lineHeight: 1,
            transform: "translate(8%, -12%)",
          }}
        >
          1971
        </div>

        <div className="max-w-6xl mx-auto relative">
          <p className="uppercase tracking-[0.2em] text-xs mb-3" style={{ color: GOLD }}>
            À propos
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ color: GOLD, fontFamily: "Georgia, serif", textShadow: "0 2px 12px rgba(0,0,0,0.25)" }}
          >
            Histoire & Mission
          </h1>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
            Depuis 1971, l'Université de N'Djamena construit son héritage de formation,
            de recherche et de service à la nation tchadienne.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-12">
        <h2
          className="text-2xl font-bold mb-8 pb-2"
          style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
        >
          Notre Mission
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {MISSION.map((b, i) => (
            <div
              key={b.t}
              className={`p-7 rounded-lg ${i === 1 ? "md:-translate-y-4" : i === 2 ? "md:translate-y-3" : ""}`}
              style={{
                background: b.dark ? `linear-gradient(160deg, ${NAVY_DEEP}, ${NAVY})` : "#fff",
                boxShadow: b.dark ? SHADOW_LG : SHADOW_SM,
                border: b.dark ? "none" : `1px solid ${PARCHMENT_ALT}`,
                borderTop: `4px solid ${GOLD}`,
              }}
            >
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: b.dark ? GOLD : NAVY, fontFamily: "Georgia, serif" }}
              >
                {b.t}
              </h3>
              <p className="leading-relaxed text-sm" style={{ color: b.dark ? "rgba(255,255,255,0.82)" : "#444" }}>
                {b.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* VALEURS */}
      <section className="py-14 px-4" style={{ background: PARCHMENT_ALT }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ color: NAVY, fontFamily: "Georgia, serif" }}>
            Nos valeurs
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {VALEURS.map((item, i) => (
              <div
                key={item.v}
                className={`rounded-full font-semibold text-center ${item.big ? "px-7 py-4 text-base" : "px-5 py-3 text-sm"}`}
                style={{
                  color: i % 3 === 0 ? "#fff" : NAVY,
                  background: i % 3 === 0 ? `linear-gradient(135deg, ${NAVY_DEEP}, ${NAVY})` : "#fff",
                  border: `2px solid ${GOLD}`,
                  boxShadow: SHADOW_SM,
                  fontFamily: "Georgia, serif",
                  transform: `rotate(${i % 2 === 0 ? "-1.2deg" : "1.2deg"})`,
                }}
              >
                {item.v}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JALONS */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2
          className="text-2xl font-bold mb-10 pb-2"
          style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
        >
          Jalons historiques
        </h2>
        <div className="relative">
          {/* spine */}
          <div
            className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2"
            style={{ background: `linear-gradient(180deg, ${PARCHMENT_ALT}, ${GOLD})` }}
          />
          <div className="space-y-8">
            {JALONS.map((h, i) => {
              const weight = Math.round(2 + (i / (JALONS.length - 1)) * 4);
              const onRight = i % 2 === 1;
              return (
                <div key={h.annee} className={`relative md:flex ${onRight ? "md:justify-end" : "md:justify-start"}`}>
                  <div
                    className="absolute left-[9px] md:left-1/2 top-6 w-3 h-3 rounded-full md:-translate-x-1/2 z-10"
                    style={{ background: GOLD, boxShadow: `0 0 0 4px ${PARCHMENT}` }}
                  />
                  <div
                    className={`ml-10 md:ml-0 md:w-[46%] p-5 rounded-lg`}
                    style={{
                      background: "#fff",
                      borderLeft: `${weight}px solid ${GOLD}`,
                      boxShadow: SHADOW_SM,
                    }}
                  >
                    <div
                      className="inline-block text-sm font-bold px-3 py-1 rounded mb-2"
                      style={{ color: "#fff", background: NAVY, fontFamily: "Georgia, serif" }}
                    >
                      {h.annee}
                    </div>
                    <h4 className="font-bold mb-1" style={{ color: NAVY }}>{h.titre}</h4>
                    <p className="text-[#444] leading-relaxed text-sm">{h.texte}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}