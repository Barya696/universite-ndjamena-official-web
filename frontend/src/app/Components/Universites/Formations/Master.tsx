import { BRAND } from "../../Utils/brand";

const NAVY = BRAND.navy;
const GOLD = BRAND.gold;

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

export default function Master() {
  return (
    <div className="bg-white min-h-screen">
      <section
        className="py-16 px-4 md:px-[50px]"
        style={{
          background: `linear-gradient(180deg, ${BRAND.navyDeep} 0%, ${NAVY} 100%)`,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.2em] text-xs mb-3" style={{ color: GOLD }}>
            Formations
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ color: GOLD, fontFamily: "Georgia, serif" }}
          >
            Master (Bac+5)
          </h1>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
            Deuxième cycle du système LMD : 2 années d'approfondissement
            (4 semestres, 120 ECTS) orientées recherche ou professionnel, avec
            mémoire de fin d'études.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-4 text-sm">
          {[
            { k: "Nombre de mentions", v: "35" },
            { k: "Durée standard", v: "2 ans (M1 → M2)" },
            { k: "Semestres / ECTS", v: "4 sem. · 120 ECTS" },
            { k: "Types de Master", v: "Recherche / Professionnel" },
          ].map((s) => (
            <div
              key={s.k}
              className="p-4 rounded-lg border text-center"
              style={{ background: "#f8fafc", borderTop: `3px solid ${GOLD}`, borderColor: "#e2e8f0" }}
            >
              <p className="text-xs uppercase tracking-wider text-[#646464] mb-1">{s.k}</p>
              <p className="text-xl font-bold" style={{ color: NAVY, fontFamily: "Georgia, serif" }}>
                {s.v}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-12 space-y-8">
        {MASTERS.map((dom) => (
          <article
            key={dom.domaine}
            className="rounded-lg border overflow-hidden"
            style={{ borderColor: "#e2e8f0" }}
          >
            <div className="px-5 py-4 flex items-center gap-3" style={{ background: NAVY }}>
              <span
                className="inline-flex items-center justify-center w-10 h-10 rounded-full text-xl"
                style={{ background: "rgba(200,168,75,0.14)" }}
              >
                {dom.icon}
              </span>
              <h2 className="font-bold text-white text-lg" style={{ fontFamily: "Georgia, serif" }}>
                {dom.domaine}
              </h2>
            </div>
            <div className="bg-white divide-y divide-gray-100">
              {dom.mentions.map((m) => (
                <div
                  key={m.nom}
                  className="grid md:grid-cols-[1.3fr_0.9fr_0.8fr_0.7fr] gap-3 px-5 py-3.5 text-sm items-center"
                >
                  <div className="font-semibold" style={{ color: NAVY }}>
                    {m.nom}
                  </div>
                  <div className="text-[#444]">{m.faculte}</div>
                  <div className="text-[#444]">
                    <span
                      className="inline-block px-2 py-0.5 rounded text-xs mr-1"
                      style={{
                        background:
                          m.type === "Recherche"
                            ? "rgba(26,58,92,0.10)"
                            : "rgba(200,168,75,0.14)",
                        color: m.type === "Recherche" ? NAVY : "#806724",
                      }}
                    >
                      {m.type}
                    </span>
                  </div>
                  <div className="inline-flex justify-start md:justify-end">
                    <span
                      className="px-2.5 py-1 rounded-full text-xs font-semibold"
                      style={{ background: "rgba(200,168,75,0.12)", color: "#806724" }}
                    >
                      {m.duree}
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
          <div
            className="rounded-lg border p-6"
            style={{ background: "#fff", borderColor: "#e2e8f0" }}
          >
            <h3
              className="text-xl font-bold mb-3 pb-2 inline-block"
              style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
            >
              Conditions d'accès en Master
            </h3>
            <ul className="space-y-2 text-sm text-[#444]">
              <li>✦ M1 : être titulaire d'une Licence (Bac+3) dans un domaine compatible</li>
              <li>✦ Examen dossier + éventuellement entretien pour certaines mentions</li>
              <li>✦ M2 : M1 validé dans la même mention ou mention proche (passage de droit si moyenne ≥ 12/20)</li>
              <li>✦ Étudiants internationaux : calendrier spécifique via le Bureau de la Coopération</li>
            </ul>
          </div>
          <div
            className="rounded-lg border p-6"
            style={{ background: "#fff", borderColor: "#e2e8f0" }}
          >
            <h3
              className="text-xl font-bold mb-3 pb-2 inline-block"
              style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
            >
              Après le Master ?
            </h3>
            <ul className="space-y-2 text-sm text-[#444]">
              <li>✦ <strong style={{color: NAVY}}>Master Recherche</strong> → préparation au Doctorat (3e cycle)</li>
              <li>✦ <strong style={{color: NAVY}}>Master Professionnel</strong> → insertion directe dans le monde du travail</li>
              <li>✦ Stages longs obligatoires (4 à 6 mois) en entreprise ou administration</li>
              <li>✦ Rédaction d'un mémoire de recherche ou professionnel soutenu devant un jury mixte</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
