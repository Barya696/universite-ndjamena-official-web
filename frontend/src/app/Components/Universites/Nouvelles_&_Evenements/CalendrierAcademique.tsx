import { BRAND } from "../../Utils/brand";

const NAVY = BRAND.navy;
const GOLD = BRAND.gold;

const EVENEMENTS_2024_25 = [
  {
    periode: "Juillet 2024",
    color: "#1f4e82",
    list: [
      { dates: "1–5 juillet", nom: "Inscriptions Licence 1 · Concours nationaux", lieu: "Campus Toukra · Amphis A, B, C", type: "Inscriptions", desc: "Dépôt des dossiers, épreuves écrites, publication des admis Licence 1." },
      { dates: "8 juillet", nom: "Réunion de rentrée des enseignants-chercheurs", lieu: "Salle des conseils · Campus Toukra", type: "Personnels", desc: "Programmation annuelle des enseignements et répartition des services." },
      { dates: "15 juillet", nom: "Journée Portes Ouvertes (JPO)", lieu: "4 campus (Toukra, Farcha, Ardep, Agronomie)", type: "Grand public", desc: "8 000 visiteurs attendus, 48 stands Licences/ Masters & Écoles doctorales." },
      { dates: "18–25 juillet", nom: "Summer School « Sahel Climat » · ERASMUS+", lieu: "Campus Ardep-Djoumal · Amphi vert", type: "International", desc: "60 étudiants venus de 14 pays — ateliers SIG, modélisation, terrain Lac Tchad." },
    ],
  },
  {
    periode: "Août 2024",
    color: "#2a6696",
    list: [
      { dates: "1–8 août", nom: "Réhabilitation Amphi numériques — livraison", lieu: "FSEA, Faculté de Droit, Campus Toukra", type: "Infrastructures", desc: "Captation automatique, 4K, sonorisation, fibre jusqu'aux salles." },
      { dates: "12–16 août", nom: "Formation pédagogique DIGILMD · 240 enseignants", lieu: "CRN · Centre de Ressources Numériques", type: "Formation", desc: "Ateliers Moodle, quiz, classes inversées, réalisation de capsules vidéo." },
      { dates: "22 août", nom: "Cérémonie d'accueil des étudiants internationaux", lieu: "Restaurant universitaire · Toukra", type: "International", desc: "Présentation des services, parrainages étudiants, cours FLE." },
      { dates: "26–30 août", nom: "Rentrée des Masters · réunions de mention", lieu: "Tous les campus", type: "Masters & Doctorats", desc: "Présentation des parcours, des stages & projets de fin d'études." },
    ],
  },
  {
    periode: "Septembre 2024",
    color: "#2f6c9c",
    list: [
      { dates: "2 sept.", nom: "Rentrée académique 2024–2025 · Tous les niveaux", lieu: "Amphi Central · 1 000 places · Campus Toukra", type: "Officiel", desc: "Allocution du Recteur, représentants des ministries, associations étudiantes." },
      { dates: "6–8 sept.", nom: "Forum des associations & clubs étudiants", lieu: "Esplanade centrale · Toukra", type: "Vie étudiante", desc: "45 clubs (débats, théâtre, robotique, développement, sports, journal…)." },
      { dates: "18–20 sept.", nom: "Colloque Langues nationales tchadiennes", lieu: "Ardep-Djoumal · Faculté des Lettres", type: "Recherche", desc: "LAELIS — 140 communications, expositions corpus oraux, Inalco." },
      { dates: "24 sept.", nom: "Réunion des directeurs de laboratoires", lieu: "Bâtiment A · A-118 · Service Recherche", type: "Recherche", desc: "Appels à projets ACE-E2D, ERASMUS+, évaluation des axes." },
    ],
  },
  {
    periode: "Octobre 2024",
    color: "#285e8f",
    list: [
      { dates: "7–11 oct.", nom: "Semaines d'entretien de stage Licence Pro", lieu: "Bureaux stages · chaque faculté", type: "Stages", desc: "Validation des conventions, répartition des maîtres de stage." },
      { dates: "14 oct.", nom: "Forum Emploi & Entrepreneuriat UDN", lieu: "Esplanade Toukra · 60 stands", type: "Insertion", desc: "40 entreprises & cabinets nationaux et internationaux recrutent : stages & CDD." },
      { dates: "18–19 oct.", nom: "Hackathon Santé & IA · UDN x LaBRI (Bordeaux)", lieu: "FSEA · Salle informatique 3", type: "Innovation", desc: "Détection du paludisme, segmentation IRM, LLM en arabe tchadien." },
      { dates: "28 oct.", nom: "Rencontre parents-étudiants — Licence 1", lieu: "Amphis A & B · Toukra", type: "Accompagnement", desc: "Informations sur le tutorat, la réorientation, les examens de rattrapage." },
    ],
  },
  {
    periode: "Novembre 2024",
    color: "#275a8a",
    list: [
      { dates: "4 nov.", nom: "Défense Livrables ERASMUS+ DIGILMD", lieu: "Amphi numérique F1 · FSEA", type: "International", desc: "Présentation des MOOC, labellisation UE, rapports de mobilité." },
      { dates: "12–13 nov.", nom: "Journée « Femmes & Sciences »", lieu: "Faculté des Sciences · Campus Toukra", type: "Égalité", desc: "Conférences, portraits, ateliers, mentorat pour jeunes filles scientifiques." },
      { dates: "20–22 nov.", nom: "Semaine de la Recherche · Poster Day", lieu: "Hall FSEA et Ardep-Djoumal", type: "Recherche", desc: "250 posters de master & thèse, prix du meilleur poster jeune chercheur." },
      { dates: "26–28 nov.", nom: "Examen national d'aptitude aux études de médecine", lieu: "Faculté de Médecine · Farcha", type: "Concours", desc: "2 800 candidats — épreuves écrites & orales (200 places)." },
    ],
  },
  {
    periode: "Décembre 2024",
    color: "#235182",
    list: [
      { dates: "2 déc.", nom: "Clôture des appels à projets internes", lieu: "Service Recherche · A-118", type: "Projets", desc: "Dépôt des dossiers finaux pour les financements propres (800 M FCFA)." },
      { dates: "9–13 déc.", nom: "Partiels du 1er semestre (L1, L2, M1, M2)", lieu: "Tous les campus", type: "Examens", desc: "Session principale — délai de consultation des notes jusqu'au 20 déc." },
      { dates: "16 déc.", nom: "Soirée de gala du Sport Universitaire", lieu: "Toukra · Salle polyvalente", type: "Sport", desc: "Trophées des équipes championnes, foot, basket, athlétisme, volley." },
      { dates: "19 déc.", nom: "Cérémonie des lauréats de l'année", lieu: "Amphi Central · Toukra", type: "Cérémonie", desc: "Diplômes d'honneur, prix de mérite enseignants & étudiants, bourses excellence." },
    ],
  },
];

