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

const STATS = [
  { k: "Universités partenaires", v: "30+" },
  { k: "Organismes bailleurs", v: "12" },
  { k: "Pays concernés", v: "18" },
  { k: "Accords de mobilité actifs", v: "65" },
];

const UNIVERSITES_EUROPE = [
  { nom: "Université de Bordeaux", pays: "🇫🇷 France", domaine: "Co-diplômation Droit, Environnement, Santé, Informatique", echanges: 45 },
  { nom: "Université de Montpellier", pays: "🇫🇷 France", domaine: "Santé tropicale, Épidémiologie, Économie du Développement", echanges: 32 },
  { nom: "Université Bordeaux Montaigne", pays: "🇫🇷 France", domaine: "Linguistique, FLE, Arts & Lettres", echanges: 18 },
  { nom: "Université de Liège", pays: "🇧🇪 Belgique", domaine: "Droit international, Sciences Politiques", echanges: 14 },
  { nom: "INALCO — Paris", pays: "🇫🇷 France", domaine: "Langues africaines, Doctorat Linguistique", echanges: 8 },
  { nom: "IRD — Institut de Recherche pour le Développement", pays: "🇫🇷 France", domaine: "LIA Environnement & Santé, terrains de recherche", echanges: "—" },
];

const UNIVERSITES_AFRIQUE = [
  { nom: "Université de Yaoundé I", pays: "🇨🇲 Cameroun", domaine: "Droit, Économie, Histoire, Médecine (co-diplômations multiples)", echanges: 52 },
  { nom: "Université de Douala", pays: "🇨🇲 Cameroun", domaine: "Sciences Économiques & Gestion, Finance-Banque", echanges: 30 },
  { nom: "Université Yaoundé II — Soa", pays: "🇨🇲 Cameroun", domaine: "Licence Banque & Finance, Sciences Politiques", echanges: 28 },
  { nom: "Université de Niamey Abdou Moumouni", pays: "🇳🇪 Niger", domaine: "LMD Licence Sc. Politiques, Master Éducation, Recherche", echanges: 40 },
  { nom: "Université Cheikh Anta Diop — Dakar", pays: "🇸🇳 Sénégal", domaine: "Santé Publique, Master MPH international", echanges: 16 },
  { nom: "Université Gaston Berger — Saint-Louis", pays: "🇸🇳 Sénégal", domaine: "Lettres, Mathématiques Appliquées", echanges: 10 },
  { nom: "Université de Yaoundé — ENI", pays: "🇨🇲 Cameroun", domaine: "Ingénierie, Génie Civil, Génie Électrique", echanges: 22 },
  { nom: "Université du Caire", pays: "🇪🇬 Égypte", domaine: "SHS, Histoire, Théologie, SHS", echanges: 18 },
  { nom: "Université de Lagos", pays: "🇳🇬 Nigeria", domaine: "Management, Ingénierie pétrolière", echanges: 12 },
  { nom: "Université de Bangui", pays: "🇨🇫 RCA", domaine: "Harmonisation LMD, examens communs CEMAC", echanges: 8 },
  { nom: "Université Marien Ngouabi — Brazzaville", pays: "🇨🇬 Congo", domaine: "Droit, Santé, Économie", echanges: 15 },
  { nom: "Université Omar Bongo — Libreville", pays: "🇬🇦 Gabon", domaine: "Licences, Masters conjoints CEMAC", echanges: 10 },
];

const ORGANISMES = [
  {
    titre: "Union Européenne",
    icon: "ue" as const,
    detail: [
      "ERASMUS+ KA103, KA107 & KA2 (capacité)",
      "Projets DIGILMD & GREENUNI (870 000 €)",
      "Service national Erasmus+ à l'UDN",
    ],
  },
  {
    titre: "Union Africaine — NEPAD",
    icon: "ua" as const,
    detail: [
      "Harmonisation LMD & espace CAMES",
      "Programme Panafricain de Bourses",
      "Réseau RUSAC — Universités d'Afrique Centrale",
    ],
  },
  {
    titre: "UNESCO",
    icon: "unesco" as const,
    detail: [
      "Chaire UNESCO « Patrimoine Sahélien »",
      "Programme International de Corruption Scolaire",
      "Appui à la formation des formateurs",
    ],
  },
  {
    titre: "Agence Universitaire de la Francophonie",
    icon: "auf" as const,
    detail: [
      "Bourses Master & Doctorat francophones",
      "Plateforme Moodle & SUDOC documentation",
      "Programme de numérisation des thèses",
    ],
  },
  {
    titre: "Banque Mondiale — ACE Impact",
    icon: "bm" as const,
    detail: [
      "Centre d'Excellence ACE « Énergie & Environnement sahélienne »",
      "4,2 MUSD pour labos, masters & école doctorale",
      "Bourses de master et de doctorat",
    ],
  },
  {
    titre: "Ambassade de France — SCAC",
    icon: "france" as const,
    detail: [
      "Campus France — bourses Eiffel & service de coopération",
      "Appui aux doubles diplômes France–Tchad",
      "Co-édition manuels & formations FLE",
    ],
  },
];

