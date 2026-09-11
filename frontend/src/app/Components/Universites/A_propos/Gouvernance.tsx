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

const HAUTE_DIRECTION = [
  { poste: "Recteur", nom: "Pr. — à nommer —" },
  { poste: "Vice-Recteur Académique", nom: "Pr. — à nommer —" },
  { poste: "Vice-Recteur à la Recherche", nom: "Pr. — à nommer —" },
  { poste: "Vice-Recteur Coopération & Partenariats", nom: "Pr. — à nommer —" },
  { poste: "Secrétaire Général", nom: "Dr — à nommer —" },
  { poste: "Contrôleur Budgétaire", nom: "— à nommer —" },
  { poste: "Directeur Général des Services", nom: "— à nommer —" },
  { poste: "Directeur de l'École Doctorale", nom: "Pr. — à nommer —" },
];

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

export default function Gouvernance() {
  return (
    <div style={{ background: PARCHMENT }} className="min-h-screen">
      {/* EN-TÊTE — matches HistoireMission / MotRecteur's hero */}
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
            Gouvernance
          </h1>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed" style={{ fontFamily: FONT }}>
            Organisation, organes délibérants et structures dirigeantes de
            l'Université de N'Djamena.
          </p>
        </div>
      </section>

      {/* HAUTE DIRECTION */}
      <section className="max-w-6xl mx-auto px-4 pt-14 pb-4">
        <SectionHeading roman="I." title="Haute direction" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {HAUTE_DIRECTION.map((c) => (
            <div
              key={c.poste}
              className="p-5 bg-white"
              style={{
                boxShadow: SHADOW,
                border: `1px solid ${LINE}`,
                borderTop: `3px solid ${GOLD}`,
                backgroundImage: `linear-gradient(160deg, #ffffff 0%, ${PARCHMENT} 100%)`,
              }}
            >
              <p className="text-xs uppercase tracking-wider mb-2" style={{ color: GOLD, fontFamily: FONT, letterSpacing: "0.1em" }}>
                {c.poste}
              </p>
              <p className="font-semibold" style={{ color: NAVY, fontFamily: FONT }}>
                {c.nom}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ORGANES DÉLIBÉRANTS */}
      <section className="py-14 mt-6" style={{ background: PARCHMENT_ALT }}>
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading roman="II." title="Organes délibérants" />
          <div className="grid md:grid-cols-2 gap-6 pt-2">
            {ORGANES.map((o) => (
              <div
                key={o.titre}
                className="bg-white overflow-hidden"
                style={{ boxShadow: SHADOW, border: `1px solid ${LINE}` }}
              >
                <div
                  className="px-5 py-3"
                  style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_DEEP} 100%)`, borderBottom: `2px solid ${GOLD}` }}
                >
                  <h3 className="font-bold" style={{ color: GOLD, fontFamily: FONT }}>
                    {o.titre}
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-relaxed mb-4" style={{ color: INK_SOFT, fontFamily: FONT }}>
                    {o.role}
                  </p>
                  <div className="flex items-center gap-2 mb-3" style={{ maxWidth: 96 }}>
                    <div style={{ width: 24, height: 2, background: GOLD }} />
                    <div style={{ flex: 1, height: 1, background: LINE }} />
                  </div>
                  <p className="text-xs uppercase tracking-wider mb-2 font-semibold" style={{ color: GOLD, fontFamily: FONT, letterSpacing: "0.1em" }}>
                    Composition
                  </p>
                  <ul className="space-y-1.5 text-sm pl-1" style={{ color: INK_SOFT, fontFamily: FONT }}>
                    {o.composition.map((c) => (
                      <li key={c} className="flex items-start gap-2">
                        <span className="shrink-0 mt-1" style={{ color: GOLD, fontSize: "10px" }} aria-hidden>
                          ✦
                        </span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACULTÉS, INSTITUTS & ÉCOLES */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <SectionHeading roman="III." title="Facultés, Instituts & Écoles" />
        <div className="grid sm:grid-cols-2 bg-white" style={{ boxShadow: SHADOW, border: `1px solid ${LINE}` }}>
          {FACULTES.map((f, i) => (
            <div
              key={f.nom}
              className="flex items-start gap-3 py-4 px-5"
              style={{ borderBottom: `1px solid ${LINE}`, background: i % 2 === 0 ? "transparent" : "rgba(198,161,91,0.045)" }}
            >
              <span className="shrink-0 mt-1" style={{ color: GOLD, fontFamily: FONT, fontSize: "15px" }} aria-hidden>
                ✦
              </span>
              <div>
                <h4 className="font-semibold text-[15px]" style={{ color: NAVY, fontFamily: FONT }}>
                  {f.nom}
                </h4>
                <p className="text-sm mt-1" style={{ color: INK_SOFT, fontFamily: FONT }}>
                  {f.doyen}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}