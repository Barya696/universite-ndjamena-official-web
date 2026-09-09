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
  { k: "Laboratoires accrédités", v: "20" },
  { k: "Unités mixtes internationales", v: "3" },
  { k: "Centres d'excellence", v: "4" },
  { k: "Chercheurs permanents", v: "380" },
];

const LABOS = [
  {
    faculte: "Faculté des Lettres, Langues & Sciences Humaines (FLSH)",
    color: "#1f4e82",
    list: [
      { acronyme: "LARAH", nom: "Laboratoire de Recherche en Histoire et Archéologie", type: "Unité de recherche", directeurs: "Pr. Brahim D. — 22 chercheurs", thematiques: "Archéologie du Lac Tchad, préhistoire, histoire coloniale & post-coloniale, mémoire orale" },
      { acronyme: "LARAL", nom: "Laboratoire de Recherche en Arts et Littérature", type: "Unité de recherche", directeurs: "Pr. Ardo K. — 15 chercheurs", thematiques: "Littératures orales tchadiennes, arts plastiques sahéliens, cinéma africain" },
      { acronyme: "LAELIS", nom: "Laboratoire d'Études Linguistiques et Sociolinguistiques", type: "UMR", directeurs: "Pr. Maina Malloum — 28 chercheurs", thematiques: "Arabe tchadien, Sara, Toubou, Moundang, Massa, français / langues nationales en contact" },
      { acronyme: "LASEG", nom: "Laboratoire de Sociologie, Éducation & Genre", type: "Unité de recherche", directeurs: "Dr. Zara H. — 18 chercheurs", thematiques: "Éducation de base, genre, migrations, dynamiques urbaines à N'Djamena" },
      { acronyme: "LAGEPH", nom: "Laboratoire de Géographie Physique & Humaine", type: "Unité de recherche", directeurs: "Pr. Ngarbaye — 20 chercheurs", thematiques: "Aménagement du territoire, environnement urbain, cartographie SIG, désertification" },
    ],
  },
  {
    faculte: "Faculté des Sciences Exactes et Appliquées (FSEA)",
    color: "#2f6a9e",
    list: [
      { acronyme: "LASES", nom: "Laboratoire des Sciences de l'Environnement", type: "Unité mixte IRD/UDN", directeurs: "Pr. Malloum A. — 32 chercheurs", thematiques: "Hydrologie du bassin du Lac Tchad, changements climatiques, écosystèmes sahéliens" },
      { acronyme: "LAPHYMAT", nom: "Laboratoire de Physique & Mathématiques Appliquées", type: "Unité de recherche", directeurs: "Pr. Abakar S. — 24 chercheurs", thematiques: "Énergie solaire photovoltaïque, modélisation, métrologie, électronique de puissance" },
      { acronyme: "LACIMA", nom: "Laboratoire de Chimie des Ressources Naturelles", type: "Unité de recherche", directeurs: "Pr. Fatime M. — 18 chercheurs", thematiques: "Plantes médicinales sahéliennes, gomme arabique, traitement des eaux" },
      { acronyme: "LINFO", nom: "Laboratoire d'Informatique — UDN", type: "Unité de recherche", directeurs: "Dr. Tidjani M. — 14 chercheurs", thematiques: "TIC pour le développement, e-gouvernance, IA, fouille de données, systèmes embarqués" },
      { acronyme: "LASEL", nom: "Laboratoire de Sciences Écologiques & Pastorales", type: "Unité mixte CIRAD", directeurs: "Pr. Djimet K. — 20 chercheurs", thematiques: "Agro-écologie, pastoralisme, gestion des ressources naturelles, sécurité alimentaire" },
    ],
  },
  {
    faculte: "Faculté de Droit et Sciences Politiques (FDSP)",
    color: "#295c8f",
    list: [
      { acronyme: "LADE", nom: "Laboratoire de Droit et d'Études Politiques", type: "UMR Bordeaux", directeurs: "Pr. Benoît G. — 26 chercheurs", thematiques: "Droit coutumier, droit de l'environnement, gouvernance locale, intégration régionale CEMAC" },
      { acronyme: "LAGOM", nom: "Laboratoire de Gouvernance & Management Public", type: "Unité de recherche", directeurs: "Pr. Mahamat Ahmat — 16 chercheurs", thematiques: "Décentralisation, réforme de l'État, lutte anti-corruption, finances publiques" },
    ],
  },
  {
    faculte: "Faculté des Sciences Économiques et de Gestion (FSEG)",
    color: "#285a8c",
    list: [
      { acronyme: "LADEC", nom: "Laboratoire d'Analyse et de Développement Économique", type: "Unité de recherche", directeurs: "Pr. Ousmane Y. — 22 chercheurs", thematiques: "Macroéconomie sahélienne, pauvreté, inclusion financière, coopératives" },
      { acronyme: "LAGEST", nom: "Laboratoire de Gestion Stratégique des Entreprises", type: "Unité de recherche", directeurs: "Dr. Ahmat D. — 13 chercheurs", thematiques: "PME du secteur informel, entrepreneuriat, marketing bancaire, logistique sahélienne" },
    ],
  },
  {
    faculte: "Faculté de Médecine & Sciences de la Santé (FMSS)",
    color: "#23527f",
    list: [
      { acronyme: "LASER", nom: "Laboratoire de Santé et Recherche Épidémiologique", type: "UMR Inserm/IRD", directeurs: "Pr. Djerassem B. — 38 chercheurs", thematiques: "Paludisme, choléra, méningite, systèmes de santé communautaire, VIH" },
      { acronyme: "LANUT", nom: "Laboratoire de Nutrition & Alimentation", type: "Unité de recherche", directeurs: "Dr. Fatime Z. — 14 chercheurs", thematiques: "Malnutrition infantile, sécurité alimentaire, micronutriments, allaitement" },
      { acronyme: "LAPHARMA", nom: "Laboratoire de Pharmacologie et de Pharmacopée Traditionnelle", type: "Unité mixte", directeurs: "Pr. Hassane M. — 16 chercheurs", thematiques: "Plantes antipaludéennes, pharmacovigilance, médecine traditionnelle sahélienne" },
    ],
  },
  {
    faculte: "Faculté des Sciences Agronomiques (FSA)",
    color: "#2d6396",
    list: [
      { acronyme: "LABO-AGR", nom: "Laboratoire d'Agronomie Sahélienne", type: "Unité mixte IITA", directeurs: "Pr. Ngallaba — 19 chercheurs", thematiques: "Semences améliorées mil-sorgho, sols ferrugineux, agroforesterie, aridité" },
      { acronyme: "LA-ZOOTEC", nom: "Laboratoire de Zootechnie & Élevage", type: "Unité de recherche", directeurs: "Dr. Koulbé N. — 12 chercheurs", thematiques: "Amélioration génétique bovine, aviculture villageoise, transhumance" },
    ],
  },
];

