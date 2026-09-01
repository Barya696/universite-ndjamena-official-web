import { BRAND } from "../../Utils/brand";

const NAVY = BRAND.navy;
const GOLD = BRAND.gold;

const PROGRAMMES = [
  {
    titre: "ERASMUS+ (Union Européenne)",
    icone: "🇪🇺",
    detail: [
      "Mobilité sortante : 120 étudiants / an vers 35 universités européennes",
      "Mobilité entrante : 40 étudiants européens accueillis chaque semestre",
      "Mobilité enseignants & administratifs : crédits KA103 & KA107",
      "Projets de capacité KA2 : numérisation, LMD, gouvernance",
    ],
  },
  {
    titre: "Partenariat Mondial (AU + NEPAD)",
    icone: "🌍",
    detail: [
      "Échanges intra-africains : Université d'Abidjan, Legon, Nairobi, Dar es Salaam",
      "Programme Panafricain de Bourses de l'Union Africaine",
      "Réseau des Universités d'Afrique Centrale (RUSAC)",
      "Co-diplômations régionales & écoles doctorales conjointes",
    ],
  },
  {
    titre: "Bourses & financements",
    icone: "💰",
    detail: [
      "AUF — Bourses de master & de thèse dans l'espace francophone",
      "UNESCO — Chaires & bourses de recherche sahélienne",
      "Coopération française — Campus France & Service de Coopération",
      "Banque Mondiale — ACE Impact : centres d'excellence africains",
    ],
  },
  {
    titre: "Stages & terrains internationaux",
    icone: "🧳",
    detail: [
      "Stages longs (4–6 mois) dans des ONG, entreprises & administrations partenaires",
      "Terrains de recherche : lac Tchad, bassins du Chari & Logone, frontières soudano-sahéliennes",
      "Summer Schools : Bordeaux, Montpellier, Niamey, Yaoundé",
      "Programmes volontariat international (VIA, VSI, Service Civique)",
    ],
  },
];

const PARCOURS = [
  {
    type: "Semestre d'études (LICENCE)",
    duree: "4 – 6 mois",
    credits: "30 ECTS",
    destinations: "France, Belgique, Cameroun, Niger, Sénégal",
    bourses: "ERASMUS+, AUF, fonds propres",
  },
  {
    type: "Année d'études (MASTER)",
    duree: "9 mois",
    credits: "60 ECTS",
    destinations: "France, Égypte, Afrique du Sud, Nigeria",
    bourses: "AU, Campus France, BCE",
  },
  {
    type: "Stage professionnel court",
    duree: "2 – 3 mois",
    credits: "15 ECTS",
    destinations: "18 pays africains & européens",
    bourses: "ERASMUS+ Stages, AUF",
  },
  {
    type: "Double diplôme Master",
    duree: "2 ans (M1 + M2)",
    credits: "120 ECTS",
    destinations: "Bordeaux, Montpellier, Yaoundé I, Niamey",
    bourses: "ACE Impact, AUF, AU",
  },
  {
    type: "Thèse en codirection",
    duree: "3 ans",
    credits: "Diplôme conjoint",
    destinations: "France, Cameroun, Niger, Égypte",
    bourses: "Bourses de thèse gouvernementales & CNRS",
  },
];

export default function ProgrammesEchange() {
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
            Programmes d'échange
          </h1>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
            Plus de 250 étudiants par an partent en mobilité grâce à des programmes
            financés par l'Union Européenne, l'Union Africaine, l'UNESCO et l'AUF.
            Que ce soit pour un semestre, un stage ou un double diplôme, l'UDN
            accompagne chaque étudiant dans son projet international.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-4 text-sm">
          {[
            { k: "Étudiants en mobilité / an", v: "250+" },
            { k: "Universités partenaires", v: "35+" },
            { k: "Pays de destination", v: "18" },
            { k: "Places financées ERASMUS+", v: "160" },
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
          Types de parcours
        </h2>
        <article className="rounded-lg border overflow-hidden" style={{ borderColor: "#e2e8f0" }}>
          <div className="px-5 py-4" style={{ background: NAVY }}>
            <h2 className="font-bold text-white text-lg" style={{ fontFamily: "Georgia, serif" }}>
              Offre de mobilité LMD
            </h2>
          </div>
          <div className="bg-white divide-y divide-gray-100">
            {PARCOURS.map((p) => (
              <div
                key={p.type}
                className="grid md:grid-cols-[1.4fr_0.8fr_0.9fr_1.4fr_1.3fr] gap-3 px-5 py-3.5 text-sm items-center"
              >
                <div className="font-semibold" style={{ color: NAVY }}>{p.type}</div>
                <div className="text-[#444]">{p.duree}</div>
                <div className="text-[#444]">{p.credits}</div>
                <div className="text-[#444]">{p.destinations}</div>
                <div className="text-[#444]">
                  <span
                    className="inline-block px-2 py-0.5 rounded text-xs"
                    style={{ background: "rgba(200,168,75,0.12)", color: "#806724" }}
                  >
                    {p.bourses}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-12">
        <h2
          className="text-2xl font-bold mb-6 pb-2 inline-block"
          style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
        >
          Programmes clés
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {PROGRAMMES.map((p) => (
            <article
              key={p.titre}
              className="rounded-lg border overflow-hidden"
              style={{ borderColor: "#e2e8f0" }}
            >
              <div className="px-6 py-5 flex items-center gap-3" style={{ background: NAVY }}>
                <span className="text-2xl">{p.icone}</span>
                <h3 className="font-bold text-white text-lg" style={{ fontFamily: "Georgia, serif" }}>
                  {p.titre}
                </h3>
              </div>
              <div className="p-6 bg-white">
                <ul className="space-y-2 text-sm text-[#444]">
                  {p.detail.map((d) => (
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
              Comment candidater ?
            </h3>
            <ul className="space-y-2 text-sm text-[#444]">
              <li>✦ <strong style={{color: NAVY}}>1. S'informer</strong> — Réunions BCI en janvier & février</li>
              <li>✦ <strong style={{color: NAVY}}>2. Déposer</strong> — Dossier sur candidatures-international.undt.edu.td</li>
              <li>✦ <strong style={{color: NAVY}}>3. Sélection</strong> — Jury facultaire + classement sur dossier</li>
              <li>✦ <strong style={{color: NAVY}}>4. Entretien</strong> — Pour les places les plus financées</li>
              <li>✦ <strong style={{color: NAVY}}>5. Attribution</strong> — Résultats, signature de la convention</li>
              <li>✦ <strong style={{color: NAVY}}>6. Préparatifs</strong> — Visa, logement, équivalences, réunion départ</li>
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
              Conditions d'éligibilité
            </h3>
            <ul className="space-y-2 text-sm text-[#444]">
              <li>✦ Être régulièrement inscrit à l'UDN (L2+, M1, D1)</li>
              <li>✦ Moyenne générale minimale : <strong style={{color: NAVY}}>12 / 20</strong> (semestre précédent)</li>
              <li>✦ Niveau linguistique : B1 en français / B1/B2 en anglais selon destination</li>
              <li>✦ Pour ERASMUS+ : 2ème année d'études minimum, nationalité tchadienne</li>
              <li>✦ Aucune dette envers l'université (certificat de non-dette)</li>
              <li>✦ Projet d'études cohérent & lettre de motivation argumentée</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
