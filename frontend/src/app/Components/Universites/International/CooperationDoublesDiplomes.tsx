import { BRAND } from "../../Utils/brand";

const NAVY = BRAND.navy;
const GOLD = BRAND.gold;

const DOUBLES_DIPLOMES = [
  {
    domaine: "Droit & Sciences Politiques",
    icon: "⚖️",
    parcours: [
      {
        mention: "Master Droit de l'Environnement (Double diplôme)",
        partenaire: "Université de Bordeaux — France",
        cycle: "M1 UDN → M2 Bordeaux",
        effectif: "15 places / an",
      },
      {
        mention: "Master Droit des Affaires (Co-diplômation)",
        partenaire: "Université Yaoundé I — Cameroun",
        cycle: "M1 & M2 mutualisés (2 semestres sur chaque campus)",
        effectif: "20 places / an",
      },
      {
        mention: "Licence Sciences Politiques",
        partenaire: "Université de Niamey — Niger",
        cycle: "3 ans — cursus conjoint CAMES",
        effectif: "25 places / an",
      },
    ],
  },
  {
    domaine: "Sciences Économiques & Gestion",
    icon: "📊",
    parcours: [
      {
        mention: "Master Économie du Développement",
        partenaire: "Université de Montpellier — France",
        cycle: "M1 UDN → M2 Montpellier (stage M2 obligatoire)",
        effectif: "12 places / an",
      },
      {
        mention: "Master Finance & Banque (double diplôme)",
        partenaire: "Université de Douala — Cameroun",
        cycle: "Cursus mutualisé CEMAC — 4 semestres",
        effectif: "18 places / an",
      },
      {
        mention: "Licence Banque & Finance",
        partenaire: "Université de Yaoundé II — Cameroun",
        cycle: "3 ans — semestre S6 à Yaoundé",
        effectif: "30 places / an",
      },
    ],
  },
  {
    domaine: "Santé, Sciences & Ingénierie",
    icon: "🏥",
    parcours: [
      {
        mention: "Master Santé Publique (MPH international)",
        partenaire: "Université de Bordeaux — France + Université Cheikh Anta Diop Dakar — Sénégal",
        cycle: "M1 UDN → M2 Bordeaux ou Dakar",
        effectif: "15 places / an",
      },
      {
        mention: "Master Informatique — IA & Données",
        partenaire: "Université de Bordeaux — France",
        cycle: "M1 UDN → M2 Bordeaux (laboratoire LaBRI)",
        effectif: "8 places / an",
      },
      {
        mention: "Master Génie Civil & BTP",
        partenaire: "École Nationale d'Ingénieurs de Yaoundé — Cameroun",
        cycle: "Cursus conjoint 5 ans LMD — ingénieur diplômé",
        effectif: "20 places / an",
      },
    ],
  },
  {
    domaine: "Lettres, SHS & Éducation",
    icon: "📚",
    parcours: [
      {
        mention: "Master Linguistique Appliquée — FLE",
        partenaire: "Université de Bordeaux Montaigne — France",
        cycle: "M1 UDN → M2 Bordeaux (stage obligatoire)",
        effectif: "10 places / an",
      },
      {
        mention: "Master Histoire de l'Afrique Centrale",
        partenaire: "Université de Yaoundé I — Cameroun + Université du Caire — Égypte",
        cycle: "Tripartite — mobilité au M1 S2 & M2 S1",
        effectif: "10 places / an",
      },
      {
        mention: "Master Sciences de l'Éducation",
        partenaire: "Université de Niamey — Niger",
        cycle: "Cursus conjoint CAMES (2 ans)",
        effectif: "25 places / an",
      },
    ],
  },
  {
    domaine: "Écoles doctorales conjointes",
    icon: "🎓",
    parcours: [
      {
        mention: "Doctorat en Droit de l'Environnement (codirection)",
        partenaire: "Université de Bordeaux — France",
        cycle: "3 ans — codirection internationale, publication obligatoire",
        effectif: "5 places / an",
      },
      {
        mention: "Doctorat Santé Tropicale & Épidémiologie",
        partenaire: "Université de Montpellier — France",
        cycle: "3 ans — terrains multiples, co-encadrement",
        effectif: "6 places / an",
      },
      {
        mention: "Doctorat Linguistique & Langues Africaines",
        partenaire: "INALCO Paris & Université Yaoundé I",
        cycle: "3 ans — thèse sur publications",
        effectif: "4 places / an",
      },
    ],
  },
];