const CENTRES = [
  { acronyme: "CE-ESR", nom: "Centre d'Études Sahéliennes et Régionales", icone: "🌍", desc: "Observatoire du Sahel : migrations, climat, sécurité, économie régionale (CEMAC + lac Tchad)." },
  { acronyme: "UCE-TD", nom: "Chaire UNESCO « Patrimoine Sahélien & Cultures Africaines »", icone: "🏛️", desc: "Appui à la préservation, l'archive, les musées et la valorisation du patrimoine tchadien." },
  { acronyme: "ACE-E2D", nom: "ACE Impact — Centre d'Excellence « Énergie & Environnement sahéliens »", icone: "☀️", desc: "4.2 MUSD BM : masters ciblés, école doctorale, plateforme solaire et laboratoires équipés." },
  { acronyme: "DIGILMD", nom: "Centre de Ressources Numériques (CRN DIGILMD/ERASMUS+)", icone: "💻", desc: "Plateforme Moodle UDN, 2 200 enseignements en ligne, studio d'enregistrement vidéo, 5 salles de TP numériques." },
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

export default function LaboratoiresCentres() {
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
            Laboratoires & centres
          </h1>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed" style={{ fontFamily: FONT }}>
            20 laboratoires de recherche structurés par faculté, 4 centres d'excellence,
            et 3 unités mixtes internationales (UMR) partenaires de l'IRD, du Cirad
            et d'université européennes. Une production scientifique reconnue dans
            les domaines sahéliens.
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

      {/* LABORATOIRES PAR FACULTÉ */}
      <section className="py-14 mt-6" style={{ background: PARCHMENT_ALT }}>
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading roman="II." title="Laboratoires par faculté" />
          <div className="space-y-6 pt-2">
            {LABOS.map((bloc) => (
              <article
                key={bloc.faculte}
                className="bg-white overflow-hidden"
                style={{ boxShadow: SHADOW, border: `1px solid ${LINE}` }}
              >
                <div
                  className="px-5 py-4"
                  style={{
                    background: `linear-gradient(135deg, ${bloc.color} 0%, ${NAVY_DEEP} 100%)`,
                    borderBottom: `2px solid ${GOLD}`,
                  }}
                >
                  <h3 className="font-bold text-lg" style={{ color: "#fff", fontFamily: FONT }}>
                    {bloc.faculte}
                  </h3>
                </div>
                <div>
                  {bloc.list.map((l, i) => (
                    <div
                      key={l.acronyme}
                      className="grid md:grid-cols-[0.7fr_1.7fr_0.9fr_1.2fr_1.5fr] gap-3 px-5 py-4 text-sm items-start"
                      style={{ borderTop: i === 0 ? "none" : `1px solid ${LINE}` }}
                    >
                      <div className="inline-flex items-center justify-start">
                        <span
                          className="inline-block px-2.5 py-1 text-sm font-bold"
                          style={{ background: NAVY, color: GOLD, fontFamily: "Georgia, serif", borderRadius: 4 }}
                        >
                          {l.acronyme}
                        </span>
                      </div>
                      <div className="font-semibold" style={{ color: NAVY, fontFamily: FONT }}>
                        {l.nom}
                      </div>
                      <div style={{ color: INK_SOFT, fontFamily: FONT }}>{l.type}</div>
                      <div style={{ color: INK_SOFT, fontFamily: FONT }}>{l.directeurs}</div>
                      <div className="leading-relaxed" style={{ color: INK_SOFT, fontFamily: FONT }}>
                        {l.thematiques}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CENTRES D'EXCELLENCE */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <SectionHeading roman="III." title="Centres d'excellence & plateformes transversales" />
        <div className="grid md:grid-cols-2 gap-6 pt-2">
          {CENTRES.map((c) => (
            <article
              key={c.acronyme}
              className="bg-white overflow-hidden"
              style={{ boxShadow: SHADOW, border: `1px solid ${LINE}` }}
            >
              <div
                className="px-6 py-5 flex items-start gap-4"
                style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_DEEP} 100%)`, borderBottom: `2px solid ${GOLD}` }}
              >
                <span
                  className="inline-flex items-center justify-center w-12 h-12 shrink-0 text-2xl"
                  style={{ background: "rgba(255,255,255,0.10)", border: `1px solid ${GOLD}`, borderRadius: 4 }}
                >
                  {c.icone}
                </span>
                <div>
                  <h3 className="font-bold text-base leading-snug" style={{ color: "#fff", fontFamily: FONT }}>
                    {c.nom}
                  </h3>
                  <span className="inline-block mt-1 text-[11px] tracking-widest uppercase" style={{ color: GOLD, fontFamily: FONT }}>
                    {c.acronyme}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm leading-relaxed" style={{ color: INK_SOFT, fontFamily: FONT }}>
                  {c.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}