import { BRAND } from "../../Utils/brand";

const NAVY = BRAND.navy;
const GOLD = BRAND.gold;

const HISTORIQUE = [
  { annee: "1971", evenement: "Création de l'Université de N'Djamena, première université du Tchad." },
  { annee: "1978", evenement: "Ouverture de la Faculté des Sciences Exactes et Appliquées (FSEA)." },
  { annee: "1990", evenement: "Création de la Faculté de Médecine et des Sciences de la Santé sur le campus de Farcha." },
  { annee: "2005", evenement: "Mise en place du système LMD (Licence-Master-Doctorat) aligné sur les standards internationaux." },
  { annee: "2021", evenement: "Célébration du cinquantenaire de l'université : 30 000 étudiants et 12 facultés." },
];

const CHIFFRES = [
  { valeur: "30 000+", libelle: "Étudiants inscrits" },
  { valeur: "1 200", libelle: "Enseignants-chercheurs" },
  { valeur: "12", libelle: "Facultés & Instituts" },
  { valeur: "3", libelle: "Campus (Toukra, Farcha, Ardep-Djoumal)" },
];

export default function A_propos() {
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
            L'Université
          </h1>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            Depuis 1971, l'Université de N'Djamena forme les cadres de la nation tchadienne.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12">
        <div>
          <h2
            className="text-2xl font-bold mb-4 pb-2"
            style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
          >
            Mission & Valeurs
          </h2>
          <p className="text-[#444] leading-relaxed mb-4">
            L'Université de N'Djamena a pour mission de former des citoyens éclairés,
            de produire des connaissances adaptées aux défis du Sahel et de contribuer
            au développement durable du Tchad.
          </p>
          <ul className="space-y-2 text-[#444]">
            <li>✦ Excellence académique et rigueur scientifique</li>
            <li>✦ Ouverture internationale et partenariats</li>
            <li>✦ Engagement sociétal et développement local</li>
            <li>✦ Promotion des langues et cultures nationales</li>
          </ul>
        </div>

        <div>
          <h2
            className="text-2xl font-bold mb-4 pb-2"
            style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
          >
            Gouvernance
          </h2>
          <p className="text-[#444] leading-relaxed mb-4">
            L'UDN est administrée par un Recteur assisté de trois Vice-Recteurs,
            un Conseil d'Administration et un Conseil Scientifique.
          </p>
          <div
            className="rounded-lg p-5 border"
            style={{ background: "#f8fafc", borderColor: "#e2e8f0" }}
          >
            <p className="text-sm font-semibold mb-2" style={{ color: NAVY }}>
              Recteur : Pr. (à nommer)
            </p>
            <p className="text-sm text-[#646464]">
              Secrétariat Général : +235 22 51 44 52
            </p>
            <p className="text-sm text-[#646464]">
              Email : rectorat@undt.edu.td
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "#f6f6f6" }} className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-2xl font-bold mb-8 text-center"
            style={{ color: NAVY, fontFamily: "Georgia, serif" }}
          >
            Chiffres clés
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {CHIFFRES.map((c) => (
              <div
                key={c.libelle}
                className="text-center bg-white rounded-lg p-5 border"
                style={{ borderTop: `4px solid ${GOLD}` }}
              >
                <div
                  className="text-3xl font-bold mb-2"
                  style={{ color: NAVY, fontFamily: "Georgia, serif" }}
                >
                  {c.valeur}
                </div>
                <div className="text-sm text-[#646464]">{c.libelle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2
          className="text-2xl font-bold mb-6 pb-2"
          style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
        >
          Jalons historiques
        </h2>
        <div className="space-y-4">
          {HISTORIQUE.map((h) => (
            <div
              key={h.annee}
              className="flex gap-5 p-4 rounded-lg border"
              style={{ borderColor: "#e2e8f0", background: "#fff" }}
            >
              <div
                className="text-xl font-bold shrink-0 w-20 text-center py-1 rounded"
                style={{ color: "#fff", background: NAVY, fontFamily: "Georgia, serif" }}
              >
                {h.annee}
              </div>
              <p className="text-[#444] leading-relaxed self-center">{h.evenement}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
