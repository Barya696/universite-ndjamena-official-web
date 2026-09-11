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
  { k: "Écoles doctorales", v: "5" },
  { k: "Durée standard", v: "3 ans (D1 → D3)" },
  { k: "Directeurs de thèse", v: "180+" },
  { k: "Thèses soutenues", v: "1 200+" },
];

const DOCTORATS: {
  domaine: string;
  icon: string;
  mentions: { nom: string; ecole: string; duree: string }[];
}[] = [
  {
    domaine: "Droit, Sciences Politiques & Économie",
    icon: "⚖️",
    mentions: [
      { nom: "Doctorat en Droit Public", ecole: "École Doctorale Droit & Gouvernance", duree: "3 ans" },
      { nom: "Doctorat en Droit Privé", ecole: "École Doctorale Droit & Gouvernance", duree: "3 ans" },
      { nom: "Doctorat en Sciences Politiques", ecole: "École Doctorale Droit & Gouvernance", duree: "3 ans" },
      { nom: "Doctorat en Sciences Économiques", ecole: "École Doctorale Économie & Gestion", duree: "3 ans" },
      { nom: "Doctorat en Sciences de Gestion", ecole: "École Doctorale Économie & Gestion", duree: "3 ans" },
    ],
  },
  {
    domaine: "Lettres, Langues, Arts & Sciences Humaines",
    icon: "📚",
    mentions: [
      { nom: "Doctorat en Littératures & Cultures Africaines", ecole: "École Doctorale Lettres & SHS", duree: "3 ans" },
      { nom: "Doctorat en Linguistique", ecole: "École Doctorale Lettres & SHS", duree: "3 ans" },
      { nom: "Doctorat en Histoire de l'Afrique Centrale", ecole: "École Doctorale Lettres & SHS", duree: "3 ans" },
      { nom: "Doctorat en Sociologie & Anthropologie", ecole: "École Doctorale Lettres & SHS", duree: "3 ans" },
      { nom: "Doctorat en Géographie & Aménagement", ecole: "École Doctorale Lettres & SHS", duree: "3 ans" },
      { nom: "Doctorat en Sciences de l'Éducation", ecole: "École Doctorale Lettres & SHS", duree: "3 ans" },
    ],
  },
  {
    domaine: "Sciences Exactes, Informatique & Agronomie",
    icon: "🔬",
    mentions: [
      { nom: "Doctorat en Mathématiques Appliquées", ecole: "École Doctorale Sciences & Technologie", duree: "3 ans" },
      { nom: "Doctorat en Physique de l'Énergie Solaire", ecole: "École Doctorale Sciences & Technologie", duree: "3 ans" },
      { nom: "Doctorat en Chimie des Ressources Naturelles", ecole: "École Doctorale Sciences & Technologie", duree: "3 ans" },
      { nom: "Doctorat en Informatique", ecole: "École Doctorale Sciences & Technologie", duree: "3 ans" },
      { nom: "Doctorat en Agronomie", ecole: "École Doctorale Sciences & Technologie", duree: "3 ans" },
      { nom: "Doctorat en Gestion des Ressources Naturelles", ecole: "École Doctorale Sciences & Technologie", duree: "3 ans" },
    ],
  },
  {
    domaine: "Santé Publique & Biomédical",
    icon: "🏥",
    mentions: [
      { nom: "Doctorat en Santé Publique", ecole: "École Doctorale Santé & Biomed", duree: "3 ans" },
      { nom: "Doctorat en Épidémiologie", ecole: "École Doctorale Santé & Biomed", duree: "3 ans" },
      { nom: "Doctorat en Nutrition", ecole: "École Doctorale Santé & Biomed", duree: "3 ans" },
      { nom: "Doctorat en Pharmacologie", ecole: "École Doctorale Santé & Biomed", duree: "3 ans" },
    ],
  },
  {
    domaine: "Théologie & Études Religieuses",
    icon: "🕊️",
    mentions: [
      { nom: "Doctorat en Sciences Religieuses", ecole: "École Doctorale Théologie & Éthique", duree: "3 ans" },
      { nom: "Doctorat en Études Islamiques", ecole: "École Doctorale Théologie & Éthique", duree: "3 ans" },
      { nom: "Doctorat en Dialogue Interreligieux", ecole: "École Doctorale Théologie & Éthique", duree: "3 ans" },
    ],
  },
];

const CONDITIONS = [
  "Être titulaire d'un Master Recherche ou équivalent (Bac+5)",
  "Dossier de candidature : projet de recherche 5–10 pages, CV, lettres de recommandation",
  "Entretien avec le comité scientifique de l'école doctorale",
  "Accord préalable d'un directeur de thèse (HDR ou équivalent)",
  "Inscription administrative annuelle + validation des crédits de formation doctorale",
];

const PARCOURS = [
  { strong: "D1", rest: "— Formation doctorale (60 ECTS) + séminaire de méthode" },
  { strong: "D2", rest: "— Travaux de terrain, collecte de données, premiers articles" },
  { strong: "D3", rest: "— Rédaction de la thèse, publications, préparation à la soutenance" },
  { strong: "", rest: "Suivi annuel par un comité de suivi pédagogique" },
  { strong: "", rest: "Soutenance publique devant jury mixte (2 examinateurs extérieurs + 3 membres internes)" },
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

export default function Doctorat() {
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
            Doctorat (Bac+8)
          </h1>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed" style={{ fontFamily: FONT }}>
            Troisième cycle du système LMD : 3 années de recherche sous la direction
            d'un directeur de thèse, avec inscription en école doctorale et soutenance
            publique devant un jury international.
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
            {DOCTORATS.map((dom) => (
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
                      className="grid md:grid-cols-[1.4fr_1.1fr_0.6fr] gap-3 px-5 py-3.5 text-sm items-center"
                      style={{ borderTop: i === 0 ? "none" : `1px solid ${LINE}` }}
                    >
                      <div className="font-semibold" style={{ color: NAVY, fontFamily: FONT }}>
                        {m.nom}
                      </div>
                      <div style={{ color: INK_SOFT, fontFamily: FONT }}>{m.ecole}</div>
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

      {/* CONDITIONS & PARCOURS */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <SectionHeading roman="III." title="Conditions & parcours du doctorant" />
        <div className="grid md:grid-cols-2 gap-6 pt-2">
          <div
            className="p-6 bg-white"
            style={{ boxShadow: SHADOW, border: `1px solid ${LINE}`, borderTop: `3px solid ${GOLD}` }}
          >
            <h3 className="text-lg font-bold mb-4" style={{ color: NAVY, fontFamily: "Georgia, serif" }}>
              Conditions d'inscription en thèse
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
              Parcours du doctorant
            </h3>
            <ul className="space-y-2 text-sm" style={{ color: INK_SOFT, fontFamily: FONT }}>
              {PARCOURS.map((p) => (
                <li key={p.rest} className="flex gap-2">
                  <span className="shrink-0" style={{ color: GOLD }} aria-hidden>
                    ✦
                  </span>
                  <span className="leading-relaxed">
                    {p.strong && <strong style={{ color: NAVY }}>{p.strong} </strong>}
                    {p.rest}
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