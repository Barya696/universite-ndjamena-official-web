"use client";

import { useState } from "react";
import { BRAND } from "../../Utils/brand";

const NAVY = BRAND.navy;
const NAVY_DEEP = BRAND.navyDeep;
const GOLD = BRAND.gold;
const PARCHMENT = "#FAF8F3";
const PARCHMENT_ALT = "#F3EEE1";
const LINE = "#DDD6C4";
const INK = "#2B2B2B";
const INK_SOFT = "#565553";
const SHADOW = "0 4px 18px -8px rgba(20,30,55,0.18)";
const BRIQUE = "#8A3A3A";
const FONT = "'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif";

type Categorie = "officiel" | "academique" | "concours" | "evenement" | "securite";

const CATEGORIES: Record<Categorie, { label: string; color: string }> = {
  officiel: { label: "Officiel", color: NAVY },
  academique: { label: "Académique", color: "#2f6c9c" },
  concours: { label: "Concours & bourses", color: "#8a6d1f" },
  evenement: { label: "Événement", color: "#3f6b4e" },
  securite: { label: "Sécurité & santé", color: BRIQUE },
};

interface PieceJointe {
  nom: string;
}

interface Communique {
  id: string;
  date: string;
  categorie: Categorie;
  titre: string;
  chapo: string;
  aLaUne?: boolean;
  pieces?: PieceJointe[];
}

const A_LA_UNE: Communique = {
  id: "c-2025-09-a",
  date: "9 septembre 2025",
  categorie: "officiel",
  titre: "Report d'une semaine de la rentrée académique 2025–2026",
  chapo:
    "Le Conseil Académique a acté le report de la rentrée au 15 septembre pour l'ensemble des facultés, afin d'achever les travaux de réhabilitation des amphithéâtres du campus de Toukra. Les inscriptions administratives restent ouvertes selon le calendrier initial.",
  pieces: [{ nom: "Décision CA n°2025-09-011" }],
};

const COMMUNIQUES: Communique[] = [
  {
    id: "c-2025-08",
    date: "28 août 2025",
    categorie: "concours",
    titre: "Ouverture du concours d'entrée en première année de Médecine",
    chapo:
      "Les inscriptions au concours d'entrée en Faculté de Médecine et des Sciences de la Santé sont ouvertes jusqu'au 20 septembre. 180 places sont proposées cette année, réparties entre les filières Médecine générale et Pharmacie.",
    pieces: [{ nom: "Dossier de candidature" }, { nom: "Programme du concours" }],
  },
  {
    id: "c-2025-07",
    date: "15 juillet 2025",
    categorie: "evenement",
    titre: "UDN INNOV : hackathon annuel les 21 et 22 juillet",
    chapo:
      "La troisième édition du hackathon UDN INNOV réunira des équipes étudiantes autour de projets liés à l'eau, l'énergie et l'agriculture sahélienne. Trois projets seront retenus pour un accompagnement à l'incubation ACE-E2D.",
  },
  {
    id: "c-2025-06",
    date: "3 juin 2025",
    categorie: "securite",
    titre: "Consignes de sécurité pendant la saison des pluies",
    chapo:
      "En raison des risques d'inondation sur le campus de Farcha, les services techniques rappellent les itinéraires de repli et demandent la vigilance des étudiants et personnels lors des épisodes de fortes précipitations.",
    pieces: [{ nom: "Plan d'itinéraires de repli" }],
  },
  {
    id: "c-2025-04",
    date: "22 avril 2025",
    categorie: "academique",
    titre: "Nouvelle mention de Master en Data Science et IA",
    chapo:
      "La Faculté des Sciences Exactes et Appliquées ouvre à la rentrée 2025–2026 une mention de Master consacrée à la science des données et à l'intelligence artificielle, en partenariat avec deux universités partenaires en Afrique de l'Ouest.",
  },
  {
    id: "c-2025-02",
    date: "11 février 2025",
    categorie: "officiel",
    titre: "Fermeture des services administratifs le 11 février",
    chapo:
      "L'ensemble des services administratifs et pédagogiques sera fermé à l'occasion de la Fête de l'indépendance. Les bibliothèques universitaires rouvriront normalement dès le lendemain.",
  },
  {
    id: "c-2025-01",
    date: "20 janvier 2025",
    categorie: "academique",
    titre: "Résultats de la session de rattrapage du premier semestre",
    chapo:
      "Les résultats de la session de rattrapage du premier semestre 2024–2025 sont désormais consultables sur l'ENT. Toute contestation doit être déposée dans les 10 jours suivant l'affichage, accompagnée d'un dossier motivé.",
  },
  {
    id: "c-2024-11",
    date: "14 novembre 2024",
    categorie: "evenement",
    titre: "Journée de la langue arabe : programme des activités",
    chapo:
      "À l'occasion de la Journée de la langue arabe, l'Institut Supérieur Pédagogique organise conférences, lectures et une exposition de calligraphie ouvertes à l'ensemble de la communauté universitaire.",
  },
];

