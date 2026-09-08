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
// Matches the sans-serif used in the site footer / HistoireMission page.
const FONT = "'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif";

const SERVICES = [
  {
    titre: "Accueil & intégration",
    icon: "accueil" as const,
    detail: [
      "Accueil personnalisé à l'aéroport et dans les cités U",
      "Journée d'orientation : campus, services, vie pratique",
      "Tutorat parrainage par un étudiant tchadien",
      "Cours de français langue étrangère (FLE) intensifs",
    ],
  },
  {
    titre: "Logement & restauration",
    icon: "logement" as const,
    detail: [
      "Places réservées en cité universitaire Toukra & Farcha",
      "Restaurants universitaires à 300 FCFA le repas",
      "Cafétéria, épicerie, laverie dans chaque cité",
      "Service médical polyclinique sur chaque campus",
    ],
  },
  {
    titre: "Scolarité & documents",
    icon: "scolarite" as const,
    detail: [
      "Bureau de la Coopération International (BCI) dédié",
      "Équivalences de diplômes & inscriptions administratives",
      "Convention de stage, certificats de scolarité",
      "Aide aux démarches de visa et de carte de séjour",
    ],
  },
  {
    titre: "Vie étudiante & culturelle",
    icon: "vie" as const,
    detail: [
      "Club des étudiants internationaux (CEI)",
      "Festival des cultures africaines chaque semestre",
      "Sorties découvertes : N'Djamena, Lac Tchad, musée",
      "Activités sportives inter-facultés ouvertes à tous",
    ],
  },
];

const STATS = [
  { k: "Étudiants internationaux", v: "1 500" },
  { k: "Pays représentés", v: "18" },
  { k: "Places en cité U réservées", v: "850" },
  { k: "Cours FLE / semestre", v: "4" },
];

const PAYS = [
  { pays: "🇨🇲 Cameroun", effectif: 380 },
  { pays: "🇳🇪 Niger", effectif: 260 },
  { pays: "🇨🇫 RCA", effectif: 210 },
  { pays: "🇨🇬 Congo", effectif: 175 },
  { pays: "🇬🇦 Gabon", effectif: 130 },
  { pays: "🇸🇩 Soudan", effectif: 95 },
  { pays: "🇳🇬 Nigeria", effectif: 85 },
  { pays: "🇫🇷 France", effectif: 60 },
  { pays: "🇧🇪 Belgique", effectif: 40 },
  { pays: "🇦🇺 Autres", effectif: 65 },
];

const CALENDRIER = [
  { date: "1er mars", label: "Ouverture des candidatures en ligne" },
  { date: "30 juin", label: "Clôture des dossiers" },
  { date: "15 juillet", label: "Publication des résultats d'admission" },
  { date: "1–15 sept.", label: "Arrivée & accueil sur campus" },
  { date: "1er oct.", label: "Rentrée académique" },
];

