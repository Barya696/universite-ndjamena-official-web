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

// Fine engraved guilloche-style line pattern, the kind found on official
// diplomas/certificates — used sparingly as the header's one bold accent.
const GUILLOCHE = encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="220" height="220">
  <defs>
    <pattern id="g" width="55" height="55" patternUnits="userSpaceOnUse">
      <circle cx="27.5" cy="27.5" r="24" fill="none" stroke="${GOLD}" stroke-width="0.6"/>
      <circle cx="27.5" cy="27.5" r="15" fill="none" stroke="${GOLD}" stroke-width="0.5"/>
      <circle cx="0" cy="0" r="24" fill="none" stroke="${GOLD}" stroke-width="0.6"/>
      <circle cx="55" cy="0" r="24" fill="none" stroke="${GOLD}" stroke-width="0.6"/>
      <circle cx="0" cy="55" r="24" fill="none" stroke="${GOLD}" stroke-width="0.6"/>
      <circle cx="55" cy="55" r="24" fill="none" stroke="${GOLD}" stroke-width="0.6"/>
    </pattern>
  </defs>
  <rect width="220" height="220" fill="url(#g)"/>
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

export default function HistoireMission() {
  return (
    <div style={{ background: PARCHMENT }} className="min-h-screen">
      {/* EN-TÊTE OFFICIEL */}
      <header
        className="relative overflow-hidden px-4 md:px-[50px] pt-10 pb-9"
        style={{ background: NAVY_DEEP, borderBottom: `3px solid ${GOLD}` }}
      >
        <div
          aria-hidden
          className="absolute -right-6 -top-10 w-[220px] h-[220px] pointer-events-none select-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,${GUILLOCHE}")`,
            opacity: 0.5,
          }}
        />
        <div className="max-w-5xl mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
              style={{ border: `1.5px solid ${GOLD}`, boxShadow: `inset 0 0 0 3px ${NAVY_DEEP}, 0 0 0 1px rgba(198,161,91,0.35)` }}
            >
              <span style={{ color: GOLD, fontFamily: "Georgia, serif", fontSize: "13px" }}>UN</span>
            </div>
            <p className="text-xs tracking-wide" style={{ color: "rgba(255,255,255,0.65)" }}>
              Université de N'Djamena · Direction de la Communication
            </p>
          </div>
          <h1
            className="text-3xl md:text-[42px] font-bold leading-tight mb-2"
            style={{ color: "#fff", fontFamily: "Georgia, serif" }}
          >
            Histoire et mission de l'établissement
          </h1>
          <p className="text-[15px] max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
            Fiche institutionnelle retraçant la création, les missions statutaires
            et les principaux jalons de l'université depuis 1971.
          </p>
        </div>
      </header>

      {/* MISSION */}
      <section className="max-w-5xl mx-auto px-4 pt-14 pb-4">
        <SectionHeading roman="I." title="Missions statutaires" />
        <div className="grid md:grid-cols-3 gap-5">
          {MISSION.map((b) => (
            <div
              key={b.t}
              className="relative overflow-hidden p-7 bg-white"
              style={{
                boxShadow: SHADOW,
                borderTop: `3px solid ${GOLD}`,
              }}
            >
              <span
                aria-hidden
                className="absolute -right-2 -top-5 select-none pointer-events-none"
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "88px",
                  fontWeight: 700,
                  color: NAVY,
                  opacity: 0.06,
                  lineHeight: 1,
                }}
              >
                {b.num}
              </span>
              <p
                className="text-xs mb-3 relative"
                style={{ color: GOLD, fontFamily: "Georgia, serif", letterSpacing: "0.04em" }}
              >
                {b.num}
              </p>
              <h3 className="text-lg font-bold mb-2 relative" style={{ color: NAVY, fontFamily: "Georgia, serif" }}>
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
          <div
            className="grid sm:grid-cols-2 bg-white"
            style={{ boxShadow: SHADOW, border: `1px solid ${LINE}` }}
          >
            {VALEURS.map((v, i) => (
              <div
                key={v}
                className="flex items-center gap-3 py-4 px-5"
                style={{
                  borderBottom: `1px solid ${LINE}`,
                  background: i % 2 === 0 ? "transparent" : "rgba(198,161,91,0.045)",
                }}
              >
                <span
                  className="shrink-0"
                  style={{ color: GOLD, fontFamily: "Georgia, serif", fontSize: "15px" }}
                  aria-hidden
                >
                  ✦
                </span>
                <span className="text-[15px]" style={{ color: INK, fontFamily: "Georgia, serif" }}>
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
                <div
                  className="font-bold tabular-nums"
                  style={{ color: NAVY, fontFamily: "Georgia, serif", fontSize: "30px", lineHeight: 1 }}
                >
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
      <span
        className="text-sm"
        style={{ color: GOLD, fontFamily: "Georgia, serif" }}
      >
        {roman}
      </span>
      <h2
        className="text-2xl font-bold pb-2 flex-1"
        style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `2px solid ${NAVY}` }}
      >
        {title}
      </h2>
    </div>
  );
}