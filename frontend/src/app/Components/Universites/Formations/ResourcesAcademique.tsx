import { BRAND } from "../../Utils/brand";

const NAVY = BRAND.navy;
const GOLD = BRAND.gold;

const RESSOURCES = [
  {
    titre: "Bibliothèques & centres de documentation",
    icone: "📚",
    description:
      "Bibliothèque centrale (campus Toukra), bibliothèques de chaque faculté, bibliothèque médicale de Farcha et portail documentaire SUDOC-UDN.",
    detail: [
      "450 000+ ouvrages imprimés et thèses",
      "Accès en ligne à 80 bases de données scientifiques",
      "Journaux électroniques : 12 000 titres",
      "Espaces de travail : 1 400 places",
    ],
  },
  {
    titre: "Campus & infrastructures",
    icone: "🏛️",
    description:
      "Trois campus à N'Djamena (Toukra, Farcha, Ardep-Djoumal) et un centre universitaire régional à Doba.",
    detail: [
      "218 hectares au total",
      "Amphithéâtres : 22 (de 120 à 1 200 places)",
      "Salles de TD : 240",
      "Laboratoires pédagogiques : 48",
    ],
  },
  {
    titre: "Outils numériques (ENT & LMS)",
    icone: "💻",
    description:
      "Un portail unique étudiant pour s'inscrire, suivre les cours, accéder aux notes, télécharger les syllabus et dialoguer avec les enseignants.",
    detail: [
      "ENT (Espace Numérique de Travail) : mail, agenda, notes, inscription en ligne",
      "Plateforme Moodle pour les cours hybrides et à distance",
      "WiFi sur les 3 campus",
      "Accès Microsoft 365 pour toute la communauté",
    ],
  },
  {
    titre: "Laboratoires & plateformes techniques",
    icone: "🔬",
    description:
      "28 laboratoires accrédités et plateformes mutualisées pour la recherche et les travaux pratiques.",
    detail: [
      "Centre régional de microscopie",
      "Plateforme de séquençage & génomique (en partenariat AUF)",
      "Observatoire sahélien de l'environnement",
      "FabLab — atelier de fabrication numérique",
    ],
  },
  {
    titre: "Vie étudiante & œuvres universitaires",
    icone: "🎓",
    description:
      "Le Service des Œuvres Universitaires (SOU) accompagne au quotidien les 30 000 étudiants de l'UDN.",
    detail: [
      "5 200 places en cités universitaires (Toukra, Farcha, Ardep-Djoumal)",
      "8 restaurants & cafétérias universitaires",
      "Polyclinique médicale universitaire",
      "Agence d'insertion professionnelle & stages",
    ],
  },
  {
    titre: "Sport & culture",
    icone: "⚽",
    description:
      "Activités sportives et culturelles encadrées toute l'année universitaire.",
    detail: [
      "Stade, terrains multisports, piscine olympique (Toukra)",
      "Club de lecture, théâtre, danse, musique",
      "Festival culturel annuel de l'UDN",
      "Championnats inter-facultés (tous sports)",
    ],
  },
];

export default function ResourcesAcademique() {
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
            Ressources académiques
          </h1>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
            Bibliothèques, campus, ENT, laboratoires, vie étudiante : tout ce que
            l'Université de N'Djamena met à disposition pour étudier, chercher et réussir.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {RESSOURCES.map((r) => (
          <article
            key={r.titre}
            className="rounded-lg border overflow-hidden"
            style={{ borderColor: "#e2e8f0" }}
          >
            <div className="px-6 py-5" style={{ background: NAVY }}>
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex items-center justify-center w-11 h-11 rounded-full text-2xl"
                  style={{ background: "rgba(200,168,75,0.15)" }}
                >
                  {r.icone}
                </span>
                <h3 className="text-lg font-bold text-white" style={{ fontFamily: "Georgia, serif" }}>
                  {r.titre}
                </h3>
              </div>
            </div>
            <div className="p-6 bg-white">
              <p className="text-[#444] leading-relaxed mb-4 text-sm">{r.description}</p>
              <ul className="space-y-2 text-sm text-[#444]">
                {r.detail.map((d) => (
                  <li key={d} className="flex gap-2">
                    <span style={{ color: GOLD }}>✦</span>
                    <span className="leading-relaxed">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section style={{ background: "#f6f6f6" }} className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-2xl font-bold mb-6 pb-2 inline-block"
            style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
          >
            Accès & contacts utiles
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { t: "Service de la Scolarité Centrale", d: "Campus de Toukra — de 8h à 16h, du lundi au vendredi", c: "+235 22 51 44 52" },
              { t: "Système Bibliothécaire (SBU)", d: "Portail en ligne 24h/24 — bibliothèque.udn.edu.td", c: "+235 22 51 44 60" },
              { t: "Service des Œuvres Univ. (SOU)", d: "Logement, restauration, santé & bourses", c: "+235 22 51 44 71" },
            ].map((c) => (
              <div
                key={c.t}
                className="p-5 rounded-lg border"
                style={{ background: "#fff", borderTop: `3px solid ${GOLD}`, borderColor: "#e2e8f0" }}
              >
                <p className="font-semibold mb-2" style={{ color: NAVY }}>{c.t}</p>
                <p className="text-sm text-[#646464] mb-2">{c.d}</p>
                <p className="text-sm" style={{ color: GOLD }}>{c.c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
