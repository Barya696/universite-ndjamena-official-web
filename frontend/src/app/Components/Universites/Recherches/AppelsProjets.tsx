import { BRAND } from "../../Utils/brand";

const NAVY = BRAND.navy;
const GOLD = BRAND.gold;

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

export default function AppelsProjets() {
  return (
    <div className="bg-white min-h-screen">
      <section
        className="py-16 px-4 md:px-[50px]"
        style={{ background: `linear-gradient(180deg, ${BRAND.navyDeep} 0%, ${NAVY} 100%)` }}
      >
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.2em] text-xs mb-3" style={{ color: GOLD }}>
            Recherches
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: GOLD, fontFamily: "Georgia, serif" }}>
            Appels à projets
          </h1>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
            Suivez en temps réel les projets de recherche financés par les grands
            bailleurs internationaux et les prochains appels à proposition.
            L'Université de N'Djamena accompagne ses chercheurs tout au long du
            montage, de la soumission et de l'évaluation.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-4 text-sm">
          {[
            { k: "Projets financés en cours", v: "6" },
            { k: "Budget total mobilisé 2024", v: "3,33 Md FCFA" },
            { k: "Appels futurs à comparaître", v: "6" },
            { k: "Chercheurs accompagnés / an", v: "180+" },
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

      <section className="max-w-6xl mx-auto px-4 pb-12">
        <h2
          className="text-2xl font-bold mb-6 pb-2 inline-block"
          style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
        >
          Projets financés en cours
        </h2>
        <article className="rounded-lg border overflow-hidden" style={{ borderColor: "#e2e8f0" }}>
          <div className="bg-white divide-y divide-gray-100">
            {EN_COURS.map((p, i) => (
              <div key={p.acronyme} className="px-5 py-5">
                <div className="flex flex-col md:flex-row md:items-start md:gap-4 mb-3">
                  <span
                    className="inline-flex shrink-0 items-center justify-center rounded-lg px-2.5 py-1 text-[11px] font-bold tracking-widest"
                    style={{ background: NAVY, color: GOLD, fontFamily: "Georgia, serif" }}
                  >
                    {p.acronyme}
                  </span>
                  <h3 className="font-bold text-[15px] md:text-base leading-snug mt-1 md:mt-0" style={{ color: NAVY }}>
                    {p.intitule}
                  </h3>
                </div>
                <div className="grid md:grid-cols-6 gap-3 text-xs md:text-sm mt-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#8a8a8a] mb-1">Financement</p>
                    <p className="text-[#444] leading-relaxed">{p.financement}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#8a8a8a] mb-1">Montant</p>
                    <p className="text-[#444] leading-relaxed">{p.montant}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#8a8a8a] mb-1">Période</p>
                    <p className="text-[#444] leading-relaxed">{p.periode}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#8a8a8a] mb-1">Pilote</p>
                    <p className="text-[#444] leading-relaxed">{p.pilote}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#8a8a8a] mb-1">Partenaires</p>
                    <p className="text-[#444] leading-relaxed">{p.partenaires}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#8a8a8a] mb-1">Statut</p>
                    <span
                      className="inline-block px-2.5 py-1 rounded text-[11px] font-semibold"
                      style={{ background: "rgba(26,58,92,0.08)", color: NAVY }}
                    >
                      {p.statut}
                    </span>
                  </div>
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
          Prochains appels à propositions
        </h2>
        <article className="rounded-lg border overflow-hidden" style={{ borderColor: "#e2e8f0" }}>
          <div className="bg-white divide-y divide-gray-100">
            {APPELS_FUTURS.map((a) => (
              <div
                key={a.date_limite + a.financement}
                className="grid md:grid-cols-[1fr_1.1fr_1.5fr_1fr_1fr_1.2fr] gap-3 px-5 py-4 text-sm items-start"
              >
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#8a8a8a] mb-1">Date limite</p>
                  <p className="font-semibold" style={{ color: NAVY }}>{a.date_limite}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#8a8a8a] mb-1">Appel</p>
                  <p className="font-semibold" style={{ color: NAVY }}>{a.financement}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#8a8a8a] mb-1">Type</p>
                  <p className="text-[#444] leading-relaxed">{a.type}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#8a8a8a] mb-1">Montant max</p>
                  <p className="text-[#444]">{a.montant_max}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#8a8a8a] mb-1">Axes</p>
                  <p className="text-[#444]">{a.axe}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#8a8a8a] mb-1">Contact</p>
                  <p className="text-[#444] text-[13px] leading-relaxed">{a.contact}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section style={{ background: "#f6f6f6" }} className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="rounded-lg border p-6" style={{ background: "#fff", borderColor: "#e2e8f0" }}>
            <h3
              className="text-xl font-bold mb-3 pb-2 inline-block"
              style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
            >
              Comment soumettre ?
            </h3>
            <ul className="space-y-2.5 text-sm text-[#444]">
              <li>✦ <strong style={{color: NAVY}}>Étape 1</strong> · Pré-candidature — synopsis 3 p. au VPR 3 mois avant DL</li>
              <li>✦ <strong style={{color: NAVY}}>Étape 2</strong> · Avis éthique (CONE) + avis laboratoire d'affectation</li>
              <li>✦ <strong style={{color: NAVY}}>Étape 3</strong> · Montage budgétaire + convention service recherche</li>
              <li>✦ <strong style={{color: NAVY}}>Étape 4</strong> · Soumission + accusé de réception</li>
              <li>✦ <strong style={{color: NAVY}}>Étape 5</strong> · Notification · signature convention · lancement</li>
            </ul>
          </div>
          <div className="rounded-lg border p-6" style={{ background: "#fff", borderColor: "#e2e8f0" }}>
            <h3
              className="text-xl font-bold mb-3 pb-2 inline-block"
              style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
            >
              Appui au montage
            </h3>
            <ul className="space-y-2.5 text-sm text-[#444]">
              <li>✦ Service Recherche & Partenariats — Campus Toukra, Bât. A, A-118</li>
              <li>✦ VPR : Prof. Mahamat Youssouf · vice-rectorat-recherche@undt.edu.td</li>
              <li>✦ Appui juridique & budgétaire · 12 points d'appui facultaires</li>
              <li>✦ Newsletter mensuelle : <strong>recherche-actus@undt.edu.td</strong> (abonnement libre)</li>
              <li>✦ Calendrier : appels-projets-recherche.undt.edu.td</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
