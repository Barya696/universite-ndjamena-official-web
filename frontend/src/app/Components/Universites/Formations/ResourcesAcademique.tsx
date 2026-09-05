"use client";

import { useState } from "react";
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

// Small chevron that rotates open/closed — kept minimal so it reads as a
// UI affordance rather than another decorative glyph.
function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke={GOLD}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 0.2s ease",
        flexShrink: 0,
      }}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

// Image with a graceful fallback: until the real photo is dropped at `src`,
// this renders a styled placeholder (instead of a broken-image icon) so the
// layout looks intentional and the missing asset is obvious to whoever is
// wiring up the photos.
function ImageSlot({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className="relative w-full h-44 md:h-56 overflow-hidden shrink-0"
      style={{ border: `1px solid ${LINE}`, borderTop: `3px solid ${GOLD}` }}
    >
      {!failed ? (
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className="w-full h-full object-cover"
        />
      ) : (
        <div
          className="w-full h-full flex flex-col items-center justify-center gap-2 text-center px-3"
          style={{ background: `linear-gradient(160deg, ${NAVY} 0%, ${NAVY_DEEP} 100%)` }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="6" width="18" height="13" rx="2" />
            <path d="M8 6l1.5-2h5L16 6" />
            <circle cx="12" cy="12.5" r="3.2" />
          </svg>
          <span style={{ color: "rgba(255,255,255,0.55)", fontFamily: FONT, fontSize: "0.7rem", lineHeight: 1.4 }}>
            Photo à venir
            <br />
            <span style={{ color: "rgba(255,255,255,0.35)" }}>{src}</span>
          </span>
        </div>
      )}
    </div>
  );
}

export default function ResourcesAcademique() {
  const [open, setOpen] = useState<Record<number, boolean>>({ 0: true });

  const toggle = (i: number) =>
    setOpen((prev) => ({ ...prev, [i]: !prev[i] }));

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
        <div className="bg-white" style={{ boxShadow: SHADOW, border: `1px solid ${LINE}` }}>
          {RESSOURCES.map((r, i) => {
            const isOpen = !!open[i];
            return (
              <div
                key={r.titre}
                style={{ borderBottom: i !== RESSOURCES.length - 1 ? `1px solid ${LINE}` : "none" }}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center gap-4 py-6 px-6 md:px-8 text-left"
                  style={{ background: "transparent", cursor: "pointer" }}
                >
                  <RessourceIcon glyph={r.icone} />
                  <h3 className="text-lg font-bold leading-snug flex-1" style={{ color: NAVY, fontFamily: FONT }}>
                    {r.titre}
                  </h3>
                  <Chevron open={isOpen} />
                </button>

                {isOpen && (
                  <div className="pb-10 px-6 md:px-8">
                    <div
                      className={`flex flex-col gap-6 md:gap-10 md:items-center ${
                        i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                      }`}
                    >
                      <div
                        className="relative w-full md:w-60 shrink-0"
                        style={{ transform: i % 2 === 0 ? "rotate(-1.4deg)" : "rotate(1.4deg)" }}
                      >
                        {/* second sheet peeking out behind — same depth cue as the
                            mission cards, alternated left/right per row */}
                        <div
                          aria-hidden
                          className="absolute"
                          style={{
                            top: 10,
                            left: i % 2 === 0 ? -8 : 10,
                            right: i % 2 === 0 ? 10 : -8,
                            bottom: -10,
                            background: NAVY,
                            transform: i % 2 === 0 ? "rotate(2.2deg)" : "rotate(-2.2deg)",
                            boxShadow: "0 16px 30px -18px rgba(10,20,40,0.5)",
                          }}
                        />
                        <div className="relative">
                          <ImageSlot src={r.image} alt={r.alt} />
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="leading-relaxed mb-4 text-sm" style={{ color: INK_SOFT, fontFamily: FONT }}>
                          {r.description}
                        </p>
                        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm" style={{ color: INK_SOFT, fontFamily: FONT }}>
                          {r.detail.map((d) => (
                            <li key={d} className="flex gap-2">
                              <span className="shrink-0" style={{ color: GOLD }} aria-hidden>
                                ✦
                              </span>
                              <span className="leading-relaxed">{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
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