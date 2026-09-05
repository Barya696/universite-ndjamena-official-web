"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
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

const RESSOURCES = [
  {
    titre: "Bibliothèques & centres de documentation",
    icone: "📚",
    image: "/images/ressources/bibliotheque.jpg",
    alt: "Salle de lecture de la bibliothèque centrale de l'UDN, campus de Toukra",
    imageAccent: "/images/ressources/bibliotheque-detail.jpg",
    altAccent: "Rayonnages de la bibliothèque centrale",
    description:
      "Bibliothèque centrale (campus Toukra), bibliothèques de chaque faculté, bibliothèque médicale de Farcha et portail documentaire SUDOC-UDN.",
    detail: [
      "450 000+ ouvrages imprimés et thèses",
      "Accès en ligne à 80 bases de données scientifiques",
      "Journaux électroniques : 12 000 titres",
      "Espaces de travail : 1 400 places",
    ],
  },
  {
    titre: "Campus & infrastructures",
    icone: "🏛️",
    image: "/images/ressources/campus.jpg",
    alt: "Vue du campus de Toukra, Université de N'Djamena",
    imageAccent: "/images/ressources/campus-detail.jpg",
    altAccent: "Amphithéâtre du campus de Toukra",
    description:
      "Trois campus à N'Djamena (Toukra, Farcha, Ardep-Djoumal) et un centre universitaire régional à Doba.",
    detail: [
      "218 hectares au total",
      "Amphithéâtres : 22 (de 120 à 1 200 places)",
      "Salles de TD : 240",
      "Laboratoires pédagogiques : 48",
    ],
  },
  {
    titre: "Outils numériques (ENT & LMS)",
    icone: "💻",
    image: "/images/ressources/numerique.jpg",
    alt: "Étudiants dans une salle informatique de l'UDN",
    imageAccent: "/images/ressources/numerique-detail.jpg",
    altAccent: "Étudiant consultant l'ENT sur un ordinateur portable",
    description:
      "Un portail unique étudiant pour s'inscrire, suivre les cours, accéder aux notes, télécharger les syllabus et dialoguer avec les enseignants.",
    detail: [
      "ENT (Espace Numérique de Travail) : mail, agenda, notes, inscription en ligne",
      "Plateforme Moodle pour les cours hybrides et à distance",
      "WiFi sur les 3 campus",
      "Accès Microsoft 365 pour toute la communauté",
    ],
  },
  {
    titre: "Laboratoires & plateformes techniques",
    icone: "🔬",
    image: "/images/ressources/laboratoire.jpg",
    alt: "Chercheur au travail dans un laboratoire accrédité de l'UDN",
    imageAccent: "/images/ressources/laboratoire-detail.jpg",
    altAccent: "Manipulation au microscope en laboratoire",
    description:
      "28 laboratoires accrédités et plateformes mutualisées pour la recherche et les travaux pratiques.",
    detail: [
      "Centre régional de microscopie",
      "Plateforme de séquençage & génomique (en partenariat AUF)",
      "Observatoire sahélien de l'environnement",
      "FabLab — atelier de fabrication numérique",
    ],
  },
  {
    titre: "Vie étudiante & œuvres universitaires",
    icone: "🎓",
    image: "/images/ressources/vie-etudiante.jpg",
    alt: "Étudiants au restaurant universitaire du campus de Farcha",
    imageAccent: "/images/ressources/vie-etudiante-detail.jpg",
    altAccent: "Résidence universitaire du campus de Toukra",
    description:
      "Le Service des Œuvres Universitaires (SOU) accompagne au quotidien les 30 000 étudiants de l'UDN.",
    detail: [
      "5 200 places en cités universitaires (Toukra, Farcha, Ardep-Djoumal)",
      "8 restaurants & cafétérias universitaires",
      "Polyclinique médicale universitaire",
      "Agence d'insertion professionnelle & stages",
    ],
  },
  {
    titre: "Sport & culture",
    icone: "⚽",
    image: "/images/ressources/sport-culture.jpg",
    alt: "Match inter-facultés au stade universitaire de Toukra",
    imageAccent: "/images/ressources/sport-culture-detail.jpg",
    altAccent: "Festival culturel annuel de l'UDN",
    description:
      "Activités sportives et culturelles encadrées toute l'année universitaire.",
    detail: [
      "Stade, terrains multisports, piscine olympique (Toukra)",
      "Club de lecture, théâtre, danse, musique",
      "Festival culturel annuel de l'UDN",
      "Championnats inter-facultés (tous sports)",
    ],
  },
];

