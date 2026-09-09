import { BRAND } from "../../Utils/brand";

const NAVY = BRAND.navy;
const NAVY_DEEP = BRAND.navyDeep;
const GOLD = BRAND.gold;
const PARCHMENT = "#FAF8F3";
const PARCHMENT_ALT = "#F3EEE1";
const LINE = "#DDD6C4";
const INK_SOFT = "#565553";
const SHADOW = "0 4px 18px -8px rgba(20,30,55,0.18)";
// Matches the sans-serif used in the site footer / HistoireMission page.
const FONT = "'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif";

const STATS = [
  { k: "Étudiants en mobilité / an", v: "250+" },
  { k: "Universités partenaires", v: "35+" },
  { k: "Pays de destination", v: "18" },
  { k: "Places financées ERASMUS+", v: "160" },
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

const CANDIDATER = [
  { strong: "1. S'informer", rest: "— Réunions BCI en janvier & février" },
  { strong: "2. Déposer", rest: "— Dossier sur candidatures-international.undt.edu.td" },
  { strong: "3. Sélection", rest: "— Jury facultaire + classement sur dossier" },
  { strong: "4. Entretien", rest: "— Pour les places les plus financées" },
  { strong: "5. Attribution", rest: "— Résultats, signature de la convention" },
  { strong: "6. Préparatifs", rest: "— Visa, logement, équivalences, réunion départ" },
];

const ELIGIBILITE = [
  "Être régulièrement inscrit à l'UDN (L2+, M1, D1)",
  "Moyenne générale minimale : 12 / 20 (semestre précédent)",
  "Niveau linguistique : B1 en français / B1-B2 en anglais selon destination",
  "Pour ERASMUS+ : 2ème année d'études minimum, nationalité tchadienne",
  "Aucune dette envers l'université (certificat de non-dette)",
  "Projet d'études cohérent & lettre de motivation argumentée",
];

function SectionHeading({ roman, title }: { roman: string; title: string }) {
  return (
    <div className="flex items-baseline gap-3 mb-8">
      <span className="text-sm" style={{ color: GOLD, fontFamily: FONT }}>
        {roman}
      </span>
      <h2 className="text-2xl font-bold pb-2 flex-1" style={{ color: NAVY, fontFamily: FONT, borderBottom: `2px solid ${NAVY}` }}>
        {title}
      </h2>
    </div>
  );
}

export default function ProgrammesEchange() {
  return (
    <div style={{ background: PARCHMENT }} className="min-h-screen">
      {/* EN-TÊTE */}
      <section
        className="py-16 px-4 md:px-[50px]"
        style={{ background: `linear-gradient(180deg, ${NAVY_DEEP} 0%, ${NAVY} 100%)` }}
      >
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.2em] text-xs mb-3" style={{ color: GOLD, fontFamily: FONT }}>
            International
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ color: GOLD, fontFamily: "Georgia, serif" }}
          >
            Programmes d'échange
          </h1>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed" style={{ fontFamily: FONT }}>
            Plus de 250 étudiants par an partent en mobilité grâce à des programmes
            financés par l'Union Européenne, l'Union Africaine, l'UNESCO et l'AUF.
            Que ce soit pour un semestre, un stage ou un double diplôme, l'UDN
            accompagne chaque étudiant dans son projet international.
          </p>
        </div>
      </section>

      {/* EN BREF */}
      <section className="max-w-6xl mx-auto px-4 pt-14 pb-4">
        <SectionHeading roman="I." title="En bref" />
        <div className="grid md:grid-cols-4 gap-6 pt-2">
          {STATS.map((s) => (
            <div
              key={s.k}
              className="text-center p-5 bg-white"
              style={{
                boxShadow: SHADOW,
                border: `1px solid ${LINE}`,
                borderTop: `3px solid ${GOLD}`,
                backgroundImage: `linear-gradient(160deg, #ffffff 0%, ${PARCHMENT} 100%)`,
              }}
            >
              <p className="text-xs uppercase tracking-wider mb-2" style={{ color: GOLD, fontFamily: FONT, letterSpacing: "0.1em" }}>
                {s.k}
              </p>
              <p className="text-xl font-bold" style={{ color: NAVY, fontFamily: "Georgia, serif" }}>
                {s.v}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TYPES DE PARCOURS */}
      <section className="py-14 mt-6" style={{ background: PARCHMENT_ALT }}>
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading roman="II." title="Types de parcours" />
          <article className="bg-white overflow-hidden" style={{ boxShadow: SHADOW, border: `1px solid ${LINE}` }}>
            <div
              className="px-5 py-4"
              style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_DEEP} 100%)`, borderBottom: `2px solid ${GOLD}` }}
            >
              <h3 className="font-bold text-lg" style={{ color: GOLD, fontFamily: FONT }}>
                Offre de mobilité LMD
              </h3>
            </div>
            <div>
              {PARCOURS.map((p, i) => (
                <div
                  key={p.type}
                  className="grid md:grid-cols-[1.4fr_0.8fr_0.9fr_1.4fr_1.3fr] gap-3 px-5 py-3.5 text-sm items-center"
                  style={{ borderTop: i === 0 ? "none" : `1px solid ${LINE}` }}
                >
                  <div className="font-semibold" style={{ color: NAVY, fontFamily: FONT }}>
                    {p.type}
                  </div>
                  <div style={{ color: INK_SOFT, fontFamily: FONT }}>{p.duree}</div>
                  <div style={{ color: INK_SOFT, fontFamily: FONT }}>{p.credits}</div>
                  <div style={{ color: INK_SOFT, fontFamily: FONT }}>{p.destinations}</div>
                  <div>
                    <span
                      className="inline-block px-2 py-0.5 text-xs"
                      style={{ background: "rgba(200,168,75,0.14)", color: "#806724", fontFamily: FONT, borderRadius: 999 }}
                    >
                      {p.bourses}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* PROGRAMMES CLÉS */}
      <section className="max-w-6xl mx-auto px-4 pt-14 pb-4">
        <SectionHeading roman="III." title="Programmes clés" />
        <div className="grid md:grid-cols-2 gap-6 pt-2">
          {PROGRAMMES.map((p) => (
            <article
              key={p.titre}
              className="bg-white overflow-hidden"
              style={{ boxShadow: SHADOW, border: `1px solid ${LINE}` }}
            >
              <div
                className="px-6 py-5 flex items-center gap-3"
                style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_DEEP} 100%)`, borderBottom: `2px solid ${GOLD}` }}
              >
                <span className="text-2xl" aria-hidden>
                  {p.icone}
                </span>
                <h3 className="font-bold text-lg" style={{ color: GOLD, fontFamily: FONT }}>
                  {p.titre}
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-sm" style={{ color: INK_SOFT, fontFamily: FONT }}>
                  {p.detail.map((d) => (
                    <li key={d} className="flex gap-2">
                      <span className="shrink-0" style={{ color: GOLD }} aria-hidden>
                        ✦
                      </span>
                      <span className="leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CANDIDATER & ÉLIGIBILITÉ */}
      <section className="py-14 mt-6" style={{ background: PARCHMENT_ALT }}>
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading roman="IV." title="Comment candidater & conditions" />
          <div className="grid md:grid-cols-2 gap-6 pt-2">
            <div
              className="p-6 bg-white"
              style={{ boxShadow: SHADOW, border: `1px solid ${LINE}`, borderTop: `3px solid ${GOLD}` }}
            >
              <h3 className="text-lg font-bold mb-4" style={{ color: NAVY, fontFamily: "Georgia, serif" }}>
                Comment candidater ?
              </h3>
              <ul className="space-y-2 text-sm" style={{ color: INK_SOFT, fontFamily: FONT }}>
                {CANDIDATER.map((c) => (
                  <li key={c.strong} className="flex gap-2">
                    <span className="shrink-0" style={{ color: GOLD }} aria-hidden>
                      ✦
                    </span>
                    <span className="leading-relaxed">
                      <strong style={{ color: NAVY }}>{c.strong}</strong> {c.rest}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="p-6 bg-white"
              style={{ boxShadow: SHADOW, border: `1px solid ${LINE}`, borderTop: `3px solid ${GOLD}` }}
            >
              <h3 className="text-lg font-bold mb-4" style={{ color: NAVY, fontFamily: "Georgia, serif" }}>
                Conditions d'éligibilité
              </h3>
              <ul className="space-y-2 text-sm" style={{ color: INK_SOFT, fontFamily: FONT }}>
                {ELIGIBILITE.map((e) => (
                  <li key={e} className="flex gap-2">
                    <span className="shrink-0" style={{ color: GOLD }} aria-hidden>
                      ✦
                    </span>
                    <span className="leading-relaxed">{e}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}