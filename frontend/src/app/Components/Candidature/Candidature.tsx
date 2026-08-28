import { useState } from "react";
import { CheckCircle2, FileText, Upload } from "lucide-react";
import { BRAND } from "../Utils/brand";

const NAVY = BRAND.navy;
const GOLD = BRAND.gold;

const NIVEAUX = [
  {
    niveau: "Licence",
    frais: { L1: 50000, L2: 55000, L3: 60000 },
    conditions: [
      "Baccalauréat tchadien ou équivalent étranger reconnu",
      "Âge maximum : 25 ans au 31 octobre de l'année d'inscription",
      "Dossier médical complet",
    ],
    pieces: ["Baccalauréat", "CNI/Passeport", "Photos 4×4", "Certificat médical"],
  },
  {
    niveau: "Master",
    frais: { M1: 90000, M2: 95000 },
    conditions: [
      "Licence (LMD) de l'UDN ou d'une université accréditée",
      "Moyenne minimale : 12/20 (ou Mention Assez Bien)",
      "Dossier de candidature détaillé (Lettre de motivation, CV)",
    ],
    pieces: ["Licence + relevés", "CNI/Passeport", "CV + lettre de motivation", "Projet de mémoire"],
  },
  {
    niveau: "Doctorat",
    frais: { "1ère année": 150000, "2e année": 150000, "3e année": 150000 },
    conditions: [
      "Master de l'UDN ou équivalent avec mention Bien",
      "Proposition de directeur de thèse agréé par le conseil scientifique",
      "Projet de recherche de 10 pages minimum",
    ],
    pieces: ["Master + relevés", "CV + liste publications", "Projet de recherche", "Lettre directeur de thèse"],
  },
];

const FACULTES = [
  "Droit & Sciences Politiques",
  "Lettres & Sciences Humaines",
  "Sciences Exactes & Appliquées",
  "Sciences de la Santé",
  "Sciences Économiques & Gestion",
  "Éducation & Formation",
  "Théologie & Sciences Religieuses",
  "Agronomie & Environnement",
];

export default function Candidature() {
  const [tab, setTab] = useState<"Licence" | "Master" | "Doctorat">("Licence");
  const selected = NIVEAUX.find((n) => n.niveau === tab)!;

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
            Candidature & Admission
          </h1>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            Conditions d'accès, frais de scolarité et dossier de candidature par niveau.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div
          className="grid grid-cols-3 mb-8 rounded-lg overflow-hidden border"
          style={{ borderColor: "#e2e8f0" }}
        >
          {(["Licence", "Master", "Doctorat"] as const).map((n) => (
            <button
              key={n}
              onClick={() => setTab(n)}
              className="py-4 font-bold transition-colors"
              style={{
                background: tab === n ? NAVY : "#fff",
                color: tab === n ? "#fff" : NAVY,
                fontFamily: "Georgia, serif",
              }}
            >
              {n}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2
              className="text-xl font-bold mb-4 pb-2"
              style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
            >
              Conditions d'accès — {tab}
            </h2>
            <ul className="space-y-3 mb-6">
              {selected.conditions.map((c, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-lg border"
                  style={{ borderColor: "#e2e8f0", background: "#fff" }}
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-green-600" />
                  <span className="text-sm text-[#444] leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>

            <h2
              className="text-xl font-bold mb-4 pb-2"
              style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
            >
              Pièces du dossier
            </h2>
            <div className="rounded-lg border p-5" style={{ borderColor: "#e2e8f0", background: "#f8fafc" }}>
              <div className="grid grid-cols-2 gap-3">
                {selected.pieces.map((p) => (
                  <div
                    key={p}
                    className="flex items-center gap-2 p-2 rounded border"
                    style={{ borderColor: "#cbd5e1", background: "#fff" }}
                  >
                    <FileText className="w-4 h-4 shrink-0" style={{ color: GOLD }} />
                    <span className="text-xs font-medium text-[#444]">{p}</span>
                  </div>
                ))}
              </div>
              <button
                className="w-full mt-4 h-11 rounded-lg font-semibold flex items-center justify-center gap-2 border"
                style={{
                  color: NAVY,
                  borderColor: "#c8d8e8",
                  background: "#f0f4f8",
                }}
              >
                <Upload className="w-4 h-4" />
                Déposer mon dossier (PDF max 10Mo)
              </button>
            </div>
          </div>

          <div>
            <h2
              className="text-xl font-bold mb-4 pb-2"
              style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
            >
              Frais de scolarité 2024–2025
            </h2>
            <div
              className="rounded-lg border overflow-hidden mb-6"
              style={{ borderColor: "#e2e8f0" }}
            >
              <div
                className="grid grid-cols-2 px-4 py-3 text-sm font-bold"
                style={{ background: NAVY, color: "#fff" }}
              >
                <div>Année / Niveau</div>
                <div className="text-right">Frais (FCFA)</div>
              </div>
              {Object.entries(selected.frais).map(([k, v]) => (
                <div
                  key={k}
                  className="grid grid-cols-2 px-4 py-3 text-sm border-t"
                  style={{ borderColor: "#e2e8f0" }}
                >
                  <div className="text-[#444] font-semibold">{k}</div>
                  <div className="text-right font-bold" style={{ color: GOLD }}>
                    {v.toLocaleString("fr-FR")} FCFA
                  </div>
                </div>
              ))}
            </div>

            <h2
              className="text-xl font-bold mb-4 pb-2"
              style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
            >
              Calendrier d'admission
            </h2>
            <div className="rounded-lg border p-5 space-y-3" style={{ borderColor: "#e2e8f0", background: "#fff" }}>
              {[
                ["1er juillet – 31 août", "Dépôt des dossiers de candidature en ligne"],
                ["10 septembre", "Publication des listes de sélection"],
                ["12 – 20 septembre", "Inscriptions administratives & pédagogiques"],
                ["23 septembre", "Rentrée académique 2024–2025"],
              ].map(([date, desc], i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div
                    className="shrink-0 text-xs font-bold px-2 py-1 rounded whitespace-nowrap"
                    style={{ background: "#e8f0f8", color: NAVY }}
                  >
                    {date}
                  </div>
                  <div className="text-sm text-[#444] leading-relaxed">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h2
          className="text-2xl font-bold mb-6 pb-2 text-center"
          style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
        >
          Facultés accessibles en candidature directe
        </h2>
        <div className="grid md:grid-cols-4 gap-4">
          {FACULTES.map((f) => (
            <div
              key={f}
              className="rounded-lg border p-4 text-center transition-all hover:shadow-md"
              style={{ borderColor: "#e2e8f0", background: "#fff", borderTop: `4px solid ${GOLD}` }}
            >
              <h4
                className="text-sm font-bold leading-snug"
                style={{ color: NAVY, fontFamily: "Georgia, serif" }}
              >
                {f}
              </h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
