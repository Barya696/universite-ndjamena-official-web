import { BRAND } from "../../Utils/brand";

const NAVY = BRAND.navy;
const GOLD = BRAND.gold;

const NOUVELLES = [
  {
    date: "2024-06-18",
    titre: "Résultats du Baccalauréat 2024 : taux de réussite en hausse",
    extrait: "L'UDN félicite les nouveaux bacheliers et annonce l'ouverture des inscriptions dès le 1er juillet.",
    categorie: "Actualités académiques",
  },
  {
    date: "2024-06-10",
    titre: "Conférence internationale sur le développement durable au Sahel",
    extrait: "Du 15 au 17 juin, 12 pays réunis autour des enjeux climatiques du bassin du lac Tchad.",
    categorie: "Recherche",
  },
  {
    date: "2024-05-28",
    titre: "Co-diplômation avec l'Université de Bordeaux",
    extrait: "Un partenariat stratégique ouvre des doubles diplômes en droit et sciences de l'environnement.",
    categorie: "International",
  },
  {
    date: "2024-05-15",
    titre: "Programme de bourses d'excellence 2024–2025",
    extrait: "50 bourses de mérite intégrales pour les étudiants tchadiens inscrits en Master.",
    categorie: "Bourses",
  },
];

const EVENEMENTS = [
  { date: "1–5 juil.", nom: "Inscriptions Licence 1", lieu: "Campus Toukra" },
  { date: "15 juil.", nom: "Journée Portes Ouvertes", lieu: "Tous les campus" },
  { date: "2 sept.", nom: "Rentrée académique", lieu: "Amphi Central" },
  { date: "18–20 sept.", nom: "Colloque Langues nationales", lieu: "Ardep-Djoumal" },
  { date: "14 oct.", nom: "Forum Emploi & Entrepreneuriat", lieu: "Campus Toukra" },
  { date: "20–22 nov.", nom: "Semaine de la Recherche", lieu: "FSEA, Toukra" },
];

export default function Nouvelles_Evenements() {
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
            Actualités & Événements
          </h1>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            Toute l'actualité de l'Université de N'Djamena et son agenda académique.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h2
            className="text-2xl font-bold mb-6 pb-2"
            style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
          >
            Dernières actualités
          </h2>
          <div style={{ borderTop: "1px solid #e6e8ea" }}>
            {NOUVELLES.map((n, i) => (
              <article
                key={i}
                className="py-4"
                style={{ borderBottom: i < NOUVELLES.length - 1 ? "1px solid #e6e8ea" : "none" }}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-28">
                    <div
                      className="text-xs font-semibold mb-1 px-2 py-1 rounded inline-block"
                      style={{ background: "#e8f0f8", color: NAVY }}
                    >
                      {n.categorie}
                    </div>
                    <div className="text-xs text-[#646464]" style={{ fontFamily: "monospace" }}>
                      {n.date}
                    </div>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="font-semibold hover:underline text-[15px] leading-snug block mb-1"
                      style={{ color: NAVY }}
                    >
                      {n.titre}
                    </a>
                    <p className="text-sm text-[#646464] leading-relaxed">
                      {n.extrait}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div>
          <h2
            className="text-2xl font-bold mb-6 pb-2"
            style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
          >
            Agenda académique
          </h2>
          <div style={{ borderTop: "1px solid #e6e8ea" }}>
            {EVENEMENTS.map((e, i) => (
              <div
                key={i}
                className="py-3"
                style={{ borderBottom: i < EVENEMENTS.length - 1 ? "1px solid #e6e8ea" : "none" }}
              >
                <div className="text-xs mb-1 font-semibold" style={{ color: GOLD }}>
                  {e.date}
                </div>
                <a href="#" className="font-semibold text-sm leading-snug block mb-1" style={{ color: NAVY }}>
                  {e.nom}
                </a>
                <div className="text-xs text-[#646464]">{e.lieu}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