const COOPERATIONS = [
  {
    titre: "Coopération intergouvernementale",
    icone: "🤝",
    detail: [
      "Accord France–Tchad sur l'enseignement supérieur & la recherche (SCAC Ambassade de France)",
      "Convention Union Africaine — Harmonisation LMD dans l'espace CAMES",
      "Coopération nigérienne & camerounaise — échanges étudiants, enseignants & examens conjoints CEMAC",
      "Coopération égyptienne — bourses de master & de doctorat en médecine & SHS",
    ],
  },
  {
    titre: "Projets financés européens & internationaux",
    icone: "💶",
    detail: [
      "ERASMUS+ KA2 — DIGILMD : numérisation pédagogique & plateforme Moodle partagée (350 000 €)",
      "ERASMUS+ KA2 — GREENUNI : transition écologique, énergétique sahélienne (520 000 €)",
      "Banque Mondiale ACE Impact — Centre d'Excellence « Énergie Solitaire & Développement »",
      "UNESCO — Chaire « Patrimoine Sahélien & Cultures Africaines »",
    ],
  },
  {
    titre: "Recherche & laboratoires partagés",
    icone: "🔬",
    detail: [
      "Laboratoire international associé (LIA) « Environnement & Santé » — UDN / Bordeaux / IRD",
      "Observatoire sahélien de l'environnement — réseau de 8 universités d'Afrique de l'Ouest & Centrale",
      "Plateforme de génomique & séquençage — UDN / Yaoundé / AUF (financement UE)",
      "Programme de doctorat en cotutelle — 42 directeurs de thèse internationalement accrédités",
    ],
  },
];

export default function CooperationDoublesDiplomes() {
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
            Coopération & doubles diplômes
          </h1>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
            14 parcours doublement diplômants (Licence, Master, Doctorat) et
            45 accords de coopération avec des universités d'Afrique, d'Europe
            et du Proche-Orient pour offrir à nos étudiants un diplôme biculturel,
            un réseau international et une mobilité fluide sur le continent.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-4 text-sm">
          {[
            { k: "Doubles diplômes actifs", v: "14" },
            { k: "Accords de coopération", v: "45" },
            { k: "Pays partenaires LMD", v: "12" },
            { k: "Écoles doctorales conjointes", v: "3" },
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

      <section className="max-w-6xl mx-auto px-4 pb-12 space-y-8">
        {DOUBLES_DIPLOMES.map((dom) => (
          <article
            key={dom.domaine}
            className="rounded-lg border overflow-hidden"
            style={{ borderColor: "#e2e8f0" }}
          >
            <div className="px-5 py-4 flex items-center gap-3" style={{ background: NAVY }}>
              <span
                className="inline-flex items-center justify-center w-10 h-10 rounded-full text-xl"
                style={{ background: "rgba(200,168,75,0.14)" }}
              >
                {dom.icon}
              </span>
              <h2 className="font-bold text-white text-lg" style={{ fontFamily: "Georgia, serif" }}>
                {dom.domaine}
              </h2>
            </div>
            <div className="bg-white divide-y divide-gray-100">
              {dom.parcours.map((p) => (
                <div
                  key={p.mention}
                  className="grid md:grid-cols-[1.5fr_1.4fr_1.2fr_0.8fr] gap-3 px-5 py-3.5 text-sm items-center"
                >
                  <div className="font-semibold" style={{ color: NAVY }}>
                    {p.mention}
                  </div>
                  <div className="text-[#444]">{p.partenaire}</div>
                  <div className="text-[#444]">{p.cycle}</div>
                  <div className="inline-flex items-center justify-start md:justify-end">
                    <span
                      className="px-2.5 py-1 rounded-full text-xs font-semibold"
                      style={{ background: "rgba(200,168,75,0.12)", color: "#806724" }}
                    >
                      {p.effectif}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-12">
        <h2
          className="text-2xl font-bold mb-6 pb-2 inline-block"
          style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
        >
          Axes de coopération institutionnelle
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {COOPERATIONS.map((c) => (
            <article
              key={c.titre}
              className="rounded-lg border overflow-hidden"
              style={{ borderColor: "#e2e8f0" }}
            >
              <div className="px-5 py-4 flex items-center gap-3" style={{ background: NAVY }}>
                <span className="text-2xl">{c.icone}</span>
                <h3 className="font-bold text-white text-base" style={{ fontFamily: "Georgia, serif" }}>
                  {c.titre}
                </h3>
              </div>
              <div className="p-5 bg-white">
                <ul className="space-y-2 text-sm text-[#444]">
                  {c.detail.map((d) => (
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
              Avantages des doubles diplômes
            </h3>
            <ul className="space-y-2 text-sm text-[#444]">
              <li>✦ <strong style={{color: NAVY}}>Deux diplômes reconnus</strong> dans l'espace CAMES & UE</li>
              <li>✦ <strong style={{color: NAVY}}>Mobilité</strong> : 1 à 2 semestres à l'étranger selon le parcours</li>
              <li>✦ <strong style={{color: NAVY}}>Insertion pro</strong> : réseau double de diplômés & entreprises</li>
              <li>✦ <strong style={{color: NAVY}}>Bourses dédiées</strong> : ACE Impact, ERASMUS+, AU, AUF</li>
              <li>✦ <strong style={{color: NAVY}}>Culture bilingue</strong> & compétences interculturelles renforcées</li>
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
              Sélection & inscription
            </h3>
            <ul className="space-y-2 text-sm text-[#444]">
              <li>✦ Candidature : dossier académique + entretien oral</li>
              <li>✦ Séléction classante : moyenne, motivation, projet professionnel</li>
              <li>✦ Accès en L1 via concours spécifique (parcours licence co-diplômés)</li>
              <li>✦ Accès en M1 / D1 via examen de dossier + entretien</li>
              <li>✦ Calendrier identique aux programmes d'échange (mars → août)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