// Gold-stroke medallion icon, matching MissionIcon's language from HistoireMission.
function OrgIcon({ kind }: { kind: "ue" | "ua" | "unesco" | "auf" | "bm" | "france" }) {
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
        {kind === "ue" && (
          <>
            <circle cx="12" cy="12" r="8" />
            {Array.from({ length: 12 }).map((_, i) => {
              const a = (i / 12) * 2 * Math.PI - Math.PI / 2;
              const x = 12 + 5.6 * Math.cos(a);
              const y = 12 + 5.6 * Math.sin(a);
              return <circle key={i} cx={x} cy={y} r="0.55" fill={GOLD} stroke="none" />;
            })}
          </>
        )}
        {kind === "ua" && (
          <>
            <path d="M12 3.5c2.6 1.7 4.2 4.7 4.2 8.5s-1.6 6.8-4.2 8.5c-2.6-1.7-4.2-4.7-4.2-8.5S9.4 5.2 12 3.5Z" />
            <path d="M4 12h16" />
            <path d="M12 3.5v17" />
          </>
        )}
        {kind === "unesco" && (
          <>
            <path d="M5 19V8l7-4.5L19 8v11" />
            <path d="M5 19h14" />
            <path d="M8 19v-7" />
            <path d="M12 19v-7" />
            <path d="M16 19v-7" />
          </>
        )}
        {kind === "auf" && (
          <>
            <path d="M4 5.5c2.4-1 5.2-1 7.5.6v12.4c-2.3-1.6-5.1-1.6-7.5-.6Z" />
            <path d="M20 5.5c-2.4-1-5.2-1-7.5.6v12.4c2.3-1.6 5.1-1.6 7.5-.6Z" />
          </>
        )}
        {kind === "bm" && (
          <>
            <path d="M4 9.5 12 4l8 5.5" />
            <path d="M5.5 9.5v9" />
            <path d="M9.5 9.5v9" />
            <path d="M14.5 9.5v9" />
            <path d="M18.5 9.5v9" />
            <path d="M4 18.5h16" />
          </>
        )}
        {kind === "france" && (
          <>
            <path d="M6 21V5l1.5-1.5L9 5v16" />
            <path d="M6 6h11l-2 2.3L17 10.5H6" />
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

function UniversitesTable({ data }: { data: typeof UNIVERSITES_EUROPE }) {
  return (
    <div className="bg-white" style={{ boxShadow: SHADOW, border: `1px solid ${LINE}` }}>
      {data.map((u, i) => (
        <div
          key={u.nom}
          className="grid md:grid-cols-[1.4fr_0.9fr_2fr_0.7fr] gap-3 px-6 py-4 items-center"
          style={{
            borderBottom: i !== data.length - 1 ? `1px solid ${LINE}` : "none",
            background: i % 2 === 0 ? "transparent" : "rgba(198,161,91,0.045)",
          }}
        >
          <div className="font-semibold text-[15px]" style={{ color: NAVY, fontFamily: FONT }}>{u.nom}</div>
          <div className="text-sm" style={{ color: INK_SOFT, fontFamily: FONT }}>{u.pays}</div>
          <div className="text-sm leading-relaxed" style={{ color: INK_SOFT, fontFamily: FONT }}>{u.domaine}</div>
          <div className="inline-flex items-center justify-start md:justify-end">
            <span
              className="px-2.5 py-1 text-xs font-semibold"
              style={{ background: PARCHMENT_ALT, color: NAVY, border: `1px solid ${LINE}`, fontFamily: FONT }}
            >
              {u.echanges === "—" ? "Recherche" : `${u.echanges} ét./an`}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Partenariats() {
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
            Partenariats
          </h1>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
            L'Université de N'Djamena tisse des liens durables avec 30 universités
            et 6 grands organismes internationaux pour construire ensemble des
            parcours d'excellence, des projets de recherche ambitieux et une
            mobilité fluide sur trois continents.
          </p>
        </div>
      </section>

      {/* I. VUE D'ENSEMBLE */}
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
              <p className="text-xs uppercase tracking-wider mb-2" style={{ color: INK_SOFT, fontFamily: FONT }}>
                {s.k}
              </p>
              <p className="text-2xl font-bold" style={{ color: NAVY, fontFamily: FONT }}>
                {s.v}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* II. EUROPE */}
      <section className="max-w-5xl mx-auto px-4 pt-8 pb-4">
        <SectionHeading roman="II." title="Universités partenaires — Europe" />
        <UniversitesTable data={UNIVERSITES_EUROPE} />
      </section>

      {/* III. AFRIQUE & PROCHE-ORIENT */}
      <section className="py-14" style={{ background: PARCHMENT_ALT }}>
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeading roman="III." title="Universités partenaires — Afrique & Proche-Orient" />
          <UniversitesTable data={UNIVERSITES_AFRIQUE} />
        </div>
      </section>

      {/* IV. ORGANISMES & BAILLEURS — "sheet peeking behind" cards */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <SectionHeading roman="IV." title="Organismes & bailleurs" />
        <div className="grid md:grid-cols-2 gap-8 pt-2">
          {ORGANISMES.map((o, i) => (
            <div key={o.titre} className="relative">
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
                  <OrgIcon kind={o.icon} />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: NAVY, fontFamily: FONT }}>
                  {o.titre}
                </h3>
                <div className="flex items-center gap-2 mb-4" style={{ maxWidth: 96 }}>
                  <div style={{ width: 24, height: 2, background: GOLD }} />
                  <div style={{ flex: 1, height: 1, background: LINE }} />
                </div>
                <ul className="space-y-2 text-sm" style={{ fontFamily: FONT }}>
                  {o.detail.map((d) => (
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

      {/* V. DEVENIR PARTENAIRE & CONTACT */}
      <section className="py-14" style={{ background: PARCHMENT_ALT }}>
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeading roman="V." title="Devenir partenaire" />
          <div className="grid md:grid-cols-2 gap-8">
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
                Devenir partenaire ?
              </h3>
              <div className="flex items-center gap-2 mb-4" style={{ maxWidth: 96 }}>
                <div style={{ width: 24, height: 2, background: GOLD }} />
                <div style={{ flex: 1, height: 1, background: LINE }} />
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: INK_SOFT, fontFamily: FONT }}>
                L'UDN est toujours à la recherche de nouvelles collaborations
                (universités, écoles, laboratoires, entreprises, ONG) pour renforcer
                son rayonnement et ses formations. Un premier contact permet
                d'identifier le type d'accord adapté.
              </p>
              <ul className="space-y-2 text-sm" style={{ fontFamily: FONT }}>
                {[
                  "Accords-cadres institutionnels (généraux)",
                  "Mémorandums d'entente (MoU) — facultés ou domaines ciblés",
                  "Conventions spécifiques : double diplôme, échanges, recherche, stages",
                  "Accords de cotutelle de thèse & co-direction",
                ].map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="shrink-0" style={{ color: GOLD }}>✦</span>
                    <span className="leading-relaxed" style={{ color: INK_SOFT }}>{line}</span>
                  </li>
                ))}
              </ul>
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
                Bureau des Partenariats International
              </h3>
              <div className="flex items-center gap-2 mb-4" style={{ maxWidth: 96 }}>
                <div style={{ width: 24, height: 2, background: GOLD }} />
                <div style={{ flex: 1, height: 1, background: LINE }} />
              </div>
              <ul className="space-y-2 text-sm" style={{ fontFamily: FONT }}>
                {[
                  "Direction : Dr. Mahamat Youssouf, Conseiller Recteur aux Relations Internationales",
                  "Campus de Toukra — Bâtiment A, bureau A-115",
                  "partenariats@undt.edu.td · cooperation@undt.edu.td",
                  "+235 22 51 44 78 (poste 101)",
                  "Lundi–vendredi · 8h – 16h · Rendez-vous conseillé",
                  "international.undt.edu.td",
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