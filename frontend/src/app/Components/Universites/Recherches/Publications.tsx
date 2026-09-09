import { BRAND } from "../../Utils/brand";

const NAVY = BRAND.navy;
const GOLD = BRAND.gold;

const CHIFFRES = [
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

export default function Publications() {
  return (
    <div className="bg-white min-h-screen">
      <section
        className="py-16 px-4 md:px-[50px]"
        style={{ background: `linear-gradient(180deg, ${BRAND.navyDeep} 0%, ${NAVY} 100%)` }}
      >
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.2em] text-xs mb-3" style={{ color: GOLD }}>
            Recherches
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: GOLD, fontFamily: "Georgia, serif" }}>
            Publications
          </h1>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
            Chaque année, l'Université de N'Djamena produit près de 400 publications
            référencées dans des revues internationales à comité de lecture, des
            ouvrages reconnus et des actes de conférences. Une recherche qui fait
            rayonner le Sahel.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-4 text-sm">
          {CHIFFRES.map((s) => (
            <div
              key={s.k}
              className="p-4 rounded-lg border text-center"
              style={{ background: "#f8fafc", borderTop: `3px solid ${GOLD}`, borderColor: "#e2e8f0" }}
            >
              <p className="text-xs uppercase tracking-wider text-[#646464] mb-1">{s.k}</p>
              <p className="text-xl font-bold" style={{ color: NAVY, fontFamily: "Georgia, serif" }}>{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-12 space-y-10">
        {TYPES.map((sect) => (
          <article key={sect.type} className="rounded-lg border overflow-hidden" style={{ borderColor: "#e2e8f0" }}>
            <div className="px-5 py-4 flex items-center justify-between" style={{ background: NAVY }}>
              <h2 className="font-bold text-white text-base md:text-lg" style={{ fontFamily: "Georgia, serif" }}>{sect.type}</h2>
              <span
                className="px-2.5 py-1 rounded text-xs font-semibold"
                style={{ background: "rgba(200,168,75,0.18)", color: GOLD }}
              >
                {sect.total} / 2023–2024
              </span>
            </div>
            <div className="bg-white divide-y divide-gray-100">
              {sect.top5.map((pub, i) => (
                <div key={pub.titre} className="grid md:grid-cols-[0.5fr_2.2fr_1.6fr_1.4fr_0.7fr] gap-3 px-5 py-4 text-sm items-start">
                  <div className="inline-flex items-center justify-start md:justify-start">
                    <span
                      className="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold"
                      style={{ background: "rgba(26,58,92,0.08)", color: NAVY }}
                    >
                      {i + 1}
                    </span>
                  </div>
                  <div className="font-semibold leading-relaxed" style={{ color: NAVY }}>
                    {pub.titre}
                  </div>
                  <div className="text-[#444] leading-relaxed">{pub.revue}</div>
                  <div className="text-[#555] leading-relaxed">{pub.auteurs}</div>
                  <div className="inline-flex items-center justify-start md:justify-end">
                    <span
                      className="px-2.5 py-1 rounded-full text-xs font-semibold"
                      style={{ background: "rgba(200,168,75,0.12)", color: "#806724" }}
                    >
                      {pub.annee}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section style={{ background: "#f6f6f6" }} className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="rounded-lg border p-6" style={{ background: "#fff", borderColor: "#e2e8f0" }}>
            <h3
              className="text-xl font-bold mb-3 pb-2 inline-block"
              style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
            >
              Revues UDN (éditions propres)
            </h3>
            <ul className="space-y-2.5 text-sm text-[#444]">
              {REVUES.map((r) => (
                <li key={r} className="flex gap-2">
                  <span style={{ color: GOLD }}>✦</span>
                  <span className="leading-relaxed">{r}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border p-6" style={{ background: "#fff", borderColor: "#e2e8f0" }}>
            <h3
              className="text-xl font-bold mb-3 pb-2 inline-block"
              style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
            >
              Accès aux publications
            </h3>
            <ul className="space-y-2.5 text-sm text-[#444]">
              <li>✦ <strong style={{color: NAVY}}>Dépôt légal & numérique</strong> — Archives ouvertes HAL/AFRIK-UDN</li>
              <li>✦ Dépôt institutionnel : publications.undt.edu.td</li>
              <li>✦ Accès AUF aux revues indexées (3 800 titres)</li>
              <li>✦ Statistiques scientifiques : OpenAlex, Google Scholar, Scopus</li>
              <li>✦ Copyright : <strong>Science Ouverte — CC BY / CC BY-SA</strong></li>
              <li>✦ Contact : service-publications@undt.edu.td</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
