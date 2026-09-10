import { BRAND } from "../../Utils/brand";

const NAVY = BRAND.navy;
const GOLD = BRAND.gold;

const CALENDRIER_LMD = [
  {
    periode: "Semestre 1 · Automne",
    intervalle: "2 septembre 2024 → 13 décembre 2024",
    semaines: "15 semaines de cours + rattrapages",
    color: "#2f6c9c",
    details: [
      { type: "Cours magistraux & TD", dates: "2 sept. → 29 nov. 2024", ecs: "420 ECTS · 8 900 étudiants", mention: "Tous niveaux L1 → M2" },
      { type: "Semaine des projets & stages courts", dates: "2–6 déc. 2024", ecs: "Divers · 110 encadrants", mention: "Licences professionnelles & certains M2" },
      { type: "Contrôles continus (CC)", dates: "Tout au long du semestre", ecs: "40 % de la note finale", mention: "Épreuves semestrielles toutes mentions" },
      { type: "Examen partiel · session 1", dates: "9–13 déc. 2024", ecs: "60 % de la note finale", mention: "Inscription pédagogique & administrative obligatoire" },
    ],
  },
  {
    periode: "Vacances de Noël & Nouvel An",
    intervalle: "14 déc. 2024 → 5 janv. 2025",
    semaines: "3 semaines",
    color: "#2a6696",
    details: [
      { type: "Fermeture administrative", dates: "21 déc. 2024 → 2 janv. 2025", ecs: "—", mention: "Services ouverts minimum (urgence & sécurité)" },
      { type: "Consultation des notes · S1", dates: "16 déc. → 3 janv. via ENT", ecs: "—", mention: "Contestations : dossier motivé + paiement 5 000 FCFA/EC" },
    ],
  },
  {
    periode: "Rattrapages · Session 2",
    intervalle: "6 → 24 janv. 2025",
    semaines: "3 semaines (études + examens)",
    color: "#255686",
    details: [
      { type: "Soutien pédagogique intensif", dates: "6 → 10 janv. 2025", ecs: "Enseignants + tuteurs pairs", mention: "Tous niveaux : TD de révision et annales corrigées" },
      { type: "Épreuves de rattrapage (écrits)", dates: "13 → 17 janv. 2025", ecs: "—", mention: "Convocation téléchargeable sur l'ENT" },
      { type: "Délibérations & jury semestriel", dates: "20 → 24 janv. 2025", ecs: "Validation des acquis", mention: "Liste des admis/ajournés affichée & ENT" },
    ],
  },
  {
    periode: "Semestre 2 · Printemps",
    intervalle: "27 janv. → 30 mai 2025",
    semaines: "17 semaines de cours (interruption Pâques)",
    color: "#1f4e82",
    details: [
      { type: "Cours magistraux & TD", dates: "27 janv. → 16 avril 2025", ecs: "S2 · 480 EC planifiés", mention: "—" },
      { type: "Vacances de Pâques", dates: "17 → 27 avril 2025", ecs: "Pause pédagogique 1,5 semaine", mention: "—" },
      { type: "Reprise & fin des cours", dates: "28 avril → 23 mai 2025", ecs: "—", mention: "Rattrapage des cours suspendus" },
      { type: "Contrôles continus & partiels S2", dates: "26 → 30 mai 2025", ecs: "Session 1", mention: "Tous niveaux" },
    ],
  },
  {
    periode: "Soutenances & stages longs",
    intervalle: "2 juin → 15 août 2025",
    semaines: "11 semaines",
    color: "#235182",
    details: [
      { type: "Stages & mémoires (L3 Pro & M2)", dates: "2 juin → 15 août 2025", ecs: "12 ECTS stages", mention: "Convention signée + rapport + soutenance" },
      { type: "Soutenances de Master", dates: "18 → 29 août 2025", ecs: "Jury international · cotutelles", mention: "36 mentions / ~ 1 200 diplômés" },
      { type: "Projets & ateliers UDN INNOV", dates: "Juillet 2025", ecs: "—", mention: "Hackathon annuel + incubations ACE-E2D" },
    ],
  },
  {
    periode: "Rattrapages S2 & délibérations annuelles",
    intervalle: "2 → 26 sept. 2025",
    semaines: "4 semaines",
    color: "#285e8f",
    details: [
      { type: "Soutien & révision S2", dates: "2 → 5 sept. 2025", ecs: "—", mention: "Tous niveaux" },
      { type: "Épreuves · session 2 S2", dates: "8 → 12 sept. 2025", ecs: "—", mention: "Tous niveaux" },
      { type: "Jury de passage · passage & redoublement", dates: "15 → 26 sept. 2025", ecs: "Décision annuelle", mention: "Affichage & consultation ENT" },
    ],
  },
];

const JOURS_FERIES = [
  { date: "1er janvier", fete: "Jour de l'an" },
  { date: "11 février", fete: "Fête de l'indépendance (Tchad)" },
  { date: "Pâques · variable", fete: "Lundi de Pâques" },
  { date: "1 mai", fete: "Fête du Travail" },
  { date: "Aïd el-Fitr · variable", fete: "Fin du Ramadan (2 jours)" },
  { date: "Aïd el-Adha · variable", fete: "Tabaski (2 jours)" },
  { date: "28 août", fete: "Fête de la Libération" },
  { date: "1er octobre", fete: "Journée de la République (Tchad)" },
  { date: "11 novembre", fete: "Journée de la langue arabe" },
  { date: "25 décembre", fete: "Noël" },
];

