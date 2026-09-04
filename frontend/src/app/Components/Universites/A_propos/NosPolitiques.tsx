import { BRAND } from "../../Utils/brand";

const NAVY = BRAND.navy;
const NAVY_DEEP = BRAND.navyDeep;
const GOLD = BRAND.gold;
const PARCHMENT = "#FAF8F3";
const PARCHMENT_ALT = "#F3EEE1";
const LINE = "#DDD6C4";
const INK = "#2B2B2B";
const INK_SOFT = "#565553";
const SHADOW = "0 4px 18px -8px rgba(20,30,55,0.18)";
const FONT = "'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif";

const POLITIQUES = [
  {
    titre: "Politique de qualité académique",
    icone: "✦",
    intro:
      "Garantir l'excellence et la conformité des formations LMD aux standards nationaux, régionaux et internationaux.",
    points: [
      "Évaluation annuelle des enseignements par les étudiants et par des pairs",
      "Auto-évaluation régulière des filières et accréditation externe",
      "Formation continue des enseignants (pédagogie universitaire, numérique)",
      "Référentiel national des compétences pour chaque diplôme",
    ],
  },
  {
    titre: "Politique de recherche & innovation",
    icone: "❖",
    intro:
      "Faire de l'UDN un acteur majeur de la recherche sahélienne, au service du développement du Tchad.",
    points: [
      "Focalisation sur 4 axes : agro-écologie, santé, ressources naturelles, sciences humaines et sociales du Sahel",
      "Financement interne des projets émergents",
      "Appui à la publication et à l'open-access",
      "Valorisation et transfert technologique vers les entreprises et administrations",
    ],
  },
  {
    titre: "Politique de vie étudiante & inclusion",
    icone: "♥",
    intro:
      "Offrir à chaque étudiant·e des conditions dignes d'étude et une insertion professionnelle réussie.",
    points: [
      "Politique de bourses et d'aide sociale renforcée (critères sociaux)",
      "Plan d'accessibilité pour les personnes en situation de handicap",
      "Mixité et lutte contre toutes les discriminations (genre, origine, religion, handicap)",
      "Appui à l'insertion pro : stages, métiers, coaching, salon de l'emploi annuel",
    ],
  },
  {
    titre: "Politique numérique & gouvernance de l'information",
    icone: "⌁",
    intro:
      "Transformer l'université par le numérique : cours à distance, MOOCs, ENT, portails documentaires.",
    points: [
      "Déploiement d'un Espace Numérique de Travail unique",
      "Généralisation du LMS Moodle et des cours hybrides",
      "Dématérialisation des inscriptions, notes, diplômes",
      "WiFi et infrastructures réseaux sur les 3 campus",
    ],
  },
  {
    titre: "Politique internationale & partenariats",
    icone: "◎",
    intro:
      "Ancrer l'Université de N'Djamena dans l'espace international de recherche et d'enseignement supérieur.",
    points: [
      "Développer les doubles diplômes avec les universités partenaires",
      "Poursuivre les mobilités entrantes et sortantes via ERASMUS+, AU, PAFIDE, etc.",
      "Renforcer les programmes conjoints de doctorat",
      "Accueil des délégations et des experts internationaux sur les thèmes sahéliens",
    ],
  },
  {
    titre: "Politique de développement durable & responsabilité sociale",
    icone: "✿",
    intro:
      "Intégrer les enjeux climatiques, environnementaux et sociétaux dans toute la vie de l'université.",
    points: [
      "Plan climat : réduction de l'empreinte carbone des campus",
      "Valorisation des énergies solaires et de l'eau",
      "Développement durable obligatoire dans tous les cursus (UE transversale)",
      "Actions citoyennes, culturelles et sportives ouvertes à la ville de N'Djamena",
    ],
  },
];

export default function NosPolitiques() {
  return (
    <div style={{ background: PARCHMENT }} className="min-h-screen">
      {/* EN-TÊTE */}
      <section
        className="py-16 px-4 md:px-[50px]"
        style={{
          background: `linear-gradient(180deg, ${NAVY_DEEP} 0%, ${NAVY} 100%)`,
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
            Nos Politiques
          </h1>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
            Six politiques transversales structurent le projet quadriennal de
            l'Université de N'Djamena et guident l'action de ses services.
          </p>
        </div>
      </section>

      {/* POLITIQUES */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <SectionHeading roman="I." title="Politiques transversales" />
        <div className="bg-white" style={{ boxShadow: SHADOW, border: `1px solid ${LINE}` }}>
          {POLITIQUES.map((p, i) => (
            <div
              key={p.titre}
              className="grid md:grid-cols-[64px_1fr] gap-4 md:gap-8 py-8 px-6 md:px-8"
              style={{ borderBottom: i !== POLITIQUES.length - 1 ? `1px solid ${LINE}` : "none" }}
            >
              <div className="flex md:block">
                <span
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full text-lg shrink-0"
                  style={{
                    background: `radial-gradient(circle at 32% 28%, ${NAVY} 0%, ${NAVY_DEEP} 75%)`,
                    color: GOLD,
                    border: `1px solid ${GOLD}`,
                    boxShadow: "0 8px 16px -8px rgba(10,20,40,0.5)",
                  }}
                  aria-hidden
                >
                  {p.icone}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1.5" style={{ color: NAVY, fontFamily: FONT }}>
                  {p.titre}
                </h3>
                <div className="flex items-center gap-2 mb-3" style={{ maxWidth: 96 }}>
                  <div style={{ width: 20, height: 2, background: GOLD }} />
                </div>
                <p className="leading-relaxed mb-4 text-sm" style={{ color: INK_SOFT, fontFamily: FONT }}>
                  {p.intro}
                </p>
                <ul className="space-y-2.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5">
                      <span className="shrink-0" style={{ color: GOLD, fontFamily: FONT }} aria-hidden>
                        ✦
                      </span>
                      <span className="leading-relaxed text-sm" style={{ color: INK, fontFamily: FONT }}>
                        {pt}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function SectionHeading({ roman, title }: { roman: string; title: string }) {
  return (
    <div className="flex items-baseline gap-3 mb-8">
      <span className="text-sm" style={{ color: GOLD, fontFamily: FONT }}>
        {roman}
      </span>
      <h2
        className="text-2xl font-bold pb-2 flex-1"
        style={{ color: NAVY, fontFamily: FONT, borderBottom: `2px solid ${NAVY}` }}
      >
        {title}
      </h2>
    </div>
  );
}