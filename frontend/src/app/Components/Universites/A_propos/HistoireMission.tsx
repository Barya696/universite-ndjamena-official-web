import { BRAND } from "../../Utils/brand";

const NAVY = BRAND.navy;
const NAVY_DEEP = BRAND.navyDeep;
const GOLD = BRAND.gold;
const PARCHMENT = "#FAF8F3";
const PARCHMENT_ALT = "#F3EEE1";
const LINE = "#DDD6C4";
const INK = "#2B2B2B";
const INK_SOFT = "#565553";
const SHADOW = "0 4px 18px -8px rgba(20,30,55,0.18)";
// Matches the sans-serif used in the site footer. If this isn't loaded
// globally yet, add it once (e.g. via next/font or a Google Fonts <link>)
// and it'll apply everywhere this constant is used.
const FONT = "'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif";

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
  { num: "I", icon: "former" as const, t: "Former", d: "Former des citoyens éclairés, des cadres compétents et des professionnels capables de relever les défis du Tchad et du continent africain." },
  { num: "II", icon: "produire" as const, t: "Produire", d: "Produire des connaissances de qualité adaptées aux réalités sahéliennes et contribuer à la communauté scientifique internationale." },
  { num: "III", icon: "servir" as const, t: "Servir", d: "Mettre l'expertise de l'université au service du développement local, de la souveraineté nationale et de l'épanouissement des populations." },
];

const VALEURS = [
  "Excellence académique",
  "Rigueur scientifique",
  "Intégrité",
  "Ouverture internationale",
  "Engagement sociétal",
  "Diversité & inclusion",
  "Promotion des cultures nationales",
  "Innovation & créativité",
];

// Small line-art emblem for each mission, set in the same navy-fill /
// gold-stroke medallion language as the rest of the page.
function MissionIcon({ kind }: { kind: "former" | "produire" | "servir" }) {
  return (
    <span
      className="inline-flex items-center justify-center shrink-0"
      style={{
        width: 56,
        height: 56,
        borderRadius: "9999px",
        background: `radial-gradient(circle at 32% 28%, ${NAVY} 0%, ${NAVY_DEEP} 75%)`,
        border: `1px solid ${GOLD}`,
        boxShadow: `0 10px 20px -8px rgba(10,20,40,0.55), inset 0 1px 1px rgba(255,255,255,0.18), 0 0 0 4px #ffffff`,
      }}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        {kind === "former" && (
          <>
            <path d="M12 4 3 9l9 5 9-5-9-5Z" />
            <path d="M7 11.2V16c0 1.4 2.5 2.6 5.5 2.6S18 17.4 18 16v-4.8" />
            <path d="M20.5 9v5.5" />
          </>
        )}
        {kind === "produire" && (
          <>
            <path d="M4 6c2.2-1.1 5.3-1.1 7.5 0v13c-2.2-1.1-5.3-1.1-7.5 0Z" />
            <path d="M19.5 6c-2.2-1.1-5.3-1.1-7.5 0v13c2.2-1.1 5.3-1.1 7.5 0Z" />
          </>
        )}
        {kind === "servir" && (
          <>
            <path d="M12 19V8" />
            <path d="M12 8c-1.8.9-4 .1-5-1.7" />
            <path d="M12 11.3c-1.8.9-4 .1-5-1.7" />
            <path d="M12 14.6c-1.8.9-4 .1-5-1.7" />
            <path d="M12 8c1.8.9 4 .1 5-1.7" />
            <path d="M12 11.3c1.8.9 4 .1 5-1.7" />
            <path d="M12 14.6c1.8.9 4 .1 5-1.7" />
          </>
        )}
      </svg>
    </span>
  );
}