export default function Evenements() {
  return (
    <div className="bg-white min-h-screen">
      <section
        className="py-16 px-4 md:px-[50px]"
        style={{ background: `linear-gradient(180deg, ${BRAND.navyDeep} 0%, ${NAVY} 100%)` }}
      >
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.2em] text-xs mb-3" style={{ color: GOLD }}>
            Nouvelles &amp; Événements
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ color: GOLD, fontFamily: "Georgia, serif" }}
          >
            Événements
          </h1>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
            Conférences, colloques, portes ouvertes, forums emploi, journées
            culturelles, cérémonies, hackathons : retrouvez les 30+ rendez-vous
            phares de l'année universitaire 2024–2025, mois par mois.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-4 text-sm">
          {[
            { k: "Événements labellisés / an", v: "36" },
            { k: "Participants (estimation)", v: "85 000" },
            { k: "Conférences internationales", v: "9" },
            { k: "Événements grand public", v: "12" },
          ].map((s) => (
            <div
              key={s.k}
              className="p-4 rounded-lg border text-center"
              style={{ background: "#f8fafc", borderTop: `3px solid ${GOLD}`, borderColor: "#e2e8f0" }}
            >
              <p className="text-xs uppercase tracking-wider text-[#646464] mb-1">{s.k}</p>
              <p className="text-xl font-bold" style={{ color: NAVY, fontFamily: "Georgia, serif" }}>{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-16 space-y-8">
        {EVENEMENTS_2024_25.map((mois) => (
          <article key={mois.periode} className="rounded-lg border overflow-hidden" style={{ borderColor: "#e2e8f0" }}>
            <div className="px-6 py-5" style={{ background: mois.color }}>
              <h2 className="font-bold text-white text-lg md:text-xl" style={{ fontFamily: "Georgia, serif" }}>
                {mois.periode}
              </h2>
            </div>
            <div className="bg-white divide-y divide-gray-100">
              {mois.list.map((ev) => (
                <div
                  key={ev.nom}
                  className="grid md:grid-cols-[0.9fr_1.5fr_0.9fr_1.8fr_1fr] gap-3 px-5 py-4 text-sm items-start"
                >
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#8a8a8a] mb-1">Dates</p>
                    <p className="font-semibold" style={{ color: GOLD, fontFamily: "Georgia, serif" }}>{ev.dates}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#8a8a8a] mb-1">Événement</p>
                    <p className="font-semibold leading-snug" style={{ color: NAVY }}>{ev.nom}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#8a8a8a] mb-1">Lieu</p>
                    <p className="text-[#444] leading-relaxed">{ev.lieu}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#8a8a8a] mb-1">Détail</p>
                    <p className="text-[#555] leading-relaxed">{ev.desc}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#8a8a8a] mb-1">Type</p>
                    <span
                      className="inline-block px-2.5 py-1 rounded text-xs font-semibold mt-1"
                      style={{ background: "rgba(200,168,75,0.12)", color: "#806724" }}
                    >
                      {ev.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
