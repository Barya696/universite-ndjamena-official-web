import { BRAND } from "../../Utils/brand";

const NAVY = BRAND.navy;
const NAVY_DEEP = BRAND.navyDeep;
const GOLD = BRAND.gold;
const PARCHMENT = "#FAF8F3";
const PARCHMENT_ALT = "#F3EEE1";
const LINE = "#DDD6C4";
const INK_SOFT = "#565553";
const INK_FAINT = "#8A8A8A";
const SHADOW = "0 4px 18px -8px rgba(20,30,55,0.18)";
// Matches the sans-serif used in the site footer / HistoireMission page.
const FONT = "'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif";

const CHIFFRES = [
  { k: "Axes scientifiques prioritaires", v: "7" },
  { k: "Écoles doctorales rattachées", v: "5" },
  { k: "Programmes de recherche-création", v: "12" },
  { k: "Projets en consortium international", v: "18" },
];

const AXES = [
  {
    code: "Axe 1",
    titre: "Gestion durable du Lac Tchad & ressources en eau sahéliennes",
    color: "#2e77b5",
    resume:
      "Recherche interdisciplinaire sur les eaux de surface et souterraines du bassin du Lac Tchad, des bassins du Chari, Logone et Bahr-el-Ghazal, avec modélisation climatique, gestion participative et politiques transfrontalières (Tchad, Cameroun, Nigeria, Niger, RCA, Soudan).",
    tags: ["Hydrologie", "Climatologie", "Hydrogéologie", "Gestion intégrée", "Transfrontalier"],
    pilote: "Pr. Malloum A. — LASES · UMR IRD",
    laboratoires: ["LASES", "LAGEPH", "LASEL", "LAGEST-PUBLIC"],
    realisations: [
      "Observatoire hydrologique OLT-20 — 18 stations",
      "Atlas interactif du Lac Tchad (2024)",
      "4 études transfrontalières / Comm. du Bassin",
    ],
  },
  {
    code: "Axe 2",
    titre: "Santé tropicale, épidémiologie & systèmes de santé communautaires",
    color: "#2f6c9c",
    resume:
      "Surveillance épidémiologique des grandes endémies sahéliennes (paludisme, méningite, choléra, fièvres hémorragiques, VIH), nutrition, phytothérapie sahélienne et renforcement des centres de santé de base et des agents communautaires.",
    tags: ["Paludisme", "Méningite", "Nutrition", "Pharmacopée", "Équité santé"],
    pilote: "Pr. Djerassem B. — LASER · UMR Inserm/IRD",
    laboratoires: ["LASER", "LANUT", "LAPHARMA", "LASES"],
    realisations: [
      "18 sites sentinelles paludisme (OBS-PAL-MEN)",
      "Étude mère-enfant — 3 200 inclusions (FMSS)",
      "17 plantes médicinales caractérisées phytochimiquement",
    ],
  },
  {
    code: "Axe 3",
    titre: "Langues, patrimoines, mémoires et cultures tchadiennes",
    color: "#2a6696",
    resume:
      "Documentation, description et valorisation des 120+ langues tchadiennes, patrimoines matériels & immatériels, musées, archives orales, traditions orales et écritures locales, en partenariat avec la Chaire UNESCO « Patrimoine Sahélien ».",
    tags: ["Sara", "Toubou", "Arabe-TC", "Massa", "Musées", "Archives orales"],
    pilote: "Pr. Maina Malloum — LAELIS",
    laboratoires: ["LAELIS", "LARAH", "LARAL", "Chaire UNESCO"],
    realisations: [
      "Dictionnaire Sara-Ngambay (2023) + audio (AUF)",
      "Corpus écrit & audio : 28 langues · 1,2 M de mots",
      "Musée virtuel du patrimoine tchadien (2024)",
    ],
  },
  {
    code: "Axe 4",
    titre: "Gouvernance, droit, paix et territoires",
    color: "#285e8f",
    resume:
      "Articulation entre État et coutumes, décentralisation, sécurité & résilience dans les régions sahéliennes, transitions démocratiques, droit de l'environnement, migrations et construction régionale CEMAC & CENSAD.",
    tags: ["Coutumes", "Décentralisation", "Paix", "Genre", "Migrations", "Gouvernance locale"],
    pilote: "Pr. Benoît G. — LADE · UMR Bordeaux",
    laboratoires: ["LADE", "LAGOM", "LASEG", "LAGEPH"],
    realisations: [
      "Observatoire du droit coutumier · 9 régions",
      "Rapport Décentralisation 2024 (MEDEL-Tchad)",
      "Guide juridique des femmes entrepreneures (ONU-Femmes)",
    ],
  },
  {
    code: "Axe 5",
    titre: "Énergies renouvelables & transition écologique sahélienne",
    color: "#275a8a",
    resume:
      "Prototypes et déploiement de solutions solaires photovoltaïques adaptées aux conditions sahéliennes, biomasse, éolien petit format, efficacité énergétique, réseaux de chaleur, et microgrids villageois. Piloté par l'ACE Impact E2D.",
    tags: ["Solaire PV", "Dust-soiling", "Stockage", "Microgrids", "Transition énergétique"],
    pilote: "Pr. Abakar S. — LAPHYMAT / ACE-E2D",
    laboratoires: ["LAPHYMAT", "LINFO", "LASES", "ACE-E2D"],
    realisations: [
      "Rapport 3 ans performance PV sous poussière sahélienne",
      "10 villages · MICRO-VILL-SOL · 900k USD (BM ACE)",
      "Platforme de tests solaire · 50 kW, campus Toukra",
    ],
  },
  {
    code: "Axe 6",
    titre: "Agriculture, pastoralisme & sécurité alimentaire sahélienne",
    color: "#255686",
    resume:
      "Amélioration variétale mil-sorgho-maïs, agroécologie, aridité & sols ferrugineux, arboriculture, élevage & transhumance, pêche continentale, filières Gomme Arabique, sésame, arachide et sécurité alimentaire des ménages.",
    tags: ["Mil", "Sorgho", "Agroforesterie", "Gomme arabique", "Zoo", "Sécurité alimentaire"],
    pilote: "Pr. Ngallaba — LABO-AGR & LASEL (CIRAD)",
    laboratoires: ["LABO-AGR", "LASEL", "LACIMA", "LA-ZOOTEC"],
    realisations: [
      "6 variétés de mil précoce & tolérante sécheresse",
      "Caractérisation gomme arabique Acacia senegal/seyal (AUF)",
      "3 coopératives pilotes agro-pastorales · Batha, Hadjer-Lamis",
    ],
  },
  {
    code: "Axe 7",
    titre: "Numérique, données, IA & gouvernance électronique pour le Sahel",
    color: "#235182",
    resume:
      "Technologies pour les langues peu dotées (TALN-LLM), données publiques ouvertes, SIG, télédétection, cybersécurité, fintech agricole & mobile-money, plateformes e-learning (DIGILMD), e-gouvernance & transformation administrative.",
    tags: ["TALN", "LLM multilingue", "SIG", "E-Gov", "E-learning", "EdTech"],
    pilote: "Pr. Tidjani M. — LINFO",
    laboratoires: ["LINFO", "LAGEPH", "LSEG"],
    realisations: [
      "Benchmark LLM — 6 langues tchadiennes (ACL 2024)",
      "CRN DIGILMD · 2 200 cours en ligne Moodle (ERASMUS+)",
      "Observatoire SIG·D — 380 couches cartographiques",
    ],
  },
];