const CONTACTS = [
  { t: "Service de la Scolarité Centrale", d: "Campus de Toukra — de 8h à 16h, du lundi au vendredi", c: "+235 22 51 44 52" },
  { t: "Système Bibliothécaire (SBU)", d: "Portail en ligne 24h/24 — bibliothèque.udn.edu.td", c: "+235 22 51 44 60" },
  { t: "Service des Œuvres Univ. (SOU)", d: "Logement, restauration, santé & bourses", c: "+235 22 51 44 71" },
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

// Emoji-glyph medallion, set in the same navy-fill / gold-ring language
// as the icon badges used across the site (see HistoireMission's MissionIcon).
function RessourceIcon({ glyph }: { glyph: string }) {
  return (
    <span
      className="inline-flex items-center justify-center shrink-0 text-xl"
      style={{
        width: 48,
        height: 48,
        borderRadius: "9999px",
        background: `radial-gradient(circle at 32% 28%, ${NAVY} 0%, ${NAVY_DEEP} 75%)`,
        border: `1px solid ${GOLD}`,
        boxShadow: `0 6px 14px -6px rgba(10,20,40,0.55), inset 0 1px 1px rgba(255,255,255,0.18)`,
      }}
    >
      {glyph}
    </span>
  );
}

// Image with a graceful fallback: until the real photo is dropped at `src`,
// this renders a styled placeholder (instead of a broken-image icon) so the
// layout looks intentional and the missing asset is obvious to whoever is
// wiring up the photos.
function ImageSlot({ src, alt, className = "h-44 md:h-56" }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className="w-full h-full object-cover"
        />
      ) : (
        <div
          className="w-full h-full flex flex-col items-center justify-center gap-1.5 text-center px-2"
          style={{ background: `linear-gradient(160deg, ${NAVY} 0%, ${NAVY_DEEP} 100%)` }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="6" width="18" height="13" rx="2" />
            <path d="M8 6l1.5-2h5L16 6" />
            <circle cx="12" cy="12.5" r="3.2" />
          </svg>
          <span style={{ color: "rgba(255,255,255,0.5)", fontFamily: FONT, fontSize: "0.62rem", lineHeight: 1.4 }}>
            Photo à venir
          </span>
        </div>
      )}
    </div>
  );
}

// Small dot-grid accent — an echo of the site's gold ✦ marks, used here as a
// loose decorative texture near an image cluster rather than a bullet.
function DotGrid({ style }: { style?: CSSProperties }) {
  return (
    <div
      aria-hidden
      className="hidden md:block absolute"
      style={{
        width: 64,
        height: 64,
        backgroundImage: `radial-gradient(${GOLD} 1.6px, transparent 1.6px)`,
        backgroundSize: "11px 11px",
        opacity: 0.4,
        zIndex: 0,
        ...style,
      }}
    />
  );
}

const CORNER_STYLE: Record<"tl" | "tr" | "bl" | "br", CSSProperties> = {
  tl: { top: -18, left: -18 },
  tr: { top: -18, right: -18 },
  bl: { bottom: -18, left: -18 },
  br: { bottom: -18, right: -18 },
};

// Six hand-picked compositions — one per resource — so the image/text side,
// the accent-photo corner, the dot accent, the crop shape (landscape,
// portrait, square) and the accent size/shape never repeat: every entry
// gets its own distinct framing instead of a single cropped mould reused
// six times.
const LAYOUTS: {
  textSide: "left" | "right";
  accentCorner: "tl" | "tr" | "bl" | "br";
  dotCorner: "tl" | "tr" | "bl" | "br";
  rotate: number;
  mainClass: string;
  accentClass: string;
  accentRound: string;
}[] = [
  { textSide: "right", accentCorner: "br", dotCorner: "tl", rotate: -1.6, mainClass: "w-full md:w-72 h-48 md:h-44", accentClass: "w-20 h-20 md:w-24 md:h-24", accentRound: "" },
  { textSide: "left", accentCorner: "tl", dotCorner: "br", rotate: 1.4, mainClass: "w-full md:w-56 h-64 md:h-72", accentClass: "w-24 h-24 md:w-28 md:h-28", accentRound: "rounded-full" },
  { textSide: "right", accentCorner: "tr", dotCorner: "bl", rotate: -1.1, mainClass: "w-full md:w-60 h-56 md:h-60", accentClass: "w-24 h-16 md:w-28 md:h-20", accentRound: "" },
  { textSide: "left", accentCorner: "br", dotCorner: "tl", rotate: 1.2, mainClass: "w-full md:w-64 h-44 md:h-48", accentClass: "w-16 h-24 md:w-20 md:h-28", accentRound: "" },
  { textSide: "right", accentCorner: "bl", dotCorner: "tr", rotate: -1.8, mainClass: "w-full md:w-52 h-60 md:h-64", accentClass: "w-24 h-24 md:w-28 md:h-28", accentRound: "rounded-full" },
  { textSide: "left", accentCorner: "tr", dotCorner: "bl", rotate: 1.0, mainClass: "w-full md:w-72 h-40 md:h-44", accentClass: "w-20 h-20 md:w-24 md:h-24", accentRound: "" },
];

