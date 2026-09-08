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
  { k: "Doubles diplômes actifs", v: "14" },
  { k: "Accords de coopération", v: "45" },
  { k: "Pays partenaires LMD", v: "12" },
  { k: "Écoles doctorales conjointes", v: "3" },
];

const DOUBLES_DIPLOMES = [
  {
    domaine: "Droit & Sciences Politiques",
    icon: "⚖️",
    parcours: [
      {
        mention: "Master Droit de l'Environnement (Double diplôme)",
        partenaire: "Université de Bordeaux — France",
        cycle: "M1 UDN → M2 Bordeaux",
        effectif: "15 places / an",
      },
      {
        mention: "Master Droit des Affaires (Co-diplômation)",
        partenaire: "Université Yaoundé I — Cameroun",
        cycle: "M1 & M2 mutualisés (2 semestres sur chaque campus)",
        effectif: "20 places / an",
      },
      {
        mention: "Licence Sciences Politiques",
        partenaire: "Université de Niamey — Niger",
        cycle: "3 ans — cursus conjoint CAMES",
        effectif: "25 places / an",
      },
    ],
  },
  {
    domaine: "Sciences Économiques & Gestion",
    icon: "📊",
    parcours: [
      {
        mention: "Master Économie du Développement",
        partenaire: "Université de Montpellier — France",
        cycle: "M1 UDN → M2 Montpellier (stage M2 obligatoire)",
        effectif: "12 places / an",
      },
      {
        mention: "Master Finance & Banque (double diplôme)",
        partenaire: "Université de Douala — Cameroun",
        cycle: "Cursus mutualisé CEMAC — 4 semestres",
        effectif: "18 places / an",
      },
      {
        mention: "Licence Banque & Finance",
        partenaire: "Université de Yaoundé II — Cameroun",
        cycle: "3 ans — semestre S6 à Yaoundé",
        effectif: "30 places / an",
      },
    ],
  },
  {
    domaine: "Santé, Sciences & Ingénierie",
    icon: "🏥",
    parcours: [
      {
        mention: "Master Santé Publique (MPH international)",
        partenaire: "Université de Bordeaux — France + Université Cheikh Anta Diop Dakar — Sénégal",
        cycle: "M1 UDN → M2 Bordeaux ou Dakar",
        effectif: "15 places / an",
      },
      {
        mention: "Master Informatique — IA & Données",
        partenaire: "Université de Bordeaux — France",
        cycle: "M1 UDN → M2 Bordeaux (laboratoire LaBRI)",
        effectif: "8 places / an",
      },
      {
        mention: "Master Génie Civil & BTP",
        partenaire: "École Nationale d'Ingénieurs de Yaoundé — Cameroun",
        cycle: "Cursus conjoint 5 ans LMD — ingénieur diplômé",
        effectif: "20 places / an",
      },
    ],
  },
  {
    domaine: "Lettres, SHS & Éducation",
    icon: "📚",
    parcours: [
      {
        mention: "Master Linguistique Appliquée — FLE",
        partenaire: "Université de Bordeaux Montaigne — France",
        cycle: "M1 UDN → M2 Bordeaux (stage obligatoire)",
        effectif: "10 places / an",
      },
      {
        mention: "Master Histoire de l'Afrique Centrale",
        partenaire: "Université de Yaoundé I — Cameroun + Université du Caire — Égypte",
        cycle: "Tripartite — mobilité au M1 S2 & M2 S1",
        effectif: "10 places / an",
      },
      {
        mention: "Master Sciences de l'Éducation",
        partenaire: "Université de Niamey — Niger",
        cycle: "Cursus conjoint CAMES (2 ans)",
        effectif: "25 places / an",
      },
    ],
  },
  {
    domaine: "Écoles doctorales conjointes",
    icon: "🎓",
    parcours: [
      {
        mention: "Doctorat en Droit de l'Environnement (codirection)",
        partenaire: "Université de Bordeaux — France",
        cycle: "3 ans — codirection internationale, publication obligatoire",
        effectif: "5 places / an",
      },
      {
        mention: "Doctorat Santé Tropicale & Épidémiologie",
        partenaire: "Université de Montpellier — France",
        cycle: "3 ans — terrains multiples, co-encadrement",
        effectif: "6 places / an",
      },
      {
        mention: "Doctorat Linguistique & Langues Africaines",
        partenaire: "INALCO Paris & Université Yaoundé I",
        cycle: "3 ans — thèse sur publications",
        effectif: "4 places / an",
      },
    ],
  },
];

