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
  { k: "Publications référencées / an", v: "427" },
  { k: "H-index cumulé chercheurs", v: "1 240" },
  { k: "Revues partenaires (indexées)", v: "18" },
  { k: "Thèses soutenues / an", v: "85" },
];

const TYPES = [
  {
    type: "Articles scientifiques (revues indexées)",
    total: "189",
    top5: [
      { titre: "Climate variability impacts on Lake Chad hydrology (1960–2023)", revue: "Journal of Hydrology — Scopus/Q1", auteurs: "Malloum A. et al. | LASES-IRD", annee: "2024" },
      { titre: "Plasmodium falciparum resistance in the Sahel : sentinel sites, 2021–2023", revue: "The Lancet Infectious Diseases", auteurs: "Djerassem B. et al. | LASER", annee: "2024" },
      { titre: "Lexique syntaxique de l'Arabe Tchadien (N'Djamena)", revue: "Linguistique Africaine · AUF", auteurs: "Maina M. et al. | LAELIS", annee: "2023" },
      { titre: "Photovoltaic performance under Saharan dust : a 3-year study in N'Djamena", revue: "Solar Energy — Elsevier", auteurs: "Abakar S. et al. | LAPHYMAT", annee: "2024" },
      { titre: "Rural women's cooperatives : livelihood resilience in southern Chad", revue: "World Development — Q1", auteurs: "Ousmane Y. et al. | LADEC", annee: "2023" },
    ],
  },
  {
    type: "Ouvrages & chapitres d'ouvrage",
    total: "48",
    top5: [
      { titre: "Le Lac Tchad : environnement, populations et enjeux régionaux", revue: "Karthala — Collection Afrique des Grands Lacs", auteurs: "Malloum A., Ngallaba (dir.)", annee: "2024" },
      { titre: "Anthropologie du droit coutumier au Tchad", revue: "Presse Universitaire de Bordeaux", auteurs: "Benoît G. (dir.) | LADE", annee: "2024" },
      { titre: "Dictionnaire Sara-français : dialecte Ngambay (avec audio)", revue: "AUF · Éditions UDN", auteurs: "Maina M., LAELIS (collectif)", annee: "2023" },
      { titre: "Santé communautaire dans le Sahel — leçons de terrain", revue: "IRD Éditions · Paris", auteurs: "Djerassem B. et Fatime Z. (dir.)", annee: "2023" },
      { titre: "Énergie solaire pour tous : kit adaptatif sahélien", revue: "AFD / Éditions AUF", auteurs: "Abakar S. & équipe ACE-E2D", annee: "2024" },
    ],
  },
  {
    type: "Comptes rendus de conférences internationales",
    total: "122",
    top5: [
      { titre: "NLP models for low-resource Chadian languages : a benchmark", revue: "ACL AfricaNLP Workshop", auteurs: "Tidjani M. et al. | LINFO", annee: "2024" },
      { titre: "Pastoral transhumance corridors : a GIS study of the Batha region", revue: "Conférence Internationale Pastoralisme, Niamey", auteurs: "Djimet K. et al. | LASEL", annee: "2024" },
      { titre: "Méningite Sérotype X : surveillance 2022-2023 (N'Djamena-Moussoro)", revue: "Institut Pasteur — Symposium Prévention Afrique", auteurs: "LASER - FMSS", annee: "2023" },
      { titre: "Digitalisation de l'administration tchadienne : étude longitudinale", revue: "EGOV 2024 — IFIP Vienna", auteurs: "Tidjani M. | LINFO", annee: "2024" },
      { titre: "Répartition spatiale des mosquées (Aedes / Anophèles) en ville", revue: "SOGEM — Société Géographique France", auteurs: "Ngallaba | LAGEPH + LASER", annee: "2023" },
    ],
  },
  {
    type: "Thèses de doctorat soutenues",
    total: "85",
    top5: [
      { titre: "Gouvernance foncière et coutumes : le département du Sila", revue: "École doctorale Droit & Gouvernance", auteurs: "Abakar Mahamat — dir. Pr. B. G.", annee: "2024" },
      { titre: "Propriétés antidiabétiques de Detarium microcarpum (Legum.)", revue: "École doctorale Santé & Biomed", auteurs: "Fatime Z. — dir. Pr. Hassane M.", annee: "2024" },
      { titre: "Valorisation phonologique et lexicale du Massa occidental", revue: "École doctorale Lettres & SHS", auteurs: "Danaï H. — dir. Pr. M. Malloum", annee: "2023" },
      { titre: "Micro-grid solaire 100 kW pour village isolé sahélien : prototype", revue: "ED Sci & Technologie — ACE-E2D", auteurs: "Hassane M. — dir. Pr. S. Abakar", annee: "2024" },
      { titre: "Crises pastorales et insécurité alimentaire — région du Kanem", revue: "École doctorale Sci & Technologie", auteurs: "Koulbé N. — dir. Pr. Ngallaba", annee: "2023" },
    ],
  },
];

const REVUES = [
  "Revue Tchadienne des Sciences (indexée Scimago / AUF)",
  "Études Sahéliennes · UDN (sciences humaines & environnement)",
  "Tchad Santé (BMGF & OMS partenaires)",
  "Linguistique et Langues Africaines · collaboration INALCO",
  "Journal de Droit Ouest-Africain · UDN, Yaoundé, Dakar",
  "FSEA Research Letters (Math & Phys · ERI)",
  "Annales de médecine de N'Djamena · FMSS",
];

