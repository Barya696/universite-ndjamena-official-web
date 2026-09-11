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
  { k: "Nombre de mentions", v: "35" },
  { k: "Durée standard", v: "2 ans (M1 → M2)" },
  { k: "Semestres / ECTS", v: "4 sem. · 120 ECTS" },
  { k: "Types de Master", v: "Recherche / Professionnel" },
];

const MASTERS: {
  domaine: string;
  icon: string;
  mentions: { nom: string; type: string; faculte: string; duree: string }[];
}[] = [
  {
    domaine: "Droit, Gouvernance & Affaires publiques",
    icon: "⚖️",
    mentions: [
      { nom: "Master Droit des Affaires", type: "Recherche & Professionnel", faculte: "FDSP", duree: "M1→M2 (2 ans)" },
      { nom: "Master Droit International Public et Privé", type: "Recherche & Professionnel", faculte: "FDSP", duree: "M1→M2 (2 ans)" },
      { nom: "Master Sciences Politiques", type: "Recherche", faculte: "FDSP", duree: "M1→M2 (2 ans)" },
      { nom: "Master Administration Publique (MAP)", type: "Professionnel", faculte: "FDSP", duree: "M1→M2 (2 ans)" },
    ],
  },
  {
    domaine: "Sciences Économiques, Gestion & Finance",
    icon: "📊",
    mentions: [
      { nom: "Master Économie du Développement", type: "Recherche", faculte: "FSEG", duree: "M1→M2 (2 ans)" },
      { nom: "Master Finance & Banque", type: "Professionnel", faculte: "FSEG", duree: "M1→M2 (2 ans)" },
      { nom: "Master Comptabilité Contrôle Audit (CCA)", type: "Professionnel", faculte: "FSEG", duree: "M1→M2 (2 ans)" },
      { nom: "Master Management Stratégique", type: "Professionnel", faculte: "FSEG", duree: "M1→M2 (2 ans)" },
      { nom: "Master Marketing & Études", type: "Professionnel", faculte: "FSEG", duree: "M1→M2 (2 ans)" },
      { nom: "Master Gestion des Projets", type: "Professionnel", faculte: "FSEG", duree: "M1→M2 (2 ans)" },
    ],
  },
  {
    domaine: "Lettres, Langues, Arts & SHS",
    icon: "📚",
    mentions: [
      { nom: "Master Littératures & Cultures Africaines", type: "Recherche", faculte: "FLSH", duree: "M1→M2 (2 ans)" },
      { nom: "Master Linguistique Appliquée", type: "Recherche & Professionnel", faculte: "FLSH", duree: "M1→M2 (2 ans)" },
      { nom: "Master Didactique du Français Langue Étrangère", type: "Professionnel", faculte: "FLSH", duree: "M1→M2 (2 ans)" },
      { nom: "Master Histoire de l'Afrique Centrale", type: "Recherche", faculte: "FLSH", duree: "M1→M2 (2 ans)" },
      { nom: "Master Sociologie & Anthropologie du Sahel", type: "Recherche", faculte: "FLSH", duree: "M1→M2 (2 ans)" },
      { nom: "Master Géographie & Aménagement du Territoire", type: "Recherche & Professionnel", faculte: "FLSH", duree: "M1→M2 (2 ans)" },
    ],
  },
  {
    domaine: "Sciences Exactes & Informatique",
    icon: "🔬",
    mentions: [
      { nom: "Master Mathématiques Appliquées", type: "Recherche", faculte: "FSEA", duree: "M1→M2 (2 ans)" },
      { nom: "Master Physique de l'Énergie Solaire", type: "Recherche & Professionnel", faculte: "FSEA", duree: "M1→M2 (2 ans)" },
      { nom: "Master Chimie des Ressources Naturelles", type: "Recherche", faculte: "FSEA", duree: "M1→M2 (2 ans)" },
      { nom: "Master Informatique : Génie Logiciel", type: "Professionnel", faculte: "FSEA", duree: "M1→M2 (2 ans)" },
      { nom: "Master Informatique : Data Science & IA", type: "Recherche & Professionnel", faculte: "FSEA", duree: "M1→M2 (2 ans)" },
      { nom: "Master Statistiques & Économétrie", type: "Recherche & Professionnel", faculte: "FSEA", duree: "M1→M2 (2 ans)" },
    ],
  },
  {
    domaine: "Santé Publique & Biomédical",
    icon: "🏥",
    mentions: [
      { nom: "Master Santé Publique (MPH)", type: "Professionnel", faculte: "FMSS — Farcha", duree: "M1→M2 (2 ans)" },
      { nom: "Master Épidémiologie des Maladies Tropicales", type: "Recherche", faculte: "FMSS — Farcha", duree: "M1→M2 (2 ans)" },
      { nom: "Master Nutrition et Sécurité Alimentaire", type: "Professionnel", faculte: "FMSS — Farcha", duree: "M1→M2 (2 ans)" },
    ],
  },
  {
    domaine: "Agronomie, Éducation, Ingénierie & Théologie",
    icon: "🌾",
    mentions: [
      { nom: "Master Agronomie & Productions Agricoles", type: "Recherche & Professionnel", faculte: "Faculté d'Agronomie", duree: "M1→M2 (2 ans)" },
      { nom: "Master Gestion des Ressources Naturelles et Environnement", type: "Recherche & Professionnel", faculte: "Faculté d'Agronomie", duree: "M1→M2 (2 ans)" },
      { nom: "Master Sciences de l'Éducation", type: "Professionnel", faculte: "ISP (Fac. d'Éducation)", duree: "M1→M2 (2 ans)" },
      { nom: "Master Formation des Formateurs (MFF)", type: "Professionnel", faculte: "ISP (Fac. d'Éducation)", duree: "M1→M2 (2 ans)" },
      { nom: "Master Génie Civil & BTP", type: "Professionnel", faculte: "Fac. Sciences de l'Ingénieur", duree: "M1→M2 (2 ans)" },
      { nom: "Master Sciences Religieuses & Dialogue Interreligieux", type: "Recherche", faculte: "Fac. de Théologie", duree: "M1→M2 (2 ans)" },
    ],
  },
];

