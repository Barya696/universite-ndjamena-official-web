import { BRAND } from "../../Utils/brand";

const NAVY = BRAND.navy;
const GOLD = BRAND.gold;

const SERVICES = [
  {
    titre: "Accueil & intégration",
    icone: "🤝",
    detail: [
      "Accueil personnalisé à l'aéroport et dans les cités U",
      "Journée d'orientation : campus, services, vie pratique",
      "Tutorat parrainage par un étudiant tchadien",
      "Cours de français langue étrangère (FLE) intensifs",
    ],
  },
  {
    titre: "Logement & restauration",
    icone: "🏠",
    detail: [
      "Places réservées en cité universitaire Toukra & Farcha",
      "Restaurants universitaires à 300 FCFA le repas",
      "Cafétéria, épicerie, laverie dans chaque cité",
      "Service médical polyclinique sur chaque campus",
    ],
  },
  {
    titre: "Scolarité & documents",
    icone: "📋",
    detail: [
      "Bureau de la Coopération International (BCI) dédié",
      "Équivalences de diplômes & inscriptions administratives",
      "Convention de stage, certificats de scolarité",
      "Aide aux démarches de visa et de carte de séjour",
    ],
  },
  {
    titre: "Vie étudiante & culturelle",
    icone: "🎭",
    detail: [
      "Club des étudiants internationaux (CEI)",
      "Festival des cultures africaines chaque semestre",
      "Sorties découvertes : N'Djamena, Lac Tchad, musée",
      "Activités sportives inter-facultés ouvertes à tous",
    ],
  },
];

const PAYS = [
  { pays: "🇨🇲 Cameroun", effectif: 380 },
  { pays: "🇳🇪 Niger", effectif: 260 },
  { pays: "🇨🇫 RCA", effectif: 210 },
  { pays: "🇨🇬 Congo", effectif: 175 },
  { pays: "🇬🇦 Gabon", effectif: 130 },
  { pays: "🇸🇩 Soudan", effectif: 95 },
  { pays: "🇳🇬 Nigeria", effectif: 85 },
  { pays: "🇫🇷 France", effectif: 60 },
  { pays: "🇧🇪 Belgique", effectif: 40 },
  { pays: "🇦🇺 Autres", effectif: 65 },
];

export default function EtudiantsInternationaux() {
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
            International
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ color: GOLD, fontFamily: "Georgia, serif" }}
          >
            Étudiants internationaux
          </h1>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
            Chaque année, 1 500 étudiants venus de 18 pays d'Afrique et d'Europe
            choisissent l'Université de N'Djamena. L'UDN met tout en œuvre pour
            leur offrir un accueil chaleureux et des conditions d'études optimales.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-4 text-sm">
          {[
            { k: "Étudiants internationaux", v: "1 500" },
            { k: "Pays représentés", v: "18" },
            { k: "Places en cité U réservées", v: "850" },
            { k: "Cours FLE / semestre", v: "4" },
          ].map((s) => (
            <div
              key={s.k}
              className="p-4 rounded-lg border text-center"
              style={{ background: "#f8fafc", borderTop: `3px solid ${GOLD}`, borderColor: "#e2e8f0" }}
            >
              <p className="text-xs uppercase tracking-wider text-[#646464] mb-1">{s.k}</p>
              <p className="text-xl font-bold" style={{ color: NAVY, fontFamily: "Georgia, serif" }}>
                {s.v}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-12">
        <h2
          className="text-2xl font-bold mb-6 pb-2 inline-block"
          style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
        >
          Origine géographique 2024
        </h2>
        <div className="rounded-lg border overflow-hidden" style={{ borderColor: "#e2e8f0" }}>
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100 bg-white">
            {PAYS.map((p) => (
              <div
                key={p.pays}
                className="flex items-center justify-between px-5 py-3.5 text-sm"
              >
                <span className="font-medium" style={{ color: NAVY }}>{p.pays}</span>
                <div className="flex items-center gap-3">
                  <div
                    className="h-2 rounded-full"
                    style={{
                      width: `${(p.effectif / 380) * 160}px`,
                      background: `linear-gradient(90deg, ${GOLD}, rgba(200,168,75,0.35))`,
                    }}
                  />
                  <span className="text-[#646464] font-semibold w-12 text-right">{p.effectif}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-12">
        <h2
          className="text-2xl font-bold mb-6 pb-2 inline-block"
          style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
        >
          Services dédiés
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {SERVICES.map((s) => (
            <article
              key={s.titre}
              className="rounded-lg border overflow-hidden"
              style={{ borderColor: "#e2e8f0" }}
            >
              <div className="px-6 py-5 flex items-center gap-3" style={{ background: NAVY }}>
                <span className="text-2xl">{s.icone}</span>
                <h3 className="font-bold text-white text-lg" style={{ fontFamily: "Georgia, serif" }}>
                  {s.titre}
                </h3>
              </div>
              <div className="p-6 bg-white">
                <ul className="space-y-2 text-sm text-[#444]">
                  {s.detail.map((d) => (
                    <li key={d} className="flex gap-2">
                      <span style={{ color: GOLD }}>✦</span>
                      <span className="leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section style={{ background: "#f6f6f6" }} className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div
            className="rounded-lg border p-6"
            style={{ background: "#fff", borderColor: "#e2e8f0" }}
          >
            <h3
              className="text-xl font-bold mb-3 pb-2 inline-block"
              style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
            >
              Calendrier d'inscription
            </h3>
            <ul className="space-y-2 text-sm text-[#444]">
              <li>✦ <strong style={{color: NAVY}}>1er mars</strong> — Ouverture des candidatures en ligne</li>
              <li>✦ <strong style={{color: NAVY}}>30 juin</strong> — Clôture des dossiers</li>
              <li>✦ <strong style={{color: NAVY}}>15 juillet</strong> — Publication des résultats d'admission</li>
              <li>✦ <strong style={{color: NAVY}}>1–15 sept.</strong> — Arrivée & accueil sur campus</li>
              <li>✦ <strong style={{color: NAVY}}>1er oct.</strong> — Rentrée académique</li>
            </ul>
          </div>
          <div
            className="rounded-lg border p-6"
            style={{ background: "#fff", borderColor: "#e2e8f0" }}
          >
            <h3
              className="text-xl font-bold mb-3 pb-2 inline-block"
              style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
            >
              Contact & démarches
            </h3>
            <ul className="space-y-2 text-sm text-[#444]">
              <li>✦ <strong style={{color: NAVY}}>Bureau de la Coopération International (BCI)</strong></li>
              <li>📍 Campus de Toukra — Bâtiment A, 1er étage</li>
              <li>✉ bci@undt.edu.td</li>
              <li>☎ +235 22 51 44 80 / 81</li>
              <li>🕐 Lundi–vendredi · 8h – 16h (pauses 12h–13h30)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
