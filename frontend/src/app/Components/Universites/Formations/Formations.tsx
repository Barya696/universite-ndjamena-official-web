import { useState } from "react";
import { BRAND } from "../../Utils/brand";

const NAVY = BRAND.navy;
const GOLD = BRAND.gold;

const FACULTES = [
  {
    id: "droit",
    nom: "Droit & Sciences Politiques",
    icon: "⚖️",
    description:
      "Formation de juristes, diplomates et administrateurs. Licence droit, Master droit des affaires, Doctorat en sciences politiques.",
    formations: ["Licence en Droit", "Master Droit des Affaires", "Master Droit International", "Doctorat Sciences Politiques"],
  },
  {
    id: "lettres",
    nom: "Lettres & Sciences Humaines",
    icon: "📚",
    description:
      "Disciplines des lettres modernes, histoire, géographie, philosophie, sociologie et langues. Préservation du patrimoine culturel tchadien.",
    formations: ["Licence Lettres Modernes", "Licence Histoire-Géographie", "Master Linguistique", "Doctorat Sociologie"],
  },
  {
    id: "sciences",
    nom: "Sciences Exactes & Appliquées",
    icon: "🔬",
    description:
      "Mathématiques, physique, chimie, biologie et informatique. Recherches en ressources naturelles et énergie solaire.",
    formations: ["Licence Math-Physique", "Licence Informatique", "Master Environnement", "Doctorat Chimie"],
  },
  {
    id: "sante",
    nom: "Sciences de la Santé",
    icon: "🏥",
    description:
      "Faculté de Médecine (Farcha), pharmacie, chirurgie dentaire et médecine vétérinaire. Hôpital universitaire associé.",
    formations: ["Médecine Générale (6 ans)", "Pharmacie", "Chirurgie Dentaire", "Médecine Vétérinaire"],
  },
  {
    id: "eco",
    nom: "Sciences Économiques & Gestion",
    icon: "📊",
    description:
      "Économie, gestion, comptabilité et finance orientées vers le marché africain. Stages en entreprise et partenariats.",
    formations: ["Licence Économie", "Licence Gestion", "Master Finance-Banque", "Master Comptabilité"],
  },
  {
    id: "education",
    nom: "Éducation & Formation",
    icon: "🎓",
    description:
      "Préparation des enseignants et inspecteurs du système éducatif tchadien. Pédagogies innovantes et multilingues.",
    formations: ["Licence Sciences de l'Éducation", "Master Formation des Formateurs", "Master Didactique"],
  },
  {
    id: "theologie",
    nom: "Théologie & Sciences Religieuses",
    icon: "🕊️",
    description:
      "Études islamiques, études chrétiennes et sciences religieuses comparées. Dialogue interreligieux et paix.",
    formations: ["Licence Études Islamiques", "Licence Études Chrétiennes", "Master Sciences Religieuses"],
  },
  {
    id: "agro",
    nom: "Agronomie & Sciences de l'Environnement",
    icon: "🌾",
    description:
      "Agronomie, agroalimentaire, foresterie et gestion des ressources naturelles. Adaptée aux enjeux sahéliens.",
    formations: ["Licence Agronomie", "Master Gestion des Ressources Naturelles", "Ingénieur Agroalimentaire"],
  },
];

export default function Formations() {
  const [active, setActive] = useState(FACULTES[0].id);
  const fac = FACULTES.find((f) => f.id === active)!;

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
            Formations
          </h1>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            Un catalogue LMD complet avec 12 facultés et plus de 80 parcours sur trois campus.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div
          className="flex flex-wrap gap-0 mb-8"
          style={{ borderBottom: "1px solid #d0d0d0" }}
        >
          {FACULTES.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className="px-4 py-2.5 text-sm font-semibold transition-colors -mb-px"
              style={{
                borderBottom: active === f.id ? `2px solid ${NAVY}` : "2px solid transparent",
                color: active === f.id ? NAVY : "#646464",
                background: active === f.id ? "#f0f4f8" : "transparent",
              }}
            >
              <span className="mr-1">{f.icon}</span>
              {f.nom}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="text-5xl mb-4">{fac.icon}</div>
            <h2
              className="text-2xl font-bold mb-3"
              style={{ color: "#1a1a1a", fontFamily: "Georgia, serif" }}
            >
              Faculté de {fac.nom}
            </h2>
            <p className="text-[#646464] leading-relaxed mb-5 text-[15px]">
              {fac.description}
            </p>
          </div>

          <div
            className="rounded border p-6"
            style={{
              background: "linear-gradient(#f9fbfc 10%, #e8f0f8 90%)",
              borderColor: "#c8d8e8",
            }}
          >
            <h3
              className="text-base font-bold mb-3 pb-2"
              style={{
                color: NAVY,
                borderBottom: `2px solid ${GOLD}`,
                fontFamily: "Georgia, serif",
              }}
            >
              Offre de formation
            </h3>
            <ul className="space-y-2">
              {fac.formations.map((f) => (
                <li
                  key={f}
                  className="text-sm px-3 py-2 rounded border"
                  style={{
                    color: NAVY,
                    background: "#f0f4f8",
                    borderColor: "#c8d8e8",
                  }}
                >
                  ✦ {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