// Gold-stroke medallion icon, matching MissionIcon's language from HistoireMission.
function ServiceIcon({ kind }: { kind: "accueil" | "logement" | "scolarite" | "vie" }) {
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
        {kind === "accueil" && (
          <>
            <path d="M2 12h6" />
            <path d="M8 9l3 1.6c.5.3.8.8.8 1.4v0c0 .8-.7 1.4-1.5 1.3L6 12.6" />
            <path d="M22 12h-6" />
            <path d="M16 9l-3 1.6c-.5.3-.8.8-.8 1.4v0c0 .8.7 1.4 1.5 1.3l4.3-.7" />
            <path d="M9 6.5 12 5l3 1.5" />
          </>
        )}
        {kind === "logement" && (
          <>
            <path d="M4 11 12 4l8 7" />
            <path d="M6 10v9h12v-9" />
            <path d="M10 19v-5h4v5" />
          </>
        )}
        {kind === "scolarite" && (
          <>
            <path d="M7 3.5h8l3 3V20a.6.6 0 0 1-.6.6H7.6A.6.6 0 0 1 7 20V4.1a.6.6 0 0 1 .6-.6Z" />
            <path d="M9.5 10h5" />
            <path d="M9.5 13h5" />
            <path d="M9.5 16h3" />
          </>
        )}
        {kind === "vie" && (
          <>
            <circle cx="9" cy="9" r="5.2" />
            <circle cx="15" cy="15" r="5.2" />
            <path d="M7.3 8.2h.01" />
            <path d="M10.7 9.8h.01" />
            <path d="M13.3 14.2h.01" />
            <path d="M16.7 15.8h.01" />
          </>
        )}
      </svg>
    </span>
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

export default function EtudiantsInternationaux() {
  return (
    <div style={{ background: PARCHMENT }} className="min-h-screen">
      {/* EN-TÊTE */}
      <section
        className="py-16 px-4 md:px-[50px]"
        style={{
          background: `linear-gradient(180deg, ${NAVY_DEEP} 0%, ${NAVY} 100%)`,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.2em] text-xs mb-3" style={{ color: GOLD }}>
            International
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ color: GOLD, fontFamily: "Georgia, serif" }}
          >
            Étudiants internationaux
          </h1>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
            Chaque année, 1 500 étudiants venus de 18 pays d'Afrique et d'Europe
            choisissent l'Université de N'Djamena. L'UDN met tout en œuvre pour
            leur offrir un accueil chaleureux et des conditions d'études optimales.
          </p>
        </div>
      </section>

      {/* I. VUE D'ENSEMBLE — stat cards, document-panel style */}
      <section className="max-w-5xl mx-auto px-4 pt-14 pb-4">
        <SectionHeading roman="I." title="Vue d'ensemble" />
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 pt-2">
          {STATS.map((s) => (
            <div
              key={s.k}
              className="bg-white p-6 text-center"
              style={{
                boxShadow: SHADOW,
                border: `1px solid ${LINE}`,
                borderTop: `3px solid ${GOLD}`,
                backgroundImage: `linear-gradient(160deg, #ffffff 0%, ${PARCHMENT} 100%)`,
              }}
            >
              <p
                className="text-xs uppercase tracking-wider mb-2"
                style={{ color: INK_SOFT, fontFamily: FONT }}
              >
                {s.k}
              </p>
              <p className="text-2xl font-bold" style={{ color: NAVY, fontFamily: FONT }}>
                {s.v}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* II. ORIGINE GÉOGRAPHIQUE */}
      <section className="py-14" style={{ background: PARCHMENT_ALT }}>
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeading roman="II." title="Origine géographique 2024" />
          <div className="grid sm:grid-cols-2 bg-white" style={{ boxShadow: SHADOW, border: `1px solid ${LINE}` }}>
            {PAYS.map((p, i) => (
              <div
                key={p.pays}
                className="flex items-center justify-between gap-3 py-4 px-5"
                style={{
                  borderBottom: `1px solid ${LINE}`,
                  background: i % 2 === 0 ? "transparent" : "rgba(198,161,91,0.045)",
                }}
              >
                <span className="text-[15px] font-medium" style={{ color: INK, fontFamily: FONT }}>
                  {p.pays}
                </span>
                <div className="flex items-center gap-3">
                  <div
                    className="h-2 rounded-full"
                    style={{
                      width: `${(p.effectif / 380) * 120}px`,
                      background: `linear-gradient(90deg, ${GOLD}, rgba(198,161,91,0.35))`,
                    }}
                  />
                  <span
                    className="w-10 text-right text-sm font-semibold tabular-nums"
                    style={{ color: NAVY, fontFamily: FONT }}
                  >
                    {p.effectif}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* III. SERVICES DÉDIÉS — "sheet peeking behind" cards */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <SectionHeading roman="III." title="Services dédiés" />
        <div className="grid md:grid-cols-2 gap-8 pt-2">
          {SERVICES.map((s, i) => (
            <div key={s.titre} className="relative">
              <div
                aria-hidden
                className="absolute"
                style={{
                  top: 14,
                  left: 10,
                  right: -10,
                  bottom: -10,
                  background: NAVY,
                  transform: i % 2 === 0 ? "rotate(-1.1deg)" : "rotate(1deg)",
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
                  <ServiceIcon kind={s.icon} />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: NAVY, fontFamily: FONT }}>
                  {s.titre}
                </h3>
                <div className="flex items-center gap-2 mb-4" style={{ maxWidth: 96 }}>
                  <div style={{ width: 24, height: 2, background: GOLD }} />
                  <div style={{ flex: 1, height: 1, background: LINE }} />
                </div>
                <ul className="space-y-2 text-sm" style={{ fontFamily: FONT }}>
                  {s.detail.map((d) => (
                    <li key={d} className="flex gap-2">
                      <span className="shrink-0" style={{ color: GOLD }}>✦</span>
                      <span className="leading-relaxed" style={{ color: INK_SOFT }}>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* IV. CALENDRIER & CONTACT — document panels, matching Jalons table language */}
      <section className="py-14" style={{ background: PARCHMENT_ALT }}>
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeading roman="IV." title="Calendrier & démarches" />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white" style={{ boxShadow: SHADOW, border: `1px solid ${LINE}` }}>
              {CALENDRIER.map((c, i) => (
                <div
                  key={c.date}
                  className="grid grid-cols-[110px_1fr] gap-4 py-4 px-6"
                  style={{ borderBottom: i !== CALENDRIER.length - 1 ? `1px solid ${LINE}` : "none" }}
                >
                  <div className="font-bold" style={{ color: NAVY, fontFamily: FONT, fontSize: "15px" }}>
                    {c.date}
                  </div>
                  <div className="text-sm leading-relaxed" style={{ color: INK_SOFT, fontFamily: FONT }}>
                    {c.label}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="bg-white p-8"
              style={{
                boxShadow: SHADOW,
                border: `1px solid ${LINE}`,
                borderTop: `3px solid ${GOLD}`,
                backgroundImage: `linear-gradient(160deg, #ffffff 0%, ${PARCHMENT} 100%)`,
              }}
            >
              <h3 className="text-lg font-bold mb-3" style={{ color: NAVY, fontFamily: FONT }}>
                Bureau de la Coopération International (BCI)
              </h3>
              <div className="flex items-center gap-2 mb-4" style={{ maxWidth: 96 }}>
                <div style={{ width: 24, height: 2, background: GOLD }} />
                <div style={{ flex: 1, height: 1, background: LINE }} />
              </div>
              <ul className="space-y-2 text-sm" style={{ fontFamily: FONT }}>
                {[
                  "Campus de Toukra — Bâtiment A, 1er étage",
                  "bci@undt.edu.td",
                  "+235 22 51 44 80 / 81",
                  "Lundi–vendredi · 8h – 16h (pauses 12h–13h30)",
                ].map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="shrink-0" style={{ color: GOLD }}>✦</span>
                    <span className="leading-relaxed" style={{ color: INK_SOFT }}>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}