const ACCES = [
  { strong: "Dépôt légal & numérique", rest: "— Archives ouvertes HAL/AFRIK-UDN" },
  { strong: "", rest: "Dépôt institutionnel : publications.undt.edu.td" },
  { strong: "", rest: "Accès AUF aux revues indexées (3 800 titres)" },
  { strong: "", rest: "Statistiques scientifiques : OpenAlex, Google Scholar, Scopus" },
  { strong: "Copyright", rest: ": Science Ouverte — CC BY / CC BY-SA" },
  { strong: "", rest: "Contact : service-publications@undt.edu.td" },
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

export default function Publications() {
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
            Publications
          </h1>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed" style={{ fontFamily: FONT }}>
            Chaque année, l'Université de N'Djamena produit près de 400 publications
            référencées dans des revues internationales à comité de lecture, des
            ouvrages reconnus et des actes de conférences. Une recherche qui fait
            rayonner le Sahel.
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

      {/* PUBLICATIONS PAR TYPE */}
      <section className="py-14 mt-6" style={{ background: PARCHMENT_ALT }}>
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading roman="II." title="Publications par type" />
          <div className="space-y-8 pt-2">
            {TYPES.map((sect) => (
              <article
                key={sect.type}
                className="bg-white overflow-hidden"
                style={{ boxShadow: SHADOW, border: `1px solid ${LINE}` }}
              >
                <div
                  className="px-5 py-4 flex items-center justify-between gap-3 flex-wrap"
                  style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_DEEP} 100%)`, borderBottom: `2px solid ${GOLD}` }}
                >
                  <h3 className="font-bold text-base md:text-lg" style={{ color: "#fff", fontFamily: FONT }}>
                    {sect.type}
                  </h3>
                  <span
                    className="px-2.5 py-1 text-xs font-semibold"
                    style={{ background: "rgba(255,255,255,0.14)", color: GOLD, fontFamily: FONT, borderRadius: 999 }}
                  >
                    {sect.total} / 2023–2024
                  </span>
                </div>
                <div>
                  {sect.top5.map((pub, i) => (
                    <div
                      key={pub.titre}
                      className="grid md:grid-cols-[0.5fr_2.2fr_1.6fr_1.4fr_0.7fr] gap-3 px-5 py-4 text-sm items-start"
                      style={{ borderTop: i === 0 ? "none" : `1px solid ${LINE}` }}
                    >
                      <div className="inline-flex items-center justify-start">
                        <span
                          className="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold"
                          style={{ background: "rgba(26,58,92,0.08)", color: NAVY, fontFamily: FONT }}
                        >
                          {i + 1}
                        </span>
                      </div>
                      <div className="font-semibold leading-relaxed" style={{ color: NAVY, fontFamily: FONT }}>
                        {pub.titre}
                      </div>
                      <div className="leading-relaxed" style={{ color: INK_SOFT, fontFamily: FONT }}>
                        {pub.revue}
                      </div>
                      <div className="leading-relaxed" style={{ color: INK_SOFT, fontFamily: FONT }}>
                        {pub.auteurs}
                      </div>
                      <div className="inline-flex items-center justify-start md:justify-end">
                        <span
                          className="px-2.5 py-1 text-xs font-semibold"
                          style={{ background: "rgba(200,168,75,0.14)", color: "#806724", fontFamily: FONT, borderRadius: 999 }}
                        >
                          {pub.annee}
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

      {/* REVUES & ACCÈS */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <SectionHeading roman="III." title="Revues & accès aux publications" />
        <div className="grid md:grid-cols-2 gap-6 pt-2">
          <div
            className="p-6 bg-white"
            style={{ boxShadow: SHADOW, border: `1px solid ${LINE}`, borderTop: `3px solid ${GOLD}` }}
          >
            <h3 className="text-lg font-bold mb-4" style={{ color: NAVY, fontFamily: "Georgia, serif" }}>
              Revues UDN (éditions propres)
            </h3>
            <ul className="space-y-2.5 text-sm" style={{ color: INK_SOFT, fontFamily: FONT }}>
              {REVUES.map((r) => (
                <li key={r} className="flex gap-2">
                  <span className="shrink-0" style={{ color: GOLD }} aria-hidden>
                    ✦
                  </span>
                  <span className="leading-relaxed">{r}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="p-6 bg-white"
            style={{ boxShadow: SHADOW, border: `1px solid ${LINE}`, borderTop: `3px solid ${GOLD}` }}
          >
            <h3 className="text-lg font-bold mb-4" style={{ color: NAVY, fontFamily: "Georgia, serif" }}>
              Accès aux publications
            </h3>
            <ul className="space-y-2.5 text-sm" style={{ color: INK_SOFT, fontFamily: FONT }}>
              {ACCES.map((a) => (
                <li key={a.rest} className="flex gap-2">
                  <span className="shrink-0" style={{ color: GOLD }} aria-hidden>
                    ✦
                  </span>
                  <span className="leading-relaxed">
                    {a.strong && <strong style={{ color: NAVY }}>{a.strong}</strong>} {a.rest}
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