const CONDITIONS = [
  "M1 : être titulaire d'une Licence (Bac+3) dans un domaine compatible",
  "Examen dossier + éventuellement entretien pour certaines mentions",
  "M2 : M1 validé dans la même mention ou mention proche (passage de droit si moyenne ≥ 12/20)",
  "Étudiants internationaux : calendrier spécifique via le Bureau de la Coopération",
];

const APRES_MASTER = [
  { strong: "Master Recherche", rest: "→ préparation au Doctorat (3e cycle)" },
  { strong: "Master Professionnel", rest: "→ insertion directe dans le monde du travail" },
  { strong: "", rest: "Stages longs obligatoires (4 à 6 mois) en entreprise ou administration" },
  { strong: "", rest: "Rédaction d'un mémoire de recherche ou professionnel soutenu devant un jury mixte" },
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

// Soft rounded tag — Recherche in a light navy tint, Professionnel in a
// light gold tint — matching the pill language used across the site.
function TypeTag({ type }: { type: string }) {
  const isRecherche = type === "Recherche";
  return (
    <span
      className="inline-block px-2 py-0.5 rounded text-xs font-semibold"
      style={{
        background: isRecherche ? "rgba(26,58,92,0.10)" : "rgba(200,168,75,0.14)",
        color: isRecherche ? NAVY : "#806724",
        fontFamily: FONT,
      }}
    >
      {type}
    </span>
  );
}

export default function Master() {
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
            Master (Bac+5)
          </h1>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed" style={{ fontFamily: FONT }}>
            Deuxième cycle du système LMD : 2 années d'approfondissement
            (4 semestres, 120 ECTS) orientées recherche ou professionnel, avec
            mémoire de fin d'études.
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

      {/* MENTIONS PAR DOMAINE */}
      <section className="py-14 mt-6" style={{ background: PARCHMENT_ALT }}>
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading roman="II." title="Mentions par domaine" />
          <div className="space-y-6 pt-2">
            {MASTERS.map((dom) => (
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
                      className="grid md:grid-cols-[1.3fr_0.9fr_0.9fr_0.7fr] gap-3 px-5 py-3.5 text-sm items-center"
                      style={{ borderTop: i === 0 ? "none" : `1px solid ${LINE}` }}
                    >
                      <div className="font-semibold" style={{ color: NAVY, fontFamily: FONT }}>
                        {m.nom}
                      </div>
                      <div style={{ color: INK_SOFT, fontFamily: FONT }}>{m.faculte}</div>
                      <div>
                        <TypeTag type={m.type} />
                      </div>
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

      {/* CONDITIONS D'ACCÈS & DEVENIR */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <SectionHeading roman="III." title="Conditions d'accès & devenir" />
        <div className="grid md:grid-cols-2 gap-6 pt-2">
          <div
            className="p-6 bg-white"
            style={{ boxShadow: SHADOW, border: `1px solid ${LINE}`, borderTop: `3px solid ${GOLD}` }}
          >
            <h3 className="text-lg font-bold mb-4" style={{ color: NAVY, fontFamily: "Georgia, serif" }}>
              Conditions d'accès en Master
            </h3>
            <ul className="space-y-2 text-sm" style={{ color: INK_SOFT, fontFamily: FONT }}>
              {CONDITIONS.map((c) => (
                <li key={c} className="flex gap-2">
                  <span className="shrink-0" style={{ color: GOLD }} aria-hidden>
                    ✦
                  </span>
                  <span className="leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="p-6 bg-white"
            style={{ boxShadow: SHADOW, border: `1px solid ${LINE}`, borderTop: `3px solid ${GOLD}` }}
          >
            <h3 className="text-lg font-bold mb-4" style={{ color: NAVY, fontFamily: "Georgia, serif" }}>
              Après le Master ?
            </h3>
            <ul className="space-y-2 text-sm" style={{ color: INK_SOFT, fontFamily: FONT }}>
              {APRES_MASTER.map((a) => (
                <li key={a.rest} className="flex gap-2">
                  <span className="shrink-0" style={{ color: GOLD }} aria-hidden>
                    ✦
                  </span>
                  <span className="leading-relaxed">
                    {a.strong && <strong style={{ color: NAVY }}>{a.strong} </strong>}
                    {a.rest}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}