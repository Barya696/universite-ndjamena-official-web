import { BRAND } from "../../Utils/brand";

const NAVY = BRAND.navy;
const GOLD = BRAND.gold;

const LICENCES: {
  domaine: string;
  icon: string;
  mentions: { nom: string; faculte: string; duree: string }[];
}[] = [
  {
    domaine: "Droit, Économie & Gestion",
    icon: "⚖️",
    mentions: [
      { nom: "Licence en Droit", faculte: "Faculté de Droit et Sciences Politiques", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence en Sciences Politiques", faculte: "Faculté de Droit et Sciences Politiques", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence en Économie", faculte: "Faculté des Sciences Économiques et de Gestion", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence en Gestion", faculte: "Faculté des Sciences Économiques et de Gestion", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence en Banque & Finance", faculte: "Faculté des Sciences Économiques et de Gestion", duree: "L1 → L3 (3 ans)" },
    ],
  },
  {
    domaine: "Lettres, Langues & Sciences Humaines",
    icon: "📚",
    mentions: [
      { nom: "Licence Lettres Modernes (Français)", faculte: "Faculté des Lettres et Sciences Humaines", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence Lettres Modernes (Anglais)", faculte: "Faculté des Lettres et Sciences Humaines", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence en Histoire-Géographie", faculte: "Faculté des Lettres et Sciences Humaines", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence en Sociologie-Anthropologie", faculte: "Faculté des Lettres et Sciences Humaines", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence en Philosophie", faculte: "Faculté des Lettres et Sciences Humaines", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence en Linguistique", faculte: "Faculté des Lettres et Sciences Humaines", duree: "L1 → L3 (3 ans)" },
    ],
  },
  {
    domaine: "Sciences Exactes, Ingénierie & Informatique",
    icon: "🔬",
    mentions: [
      { nom: "Licence Mathématiques & Physique", faculte: "FSEA", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence Chimie & Biologie", faculte: "FSEA", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence Informatique", faculte: "FSEA", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence en Génie Civil", faculte: "Faculté des Sciences de l'Ingénieur", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence en Génie Électrique", faculte: "Faculté des Sciences de l'Ingénieur", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence en Génie Mécanique", faculte: "Faculté des Sciences de l'Ingénieur", duree: "L1 → L3 (3 ans)" },
    ],
  },
  {
    domaine: "Santé",
    icon: "🏥",
    mentions: [
      { nom: "Licence en Sciences Infirmières", faculte: "Faculté des Sciences de la Santé (Farcha)", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence en Santé Publique", faculte: "Faculté des Sciences de la Santé (Farcha)", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence en Nutrition", faculte: "Faculté des Sciences de la Santé (Farcha)", duree: "L1 → L3 (3 ans)" },
    ],
  },
  {
    domaine: "Agronomie, Environnement & Sciences de l'Éducation",
    icon: "🌾",
    mentions: [
      { nom: "Licence en Agronomie", faculte: "Faculté d'Agronomie", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence en Aménagement & Environnement", faculte: "Faculté d'Agronomie", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence en Sciences de l'Éducation", faculte: "Faculté d'Éducation et de Formation (ISP)", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence en Didactique du Français", faculte: "Faculté d'Éducation et de Formation (ISP)", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence en Didactique des Mathématiques", faculte: "Faculté d'Éducation et de Formation (ISP)", duree: "L1 → L3 (3 ans)" },
    ],
  },
  {
    domaine: "Théologie, Études islamiques & Écoles supérieures",
    icon: "🕊️",
    mentions: [
      { nom: "Licence en Études Islamiques", faculte: "Faculté de Théologie & Sciences Religieuses", duree: "L1 → L3 (3 ans)" },
      { nom: "Licence en Études Chrétiennes", faculte: "Faculté de Théologie & Sciences Religieuses", duree: "L1 → L3 (3 ans)" },
      { nom: "DUT Génie Informatique (Bac+2)", faculte: "IUT — Campus d'Ardep-Djoumal", duree: "2 ans" },
      { nom: "DUT Gestion des Entreprises (Bac+2)", faculte: "IUT — Campus d'Ardep-Djoumal", duree: "2 ans" },
    ],
  },
];

export default function License() {
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
            Formations
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ color: GOLD, fontFamily: "Georgia, serif" }}
          >
            Licence (Bac+3)
          </h1>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
            Premier cycle du système LMD : 3 années d'études (6 semestres, 180 ECTS)
            ouvrant sur une Licence nationale reconnue dans tout l'espace CAMES.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-4 text-sm">
          {[
            { k: "Nombre de filières", v: "48" },
            { k: "Durée standard", v: "3 ans (L1 → L3)" },
            { k: "Semestres / ECTS", v: "6 sem. · 180 ECTS" },
            { k: "Diplôme délivré", v: "Licence Nationale" },
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
        {LICENCES.map((dom) => (
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
              {dom.mentions.map((m) => (
                <div
                  key={m.nom}
                  className="grid md:grid-cols-[1.3fr_1.2fr_0.7fr] gap-3 px-5 py-3.5 text-sm items-center"
                >
                  <div className="font-semibold" style={{ color: NAVY }}>
                    {m.nom}
                  </div>
                  <div className="text-[#444]">{m.faculte}</div>
                  <div className="inline-flex items-center justify-start md:justify-end">
                    <span
                      className="px-2.5 py-1 rounded-full text-xs font-semibold"
                      style={{ background: "rgba(200,168,75,0.12)", color: "#806724" }}
                    >
                      {m.duree}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
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
              Admissions & conditions
            </h3>
            <ul className="space-y-2 text-sm text-[#444]">
              <li>✦ Admission en L1 : Baccalauréat (toutes séries) ou équivalent</li>
              <li>✦ Concours / sélection selon certaines filières (médecine, ingénieur, etc.)</li>
              <li>✦ Possibilité de passerelles et de VAE (Validation des Acquis de l'Expérience)</li>
              <li>✦ Inscription via la plateforme officielle scolarité.undt.edu.td</li>
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
              Après la Licence ?
            </h3>
            <ul className="space-y-2 text-sm text-[#444]">
              <li>✦ Poursuite en Master (M1) dans le même domaine (accès de droit si mention ≥ 12/20)</li>
              <li>✦ Insertion professionnelle : fonction publique, entreprises publiques et privées, ONG, organismes internationaux</li>
              <li>✦ Stages de fin d'études obligatoires pour de nombreuses filières</li>
              <li>✦ Mobilité internationale : ERASMUS+, NEPAD, AU, etc.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