const COOPERATIONS = [
  {
    titre: "Coopération intergouvernementale",
    icone: "🤝",
    detail: [
      "Accord France–Tchad sur l'enseignement supérieur & la recherche (SCAC Ambassade de France)",
      "Convention Union Africaine — Harmonisation LMD dans l'espace CAMES",
      "Coopération nigérienne & camerounaise — échanges étudiants, enseignants & examens conjoints CEMAC",
      "Coopération égyptienne — bourses de master & de doctorat en médecine & SHS",
    ],
  },
  {
    titre: "Projets financés européens & internationaux",
    icone: "💶",
    detail: [
      "ERASMUS+ KA2 — DIGILMD : numérisation pédagogique & plateforme Moodle partagée (350 000 €)",
      "ERASMUS+ KA2 — GREENUNI : transition écologique, énergétique sahélienne (520 000 €)",
      "Banque Mondiale ACE Impact — Centre d'Excellence « Énergie Solitaire & Développement »",
      "UNESCO — Chaire « Patrimoine Sahélien & Cultures Africaines »",
    ],
  },
  {
    titre: "Recherche & laboratoires partagés",
    icone: "🔬",
    detail: [
      "Laboratoire international associé (LIA) « Environnement & Santé » — UDN / Bordeaux / IRD",
      "Observatoire sahélien de l'environnement — réseau de 8 universités d'Afrique de l'Ouest & Centrale",
      "Plateforme de génomique & séquençage — UDN / Yaoundé / AUF (financement UE)",
      "Programme de doctorat en cotutelle — 42 directeurs de thèse internationalement accrédités",
    ],
  },
];

const AVANTAGES = [
  { strong: "Deux diplômes reconnus", rest: "dans l'espace CAMES & UE" },
  { strong: "Mobilité", rest: ": 1 à 2 semestres à l'étranger selon le parcours" },
  { strong: "Insertion pro", rest: ": réseau double de diplômés & entreprises" },
  { strong: "Bourses dédiées", rest: ": ACE Impact, ERASMUS+, AU, AUF" },
  { strong: "Culture bilingue", rest: "& compétences interculturelles renforcées" },
];

