import type { ReactNode } from "react";
import { BRAND } from "../../Utils/brand";

const NAVY = BRAND.navy;
const NAVY_DEEP = BRAND.navyDeep;
const GOLD = BRAND.gold;
const PARCHMENT = "#FAF8F3";
const PARCHMENT_ALT = "#F3EEE1";
const LINE = "#DDD6C4";
const INK_SOFT = "#565553";
const INK_FAINT = "#8A8A8A";
const SHADOW = "0 4px 18px -8px rgba(20,30,55,0.18)";
// Matches the sans-serif used in the site footer / HistoireMission page.
const FONT = "'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif";

const STATS = [
  { k: "Projets financés en cours", v: "6" },
  { k: "Budget total mobilisé 2024", v: "3,33 Md FCFA" },
  { k: "Appels futurs à comparaître", v: "6" },
  { k: "Chercheurs accompagnés / an", v: "180+" },
];

const EN_COURS = [
  {
    intitule: "Projet ERASMUS+ KA2 — « Pédagogies universitaires numériques inclusives pour le Sahel »",
    acronyme: "DIGILMD+",
    financement: "Union Européenne · ERASMUS+ KA203",
    montant: "580 000 €",
    periode: "2024 — 2027",
    pilote: "Pr. Tidjani M. — LINFO / CRN",
    statut: "Sélectionné · Contrôle pédagogique en cours",
    partenaires: "Bordeaux, Montpellier, Niamey, Yaoundé I, Sénégal",
  },
  {
    intitule: "Micro-grids photovoltaïques durables pour 10 villages sahéliens isolés (préfectures Kanem et Batha)",
    acronyme: "MICRO-VILL-SOL",
    financement: "Banque Mondiale · ACE Impact / Énergie",
    montant: "900 000 USD",
    periode: "2024 — 2026",
    pilote: "Pr. Abakar S. — ACE-E2D / LAPHYMAT",
    statut: "Sélectionné · 1er semestre en cours",
    partenaires: "AEE Tchad, CNSE, École des Mines de Nantes",
  },
  {
    intitule: "Observatoire du paludisme et de la méningite · 18 sites sentinelles (Tchad)",
    acronyme: "OBS-PAL-MEN-TCHAD",
    financement: "OMS / Global Fund / BMGF",
    montant: "1 200 000 USD",
    periode: "2023 — 2026",
    pilote: "Pr. Djerassem B. — LASER FMSS",
    statut: "Sélectionné · phase de collecte",
    partenaires: "MOPH-Tchad, INSTAT, Bordeaux/Inserm",
  },
  {
    intitule: "Valorisations agroécologiques de la gomme arabique tchadienne (Acacia senegal & seyal)",
    acronyme: "GOMME-TD-2026",
    financement: "AUF · Appui à la recherche appliquée",
    montant: "150 000 €",
    periode: "2024 — 2026",
    pilote: "Pr. Fatime M. — LACIMA",
    statut: "Sélectionné · Lancement septembre 2024",
    partenaires: "CNRAT & Coopératives de Guéra et du Sila",
  },
  {
    intitule: "Infrastructures numériques et archives ouvertes pour les revues tchadiennes (SCI-SAHEL)",
    acronyme: "SCI-SAHEL",
    financement: "CSRS Côte d'Ivoire & UNESCO SSC",
    montant: "180 000 €",
    periode: "2024 — 2026",
    pilote: "Dr. Maina Malloum — LAELIS & Service Publications",
    statut: "Sélectionné · équipe formée",
    partenaires: "AUF, CSRS Abidjan, Université de Bordeaux",
  },
  {
    intitule: "Réinsertion des populations déplacées internes : Kanem, Sila & Lac Tchad (2024-2026)",
    acronyme: "REIN-PDI-SAHEL",
    financement: "UNHCR / AFD · recherche appliquée CSO",
    montant: "320 000 €",
    periode: "2024 — 2026",
    pilote: "Pr. Ngarbaye — LAGEPH",
    statut: "Sélectionné · Étude terrain en cours",
    partenaires: "UNHCR N'Djamena, CODHAD, AFEF",
  },
];

