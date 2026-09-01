import { BRAND } from "../../Utils/brand";

const NAVY = BRAND.navy;
const GOLD = BRAND.gold;

const ORGANES = [
  {
    titre: "Le Recteur",
    role: "Autorité exécutive de l'université. Il préside les conseils et dirige l'administration sous l'autorité du Ministre de l'Enseignement Supérieur.",
    composition: [
      "Recteur (Président)",
      "3 Vice-Recteurs : académique, recherche, coopération",
      "Secrétaire Général",
      "Contrôleur Budgétaire",
    ],
  },
  {
    titre: "Conseil d'Administration (CA)",
    role: "Organe délibérant supérieur de l'université. Il vote le budget, approuve le plan quadriennal, les créations de filières et les décisions stratégiques.",
    composition: [
      "Le Recteur (Président)",
      "Représentants du Ministère (MESRS, MPF)",
      "Sénateurs, Députés, personnalités qualifiées",
      "Représentants des enseignants, étudiants, BAT",
    ],
  },
  {
    titre: "Conseil Scientifique (CS)",
    role: "Définit et évalue la politique de recherche, valide les projets de recherche, attribue les bourses doctorales et suit la publication.",
    composition: [
      "Le Recteur (Président)",
      "Vice-Recteur à la recherche",
      "Directeurs des laboratoires et de l'École Doctorale",
      "Professeurs des facultés et représentants extérieurs",
    ],
  },
  {
    titre: "Conseil des Études et de la Vie Universitaire (CEVU)",
    role: "Statue sur toutes les questions relatives à la formation initiale et continue, aux examens, aux bourses et à la vie étudiante.",
    composition: [
      "Le Recteur (Président)",
      "Vice-Recteur académique",
      "Doyens des facultés et directeurs d'instituts",
      "Représentants des étudiants et des enseignants",
    ],
  },
];

const FACULTES = [
  { nom: "Faculté de Droit et Sciences Politiques", doyen: "Pr. — à nommer —" },
  { nom: "Faculté des Lettres et Sciences Humaines", doyen: "Pr. — à nommer —" },
  { nom: "Faculté des Sciences Exactes et Appliquées", doyen: "Pr. — à nommer —" },
  { nom: "Faculté des Sciences Économiques et de Gestion", doyen: "Pr. — à nommer —" },
  { nom: "Faculté de Médecine et des Sciences de la Santé", doyen: "Pr. — à nommer —" },
  { nom: "Faculté d'Éducation et de Formation (Institut Supérieur Pédagogique)", doyen: "Pr. — à nommer —" },
  { nom: "Faculté d'Agronomie", doyen: "Pr. — à nommer —" },
  { nom: "Faculté des Sciences de l'Ingénieur", doyen: "Pr. — à nommer —" },
  { nom: "Institut Universitaire de Technologie", doyen: "Dr — à nommer —" },
  { nom: "Institut d'Études Africaines", doyen: "Dr — à nommer —" },
  { nom: "École Doctorale Unique", doyen: "Pr — à nommer —" },
  { nom: "Centre Universitaire de Doba (antenne régionale)", doyen: "Dr — à nommer —" },
];

export default function Gouvernance() {
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
            À propos
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ color: GOLD, fontFamily: "Georgia, serif" }}
          >
            Gouvernance
          </h1>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
            Organisation, organes délibérants et structures dirigeantes de
            l'Université de N'Djamena.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2
          className="text-2xl font-bold mb-6 pb-2"
          style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
        >
          Haute direction
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { poste: "Recteur", nom: "Pr. — à nommer —" },
            { poste: "Vice-Recteur Académique", nom: "Pr. — à nommer —" },
            { poste: "Vice-Recteur à la Recherche", nom: "Pr. — à nommer —" },
            { poste: "Vice-Recteur Coopération & Partenariats", nom: "Pr. — à nommer —" },
            { poste: "Secrétaire Général", nom: "Dr — à nommer —" },
            { poste: "Contrôleur Budgétaire", nom: "— à nommer —" },
            { poste: "Directeur Général des Services", nom: "— à nommer —" },
            { poste: "Directeur de l'École Doctorale", nom: "Pr. — à nommer —" },
          ].map((c) => (
            <div
              key={c.poste}
              className="rounded-lg p-5 border"
              style={{ background: "#f8fafc", borderColor: "#e2e8f0", borderTop: `3px solid ${GOLD}` }}
            >
              <p className="text-xs uppercase tracking-wider mb-2" style={{ color: GOLD }}>
                {c.poste}
              </p>
              <p className="font-semibold" style={{ color: NAVY }}>
                {c.nom}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#f6f6f6" }} className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-2xl font-bold mb-8"
            style={{ color: NAVY, fontFamily: "Georgia, serif" }}
          >
            Organes délibérants
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {ORGANES.map((o) => (
              <div key={o.titre} className="rounded-lg border overflow-hidden" style={{ borderColor: "#e2e8f0" }}>
                <div className="px-5 py-3" style={{ background: NAVY }}>
                  <h3 className="font-bold text-white" style={{ fontFamily: "Georgia, serif" }}>
                    {o.titre}
                  </h3>
                </div>
                <div className="p-5 bg-white">
                  <p className="text-sm text-[#444] leading-relaxed mb-4">{o.role}</p>
                  <p className="text-xs uppercase tracking-wider mb-2 font-semibold" style={{ color: GOLD }}>
                    Composition
                  </p>
                  <ul className="space-y-1 text-sm text-[#444] list-disc pl-5">
                    {o.composition.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2
          className="text-2xl font-bold mb-6 pb-2"
          style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
        >
          Facultés, Instituts & Écoles
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {FACULTES.map((f) => (
            <div
              key={f.nom}
              className="flex items-start justify-between p-4 rounded-lg border"
              style={{ background: "#fff", borderColor: "#e2e8f0" }}
            >
              <div>
                <h4 className="font-semibold" style={{ color: NAVY }}>{f.nom}</h4>
                <p className="text-sm text-[#646464] mt-1">{f.doyen}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
