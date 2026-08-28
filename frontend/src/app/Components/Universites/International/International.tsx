import { BRAND } from "../../Utils/brand";

const NAVY = BRAND.navy;
const GOLD = BRAND.gold;

const PARTENAIRES = [
  { nom: "Université de Bordeaux", pays: "🇫🇷 France", domaine: "Co-diplômation Droit & Environnement" },
  { nom: "Université de Montpellier", pays: "🇫🇷 France", domaine: "Santé tropicale & épidémiologie" },
  { nom: "Université de Niamey", pays: "🇳🇪 Niger", domaine: "Échanges étudiants (ERASMUS+)" },
  { nom: "Université de Yaoundé I", pays: "🇨🇲 Cameroun", domaine: "Recherche & laboratoires communs" },
  { nom: "Université du Caire", pays: "🇪🇬 Égypte", domaine: "Langues & sciences humaines" },
  { nom: "UNESCO", pays: "🌍 International", domaine: "Chaires UNESCO & patrimoine" },
];

const PROGRAMMES = [
  {
    titre: "Programmes d'échange",
    desc: "Plus de 250 étudiants par an partent en mobilité internationale grâce à ERASMUS+, le Partenariat Mondial et des accords bilatéraux.",
  },
  {
    titre: "Co-diplômations",
    desc: "7 doubles diplômes (Licence & Master) avec des universités françaises, camerounaises et nigériennes.",
  },
  {
    titre: "Étudiants internationaux",
    desc: "1 500 étudiants venus de 18 pays d'Afrique centrale et de l'Ouest sont accueillis chaque année à l'UDN.",
  },
  {
    titre: "Projets de recherche",
    desc: "30+ projets de recherche financés par l'Union Européenne, l'UNESCO, la Banque Mondiale et l'AUF.",
  },
];

export default function International() {
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
            International
          </h1>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            Ouverture sur le monde, partenariats et mobilité : l'UDN est connectée à 30+ institutions.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2
          className="text-2xl font-bold mb-6 pb-2"
          style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
        >
          Nos axes internationaux
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {PROGRAMMES.map((p) => (
            <div
              key={p.titre}
              className="bg-white rounded-lg border p-6"
              style={{ borderColor: "#e2e8f0", borderTop: `4px solid ${GOLD}` }}
            >
              <h3
                className="text-lg font-bold mb-2"
                style={{ color: NAVY, fontFamily: "Georgia, serif" }}
              >
                {p.titre}
              </h3>
              <p className="text-[#646464] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <h2
          className="text-2xl font-bold mb-6 pb-2"
          style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
        >
          Partenaires principaux
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {PARTENAIRES.map((p) => (
            <div
              key={p.nom}
              className="flex items-start gap-4 p-4 rounded-lg border"
              style={{ borderColor: "#e2e8f0", background: "#fff" }}
            >
              <div className="text-2xl">{p.pays.split(" ")[0]}</div>
              <div>
                <h4 className="font-bold text-[15px]" style={{ color: NAVY }}>
                  {p.nom}
                </h4>
                <p className="text-xs text-[#646464] mb-1">{p.pays}</p>
                <p className="text-sm text-[#444]">{p.domaine}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