// Main photo + a smaller overlapping accent photo, echoing the layered,
// non-repetitive photo compositions used across the reference design —
// reworked here in the site's own navy/gold/parchment language.
function ImageCluster({
  mainSrc,
  mainAlt,
  accentSrc,
  accentAlt,
  layout,
}: {
  mainSrc: string;
  mainAlt: string;
  accentSrc: string;
  accentAlt: string;
  layout: (typeof LAYOUTS)[number];
}) {
  return (
    <div
      className={`relative shrink-0 mx-auto md:mx-0 ${layout.mainClass}`}
      style={{ marginTop: 8, marginBottom: 20 }}
    >
      <DotGrid style={CORNER_STYLE[layout.dotCorner]} />
      <div
        className="relative w-full h-full"
        style={{
          transform: `rotate(${layout.rotate}deg)`,
          border: `1px solid ${LINE}`,
          borderTop: `3px solid ${GOLD}`,
          boxShadow: SHADOW,
          background: "#fff",
        }}
      >
        <ImageSlot src={mainSrc} alt={mainAlt} className="h-full" />
      </div>
      <div
        className={`absolute overflow-hidden ${layout.accentClass} ${layout.accentRound}`}
        style={{
          ...CORNER_STYLE[layout.accentCorner],
          border: `4px solid ${PARCHMENT}`,
          boxShadow: "0 10px 22px -10px rgba(20,30,55,0.45)",
          zIndex: 1,
        }}
      >
        <ImageSlot src={accentSrc} alt={accentAlt} className="h-full" />
      </div>
    </div>
  );
}

export default function ResourcesAcademique() {
  return (
    <div style={{ background: PARCHMENT }} className="min-h-screen">
      {/* EN-TÊTE — matches the other section heroes */}
      <section
        className="relative py-16 px-4 md:px-[50px] overflow-hidden"
        style={{
          background: `linear-gradient(180deg, ${NAVY_DEEP} 0%, ${NAVY} 100%)`,
        }}
      >
        {/* Campus photo placeholder: drop a real image at this path and it
            will show through under the navy overlay; until then the plain
            gradient above remains the background, so nothing ever breaks. */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(10,20,40,0.55) 0%, ${NAVY} 90%), url('/images/hero/ressources-academiques.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="max-w-6xl mx-auto relative">
          <p className="uppercase tracking-[0.2em] text-xs mb-3" style={{ color: GOLD, fontFamily: FONT }}>
            Formations
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ color: GOLD, fontFamily: "Georgia, serif" }}
          >
            Ressources académiques
          </h1>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed" style={{ fontFamily: FONT }}>
            Bibliothèques, campus, ENT, laboratoires, vie étudiante : tout ce que
            l'Université de N'Djamena met à disposition pour étudier, chercher et réussir.
          </p>
        </div>
      </section>

      {/* RESSOURCES */}
      <section className="max-w-6xl mx-auto px-4 pt-14 pb-4">
        <SectionHeading roman="I." title="Ressources mises à disposition" />
        <div className="space-y-16 md:space-y-24 pt-4">
          {RESSOURCES.map((r, i) => {
            const layout = LAYOUTS[i % LAYOUTS.length];
            const tinted = i % 2 === 1;
            return (
              <div
                key={r.titre}
                className="relative"
                style={
                  tinted
                    ? { background: PARCHMENT_ALT, margin: "0 -1.5rem", padding: "2.5rem 1.5rem", borderRadius: 4 }
                    : undefined
                }
              >
                <div
                  className={`flex flex-col gap-8 md:gap-14 md:items-center ${
                    layout.textSide === "left" ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  <ImageCluster
                    mainSrc={r.image}
                    mainAlt={r.alt}
                    accentSrc={r.imageAccent}
                    accentAlt={r.altAccent}
                    layout={layout}
                  />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-4">
                      <RessourceIcon glyph={r.icone} />
                      <h3 className="text-xl font-bold leading-snug" style={{ color: NAVY, fontFamily: "Georgia, serif" }}>
                        {r.titre}
                      </h3>
                    </div>
                    <div className="w-10 h-[2px] mb-4" style={{ background: GOLD }} />
                    <p className="leading-relaxed mb-5 text-sm" style={{ color: INK_SOFT, fontFamily: FONT }}>
                      {r.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {r.detail.map((d) => (
                        <span
                          key={d}
                          className="text-xs px-3 py-1.5 leading-relaxed"
                          style={{
                            border: `1px solid ${LINE}`,
                            color: INK_SOFT,
                            fontFamily: FONT,
                            background: "#ffffff",
                            borderRadius: 999,
                          }}
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ACCÈS & CONTACTS UTILES */}
      <section className="py-14 mt-6" style={{ background: PARCHMENT_ALT }}>
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading roman="II." title="Accès & contacts utiles" />
          <div className="grid md:grid-cols-3 gap-6 pt-2">
            {CONTACTS.map((c) => (
              <div
                key={c.t}
                className="p-5 bg-white"
                style={{
                  boxShadow: SHADOW,
                  border: `1px solid ${LINE}`,
                  borderTop: `3px solid ${GOLD}`,
                  backgroundImage: `linear-gradient(160deg, #ffffff 0%, ${PARCHMENT} 100%)`,
                }}
              >
                <p className="font-semibold mb-2" style={{ color: NAVY, fontFamily: FONT }}>
                  {c.t}
                </p>
                <p className="text-sm mb-2" style={{ color: INK_SOFT, fontFamily: FONT }}>
                  {c.d}
                </p>
                <p className="text-sm font-semibold" style={{ color: GOLD, fontFamily: FONT }}>
                  {c.c}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}