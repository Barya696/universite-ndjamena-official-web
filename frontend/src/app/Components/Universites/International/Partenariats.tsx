import { BRAND } from "../../Utils/brand";

const NAVY = BRAND.navy;
const GOLD = BRAND.gold;

const UNIVERSITES_EUROPE = [
  { nom: "Université de Bordeaux", pays: "🇫🇷 France", domaine: "Co-diplômation Droit, Environnement, Santé, Informatique", echanges: 45 },
  { nom: "Université de Montpellier", pays: "🇫🇷 France", domaine: "Santé tropicale, Épidémiologie, Économie du Développement", echanges: 32 },
  { nom: "Université Bordeaux Montaigne", pays: "🇫🇷 France", domaine: "Linguistique, FLE, Arts & Lettres", echanges: 18 },
  { nom: "Université de Liège", pays: "🇧🇪 Belgique", domaine: "Droit international, Sciences Politiques", echanges: 14 },
  { nom: "INALCO — Paris", pays: "🇫🇷 France", domaine: "Langues africaines, Doctorat Linguistique", echanges: 8 },
  { nom: "IRD — Institut de Recherche pour le Développement", pays: "🇫🇷 France", domaine: "LIA Environnement & Santé, terrains de recherche", echanges: "—" },
];

const UNIVERSITES_AFRIQUE = [
  { nom: "Université de Yaoundé I", pays: "🇨🇲 Cameroun", domaine: "Droit, Économie, Histoire, Médecine (co-diplômations multiples)", echanges: 52 },
  { nom: "Université de Douala", pays: "🇨🇲 Cameroun", domaine: "Sciences Économiques & Gestion, Finance-Banque", echanges: 30 },
  { nom: "Université Yaoundé II — Soa", pays: "🇨🇲 Cameroun", domaine: "Licence Banque & Finance, Sciences Politiques", echanges: 28 },
  { nom: "Université de Niamey Abdou Moumouni", pays: "🇳🇪 Niger", domaine: "LMD Licence Sc. Politiques, Master Éducation, Recherche", echanges: 40 },
  { nom: "Université Cheikh Anta Diop — Dakar", pays: "🇸🇳 Sénégal", domaine: "Santé Publique, Master MPH international", echanges: 16 },
  { nom: "Université Gaston Berger — Saint-Louis", pays: "🇸🇳 Sénégal", domaine: "Lettres, Mathématiques Appliquées", echanges: 10 },
  { nom: "Université de Yaoundé — ENI", pays: "🇨🇲 Cameroun", domaine: "Ingénierie, Génie Civil, Génie Électrique", echanges: 22 },
  { nom: "Université du Caire", pays: "🇪🇬 Égypte", domaine: "SHS, Histoire, Théologie, SHS", echanges: 18 },
  { nom: "Université de Lagos", pays: "🇳🇬 Nigeria", domaine: "Management, Ingénierie pétrolière", echanges: 12 },
  { nom: "Université de Bangui", pays: "🇨🇫 RCA", domaine: "Harmonisation LMD, examens communs CEMAC", echanges: 8 },
  { nom: "Université Marien Ngouabi — Brazzaville", pays: "🇨🇬 Congo", domaine: "Droit, Santé, Économie", echanges: 15 },
  { nom: "Université Omar Bongo — Libreville", pays: "🇬🇦 Gabon", domaine: "Licences, Masters conjoints CEMAC", echanges: 10 },
];

const ORGANISMES = [
  {
    titre: "Union Européenne",
    icone: "🇪🇺",
    detail: [
      "ERASMUS+ KA103, KA107 & KA2 (capacité)",
      "Projets DIGILMD & GREENUNI (870 000 €)",
      "Service national Erasmus+ à l'UDN",
    ],
  },
  {
    titre: "Union Africaine — NEPAD",
    icone: "🌍",
    detail: [
      "Harmonisation LMD & espace CAMES",
      "Programme Panafricain de Bourses",
      "Réseau RUSAC — Universités d'Afrique Centrale",
    ],
  },
  {
    titre: "UNESCO",
    icone: "🏛️",
    detail: [
      "Chaire UNESCO « Patrimoine Sahélien »",
      "Programme International de Corruption Scolaire",
      "Appui à la formation des formateurs",
    ],
  },
  {
    titre: "Agence Universitaire de la Francophonie",
    icone: "📚",
    detail: [
      "Bourses Master & Doctorat francophones",
      "Plateforme Moodle & SUDOC documentation",
      "Programme de numérisation des thèses",
    ],
  },
  {
    titre: "Banque Mondiale — ACE Impact",
    icone: "💶",
    detail: [
      "Centre d'Excellence ACE « Énergie & Environnement sahélienne »",
      "4,2 MUSD pour labos, masters & école doctorale",
      "Bourses de master et de doctorat",
    ],
  },
  {
    titre: "Ambassade de France — SCAC",
    icone: "🇫🇷",
    detail: [
      "Campus France — bourses Eiffel & service de coopération",
      "Appui aux doubles diplômes France–Tchad",
      "Co-édition manuels & formations FLE",
    ],
  },
];

