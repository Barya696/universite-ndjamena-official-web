import { BRAND } from "../../Utils/brand";

const NAVY = BRAND.navy;
const GOLD = BRAND.gold;

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
      "Offrir à chaque·étudiant·e des conditions dignes d'étude et une insertion professionnelle réussie.",
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
            Nos Politiques
          </h1>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
            Six politiques transversales structurent le projet quadriennal de
            l'Université de N'Djamena et guident l'action de ses services.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-6">
        {POLITIQUES.map((p) => (
          <article
            key={p.titre}
            className="rounded-lg border overflow-hidden"
            style={{ borderColor: "#e2e8f0" }}
          >
            <div className="px-6 py-5" style={{ background: NAVY }}>
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full text-xl"
                  style={{ background: "rgba(200,168,75,0.15)", color: GOLD }}
                >
                  {p.icone}
                </span>
                <h3 className="text-xl font-bold text-white" style={{ fontFamily: "Georgia, serif" }}>
                  {p.titre}
                </h3>
              </div>
            </div>
            <div className="p-6 bg-white">
              <p className="text-[#444] leading-relaxed mb-4">{p.intro}</p>
              <ul className="space-y-2 text-sm text-[#444]">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <span style={{ color: GOLD }}>✦</span>
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
