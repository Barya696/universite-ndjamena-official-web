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

type Personne = {
  nom: string;
  titre: string;
  departement?: string;
  email?: string;
};

type Groupe = {
  roman: string;
  categorie: string;
  description: string;
  personnes: Personne[];
};

const GROUPES: Groupe[] = [
  {
    roman: "I.",
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
    roman: "II.",
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
    roman: "III.",
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
    roman: "IV.",
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

function SectionHeading({ roman, title, description }: { roman: string; title: string; description?: string }) {
  return (
    <div className="mb-6">
      <div className="flex items-baseline gap-3">
        <span className="text-sm" style={{ color: GOLD, fontFamily: FONT }}>
          {roman}
        </span>
        <h2 className="text-2xl font-bold pb-2 flex-1" style={{ color: NAVY, fontFamily: FONT, borderBottom: `2px solid ${NAVY}` }}>
          {title}
        </h2>
      </div>
      {description && (
        <p className="text-sm mt-3" style={{ color: INK_SOFT, fontFamily: FONT }}>
          {description}
        </p>
      )}
    </div>
  );
}

function initiales(nom: string) {
  return (
    nom
      .split(" ")
      .filter((s) => /^[A-ZÀ-Ü]/.test(s))
      .slice(0, 2)
      .map((s) => s[0])
      .join("") || "UDN"
  );
}

export default function Personels() {
  return (
    <div style={{ background: PARCHMENT }} className="min-h-screen">
      {/* EN-TÊTE — matches the other "À propos" pages */}
      <section
        className="py-16 px-4 md:px-[50px]"
        style={{
          background: `linear-gradient(180deg, ${NAVY_DEEP} 0%, ${NAVY} 100%)`,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.2em] text-xs mb-3" style={{ color: GOLD, fontFamily: FONT }}>
            À propos
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ color: GOLD, fontFamily: "Georgia, serif" }}
          >
            Personnels
          </h1>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed" style={{ fontFamily: FONT }}>
            Direction générale, doyens, directeurs des services et représentants
            de la communauté universitaire de l'Université de N'Djamena.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pt-14 pb-4 space-y-14">
        {GROUPES.map((g, gi) => (
          <div key={g.categorie} style={gi % 2 === 1 ? { background: PARCHMENT_ALT, margin: "0 -1rem", padding: "1.5rem 1rem", borderRadius: 4 } : undefined}>
            <SectionHeading roman={g.roman} title={g.categorie} description={g.description} />

            <div className="grid md:grid-cols-2 gap-5 pt-2">
              {g.personnes.map((p) => (
                <div
                  key={p.nom + p.titre}
                  className="p-5 bg-white flex items-start gap-4"
                  style={{
                    boxShadow: SHADOW,
                    border: `1px solid ${LINE}`,
                    borderTop: `3px solid ${GOLD}`,
                    backgroundImage: `linear-gradient(160deg, #ffffff 0%, ${PARCHMENT} 100%)`,
                  }}
                >
                  <div
                    className="shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{
                      background: `radial-gradient(circle at 32% 28%, ${NAVY} 0%, ${NAVY_DEEP} 75%)`,
                      border: `1px solid ${GOLD}`,
                      color: GOLD,
                      fontFamily: "Georgia, serif",
                      boxShadow: `0 6px 14px -6px rgba(10,20,40,0.55), inset 0 1px 1px rgba(255,255,255,0.18)`,
                    }}
                  >
                    {initiales(p.nom)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate" style={{ color: NAVY, fontFamily: FONT }}>
                      {p.nom}
                    </h3>
                    <p className="text-sm" style={{ color: NAVY, fontFamily: "Georgia, serif" }}>
                      {p.titre}
                    </p>
                    {p.departement && (
                      <p className="text-sm mt-1" style={{ color: INK_SOFT, fontFamily: FONT }}>
                        {p.departement}
                      </p>
                    )}
                    {p.email && (
                      <p className="text-xs mt-1" style={{ color: GOLD, fontFamily: FONT }}>
                        {p.email}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ANNUAIRE COMPLET */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="bg-white p-6" style={{ boxShadow: SHADOW, border: `1px solid ${LINE}`, borderTop: `3px solid ${GOLD}` }}>
          <p className="font-semibold mb-2" style={{ color: NAVY, fontFamily: FONT }}>
            Annuaire complet & contacts
          </p>
          <p className="leading-relaxed text-sm" style={{ color: INK_SOFT, fontFamily: FONT }}>
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