export default function Partenariats() {
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
            Partenariats
          </h1>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
            L'Université de N'Djamena tisse des liens durables avec 30 universités
            et 6 grands organismes internationaux pour construire ensemble des
            parcours d'excellence, des projets de recherche ambitieux et une
            mobilité fluide sur trois continents.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-4 text-sm">
          {[
            { k: "Universités partenaires", v: "30+" },
            { k: "Organismes bailleurs", v: "12" },
            { k: "Pays concernés", v: "18" },
            { k: "Accords de mobilité actifs", v: "65" },
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
          Europe
        </h2>
        <article className="rounded-lg border overflow-hidden" style={{ borderColor: "#e2e8f0" }}>
          <div className="bg-white divide-y divide-gray-100">
            {UNIVERSITES_EUROPE.map((u) => (
              <div
                key={u.nom}
                className="grid md:grid-cols-[1.4fr_0.9fr_2fr_0.7fr] gap-3 px-5 py-3.5 text-sm items-center"
              >
                <div className="font-semibold" style={{ color: NAVY }}>{u.nom}</div>
                <div className="text-[#444]">{u.pays}</div>
                <div className="text-[#444]">{u.domaine}</div>
                <div className="inline-flex items-center justify-start md:justify-end">
                  <span
                    className="px-2.5 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "rgba(26,58,92,0.08)", color: NAVY }}
                  >
                    {u.echanges === "—" ? "Recherche" : `${u.echanges} ét./an`}
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
          Afrique & Proche-Orient
        </h2>
        <article className="rounded-lg border overflow-hidden" style={{ borderColor: "#e2e8f0" }}>
          <div className="bg-white divide-y divide-gray-100">
            {UNIVERSITES_AFRIQUE.map((u) => (
              <div
                key={u.nom}
                className="grid md:grid-cols-[1.4fr_0.9fr_2fr_0.7fr] gap-3 px-5 py-3.5 text-sm items-center"
              >
                <div className="font-semibold" style={{ color: NAVY }}>{u.nom}</div>
                <div className="text-[#444]">{u.pays}</div>
                <div className="text-[#444]">{u.domaine}</div>
                <div className="inline-flex items-center justify-start md:justify-end">
                  <span
                    className="px-2.5 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "rgba(26,58,92,0.08)", color: NAVY }}
                  >
                    {u.echanges} ét./an
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
          Organismes & bailleurs
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ORGANISMES.map((o) => (
            <article
              key={o.titre}
              className="rounded-lg border overflow-hidden"
              style={{ borderColor: "#e2e8f0" }}
            >
              <div className="px-5 py-4 flex items-center gap-3" style={{ background: NAVY }}>
                <span className="text-2xl">{o.icone}</span>
                <h3 className="font-bold text-white text-base" style={{ fontFamily: "Georgia, serif" }}>
                  {o.titre}
                </h3>
              </div>
              <div className="p-5 bg-white">
                <ul className="space-y-2 text-sm text-[#444]">
                  {o.detail.map((d) => (
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
              Devenir partenaire ?
            </h3>
            <p className="text-sm text-[#444] mb-4 leading-relaxed">
              L'UDN est toujours à la recherche de nouvelles collaborations
              (universités, écoles, laboratoires, entreprises, ONG) pour renforcer
              son rayonnement et ses formations. Un premier contact permet
              d'identifier le type d'accord adapté.
            </p>
            <ul className="space-y-2 text-sm text-[#444]">
              <li>✦ Accords-cadres institutionnels (généraux)</li>
              <li>✦ Mémorandums d'entente (MoU) — facultés ou domaines ciblés</li>
              <li>✦ Conventions spécifiques : double diplôme, échanges, recherche, stages</li>
              <li>✦ Accords de cotutelle de thèse & co-direction</li>
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
              Bureau des Partenariats International
            </h3>
            <ul className="space-y-2 text-sm text-[#444]">
              <li>✦ <strong style={{color: NAVY}}>Direction</strong> : Dr. Mahamat Youssouf, Conseiller Recteur aux Relations Internationales</li>
              <li>📍 Campus de Toukra — Bâtiment A, bureau A-115</li>
              <li>✉ partenariats@undt.edu.td · cooperation@undt.edu.td</li>
              <li>☎ +235 22 51 44 78 (poste 101)</li>
              <li>🕐 Lundi–vendredi · 8h – 16h · Rendez-vous conseillé</li>
              <li>🔗 international.undt.edu.td</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
