import { BRAND } from "../../Utils/brand";

const NAVY = BRAND.navy;
const GOLD = BRAND.gold;

const JALONS = [
  { annee: "1971", titre: "Fondation", texte: "Création de l'Université de N'Djamena (alors Université du Tchad), première université publique du pays, par décret n°015/PR/MESRS." },
  { annee: "1972", titre: "Premières promotions", texte: "Ouverture des trois premières facultés : Lettres, Droit, et Sciences Économiques. 600 étudiants inscrits à la rentrée." },
  { annee: "1978", titre: "Faculté des Sciences Exactes", texte: "Création de la FSEA (Faculté des Sciences Exactes et Appliquées) au campus de Toukra." },
  { annee: "1985", titre: "Institut Supérieur Pédagogique", texte: "Mise en place de l'ISP pour la formation des enseignants du secondaire et du supérieur." },
  { annee: "1990", titre: "Faculté de Médecine", texte: "Création de la Faculté de Médecine et des Sciences de la Santé sur le campus de Farcha, avec l'appui de la coopération française." },
  { annee: "1998", titre: "Autonomie", texte: "L'université acquiert le statut d'Établissement Public à Caractère Scientifique et Technologique (EPST)." },
  { annee: "2005", titre: "Réforme LMD", texte: "Adoption du système Licence-Master-Doctorat, alignant les formations sur les standards internationaux." },
  { annee: "2012", titre: "École Doctorale", texte: "Création de l'École Doctorale unique pour structurer la recherche et le troisième cycle." },
  { annee: "2021", titre: "Cinquantenaire", texte: "12 facultés et instituts, 3 campus, plus de 30 000 étudiants et 1 200 enseignants-chercheurs." },
];

export default function HistoireMission() {
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
            Histoire & Mission
          </h1>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
            Depuis 1971, l'Université de N'Djamena construit son héritage de formation,
            de recherche et de service à la nation tchadienne.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2
          className="text-2xl font-bold mb-6 pb-2"
          style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
        >
          Notre Mission
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              t: "Former",
              d: "Former des citoyens éclairés, des cadres compétents et des professionnels capables de relever les défis du Tchad et du continent africain.",
            },
            {
              t: "Produire",
              d: "Produire des connaissances de qualité adaptées aux réalités sahéliennes et contribuer à la communauté scientifique internationale.",
            },
            {
              t: "Servir",
              d: "Mettre l'expertise de l'université au service du développement local, de la souveraineté nationale et de l'épanouissement des populations.",
            },
          ].map((b) => (
            <div
              key={b.t}
              className="p-6 rounded-lg border"
              style={{ background: "#f8fafc", borderColor: "#e2e8f0" }}
            >
              <h3 className="text-xl font-bold mb-3" style={{ color: GOLD, fontFamily: "Georgia, serif" }}>
                {b.t}
              </h3>
              <p className="text-[#444] leading-relaxed text-sm">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#f6f6f6" }} className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-2xl font-bold mb-8"
            style={{ color: NAVY, fontFamily: "Georgia, serif" }}
          >
            Nos valeurs
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              "Excellence académique",
              "Rigueur scientifique",
              "Intégrité",
              "Ouverture internationale",
              "Engagement sociétal",
              "Diversité & inclusion",
              "Promotion des cultures nationales",
              "Innovation & créativité",
            ].map((v) => (
              <div
                key={v}
                className="rounded-lg p-4 text-center text-sm font-semibold border"
                style={{
                  color: NAVY,
                  background: "#fff",
                  borderTop: `3px solid ${GOLD}`,
                  borderColor: "#e2e8f0",
                  fontFamily: "Georgia, serif",
                }}
              >
                {v}
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
          {JALONS.map((h) => (
            <div
              key={h.annee}
              className="flex gap-5 p-4 rounded-lg border"
              style={{ borderColor: "#e2e8f0", background: "#fff" }}
            >
              <div
                className="text-xl font-bold shrink-0 w-24 text-center py-2 rounded self-start"
                style={{ color: "#fff", background: NAVY, fontFamily: "Georgia, serif" }}
              >
                {h.annee}
              </div>
              <div>
                <h4 className="font-bold mb-1" style={{ color: NAVY }}>{h.titre}</h4>
                <p className="text-[#444] leading-relaxed">{h.texte}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