const DEMARCHES = [
  {
    titre: "Structuration par axe-pilote",
    icone: "🧭",
    detail: [
      "Chaque axe est porté par un coordonnateur scientifique (pr. HDR) et une équipe de 15–40 chercheurs permanents.",
      "Comité de pilotage : direction UDN + délégués de facultés & partenaires institutionnels.",
      "Évaluation annuelle externe + renouvellement quadriennal des axes.",
    ],
  },
  {
    titre: "Appel à projets annuel interne",
    icone: "📥",
    detail: [
      "Fonds propre UDN : 800 M FCFA / an alloués aux meilleurs projets, toutes disciplines.",
      "Évaluation par pairs : 22 experts nationaux et 14 internationaux membres du Conseil Scientifique.",
      "Taux de succès moyen : 28 % (2023 & 2024).",
    ],
  },
  {
    titre: "Valorisation & transfert",
    icone: "🚀",
    detail: [
      "Bureau de valorisation — 4 incubations : énergie solaire, TALN, santé, agro-transform.",
      "Conventions avec entreprises & ONG : TotalEnergies, UNHCR, AFD, ACF, MSF Belgique.",
      "Développement durable : 11 projets thématiques ODD priorisés 2, 3, 4, 6, 7, 13, 16, 17.",
    ],
  },
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

export default function AxesRecherche() {
  return (
    <div style={{ background: PARCHMENT }} className="min-h-screen">
      {/* EN-TÊTE */}
      <section
        className="py-16 px-4 md:px-[50px]"
        style={{ background: `linear-gradient(180deg, ${NAVY_DEEP} 0%, ${NAVY} 100%)` }}
      >
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.2em] text-xs mb-3" style={{ color: GOLD, fontFamily: FONT }}>
            Recherches
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: GOLD, fontFamily: "Georgia, serif" }}>
            Axes de recherche
          </h1>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed" style={{ fontFamily: FONT }}>
            Sept axes scientifiques pluridisciplinaires, alignés sur les ODD et
            les priorités nationales & sahéliennes, structurent la recherche
            de l'UDN. Ils regroupent 380 chercheurs, 20 laboratoires et
            des partenariats internationaux renforcés.
          </p>
        </div>
      </section>

      {/* CHIFFRES CLÉS */}
      <section className="max-w-6xl mx-auto px-4 pt-14 pb-4">
        <SectionHeading roman="I." title="Chiffres clés" />
        <div className="grid md:grid-cols-4 gap-6 pt-2">
          {CHIFFRES.map((s) => (
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

      {/* SEPT AXES PRIORITAIRES */}
      <section className="py-14 mt-6" style={{ background: PARCHMENT_ALT }}>
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading roman="II." title="Sept axes prioritaires" />
          <div className="space-y-8 pt-2">
            {AXES.map((a) => (
              <article
                key={a.code}
                className="bg-white overflow-hidden"
                style={{ boxShadow: SHADOW, border: `1px solid ${LINE}` }}
              >
                <div
                  className="px-6 py-5"
                  style={{
                    background: `linear-gradient(135deg, ${a.color} 0%, ${NAVY_DEEP} 100%)`,
                    borderBottom: `2px solid ${GOLD}`,
                  }}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className="px-2.5 py-1 text-xs font-bold tracking-widest"
                      style={{ background: "rgba(255,255,255,0.14)", color: GOLD, fontFamily: "Georgia, serif", borderRadius: 4 }}
                    >
                      {a.code}
                    </span>
                    <h3 className="font-bold text-lg" style={{ color: "#fff", fontFamily: FONT }}>
                      {a.titre}
                    </h3>
                  </div>
                </div>
                <div className="p-6 space-y-5">
                  <p className="leading-relaxed text-[15px]" style={{ color: INK_SOFT, fontFamily: FONT }}>
                    {a.resume}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {a.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-semibold px-2 py-1"
                        style={{
                          color: NAVY,
                          background: "rgba(200,168,75,0.10)",
                          border: `1px solid ${LINE}`,
                          fontFamily: FONT,
                          borderRadius: 4,
                        }}
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                  <div className="grid md:grid-cols-[1.1fr_1.1fr_1.8fr] gap-5 text-sm">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: INK_FAINT, fontFamily: FONT }}>
                        Pilotage
                      </p>
                      <p className="leading-relaxed" style={{ color: INK_SOFT, fontFamily: FONT }}>
                        {a.pilote}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: INK_FAINT, fontFamily: FONT }}>
                        Laboratoires rattachés
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {a.laboratoires.map((lab) => (
                          <span
                            key={lab}
                            className="px-2 py-1 text-xs font-bold"
                            style={{ background: NAVY, color: GOLD, fontFamily: "Georgia, serif", borderRadius: 4 }}
                          >
                            {lab}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: INK_FAINT, fontFamily: FONT }}>
                        Réalisations clés
                      </p>
                      <ul className="space-y-1.5" style={{ color: INK_SOFT, fontFamily: FONT }}>
                        {a.realisations.map((r) => (
                          <li key={r} className="flex gap-2">
                            <span className="shrink-0" style={{ color: GOLD }} aria-hidden>
                              ✦
                            </span>
                            <span className="leading-relaxed">{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ORGANISATION DE LA RECHERCHE */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <SectionHeading roman="III." title="Organisation de la recherche" />
        <div className="grid md:grid-cols-3 gap-6 pt-2">
          {DEMARCHES.map((d) => (
            <article
              key={d.titre}
              className="bg-white overflow-hidden"
              style={{ boxShadow: SHADOW, border: `1px solid ${LINE}` }}
            >
              <div
                className="px-5 py-4 flex items-center gap-3"
                style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_DEEP} 100%)`, borderBottom: `2px solid ${GOLD}` }}
              >
                <span className="text-2xl" aria-hidden>
                  {d.icone}
                </span>
                <h3 className="font-bold text-base" style={{ color: GOLD, fontFamily: FONT }}>
                  {d.titre}
                </h3>
              </div>
              <div className="p-5">
                <ul className="space-y-2 text-sm" style={{ color: INK_SOFT, fontFamily: FONT }}>
                  {d.detail.map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="shrink-0" style={{ color: GOLD }} aria-hidden>
                        ✦
                      </span>
                      <span className="leading-relaxed">{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}