const APPELS_FUTURS = [
  {
    date_limite: "15 octobre 2024",
    financement: "ERASMUS+ KA107 (Incoming)",
    type: "Mobilité enseignants 2024/25 — 15 créneaux",
    montant_max: "1 200 € · + indemnités mensuelles",
    axe: "Tous domaines",
    contact: "BCI · cooperation@undt.edu.td",
  },
  {
    date_limite: "30 novembre 2024",
    financement: "AUF — Bourses de Thèse 2025",
    type: "Bourses doctorales · 12 financements",
    montant_max: "24 M FCFA sur 3 ans",
    axe: "SHS, Sciences, Santé",
    contact: "ED·recherche@undt.edu.td",
  },
  {
    date_limite: "15 décembre 2024",
    financement: "BM ACE Impact — Micro-projets étudiants",
    type: "Projets étudiants Innovations + thèses",
    montant_max: "6 M FCFA max / projet",
    axe: "Énergie, Environnement, Numérique",
    contact: "ace-e2d@undt.edu.td",
  },
  {
    date_limite: "20 janvier 2025",
    financement: "CODESRIA · Petites Subventions Recherche",
    type: "Études individuelles — SHS prioritaires",
    montant_max: "30 000 USD max",
    axe: "Droit, Gouvernance, SHS",
    contact: "LADE · Benoît-G@undt.edu.td",
  },
  {
    date_limite: "28 février 2025",
    financement: "IRPE / Union Africaine — PACA",
    type: "Appui compétences post-graduées en Afrique",
    montant_max: "85 000 USD / projet",
    axe: "STEM, Agriculture, Santé publique",
    contact: "vice-rectorat-recherche@undt.edu.td",
  },
  {
    date_limite: "31 mars 2025",
    financement: "UNESCO TF-Sahélien · Patrimoine oral",
    type: "Projets de recherche + collectes",
    montant_max: "120 000 USD",
    axe: "Patrimoine, Langues, Culture",
    contact: "Chaire UNESCO · chaire-unesco@undt.edu.td",
  },
];

const SOUMETTRE = [
  { strong: "Étape 1", rest: "· Pré-candidature — synopsis 3 p. au VPR 3 mois avant DL" },
  { strong: "Étape 2", rest: "· Avis éthique (CONE) + avis laboratoire d'affectation" },
  { strong: "Étape 3", rest: "· Montage budgétaire + convention service recherche" },
  { strong: "Étape 4", rest: "· Soumission + accusé de réception" },
  { strong: "Étape 5", rest: "· Notification · signature convention · lancement" },
];

const APPUI = [
  "Service Recherche & Partenariats — Campus Toukra, Bât. A, A-118",
  "VPR : Prof. Mahamat Youssouf · vice-rectorat-recherche@undt.edu.td",
  "Appui juridique & budgétaire · 12 points d'appui facultaires",
  "Newsletter mensuelle : recherche-actus@undt.edu.td (abonnement libre)",
  "Calendrier : appels-projets-recherche.undt.edu.td",
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

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: INK_FAINT, fontFamily: FONT }}>
        {label}
      </p>
      {children}
    </div>
  );
}