const REGLES = [
  {
    titre: "Contrôles continus (CC) — coefficient 40 %",
    detail:
      "Au minimum deux épreuves par EC : interrogations courtes, devoirs surveillés, productions écrites, partiels intermédiaires, soutenances de projet. Absence injustifiée : note zéro.",
  },
  {
    titre: "Examens terminaux — coefficient 60 %",
    detail:
      "Session principale (décembre pour S1, mai pour S2) puis session 2 / rattrapage (janvier pour S1, septembre pour S2). Épreuves sur convocation · pièces d'identité obligatoires.",
  },
  {
    titre: "Compensation, capitalisation, jury",
    detail:
      "Moyenne générale 10/20 + note mini 5/20 par EC pour la compensation. EC validés (10/20 ou plus) sont capitalisés 5 ans. Passage : décision semestrielle puis annuelle (LMD).",
  },
  {
    titre: "Inscriptions pédagogiques & administratives",
    detail:
      "Administrative : frais / reçus / carte d'étudiant (dépôts jusqu'au 15 octobre). Pédagogique : choix des options, EC, groupes de TD. Sans inscription : pas de notes, pas d'accès examens.",
  },
];

export default function CalendrierAcademique() {
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
            Calendrier académique
          </h1>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
            Année universitaire 2024–2025 · semestres, examens, sessions de
            rattrapage, stages, soutenances, jury et jours fériés applicables
            sur les 4 campus. Toutes les dates sont certifiées par le Conseil
            Académique de l'UDN (décision CA n°2024-07-016).
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-4 text-sm">
          {[
            { k: "Semaines de cours / an", v: "32" },
            { k: "Semestres LMD", v: "2 (S1 · S2)" },
            { k: "Jours fériés légaux", v: "10 (+ Aïd variables)" },
            { k: "Début prochaine rentrée", v: "2 sept. 2024" },
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

      <section className="max-w-6xl mx-auto px-4 pb-16 space-y-8">
        {CALENDRIER_LMD.map((tranche) => (
          <article key={tranche.periode} className="rounded-lg border overflow-hidden" style={{ borderColor: "#e2e8f0" }}>
            <div className="px-6 py-5">
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <div>
                  <h2
                    className="font-bold text-lg md:text-xl"
                    style={{ color: tranche.color, fontFamily: "Georgia, serif" }}
                  >
                    {tranche.periode}
                  </h2>
                  <p className="text-sm text-[#646464] mt-1">{tranche.intervalle} · <span>{tranche.semaines}</span></p>
                </div>
                <span
                  className="inline-block px-2.5 py-1 rounded text-xs font-semibold"
                  style={{ background: `${tranche.color}`, color: "#fff" }}
                >
                  Période
                </span>
              </div>
            </div>
            <div className="bg-white divide-y divide-gray-100 border-t" style={{ borderColor: "#e2e8f0" }}>
              {tranche.details.map((d) => (
                <div
                  key={d.type + d.dates}
                  className="grid md:grid-cols-[1.6fr_1.2fr_1.4fr_1.4fr] gap-3 px-5 py-4 text-sm items-start"
                >
                  <div className="font-semibold" style={{ color: NAVY }}>{d.type}</div>
                  <div className="text-[#444]">{d.dates}</div>
                  <div className="text-[#555] leading-relaxed">{d.ecs}</div>
                  <div className="text-[#555] leading-relaxed">{d.mention}</div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section style={{ background: "#f6f6f6" }} className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 pb-4">
          <div className="rounded-lg border p-6" style={{ background: "#fff", borderColor: "#e2e8f0" }}>
            <h3
              className="text-xl font-bold mb-4 pb-2 inline-block"
              style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
            >
              Jours fériés · année 2024–2025
            </h3>
            <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-[#444]">
              {JOURS_FERIES.map((j) => (
                <li key={j.fete} className="flex justify-between border-b border-dashed border-gray-200 pb-1.5">
                  <span className="font-semibold" style={{ color: NAVY }}>{j.date}</span>
                  <span>{j.fete}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border p-6" style={{ background: "#fff", borderColor: "#e2e8f0" }}>
            <h3
              className="text-xl font-bold mb-4 pb-2 inline-block"
              style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
            >
              Téléchargements
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                "Calendrier académique 2024–2025 · PDF (version 14 juin 2024)",
                "Règlement des examens et des contrôles continus · PDF",
                "Organisation pédagogique — semestres & EC · PDF",
                "Calendrier des soutenances de thèse · 2024 · PDF",
                "Plan des examens par campus · disponible 2 semaines avant",
              ].map((lien) => (
                <li key={lien}>
                  <a
                    href="#"
                    className="flex items-center justify-between border rounded px-4 py-3 hover:bg-[#f6f9fd] transition"
                    style={{ borderColor: "#e2e8f0" }}
                  >
                    <span className="text-[#444]">{lien}</span>
                    <span style={{ color: NAVY }}>⬇ PDF</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto pt-8">
          <h3
            className="text-xl font-bold mb-5 pb-2 inline-block"
            style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
          >
            Règles de l'évaluation & modalités (LMD)
          </h3>
          <div className="grid md:grid-cols-2 gap-5">
            {REGLES.map((r) => (
              <article
                key={r.titre}
                className="rounded-lg border overflow-hidden"
                style={{ borderColor: "#e2e8f0", background: "#fff" }}
              >
                <div className="px-5 py-4" style={{ background: NAVY }}>
                  <h4 className="font-bold text-white text-[15px]" style={{ fontFamily: "Georgia, serif" }}>
                    {r.titre}
                  </h4>
                </div>
                <div className="p-5">
                  <p className="text-sm text-[#444] leading-relaxed">{r.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
