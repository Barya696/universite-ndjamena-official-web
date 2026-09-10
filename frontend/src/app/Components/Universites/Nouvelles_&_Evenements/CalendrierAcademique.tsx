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
// Matches the sans-serif used in the site footer / HistoireMission page.
const FONT = "'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif";

const STATS = [
  { k: "Échéances académiques / an", v: "36" },
  { k: "Étudiants concernés", v: "85 000" },
  { k: "Sessions d'examens", v: "9" },
  { k: "Jours fériés & suspensions", v: "12" },
];

const CALENDRIER_2024_25 = [
  {
    periode: "Juillet 2024",
    list: [
      { dates: "1–5 juillet", nom: "Inscriptions Licence 1 · Concours nationaux", lieu: "Campus Toukra · Amphis A, B, C", type: "Inscriptions", desc: "Dépôt des dossiers, épreuves écrites, publication des admis Licence 1." },
      { dates: "8 juillet", nom: "Réunion de rentrée des enseignants-chercheurs", lieu: "Salle des conseils · Campus Toukra", type: "Personnels", desc: "Programmation annuelle des enseignements et répartition des services." },
      { dates: "15 juillet", nom: "Journée Portes Ouvertes (JPO)", lieu: "4 campus (Toukra, Farcha, Ardep, Agronomie)", type: "Grand public", desc: "8 000 visiteurs attendus, 48 stands Licences/ Masters & Écoles doctorales." },
      { dates: "18–25 juillet", nom: "Summer School « Sahel Climat » · ERASMUS+", lieu: "Campus Ardep-Djoumal · Amphi vert", type: "International", desc: "60 étudiants venus de 14 pays — ateliers SIG, modélisation, terrain Lac Tchad." },
    ],
  },
  {
    periode: "Août 2024",
    list: [
      { dates: "1–8 août", nom: "Réhabilitation Amphi numériques — livraison", lieu: "FSEA, Faculté de Droit, Campus Toukra", type: "Infrastructures", desc: "Captation automatique, 4K, sonorisation, fibre jusqu'aux salles." },
      { dates: "12–16 août", nom: "Formation pédagogique DIGILMD · 240 enseignants", lieu: "CRN · Centre de Ressources Numériques", type: "Formation", desc: "Ateliers Moodle, quiz, classes inversées, réalisation de capsules vidéo." },
      { dates: "22 août", nom: "Cérémonie d'accueil des étudiants internationaux", lieu: "Restaurant universitaire · Toukra", type: "International", desc: "Présentation des services, parrainages étudiants, cours FLE." },
      { dates: "26–30 août", nom: "Rentrée des Masters · réunions de mention", lieu: "Tous les campus", type: "Masters & Doctorats", desc: "Présentation des parcours, des stages & projets de fin d'études." },
    ],
  },
  {
    periode: "Septembre 2024",
    list: [
      { dates: "2 sept.", nom: "Rentrée académique 2024–2025 · Tous les niveaux", lieu: "Amphi Central · 1 000 places · Campus Toukra", type: "Officiel", desc: "Allocution du Recteur, représentants des ministries, associations étudiantes." },
      { dates: "6–8 sept.", nom: "Forum des associations & clubs étudiants", lieu: "Esplanade centrale · Toukra", type: "Vie étudiante", desc: "45 clubs (débats, théâtre, robotique, développement, sports, journal…)." },
      { dates: "18–20 sept.", nom: "Colloque Langues nationales tchadiennes", lieu: "Ardep-Djoumal · Faculté des Lettres", type: "Recherche", desc: "LAELIS — 140 communications, expositions corpus oraux, Inalco." },
      { dates: "24 sept.", nom: "Réunion des directeurs de laboratoires", lieu: "Bâtiment A · A-118 · Service Recherche", type: "Recherche", desc: "Appels à projets ACE-E2D, ERASMUS+, évaluation des axes." },
    ],
  },
  {
    periode: "Octobre 2024",
    list: [
      { dates: "7–11 oct.", nom: "Semaines d'entretien de stage Licence Pro", lieu: "Bureaux stages · chaque faculté", type: "Stages", desc: "Validation des conventions, répartition des maîtres de stage." },
      { dates: "14 oct.", nom: "Forum Emploi & Entrepreneuriat UDN", lieu: "Esplanade Toukra · 60 stands", type: "Insertion", desc: "40 entreprises & cabinets nationaux et internationaux recrutent : stages & CDD." },
      { dates: "18–19 oct.", nom: "Hackathon Santé & IA · UDN x LaBRI (Bordeaux)", lieu: "FSEA · Salle informatique 3", type: "Innovation", desc: "Détection du paludisme, segmentation IRM, LLM en arabe tchadien." },
      { dates: "28 oct.", nom: "Rencontre parents-étudiants — Licence 1", lieu: "Amphis A & B · Toukra", type: "Accompagnement", desc: "Informations sur le tutorat, la réorientation, les examens de rattrapage." },
    ],
  },
  {
    periode: "Novembre 2024",
    list: [
      { dates: "4 nov.", nom: "Défense Livrables ERASMUS+ DIGILMD", lieu: "Amphi numérique F1 · FSEA", type: "International", desc: "Présentation des MOOC, labellisation UE, rapports de mobilité." },
      { dates: "12–13 nov.", nom: "Journée « Femmes & Sciences »", lieu: "Faculté des Sciences · Campus Toukra", type: "Égalité", desc: "Conférences, portraits, ateliers, mentorat pour jeunes filles scientifiques." },
      { dates: "20–22 nov.", nom: "Semaine de la Recherche · Poster Day", lieu: "Hall FSEA et Ardep-Djoumal", type: "Recherche", desc: "250 posters de master & thèse, prix du meilleur poster jeune chercheur." },
      { dates: "26–28 nov.", nom: "Examen national d'aptitude aux études de médecine", lieu: "Faculté de Médecine · Farcha", type: "Concours", desc: "2 800 candidats — épreuves écrites & orales (200 places)." },
    ],
  },
  {
    periode: "Décembre 2024",
    list: [
      { dates: "2 déc.", nom: "Clôture des appels à projets internes", lieu: "Service Recherche · A-118", type: "Projets", desc: "Dépôt des dossiers finaux pour les financements propres (800 M FCFA)." },
      { dates: "9–13 déc.", nom: "Partiels du 1er semestre (L1, L2, M1, M2)", lieu: "Tous les campus", type: "Examens", desc: "Session principale — délai de consultation des notes jusqu'au 20 déc." },
      { dates: "16 déc.", nom: "Soirée de gala du Sport Universitaire", lieu: "Toukra · Salle polyvalente", type: "Sport", desc: "Trophées des équipes championnes, foot, basket, athlétisme, volley." },
      { dates: "19 déc.", nom: "Cérémonie des lauréats de l'année", lieu: "Amphi Central · Toukra", type: "Cérémonie", desc: "Diplômes d'honneur, prix de mérite enseignants & étudiants, bourses excellence." },
    ],
  },
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

export default function CalendrierAcademique() {
  return (
    <div style={{ background: PARCHMENT }} className="min-h-screen">
      {/* EN-TÊTE */}
      <section
        className="py-16 px-4 md:px-[50px]"
        style={{ background: `linear-gradient(180deg, ${NAVY_DEEP} 0%, ${NAVY} 100%)` }}
      >
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.2em] text-xs mb-3" style={{ color: GOLD }}>
            Vie académique
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ color: GOLD, fontFamily: "Georgia, serif" }}
          >
            Calendrier académique
          </h1>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
            Inscriptions, rentrées, examens, stages, conférences et cérémonies :
            retrouvez les 30+ échéances qui structurent l'année universitaire
            2024–2025, mois par mois, pour tous les niveaux et tous les campus.
          </p>
        </div>
      </section>

      {/* I. VUE D'ENSEMBLE */}
      <section className="max-w-5xl mx-auto px-4 pt-14 pb-4">
        <SectionHeading roman="I." title="Vue d'ensemble" />
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 pt-2">
          {STATS.map((s) => (
            <div
              key={s.k}
              className="bg-white p-6 text-center"
              style={{
                boxShadow: SHADOW,
                border: `1px solid ${LINE}`,
                borderTop: `3px solid ${GOLD}`,
                backgroundImage: `linear-gradient(160deg, #ffffff 0%, ${PARCHMENT} 100%)`,
              }}
            >
              <p className="text-xs uppercase tracking-wider mb-2" style={{ color: INK_SOFT, fontFamily: FONT }}>
                {s.k}
              </p>
              <p className="text-2xl font-bold" style={{ color: NAVY, fontFamily: FONT }}>
                {s.v}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* II. CALENDRIER — month blocks styled like the Jalons timeline */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <SectionHeading roman="II." title="Échéances 2024–2025" />
        <div className="space-y-10 pt-2">
          {CALENDRIER_2024_25.map((mois) => (
            <div key={mois.periode}>
              <div className="flex items-baseline gap-3 mb-3">
                <div className="font-bold" style={{ color: NAVY, fontFamily: FONT, fontSize: "22px" }}>
                  {mois.periode}
                </div>
                <div className="flex-1" style={{ height: 1, background: LINE }} />
              </div>
              <div className="bg-white" style={{ boxShadow: SHADOW, border: `1px solid ${LINE}` }}>
                {mois.list.map((ev, i) => (
                  <div
                    key={ev.nom}
                    className="grid md:grid-cols-[0.8fr_1.5fr_1fr_1.8fr_0.9fr] gap-4 px-6 py-5 items-start"
                    style={{
                      borderBottom: i !== mois.list.length - 1 ? `1px solid ${LINE}` : "none",
                      background: i % 2 === 0 ? "transparent" : "rgba(198,161,91,0.045)",
                    }}
                  >
                    <div>
                      <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: INK_SOFT, fontFamily: FONT }}>Dates</p>
                      <p className="font-semibold text-sm" style={{ color: GOLD, fontFamily: FONT }}>{ev.dates}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: INK_SOFT, fontFamily: FONT }}>Échéance</p>
                      <p className="font-semibold text-sm leading-snug" style={{ color: NAVY, fontFamily: FONT }}>{ev.nom}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: INK_SOFT, fontFamily: FONT }}>Lieu</p>
                      <p className="text-sm leading-relaxed" style={{ color: INK_SOFT, fontFamily: FONT }}>{ev.lieu}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: INK_SOFT, fontFamily: FONT }}>Détail</p>
                      <p className="text-sm leading-relaxed" style={{ color: INK_SOFT, fontFamily: FONT }}>{ev.desc}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: INK_SOFT, fontFamily: FONT }}>Type</p>
                      <span
                        className="inline-block px-2.5 py-1 text-xs font-semibold mt-0.5"
                        style={{ background: PARCHMENT_ALT, color: NAVY, border: `1px solid ${LINE}`, fontFamily: FONT }}
                      >
                        {ev.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}