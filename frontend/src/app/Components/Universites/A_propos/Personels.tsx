import { BRAND } from "../../Utils/brand";

const NAVY = BRAND.navy;
const GOLD = BRAND.gold;

type Personne = {
  nom: string;
  titre: string;
  departement?: string;
  email?: string;
};

type Groupe = {
  categorie: string;
  description: string;
  personnes: Personne[];
};

const GROUPES: Groupe[] = [
  {
    categorie: "Haute direction",
    description:
      "Autorités et services centraux qui pilotent l'université au quotidien.",
    personnes: [
      { nom: "Pr. — à nommer —", titre: "Recteur de l'Université de N'Djamena" },
      { nom: "Pr. — à nommer —", titre: "Vice-Recteur Académique" },
      { nom: "Pr. — à nommer —", titre: "Vice-Recteur à la Recherche" },
      { nom: "Pr. — à nommer —", titre: "Vice-Recteur Coopération & Partenariats" },
      { nom: "Dr — à nommer —", titre: "Secrétaire Général" },
      { nom: "— à nommer —", titre: "Contrôleur Budgétaire" },
      { nom: "— à nommer —", titre: "Directeur Général des Services" },
      { nom: "Dr — à nommer —", titre: "Directeur des Ressources Humaines" },
      { nom: "— à nommer —", titre: "Directeur des Finances" },
      { nom: "— à nommer —", titre: "Directeur du Patrimoine" },
    ],
  },
  {
    categorie: "Doyens & directeurs d'UFR",
    description:
      "Responsables des facultés, instituts et écoles qui composent l'UDN.",
    personnes: [
      { nom: "Pr. — à nommer —", titre: "Doyen", departement: "Faculté de Droit et Sciences Politiques" },
      { nom: "Pr. — à nommer —", titre: "Doyen", departement: "Faculté des Lettres et Sciences Humaines" },
      { nom: "Pr. — à nommer —", titre: "Doyen", departement: "Faculté des Sciences Exactes et Appliquées" },
      { nom: "Pr. — à nommer —", titre: "Doyen", departement: "Faculté des Sciences Économiques et de Gestion" },
      { nom: "Pr. — à nommer —", titre: "Doyen", departement: "Faculté de Médecine et des Sciences de la Santé" },
      { nom: "Pr. — à nommer —", titre: "Doyen", departement: "Faculté d'Éducation et de Formation (ISP)" },
      { nom: "Pr. — à nommer —", titre: "Doyen", departement: "Faculté d'Agronomie" },
      { nom: "Pr. — à nommer —", titre: "Doyen", departement: "Faculté des Sciences de l'Ingénieur" },
      { nom: "Dr — à nommer —", titre: "Directeur", departement: "Institut Universitaire de Technologie" },
      { nom: "Dr — à nommer —", titre: "Directeur", departement: "Institut d'Études Africaines" },
      { nom: "Pr. — à nommer —", titre: "Directeur", departement: "École Doctorale Unique" },
      { nom: "Dr — à nommer —", titre: "Directeur", departement: "Centre Universitaire de Doba" },
    ],
  },
  {
    categorie: "Services transverses clés",
    description:
      "Directions et services qui accompagnent l'ensemble de la communauté universitaire.",
    personnes: [
      { nom: "— à nommer —", titre: "Directeur", departement: "Service des Œuvres Universitaires (SOU)" },
      { nom: "Dr — à nommer —", titre: "Bibliothécaire en Chef", departement: "Système Bibliothécaire Universitaire (SBU)" },
      { nom: "Dr — à nommer —", titre: "Directeur", departement: "Service de la Scolarité Centrale" },
      { nom: "— à nommer —", titre: "Directeur", departement: "Service de Formation Continue" },
      { nom: "Dr — à nommer —", titre: "Directeur", departement: "Centre d'Appui à la Pédagogie Universitaire" },
      { nom: "Dr — à nommer —", titre: "Directeur", departement: "Service de la Recherche et des Valorisations" },
      { nom: "Dr — à nommer —", titre: "Directeur", departement: "Bureau de Coopération et des Relations Internationales" },
      { nom: "— à nommer —", titre: "Directeur", departement: "Système d'Information et du Numérique (SINUM)" },
    ],
  },
  {
    categorie: "Représentants & instances",
    description:
      "Instances participatives et représentants de la communauté universitaire.",
    personnes: [
      { nom: "— à nommer —", titre: "Président", departement: "Section syndicale enseignante (SNESUP, par ex.)" },
      { nom: "— à nommer —", titre: "Président", departement: "Syndicat des BAT (SYNAP-BAT)" },
      { nom: "— à nommer —", titre: "Président·e", departement: "Union des Étudiants de l'UDN (UE-UDN)" },
      { nom: "— à nommer —", titre: "Délégué·e·s", departement: "Étudiants au Conseil d'Administration" },
      { nom: "— à nommer —", titre: "Délégué·e·s", departement: "Étudiants au CEVU" },
      { nom: "— à nommer —", titre: "Médiateur académique (ou déontologue)" },
    ],
  },
];

export default function Personels() {
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
            Personnels
          </h1>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
            Direction générale, doyens, directeurs des services et représentants
            de la communauté universitaire de l'Université de N'Djamena.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12 space-y-12">
        {GROUPES.map((g) => (
          <div key={g.categorie}>
            <div className="mb-5 flex items-end justify-between gap-4 flex-wrap">
              <div>
                <h2
                  className="text-2xl font-bold pb-2 inline-block"
                  style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
                >
                  {g.categorie}
                </h2>
                <p className="text-sm text-[#646464] mt-2">{g.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {g.personnes.map((p) => (
                <div
                  key={p.nom}
                  className="p-5 rounded-lg border flex items-start gap-4"
                  style={{ background: "#f8fafc", borderColor: "#e2e8f0", borderTop: `3px solid ${GOLD}` }}
                >
                  <div
                    className="shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{
                      background: `linear-gradient(135deg, ${NAVY} 0%, ${BRAND.navyDeep} 100%)`,
                      color: GOLD,
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    {p.nom
                      .split(" ")
                      .filter((s) => /^[A-ZÀ-Ü]/.test(s))
                      .slice(0, 2)
                      .map((s) => s[0])
                      .join("") || "UDN"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate" style={{ color: NAVY }}>
                      {p.nom}
                    </h3>
                    <p className="text-sm" style={{ color: NAVY, fontFamily: "Georgia, serif" }}>
                      {p.titre}
                    </p>
                    {p.departement && (
                      <p className="text-sm text-[#646464] mt-1">{p.departement}</p>
                    )}
                    {p.email && (
                      <p className="text-xs mt-1" style={{ color: GOLD }}>
                        {p.email}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div
          className="rounded-lg border p-6 text-sm"
          style={{ background: "#f6f6f6", borderColor: "#e2e8f0" }}
        >
          <p className="font-semibold mb-2" style={{ color: NAVY }}>
            Annuaire complet & contacts
          </p>
          <p className="text-[#444] leading-relaxed">
            Pour obtenir l'annuaire détaillé du personnel administratif, technique
            et d'enseignement (environ 1 200 enseignants-chercheurs et 650 BAT),
            veuillez-vous adresser au service de la scolarité centrale ou à la
            Direction des Ressources Humaines au +235 22 51 44 52.
          </p>
        </div>
      </section>
    </div>
  );
}