export default function HistoireMission() {
  return (
    <div style={{ background: PARCHMENT }} className="min-h-screen">
      {/* EN-TÊTE — restyled to match MotRecteur's hero */}
      <section
        className="py-16 px-4 md:px-[50px]"
        style={{
          background: `linear-gradient(180deg, ${NAVY_DEEP} 0%, ${NAVY} 100%)`,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.2em] text-xs mb-3" style={{ color: GOLD }}>
            Historique
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ color: GOLD, fontFamily: "Georgia, serif" }}
          >
            Histoire et mission de l'établissement
          </h1>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
            Fiche institutionnelle retraçant la création, les missions statutaires
            et les principaux jalons de l'université depuis 1971.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="max-w-5xl mx-auto px-4 pt-14 pb-4">
        <SectionHeading roman="I." title="Missions statutaires" />
        <div className="grid md:grid-cols-3 gap-8 pt-2">
          {MISSION.map((b, i) => (
            <div key={b.t} className="relative">
              {/* second sheet peeking out behind — the depth cue */}
              <div
                aria-hidden
                className="absolute"
                style={{
                  top: 14,
                  left: 10,
                  right: -10,
                  bottom: -10,
                  background: NAVY,
                  transform: i % 2 === 0 ? "rotate(-1.3deg)" : "rotate(1.1deg)",
                  boxShadow: "0 18px 34px -20px rgba(10,20,40,0.55)",
                }}
              />
              <div
                className="relative bg-white p-8 pt-12"
                style={{
                  boxShadow: "0 24px 46px -22px rgba(20,30,55,0.4), 0 8px 16px -10px rgba(20,30,55,0.22)",
                  border: `1px solid ${LINE}`,
                  borderTop: `3px solid ${GOLD}`,
                  backgroundImage: `linear-gradient(160deg, #ffffff 0%, ${PARCHMENT} 100%)`,
                }}
              >
                <div className="absolute -top-6 left-8">
                  <MissionIcon kind={b.icon} />
                </div>
                <span
                  className="block text-sm mb-3"
                  style={{ color: GOLD, fontFamily: FONT, letterSpacing: "0.1em", fontWeight: 600 }}
                >
                  {b.num}
                </span>
                <h3 className="text-lg font-bold mb-3" style={{ color: NAVY, fontFamily: FONT }}>
                  {b.t}
                </h3>
                <div className="flex items-center gap-2 mb-4" style={{ maxWidth: 96 }}>
                  <div style={{ width: 24, height: 2, background: GOLD }} />
                  <div style={{ flex: 1, height: 1, background: LINE }} />
                </div>
                <p className="leading-relaxed text-sm" style={{ color: INK_SOFT, fontFamily: FONT }}>
                  {b.d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VALEURS */}
      <section className="py-14" style={{ background: PARCHMENT_ALT }}>
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeading roman="II." title="Valeurs de référence" />
          <div className="grid sm:grid-cols-2 bg-white" style={{ boxShadow: SHADOW, border: `1px solid ${LINE}` }}>
            {VALEURS.map((v, i) => (
              <div
                key={v}
                className="flex items-center gap-3 py-4 px-5"
                style={{ borderBottom: `1px solid ${LINE}`, background: i % 2 === 0 ? "transparent" : "rgba(198,161,91,0.045)" }}
              >
                <span className="shrink-0" style={{ color: GOLD, fontFamily: FONT, fontSize: "15px" }} aria-hidden>
                  ✦
                </span>
                <span className="text-[15px]" style={{ color: INK, fontFamily: FONT }}>
                  {v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JALONS */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <SectionHeading roman="III." title="Jalons historiques" />
        <div className="bg-white" style={{ boxShadow: SHADOW, border: `1px solid ${LINE}` }}>
          {JALONS.map((h, i) => (
            <div
              key={h.annee}
              className="grid md:grid-cols-[140px_1fr] gap-2 md:gap-8 py-7 px-6 md:px-8"
              style={{ borderBottom: i !== JALONS.length - 1 ? `1px solid ${LINE}` : "none" }}
            >
              <div className="flex md:block items-baseline gap-3">
                <div className="font-bold tabular-nums" style={{ color: NAVY, fontFamily: FONT, fontSize: "30px", lineHeight: 1 }}>
                  {h.annee}
                </div>
                <div className="hidden md:block w-8 h-[2px] mt-3" style={{ background: GOLD }} />
              </div>
              <div>
                <h4 className="font-bold mb-1.5 text-[15px]" style={{ color: NAVY }}>
                  {h.titre}
                </h4>
                <p className="leading-relaxed text-sm" style={{ color: INK_SOFT }}>
                  {h.texte}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function SectionHeading({ roman, title }: { roman: string; title: string }) {
  return (
    <div className="flex items-baseline gap-3 mb-8">
      <span className="text-sm" style={{ color: GOLD, fontFamily: FONT }}>
        {roman}
      </span>
      <h2 className="text-2xl font-bold pb-2 flex-1" style={{ color: NAVY, fontFamily: FONT, borderBottom: `2px solid ${NAVY}` }}>
        {title}
      </h2>
    </div>
  );
}