export default function AppelsProjets() {
  return (
    <div style={{ background: PARCHMENT }} className="min-h-screen">
      {/* EN-TÊTE */}
      <section
        className="py-16 px-4 md:px-[50px]"
        style={{ background: `linear-gradient(180deg, ${NAVY_DEEP} 0%, ${NAVY} 100%)` }}
      >
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.2em] text-xs mb-3" style={{ color: GOLD, fontFamily: FONT }}>
            Recherches
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: GOLD, fontFamily: "Georgia, serif" }}>
            Appels à projets
          </h1>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed" style={{ fontFamily: FONT }}>
            Suivez en temps réel les projets de recherche financés par les grands
            bailleurs internationaux et les prochains appels à proposition.
            L'Université de N'Djamena accompagne ses chercheurs tout au long du
            montage, de la soumission et de l'évaluation.
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

      {/* PROJETS FINANCÉS EN COURS */}
      <section className="py-14 mt-6" style={{ background: PARCHMENT_ALT }}>
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading roman="II." title="Projets financés en cours" />
          <article className="bg-white overflow-hidden" style={{ boxShadow: SHADOW, border: `1px solid ${LINE}` }}>
            {EN_COURS.map((p, i) => (
              <div key={p.acronyme} className="px-5 py-5" style={{ borderTop: i === 0 ? "none" : `1px solid ${LINE}` }}>
                <div className="flex flex-col md:flex-row md:items-start md:gap-4 mb-3">
                  <span
                    className="inline-flex shrink-0 items-center justify-center px-2.5 py-1 text-[11px] font-bold tracking-widest"
                    style={{ background: NAVY, color: GOLD, fontFamily: "Georgia, serif", borderRadius: 4 }}
                  >
                    {p.acronyme}
                  </span>
                  <h3 className="font-bold text-[15px] md:text-base leading-snug mt-1 md:mt-0" style={{ color: NAVY, fontFamily: FONT }}>
                    {p.intitule}
                  </h3>
                </div>
                <div className="grid md:grid-cols-6 gap-3 text-xs md:text-sm mt-3">
                  <Field label="Financement">
                    <p className="leading-relaxed" style={{ color: INK_SOFT, fontFamily: FONT }}>{p.financement}</p>
                  </Field>
                  <Field label="Montant">
                    <p className="leading-relaxed" style={{ color: INK_SOFT, fontFamily: FONT }}>{p.montant}</p>
                  </Field>
                  <Field label="Période">
                    <p className="leading-relaxed" style={{ color: INK_SOFT, fontFamily: FONT }}>{p.periode}</p>
                  </Field>
                  <Field label="Pilote">
                    <p className="leading-relaxed" style={{ color: INK_SOFT, fontFamily: FONT }}>{p.pilote}</p>
                  </Field>
                  <Field label="Partenaires">
                    <p className="leading-relaxed" style={{ color: INK_SOFT, fontFamily: FONT }}>{p.partenaires}</p>
                  </Field>
                  <Field label="Statut">
                    <span
                      className="inline-block px-2.5 py-1 text-[11px] font-semibold"
                      style={{ background: "rgba(200,168,75,0.14)", color: "#806724", fontFamily: FONT, borderRadius: 999 }}
                    >
                      {p.statut}
                    </span>
                  </Field>
                </div>
              </div>
            ))}
          </article>
        </div>
      </section>

      {/* PROCHAINS APPELS */}
      <section className="max-w-6xl mx-auto px-4 pt-14 pb-4">
        <SectionHeading roman="III." title="Prochains appels à propositions" />
        <article className="bg-white overflow-hidden" style={{ boxShadow: SHADOW, border: `1px solid ${LINE}` }}>
          {APPELS_FUTURS.map((a, i) => (
            <div
              key={a.date_limite + a.financement}
              className="grid md:grid-cols-[1fr_1.1fr_1.5fr_1fr_1fr_1.2fr] gap-3 px-5 py-4 text-sm items-start"
              style={{ borderTop: i === 0 ? "none" : `1px solid ${LINE}` }}
            >
              <Field label="Date limite">
                <p className="font-semibold" style={{ color: NAVY, fontFamily: FONT }}>{a.date_limite}</p>
              </Field>
              <Field label="Appel">
                <p className="font-semibold" style={{ color: NAVY, fontFamily: FONT }}>{a.financement}</p>
              </Field>
              <Field label="Type">
                <p className="leading-relaxed" style={{ color: INK_SOFT, fontFamily: FONT }}>{a.type}</p>
              </Field>
              <Field label="Montant max">
                <p style={{ color: INK_SOFT, fontFamily: FONT }}>{a.montant_max}</p>
              </Field>
              <Field label="Axes">
                <p style={{ color: INK_SOFT, fontFamily: FONT }}>{a.axe}</p>
              </Field>
              <Field label="Contact">
                <p className="text-[13px] leading-relaxed" style={{ color: INK_SOFT, fontFamily: FONT }}>{a.contact}</p>
              </Field>
            </div>
          ))}
        </article>
      </section>

      {/* COMMENT SOUMETTRE & APPUI */}
      <section className="py-14 mt-6" style={{ background: PARCHMENT_ALT }}>
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading roman="IV." title="Comment soumettre & appui au montage" />
          <div className="grid md:grid-cols-2 gap-6 pt-2">
            <div
              className="p-6 bg-white"
              style={{ boxShadow: SHADOW, border: `1px solid ${LINE}`, borderTop: `3px solid ${GOLD}` }}
            >
              <h3 className="text-lg font-bold mb-4" style={{ color: NAVY, fontFamily: "Georgia, serif" }}>
                Comment soumettre ?
              </h3>
              <ul className="space-y-2.5 text-sm" style={{ color: INK_SOFT, fontFamily: FONT }}>
                {SOUMETTRE.map((s) => (
                  <li key={s.strong} className="flex gap-2">
                    <span className="shrink-0" style={{ color: GOLD }} aria-hidden>
                      ✦
                    </span>
                    <span className="leading-relaxed">
                      <strong style={{ color: NAVY }}>{s.strong}</strong> {s.rest}
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
                Appui au montage
              </h3>
              <ul className="space-y-2.5 text-sm" style={{ color: INK_SOFT, fontFamily: FONT }}>
                {APPUI.map((a) => (
                  <li key={a} className="flex gap-2">
                    <span className="shrink-0" style={{ color: GOLD }} aria-hidden>
                      ✦
                    </span>
                    <span className="leading-relaxed">{a}</span>
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