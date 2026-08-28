import { BRAND } from "../Utils/brand";

const NAVY = BRAND.navy;
const GOLD = BRAND.gold;

const MEDIA_ITEMS = [
  {
    title: "Photos officielles",
    description: "Galerie photo des cérémonies de remise de diplômes, journées portes ouvertes et événements institutionnels.",
    icon: "📷",
  },
  {
    title: "Vidéos institutionnelles",
    description: "Reportages, interviews de chercheurs et présentations des campus de Toukra, Farcha et Ardep-Djoumal.",
    icon: "🎬",
  },
  {
    title: "Communiqués de presse",
    description: "Dossier de presse, actualités médiatiques et prises de parole de la direction de l'université.",
    icon: "📰",
  },
  {
    title: "Podcasts & conférences",
    description: "Enregistrements audio des colloques, conférences publiques et tables rondes organisés par l'UDN.",
    icon: "🎙️",
  },
];

export default function Media() {
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
            Médiathèque
          </h1>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            Ressources audiovisuelles et médiatiques de l'Université de N'Djamena.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {MEDIA_ITEMS.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-lg border p-6 transition-shadow hover:shadow-lg"
              style={{ borderColor: "#e2e8f0", borderTop: `4px solid ${GOLD}` }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h2
                className="text-xl font-bold mb-2"
                style={{ color: NAVY, fontFamily: "Georgia, serif" }}
              >
                {item.title}
              </h2>
              <p className="text-[#646464] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