export default function Communiques() {
  const [filtre, setFiltre] = useState<Categorie | "tous">("tous");

  const liste =
    filtre === "tous" ? COMMUNIQUES : COMMUNIQUES.filter((c) => c.categorie === filtre);

  return (
    <div style={{ background: PARCHMENT }} className="min-h-screen">
      {/* EN-TÊTE — même traitement que HistoireMission */}
      <section
        className="py-16 px-4 md:px-[50px]"
        style={{ background: `linear-gradient(180deg, ${NAVY_DEEP} 0%, ${NAVY} 100%)` }}
      >
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.2em] text-xs mb-3" style={{ color: GOLD }}>
            Nouvelles &amp; Événements
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ color: GOLD, fontFamily: "Georgia, serif" }}
          >
            Communiqués
          </h1>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
            Annonces officielles, décisions du Conseil Académique et informations
            pratiques adressées à la communauté universitaire sur les 4 campus.
          </p>
        </div>
      </section>

      {/* À LA UNE */}
      <section className="max-w-5xl mx-auto px-4 pt-14 pb-4">
        <div className="relative">
          <div
            aria-hidden
            className="absolute"
            style={{
              top: 14,
              left: 10,
              right: -10,
              bottom: -10,
              background: NAVY,
              transform: "rotate(-1deg)",
              boxShadow: "0 18px 34px -20px rgba(10,20,40,0.55)",
            }}
          />
          <div
            className="relative bg-white p-8"
            style={{
              boxShadow: "0 24px 46px -22px rgba(20,30,55,0.4), 0 8px 16px -10px rgba(20,30,55,0.22)",
              border: `1px solid ${LINE}`,
              borderTop: `3px solid ${GOLD}`,
              backgroundImage: `linear-gradient(160deg, #ffffff 0%, ${PARCHMENT} 100%)`,
            }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span
                className="text-xs font-semibold px-2.5 py-1"
                style={{ background: GOLD, color: NAVY_DEEP, fontFamily: FONT }}
              >
                À la une
              </span>
              <span className="text-sm" style={{ color: INK_SOFT, fontFamily: FONT }}>
                {A_LA_UNE.date}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ color: NAVY, fontFamily: FONT }}>
              {A_LA_UNE.titre}
            </h3>
            <p className="leading-relaxed text-[15px] mb-4" style={{ color: INK_SOFT, fontFamily: FONT }}>
              {A_LA_UNE.chapo}
            </p>
            {A_LA_UNE.pieces && (
              <div className="flex flex-wrap gap-3">
                {A_LA_UNE.pieces.map((p) => (
                  <a
                    key={p.nom}
                    href="#"
                    className="text-sm flex items-center gap-2 border px-3 py-1.5 hover:bg-[#f6f9fd] transition"
                    style={{ borderColor: LINE, color: NAVY, fontFamily: FONT }}
                  >
                    <span style={{ color: GOLD }}>⬇</span> {p.nom}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FILTRES */}
      <section className="max-w-5xl mx-auto px-4 pt-10">
        <div className="flex items-baseline gap-3 mb-6">
          <span className="text-sm" style={{ color: GOLD, fontFamily: FONT }}>
            II.
          </span>
          <h2
            className="text-2xl font-bold pb-2 flex-1"
            style={{ color: NAVY, fontFamily: FONT, borderBottom: `2px solid ${NAVY}` }}
          >
            Tous les communiqués
          </h2>
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setFiltre("tous")}
            className="text-sm px-3.5 py-1.5 border transition"
            style={{
              fontFamily: FONT,
              borderColor: filtre === "tous" ? NAVY : LINE,
              background: filtre === "tous" ? NAVY : "transparent",
              color: filtre === "tous" ? "#fff" : INK_SOFT,
            }}
          >
            Tous
          </button>
          {(Object.keys(CATEGORIES) as Categorie[]).map((key) => {
            const actif = filtre === key;
            const c = CATEGORIES[key];
            return (
              <button
                key={key}
                onClick={() => setFiltre(key)}
                className="text-sm px-3.5 py-1.5 border transition"
                style={{
                  fontFamily: FONT,
                  borderColor: actif ? c.color : LINE,
                  background: actif ? c.color : "transparent",
                  color: actif ? "#fff" : INK_SOFT,
                }}
              >
                {c.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* LISTE */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="bg-white" style={{ boxShadow: SHADOW, border: `1px solid ${LINE}` }}>
          {liste.map((c, i) => {
            const cat = CATEGORIES[c.categorie];
            return (
              <div
                key={c.id}
                className="grid md:grid-cols-[140px_1fr] gap-2 md:gap-8 py-7 px-6 md:px-8"
                style={{ borderBottom: i !== liste.length - 1 ? `1px solid ${LINE}` : "none" }}
              >
                <div className="flex md:block items-baseline gap-3">
                  <div
                    className="font-semibold"
                    style={{ color: INK_SOFT, fontFamily: FONT, fontSize: "13px" }}
                  >
                    {c.date}
                  </div>
                  <div className="hidden md:block w-8 h-[2px] mt-3" style={{ background: cat.color }} />
                </div>
                <div>
                  <span
                    className="inline-block text-xs font-semibold px-2 py-0.5 mb-2"
                    style={{ background: `${cat.color}1A`, color: cat.color, fontFamily: FONT }}
                  >
                    {cat.label}
                  </span>
                  <h4 className="font-bold mb-1.5 text-[15px]" style={{ color: NAVY, fontFamily: FONT }}>
                    {c.titre}
                  </h4>
                  <p className="leading-relaxed text-sm mb-3" style={{ color: INK_SOFT, fontFamily: FONT }}>
                    {c.chapo}
                  </p>
                  {c.pieces && (
                    <div className="flex flex-wrap gap-3">
                      {c.pieces.map((p) => (
                        <a
                          key={p.nom}
                          href="#"
                          className="text-sm flex items-center gap-1.5 hover:underline"
                          style={{ color: NAVY, fontFamily: FONT }}
                        >
                          <span style={{ color: GOLD }}>⬇</span> {p.nom}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          {liste.length === 0 && (
            <div className="py-12 text-center text-sm" style={{ color: INK_SOFT, fontFamily: FONT }}>
              Aucun communiqué dans cette catégorie pour le moment.
            </div>
          )}
        </div>
      </section>

      {/* ABONNEMENT */}
      <section className="py-14" style={{ background: PARCHMENT_ALT }}>
        <div
          className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row md:items-center justify-between gap-6 py-8"
          style={{ background: "#fff", border: `1px solid ${LINE}`, boxShadow: SHADOW }}
        >
          <div className="px-6 md:px-2">
            <h3 className="text-lg font-bold mb-1.5" style={{ color: NAVY, fontFamily: FONT }}>
              Recevoir les communiqués par courriel
            </h3>
            <p className="text-sm" style={{ color: INK_SOFT, fontFamily: FONT }}>
              Un message par publication, envoyé à l'adresse institutionnelle des étudiants et du personnel.
            </p>
          </div>
          <a
            href="#"
            className="shrink-0 text-sm font-semibold px-5 py-2.5 mx-6 md:mx-2"
            style={{ background: NAVY, color: "#fff", fontFamily: FONT }}
          >
            S'abonner
          </a>
        </div>
      </section>
    </div>
  );
}