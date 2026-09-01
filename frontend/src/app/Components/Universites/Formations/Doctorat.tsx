import { BRAND } from "../../Utils/brand";

const NAVY = BRAND.navy;
const GOLD = BRAND.gold;

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

export default function Doctorat() {
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
            Doctorat (Bac+8)
          </h1>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
            Troisième cycle du système LMD : 3 années de recherche sous la direction
            d'un directeur de thèse, avec inscription en école doctorale et soutenance
            publique devant un jury international.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-4 text-sm">
          {[
            { k: "Écoles doctorales", v: "5" },
            { k: "Durée standard", v: "3 ans (D1 → D3)" },
            { k: "Directeurs de thèse", v: "180+" },
            { k: "Thèses soutenues", v: "1 200+" },
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
        {DOCTORATS.map((dom) => (
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
                  className="grid md:grid-cols-[1.4fr_1.1fr_0.6fr] gap-3 px-5 py-3.5 text-sm items-center"
                >
                  <div className="font-semibold" style={{ color: NAVY }}>
                    {m.nom}
                  </div>
                  <div className="text-[#444]">{m.ecole}</div>
                  <div className="inline-flex items-center justify-start md:justify-end">
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
              Conditions d'inscription en thèse
            </h3>
            <ul className="space-y-2 text-sm text-[#444]">
              <li>✦ Être titulaire d'un Master Recherche ou équivalent (Bac+5)</li>
              <li>✦ Dossier de candidature : projet de recherche 5–10 pages, CV, lettres de recommandation</li>
              <li>✦ Entretien avec le comité scientifique de l'école doctorale</li>
              <li>✦ Accord préalable d'un directeur de thèse (HDR ou équivalent)</li>
              <li>✦ Inscription administrative annuelle + validation des crédits de formation doctorale</li>
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
              Parcours du doctorant
            </h3>
            <ul className="space-y-2 text-sm text-[#444]">
              <li>✦ <strong style={{color: NAVY}}>D1</strong> — Formation doctorale (60 ECTS) + séminaire de méthode</li>
              <li>✦ <strong style={{color: NAVY}}>D2</strong> — Travaux de terrain, collecte de données, premiers articles</li>
              <li>✦ <strong style={{color: NAVY}}>D3</strong> — Rédaction de la thèse, publications, préparation à la soutenance</li>
              <li>✦ Suivi annuel par un comité de suivi pédagogique</li>
              <li>✦ Soutenance publique devant jury mixte (2 examinateurs extérieurs + 3 membres internes)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
