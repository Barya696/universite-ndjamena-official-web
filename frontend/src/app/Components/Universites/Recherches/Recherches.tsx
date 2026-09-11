import { BRAND } from "../../Utils/brand";

const NAVY = BRAND.navy;
const GOLD = BRAND.gold;

const AXES = [
  {
    nom: "Ressources en eau & Lac Tchad",
    tags: ["Hydrologie", "Climatologie", "SIG"],
    desc: "Suivi du bassin du lac Tchad, modélisation climatique et gestion durable des ressources en eau sahéliennes.",
  },
  {
    nom: "Santé tropicale & épidémiologie",
    tags: ["Paludisme", "Choléra", "Médecine communautaire"],
    desc: "Recherche-action sur les maladies endémiques et les systèmes de santé en zone sahélienne.",
  },
  {
    nom: "Langues & patrimoines nationaux",
    tags: ["Arabe Tchadien", "Sara", "Toubou", "Moundang"],
    desc: "Documentation, description et préservation des langues et cultures tchadiennes.",
  },
  {
    nom: "Droit coutumier & gouvernance",
    tags: ["Droit local", "Décentralisation", "Genre"],
    desc: "Articulation entre droit moderne et coutumes, gouvernance locale et paix.",
  },
  {
    nom: "Énergie solaire & développement durable",
    tags: ["Photovoltaïque", "Biomasse", "Agro-écologie"],
    desc: "Solutions énergétiques adaptées et agriculture durable pour le Sahel.",
  },
];

const LABORATOIRES = [
  { acronyme: "LARAH", nom: "Laboratoire de Recherche en Histoire et Archéologie", fac: "FLSH" },
  { acronyme: "LASES", nom: "Laboratoire des Sciences de l'Environnement", fac: "FSEA" },
  { acronyme: "LASER", nom: "Laboratoire de Santé et Recherche Épidémiologique", fac: "FMSS" },
  { acronyme: "LADE", nom: "Laboratoire de Droit et d'Études Politiques", fac: "FDSP" },
];

export default function Recherches() {
  return (
    <div className="bg-white min-h-screen">
      <section
        className="py-16 px-4 md:px-[50px]"
        style={{
          background: `linear-gradient(180deg, ${BRAND.navyDeep} 0%, ${NAVY} 100%)`,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h1
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ color: GOLD, fontFamily: "Georgia, serif" }}
          >
            Recherches
          </h1>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            Plus de 400 publications par an, 20 laboratoires et des axes d'étude adaptés au Sahel.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div
          className="grid md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { v: "20", l: "Laboratoires & centres" },
            { v: "400+", l: "Publications / an" },
            { v: "1 200", l: "Doctorants inscrits" },
            { v: "30+", l: "Projets financés" },
          ].map((k) => (
            <div
              key={k.l}
              className="text-center bg-white rounded-lg p-5 border"
              style={{ borderTop: `4px solid ${GOLD}` }}
            >
              <div
                className="text-3xl font-bold mb-2"
                style={{ color: NAVY, fontFamily: "Georgia, serif" }}
              >
                {k.v}
              </div>
              <div className="text-sm text-[#646464]">{k.l}</div>
            </div>
          ))}
        </div>

        <h2
          className="text-2xl font-bold mb-6 pb-2"
          style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
        >
          Axes de recherche prioritaires
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {AXES.map((a) => (
            <div
              key={a.nom}
              className="bg-white rounded-lg border p-6"
              style={{ borderColor: "#e2e8f0", borderTop: `4px solid ${GOLD}` }}
            >
              <h3
                className="text-lg font-bold mb-2"
                style={{ color: NAVY, fontFamily: "Georgia, serif" }}
              >
                {a.nom}
              </h3>
              <p className="text-[#646464] leading-relaxed mb-3 text-sm">
                {a.desc}
              </p>
              <div className="flex flex-wrap gap-1">
                {a.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-semibold px-2 py-1 rounded"
                    style={{
                      color: NAVY,
                      background: "#e8f0f8",
                      border: "1px solid #c8d8e8",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h2
          className="text-2xl font-bold mb-6 pb-2"
          style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
        >
          Laboratoires phares
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {LABORATOIRES.map((l) => (
            <div
              key={l.acronyme}
              className="flex items-start gap-4 p-4 rounded-lg border"
              style={{ borderColor: "#e2e8f0", background: "#fff" }}
            >
              <div
                className="text-xl font-bold px-3 py-1 rounded shrink-0"
                style={{ background: NAVY, color: "#fff", fontFamily: "Georgia, serif" }}
              >
                {l.acronyme}
              </div>
              <div>
                <h4 className="font-bold text-[15px] mb-1" style={{ color: NAVY }}>
                  {l.nom}
                </h4>
                <p className="text-xs text-[#646464]">{l.fac}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