const SELECTION = [
  "Candidature : dossier académique + entretien oral",
  "Sélection classante : moyenne, motivation, projet professionnel",
  "Accès en L1 via concours spécifique (parcours licence co-diplômés)",
  "Accès en M1 / D1 via examen de dossier + entretien",
  "Calendrier identique aux programmes d'échange (mars → août)",
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

export default function CooperationDoublesDiplomes() {
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
          <p className="uppercase tracking-[0.2em] text-xs mb-3" style={{ color: GOLD, fontFamily: FONT }}>
            International
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ color: GOLD, fontFamily: "Georgia, serif" }}
          >
            Coopération & doubles diplômes
          </h1>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed" style={{ fontFamily: FONT }}>
            14 parcours doublement diplômants (Licence, Master, Doctorat) et
            45 accords de coopération avec des universités d'Afrique, d'Europe
            et du Proche-Orient pour offrir à nos étudiants un diplôme biculturel,
            un réseau international et une mobilité fluide sur le continent.
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

      {/* PARCOURS PAR DOMAINE */}
      <section className="py-14 mt-6" style={{ background: PARCHMENT_ALT }}>
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading roman="II." title="Parcours par domaine" />
          <div className="space-y-6 pt-2">
            {DOUBLES_DIPLOMES.map((dom) => (
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
                  {dom.parcours.map((p, i) => (
                    <div
                      key={p.mention}
                      className="grid md:grid-cols-[1.5fr_1.4fr_1.2fr_0.8fr] gap-3 px-5 py-3.5 text-sm items-center"
                      style={{ borderTop: i === 0 ? "none" : `1px solid ${LINE}` }}
                    >
                      <div className="font-semibold" style={{ color: NAVY, fontFamily: FONT }}>
                        {p.mention}
                      </div>
                      <div style={{ color: INK_SOFT, fontFamily: FONT }}>{p.partenaire}</div>
                      <div style={{ color: INK_SOFT, fontFamily: FONT }}>{p.cycle}</div>
                      <div className="inline-flex items-center justify-start md:justify-end">
                        <span
                          className="px-2.5 py-1 text-xs font-semibold"
                          style={{ background: "rgba(200,168,75,0.14)", color: "#806724", fontFamily: FONT, borderRadius: 999 }}
                        >
                          {p.effectif}
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

      {/* AXES DE COOPÉRATION */}
      <section className="max-w-6xl mx-auto px-4 pt-14 pb-4">
        <SectionHeading roman="III." title="Axes de coopération institutionnelle" />
        <div className="grid md:grid-cols-3 gap-6 pt-2">
          {COOPERATIONS.map((c) => (
            <article
              key={c.titre}
              className="bg-white overflow-hidden"
              style={{ boxShadow: SHADOW, border: `1px solid ${LINE}` }}
            >
              <div
                className="px-5 py-4 flex items-center gap-3"
                style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_DEEP} 100%)`, borderBottom: `2px solid ${GOLD}` }}
              >
                <span className="text-2xl" aria-hidden>
                  {c.icone}
                </span>
                <h3 className="font-bold text-base" style={{ color: GOLD, fontFamily: FONT }}>
                  {c.titre}
                </h3>
              </div>
              <div className="p-5">
                <ul className="space-y-2 text-sm" style={{ color: INK_SOFT, fontFamily: FONT }}>
                  {c.detail.map((d) => (
                    <li key={d} className="flex gap-2">
                      <span className="shrink-0" style={{ color: GOLD }} aria-hidden>
                        ✦
                      </span>
                      <span className="leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* AVANTAGES & SÉLECTION */}
      <section className="py-14 mt-6" style={{ background: PARCHMENT_ALT }}>
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading roman="IV." title="Avantages & sélection" />
          <div className="grid md:grid-cols-2 gap-6 pt-2">
            <div
              className="p-6 bg-white"
              style={{ boxShadow: SHADOW, border: `1px solid ${LINE}`, borderTop: `3px solid ${GOLD}` }}
            >
              <h3 className="text-lg font-bold mb-4" style={{ color: NAVY, fontFamily: "Georgia, serif" }}>
                Avantages des doubles diplômes
              </h3>
              <ul className="space-y-2 text-sm" style={{ color: INK_SOFT, fontFamily: FONT }}>
                {AVANTAGES.map((a) => (
                  <li key={a.strong} className="flex gap-2">
                    <span className="shrink-0" style={{ color: GOLD }} aria-hidden>
                      ✦
                    </span>
                    <span className="leading-relaxed">
                      <strong style={{ color: NAVY }}>{a.strong}</strong> {a.rest}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="p-6 bg-white"
              style={{ boxShadow: SHADOW, border: `1px solid ${LINE}`, borderTop: `3px solid ${GOLD}` }}
            >
              <h3 className="text-lg font-bold mb-4" style={{ color: NAVY, fontFamily: "Georgia, serif" }}>
                Sélection & inscription
              </h3>
              <ul className="space-y-2 text-sm" style={{ color: INK_SOFT, fontFamily: FONT }}>
                {SELECTION.map((s) => (
                  <li key={s} className="flex gap-2">
                    <span className="shrink-0" style={{ color: GOLD }} aria-hidden>
                      ✦
                    </span>
                    <span className="leading-relaxed">{s}</span>
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