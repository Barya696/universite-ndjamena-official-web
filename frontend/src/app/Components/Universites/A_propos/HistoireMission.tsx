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

// Thin engraved chain-link border strip, run full width along the header's
// lower edge — the "ribbon" you'd find bordering a diploma or certificate.
const BORDER_STRIP = encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="14">
  <defs>
    <pattern id="b" width="40" height="14" patternUnits="userSpaceOnUse">
      <circle cx="10" cy="7" r="6" fill="none" stroke="${GOLD}" stroke-width="0.6"/>
      <circle cx="30" cy="7" r="6" fill="none" stroke="${GOLD}" stroke-width="0.6"/>
    </pattern>
  </defs>
  <rect width="40" height="14" fill="url(#b)"/>
</svg>`);

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
  { num: "01", t: "Former", d: "Former des citoyens éclairés, des cadres compétents et des professionnels capables de relever les défis du Tchad et du continent africain." },
  { num: "02", t: "Produire", d: "Produire des connaissances de qualité adaptées aux réalités sahéliennes et contribuer à la communauté scientifique internationale." },
  { num: "03", t: "Servir", d: "Mettre l'expertise de l'université au service du développement local, de la souveraineté nationale et de l'épanouissement des populations." },
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

// Ceremonial seal: engraved double rim, radial tick marks (like a coin edge),
// and the founding year set into the medallion — every mark here carries
// real content instead of being pure ornament.
function Seal({ size = 76 }: { size?: number }) {
  const ticks = Array.from({ length: 40 });
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true" className="shrink-0">
      <circle cx="50" cy="50" r="47" fill="none" stroke={GOLD} strokeWidth="1" opacity="0.5" />
      {ticks.map((_, i) => {
        const angle = (i / ticks.length) * Math.PI * 2;
        const x1 = 50 + 43.5 * Math.cos(angle);
        const y1 = 50 + 43.5 * Math.sin(angle);
        const x2 = 50 + 46.5 * Math.cos(angle);
        const y2 = 50 + 46.5 * Math.sin(angle);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={GOLD} strokeWidth="0.9" opacity="0.55" />;
      })}
      <circle cx="50" cy="50" r="38" fill="none" stroke={GOLD} strokeWidth="1.25" />
      <circle cx="50" cy="50" r="31" fill={NAVY_DEEP} stroke={GOLD} strokeWidth="0.75" />
      <text x="50" y="46" textAnchor="middle" fontFamily={FONT} fontSize="20" fontWeight="700" fill={GOLD}>
        UN
      </text>
      <line x1="38" y1="54" x2="62" y2="54" stroke={GOLD} strokeWidth="0.6" opacity="0.6" />
      <text x="50" y="63" textAnchor="middle" fontFamily={FONT} fontSize="7" letterSpacing="1" fill="rgba(255,255,255,0.75)">
        1971
      </text>
    </svg>
  );
}

export default function HistoireMission() {
  return (
    <div style={{ background: PARCHMENT }} className="min-h-screen">
      {/* EN-TÊTE OFFICIEL */}
      <header
        className="relative overflow-hidden"
        style={{
          background: `radial-gradient(circle at 22% -20%, ${NAVY} 0%, ${NAVY_DEEP} 65%)`,
          borderTop: `1px solid rgba(198,161,91,0.35)`,
        }}
      >
        <div className="max-w-5xl mx-auto relative px-4 md:px-[50px] pt-11 pb-10">
          <div className="flex items-center gap-4 mb-8">
            <Seal />
            <div className="min-w-0">
              <p className="text-[15px] leading-tight" style={{ color: GOLD, fontFamily: FONT }}>
                Université de N'Djamena
              </p>
              <p className="text-[12px] mt-0.5" style={{ color: "rgba(255,255,255,0.55)" }}>
                Direction de la Communication
              </p>
            </div>
          </div>

          <h1
            className="text-3xl md:text-[42px] font-bold leading-tight mb-4"
            style={{ color: "#fff", fontFamily: FONT }}
          >
            Histoire et mission de l'établissement
          </h1>

          <div className="flex items-center gap-3 mb-5 max-w-md">
            <div style={{ width: 48, height: 3, background: GOLD }} />
            <div style={{ flex: 1, height: 1, background: "rgba(198,161,91,0.35)" }} />
          </div>

          <p className="text-[15px] max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
            Fiche institutionnelle retraçant la création, les missions statutaires
            et les principaux jalons de l'université depuis 1971.
          </p>
        </div>

        {/* engraved edge: solid rule, then a repeating chain-link ribbon */}
        <div style={{ height: 2, background: GOLD }} />
        <div
          style={{
            height: 14,
            backgroundImage: `url("data:image/svg+xml,${BORDER_STRIP}")`,
            backgroundRepeat: "repeat-x",
            opacity: 0.55,
          }}
        />
      </header>

      {/* MISSION */}
      <section className="max-w-5xl mx-auto px-4 pt-14 pb-4">
        <SectionHeading roman="I." title="Missions statutaires" />
        <div className="grid md:grid-cols-3 gap-5">
          {MISSION.map((b) => (
            <div
              key={b.t}
              className="relative overflow-hidden p-7 bg-white"
              style={{ boxShadow: SHADOW, borderTop: `3px solid ${GOLD}` }}
            >
              <span
                aria-hidden
                className="absolute -right-2 -top-5 select-none pointer-events-none"
                style={{ fontFamily: FONT, fontSize: "88px", fontWeight: 700, color: NAVY, opacity: 0.06, lineHeight: 1 }}
              >
                {b.num}
              </span>
              <p className="text-xs mb-3 relative" style={{ color: GOLD, fontFamily: FONT, letterSpacing: "0.04em" }}>
                {b.num}
              </p>
              <h3 className="text-lg font-bold mb-2 relative" style={{ color: NAVY, fontFamily: FONT }}>
                {b.t}
              </h3>
              <p className="leading-relaxed text-sm relative" style={{ color: INK_SOFT }}>
                {b.d}
              </p>
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