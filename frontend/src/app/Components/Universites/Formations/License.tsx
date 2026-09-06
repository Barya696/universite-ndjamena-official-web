import { BRAND } from "../../Utils/brand";

const NAVY = BRAND.navy;
const NAVY_DEEP = BRAND.navyDeep;
const GOLD = BRAND.gold;
const PARCHMENT = "#FAF8F3";
const PARCHMENT_ALT = "#F3EEE1";
const LINE = "#DDD6C4";
const INK_SOFT = "#565553";
const SHADOW = "0 4px 18px -8px rgba(20,30,55,0.18)";
// Matches the sans-serif used in the site footer / HistoireMission page.
const FONT = "'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif";

const STATS = [
  { k: "Nombre de filières", v: "48" },
  { k: "Durée standard", v: "3 ans (L1 → L3)" },
  { k: "Semestres / ECTS", v: "6 sem. · 180 ECTS" },
  { k: "Diplôme délivré", v: "Licence Nationale" },
];

const LICENCES: {
  domaine: string;
  icon: string;
  mentions: { nom: string; faculte: string; duree: string }[];
}[] = [
  {
    domaine: "Droit, Économie & Gestion",
    icon: "⚖️",
    mentions: [
      { nom: "Licence en Droit", faculte: "Faculté de Droit et Sciences Politiques", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence en Sciences Politiques", faculte: "Faculté de Droit et Sciences Politiques", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence en Économie", faculte: "Faculté des Sciences Économiques et de Gestion", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence en Gestion", faculte: "Faculté des Sciences Économiques et de Gestion", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence en Banque & Finance", faculte: "Faculté des Sciences Économiques et de Gestion", duree: "L1 → L3 (3 ans)" },
    ],
  },
  {
    domaine: "Lettres, Langues & Sciences Humaines",
    icon: "📚",
    mentions: [
      { nom: "Licence Lettres Modernes (Français)", faculte: "Faculté des Lettres et Sciences Humaines", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence Lettres Modernes (Anglais)", faculte: "Faculté des Lettres et Sciences Humaines", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence en Histoire-Géographie", faculte: "Faculté des Lettres et Sciences Humaines", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence en Sociologie-Anthropologie", faculte: "Faculté des Lettres et Sciences Humaines", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence en Philosophie", faculte: "Faculté des Lettres et Sciences Humaines", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence en Linguistique", faculte: "Faculté des Lettres et Sciences Humaines", duree: "L1 → L3 (3 ans)" },
    ],
  },
  {
    domaine: "Sciences Exactes, Ingénierie & Informatique",
    icon: "🔬",
    mentions: [
      { nom: "Licence Mathématiques & Physique", faculte: "FSEA", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence Chimie & Biologie", faculte: "FSEA", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence Informatique", faculte: "FSEA", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence en Génie Civil", faculte: "Faculté des Sciences de l'Ingénieur", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence en Génie Électrique", faculte: "Faculté des Sciences de l'Ingénieur", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence en Génie Mécanique", faculte: "Faculté des Sciences de l'Ingénieur", duree: "L1 → L3 (3 ans)" },
    ],
  },
  {
    domaine: "Santé",
    icon: "🏥",
    mentions: [
      { nom: "Licence en Sciences Infirmières", faculte: "Faculté des Sciences de la Santé (Farcha)", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence en Santé Publique", faculte: "Faculté des Sciences de la Santé (Farcha)", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence en Nutrition", faculte: "Faculté des Sciences de la Santé (Farcha)", duree: "L1 → L3 (3 ans)" },
    ],
  },
  {
    domaine: "Agronomie, Environnement & Sciences de l'Éducation",
    icon: "🌾",
    mentions: [
      { nom: "Licence en Agronomie", faculte: "Faculté d'Agronomie", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence en Aménagement & Environnement", faculte: "Faculté d'Agronomie", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence en Sciences de l'Éducation", faculte: "Faculté d'Éducation et de Formation (ISP)", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence en Didactique du Français", faculte: "Faculté d'Éducation et de Formation (ISP)", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence en Didactique des Mathématiques", faculte: "Faculté d'Éducation et de Formation (ISP)", duree: "L1 → L3 (3 ans)" },
    ],
  },
  {
    domaine: "Théologie, Études islamiques & Écoles supérieures",
    icon: "🕊️",
    mentions: [
      { nom: "Licence en Études Islamiques", faculte: "Faculté de Théologie & Sciences Religieuses", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence en Études Chrétiennes", faculte: "Faculté de Théologie & Sciences Religieuses", duree: "L1 → L3 (3 ans)" },
      { nom: "DUT Génie Informatique (Bac+2)", faculte: "IUT — Campus d'Ardep-Djoumal", duree: "2 ans" },
      { nom: "DUT Gestion des Entreprises (Bac+2)", faculte: "IUT — Campus d'Ardep-Djoumal", duree: "2 ans" },
    ],
  },
];

const ADMISSIONS = [
  "Admission en L1 : Baccalauréat (toutes séries) ou équivalent",
  "Concours / sélection selon certaines filières (médecine, ingénieur, etc.)",
  "Possibilité de passerelles et de VAE (Validation des Acquis de l'Expérience)",
  "Inscription via la plateforme officielle scolarité.undt.edu.td",
];

const APRES_LICENCE = [
  "Poursuite en Master (M1) dans le même domaine (accès de droit si mention ≥ 12/20)",
  "Insertion professionnelle : fonction publique, entreprises publiques et privées, ONG, organismes internationaux",
  "Stages de fin d'études obligatoires pour de nombreuses filières",
  "Mobilité internationale : ERASMUS+, NEPAD, AU, etc.",
];

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

// Emoji-glyph medallion, set in the same navy-fill / gold-ring language
// as the icon badges used across the site (see HistoireMission's MissionIcon).
function DomaineIcon({ glyph }: { glyph: string }) {
  return (
    <span
      className="inline-flex items-center justify-center shrink-0 text-xl"
      style={{
        width: 44,
        height: 44,
        borderRadius: "9999px",
        background: `radial-gradient(circle at 32% 28%, ${NAVY} 0%, ${NAVY_DEEP} 75%)`,
        border: `1px solid ${GOLD}`,
        boxShadow: `0 6px 14px -6px rgba(10,20,40,0.55), inset 0 1px 1px rgba(255,255,255,0.18)`,
      }}
    >
      {glyph}
    </span>
  );
}

export default function License() {
  return (
    <div style={{ background: PARCHMENT }} className="min-h-screen">
      {/* EN-TÊTE — matches the other "Formations" pages */}
      <section
        className="py-16 px-4 md:px-[50px]"
        style={{
          background: `linear-gradient(180deg, ${NAVY_DEEP} 0%, ${NAVY} 100%)`,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.2em] text-xs mb-3" style={{ color: GOLD, fontFamily: FONT }}>
            Formations
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ color: GOLD, fontFamily: "Georgia, serif" }}
          >
            Licence (Bac+3)
          </h1>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed" style={{ fontFamily: FONT }}>
            Premier cycle du système LMD : 3 années d'études (6 semestres, 180 ECTS)
            ouvrant sur une Licence nationale reconnue dans tout l'espace CAMES.
          </p>
        </div>
      </section>

      {/* EN BREF */}
      <section className="max-w-6xl mx-auto px-4 pt-14 pb-4">
        <SectionHeading roman="I." title="En bref" />
        <div className="grid md:grid-cols-4 gap-6 pt-2">
          {STATS.map((s) => (
            <div
              key={s.k}
              className="text-center p-5 bg-white"
              style={{
                boxShadow: SHADOW,
                border: `1px solid ${LINE}`,
                borderTop: `3px solid ${GOLD}`,
                backgroundImage: `linear-gradient(160deg, #ffffff 0%, ${PARCHMENT} 100%)`,
              }}
            >
              <p className="text-xs uppercase tracking-wider mb-2" style={{ color: GOLD, fontFamily: FONT, letterSpacing: "0.1em" }}>
                {s.k}
              </p>
              <p className="text-xl font-bold" style={{ color: NAVY, fontFamily: "Georgia, serif" }}>
                {s.v}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FILIÈRES PAR DOMAINE */}
      <section className="py-14 mt-6" style={{ background: PARCHMENT_ALT }}>
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading roman="II." title="Filières par domaine" />
          <div className="space-y-6 pt-2">
            {LICENCES.map((dom) => (
              <article
                key={dom.domaine}
                className="bg-white overflow-hidden"
                style={{ boxShadow: SHADOW, border: `1px solid ${LINE}` }}
              >
                <div
                  className="px-5 py-4 flex items-center gap-3"
                  style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_DEEP} 100%)`, borderBottom: `2px solid ${GOLD}` }}
                >
                  <DomaineIcon glyph={dom.icon} />
                  <h3 className="font-bold text-lg" style={{ color: GOLD, fontFamily: FONT }}>
                    {dom.domaine}
                  </h3>
                </div>
                <div>
                  {dom.mentions.map((m, i) => (
                    <div
                      key={m.nom}
                      className="grid md:grid-cols-[1.3fr_1.2fr_0.7fr] gap-3 px-5 py-3.5 text-sm items-center"
                      style={{ borderTop: i === 0 ? "none" : `1px solid ${LINE}` }}
                    >
                      <div className="font-semibold" style={{ color: NAVY, fontFamily: FONT }}>
                        {m.nom}
                      </div>
                      <div style={{ color: INK_SOFT, fontFamily: FONT }}>{m.faculte}</div>
                      <div className="inline-flex items-center justify-start md:justify-end">
                        <span
                          className="px-2.5 py-1 text-xs font-semibold"
                          style={{ background: "rgba(200,168,75,0.14)", color: "#806724", fontFamily: FONT, borderRadius: 999 }}
                        >
                          {m.duree}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ADMISSIONS & DEVENIR */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <SectionHeading roman="III." title="Admissions & devenir" />
        <div className="grid md:grid-cols-2 gap-6 pt-2">
          <div
            className="p-6 bg-white"
            style={{ boxShadow: SHADOW, border: `1px solid ${LINE}`, borderTop: `3px solid ${GOLD}` }}
          >
            <h3 className="text-lg font-bold mb-4" style={{ color: NAVY, fontFamily: "Georgia, serif" }}>
              Admissions & conditions
            </h3>
            <ul className="space-y-2 text-sm" style={{ color: INK_SOFT, fontFamily: FONT }}>
              {ADMISSIONS.map((a) => (
                <li key={a} className="flex gap-2">
                  <span className="shrink-0" style={{ color: GOLD }} aria-hidden>
                    ✦
                  </span>
                  <span className="leading-relaxed">{a}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="p-6 bg-white"
            style={{ boxShadow: SHADOW, border: `1px solid ${LINE}`, borderTop: `3px solid ${GOLD}` }}
          >
            <h3 className="text-lg font-bold mb-4" style={{ color: NAVY, fontFamily: "Georgia, serif" }}>
              Après la Licence ?
            </h3>
            <ul className="space-y-2 text-sm" style={{ color: INK_SOFT, fontFamily: FONT }}>
              {APRES_LICENCE.map((a) => (
                <li key={a} className="flex gap-2">
                  <span className="shrink-0" style={{ color: GOLD }} aria-hidden>
                    ✦
                  </span>
                  <span className="leading-relaxed">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}