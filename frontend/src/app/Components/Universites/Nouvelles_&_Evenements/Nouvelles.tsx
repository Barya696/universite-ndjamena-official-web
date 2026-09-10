import { BRAND } from "../../Utils/brand";

const NAVY = BRAND.navy;
const GOLD = BRAND.gold;

const NOUVELLES = [
  {
    date: "18 juin 2024",
    titre: "Résultats du Baccalauréat 2024 : taux de réussite en hausse à N'Djamena",
    extrait:
      "L'Université de N'Djamena félicite les nouveaux bacheliers. Le taux global de réussite sur l'académie atteint 68,2 %, soit +4 points par rapport à 2023. Les inscriptions en Licence 1 sont ouvertes dès le 1er juillet sur inscription.undt.edu.td.",
    categorie: "Actualités académiques",
    image_prompt: "cérémonie de remise de diplômes universitaire en Afrique, étudiants souriants, amphithéâtre, décor drapeaux tchadiens",
  },
  {
    date: "10 juin 2024",
    titre: "Conférence internationale sur le développement durable au Sahel : 12 pays réunis",
    extrait:
      "Du 15 au 17 juin prochains, l'UDN accueille le Colloque International Sahel 2024, placé sous le haut patronage du Président de la République. Seront abordés : climat, bassin du Lac Tchad, énergies renouvelables, résilience agro-pastorale.",
    categorie: "Recherche",
    image_prompt: "conférence internationale universitaire, panneau de discussion avec orateurs, salle de congrès moderne, public attentif, Afrique",
  },
  {
    date: "28 mai 2024",
    titre: "Co-diplômation UDN / Université de Bordeaux : signature des accords Droit & Environnement",
    extrait:
      "Le recteur de l'UDN et le président de l'Université de Bordeaux ont signé à Paris les conventions de double diplôme en Master Droit de l'Environnement et Master Santé Publique. Effectifs : 15 places Droit / 12 places Santé, sélection sur dossier & entretien.",
    categorie: "International",
    image_prompt: "signature d'accords universitaire entre deux présidents, bureau, documents, drapeaux France et Tchad, presse et photographes",
  },
  {
    date: "15 mai 2024",
    titre: "Programme de bourses d'excellence 2024–2025 : 50 bourses intégrales pour le Master",
    extrait:
      "L'Université de N'Djamena, en partenariat avec le ministère de l'Enseignement supérieur et l'AFD, délivre 50 bourses d'excellence en Master Recherche et Professionnel. Candidatures jusqu'au 30 juin. Tous domaines confondus.",
    categorie: "Bourses",
    image_prompt: "étudiants universitaires africains en bibliothèque, souriants, ordinateurs portables, livre ouvert, lumière douce, architecture sahélienne",
  },
  {
    date: "02 mai 2024",
    titre: "Semaine de l'innovation : 12 prototypes étudiants primés (énergie, santé, numérique)",
    extrait:
      "La 3ème édition du Hackathon UDN INNOV récompense 12 équipes étudiantes pour leurs prototypes adaptés au Sahel : incubateur ACE-E2D, microgrid villageois, appli TALN pour le Sara et diagnostic paludisme par téléphone portable.",
    categorie: "Étudiants",
    image_prompt: "hackathon universitaire, jeunes étudiants africains devant écrans, cartables, prototypes tech, décoration couleurs université",
  },
  {
    date: "22 avril 2024",
    titre: "Réhabilitation Amphi 1 000 places + amphithéâtres numériques FSEA",
    extrait:
      "Les travaux de modernisation des amphithéâtres du campus de Toukra se poursuivent : écran 4K, vidéoprojecteurs laser, sonorisation, captation automatique des cours via la plateforme DIGILMD. Livraison prévue août 2024.",
    categorie: "Vie du campus",
    image_prompt: "amphithéâtre universitaire moderne vide, rangées de sièges en bois, écran géant, architecture intérieure lumineuse Afrique",
  },
  {
    date: "05 avril 2024",
    titre: "Rentrée des 85 nouveaux doctorants et 3 écoles doctorales conjointes",
    extrait:
      "Cérémonie officielle d'intégration des doctorants promotion 2024–2027, en présence des directeurs d'école doctorale. Accords avec Bordeaux, Yaoundé I et Niamey pour les cotutelles.",
    categorie: "Recherche",
    image_prompt: "cérémonie universitaire pour doctorants, chapeaux académiques, public debout, toges, salle d'honneur solennelle",
  },
  {
    date: "18 mars 2024",
    titre: "JPO / Journée Portes Ouvertes : 8 000 visiteurs attendus sur les 4 campus",
    extrait:
      "Rendez-vous le 15 juillet prochain sur les campus Toukra, Farcha, Ardep-Djoumal et Faculté d'Agronomie pour découvrir les 48 mentions de Licence, 36 de Master et 22 Écoles doctorales. Stand et orientation gratuits.",
    categorie: "Événements",
    image_prompt: "journée portes ouvertes universitaire, foule d'étudiants et parents, stands des facultés, campus ensoleillé, palmiers",
  },
];

const CATEGORIES = [
  "Toutes",
  "Actualités académiques",
  "Recherche",
  "International",
  "Bourses",
  "Étudiants",
  "Vie du campus",
  "Événements",
];

export default function Nouvelles() {
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
            Nouvelles
          </h1>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
            Toute l'actualité de l'Université de N'Djamena : rentrées, résultats,
            projets de recherche, international, partenariats, vie du campus et
            annonces importantes pour les étudiants et personnels.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-4 text-sm">
          {[
            { k: "Actualités publiées (2024)", v: "184" },
            { k: "Catégories", v: "8" },
            { k: "Abonnés newsletter", v: "22 500+" },
            { k: "Communiqués publiés", v: "39" },
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

      <section className="max-w-6xl mx-auto px-4 pb-10">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c, i) => (
            <button
              key={c}
              className="text-sm px-3 py-1.5 rounded-full transition"
              style={
                i === 0
                  ? { background: NAVY, color: "#fff", border: `1px solid ${NAVY}` }
                  : { background: "#fff", color: NAVY, border: "1px solid #cbd5e1" }
              }
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-16 grid md:grid-cols-2 gap-6">
        {NOUVELLES.map((n) => (
          <article
            key={n.titre}
            className="rounded-lg border overflow-hidden hover:shadow-md transition"
            style={{ borderColor: "#e2e8f0", background: "#fff" }}
          >
            <div
              className="h-44 w-full bg-center bg-cover"
              style={{
                backgroundImage: `url(https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
                  n.image_prompt
                )}&image_size=landscape_16_9)`,
              }}
            />
            <div className="p-5 space-y-3">
              <div className="flex items-center justify-between gap-3">
                <span
                  className="text-xs font-semibold px-2 py-1 rounded inline-block"
                  style={{ background: "#e8f0f8", color: NAVY }}
                >
                  {n.categorie}
                </span>
                <span className="text-xs text-[#646464]" style={{ fontFamily: "monospace" }}>{n.date}</span>
              </div>
              <a
                href="#"
                className="font-bold text-[16px] leading-snug block hover:underline"
                style={{ color: NAVY, fontFamily: "Georgia, serif" }}
              >
                {n.titre}
              </a>
              <p className="text-sm text-[#646464] leading-relaxed">{n.extrait}</p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm font-semibold"
                style={{ color: GOLD }}
              >
                Lire la suite →
              </a>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
