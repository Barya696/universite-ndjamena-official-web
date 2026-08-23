import { useState, useRef, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { BRAND } from "./brand";
import { HeroSubnav } from "./MainLayout";
import imgCeremonial from "./Images/Ceremonial.jpeg";
import imgLaboratory from "./Images/laboratory.jpg";
import imgTechnology from "./Images/Technology.jpeg";

const NAVY = BRAND.navy;
const GOLD = BRAND.gold;
const LIGHT_GOLD = BRAND.goldLight;

// ─── Data ─────────────────────────────────────────────────────────────────────

const FACULTIES = [
  {
    id: "droit",
    label: "Droit & Sc. Politiques",
    icon: "⚖️",
    description:
      "La Faculté de Droit et Sciences Politiques forme des juristes, diplomates et administrateurs capables de répondre aux défis du droit national et international. Les cursus couvrent le droit civil, pénal, constitutionnel et les relations internationales.",
    programs: [
      "Licence en Droit",
      "Master Droit des Affaires",
      "Doctorat en Sciences Politiques",
      "DU Droit Humanitaire",
    ],
  },
  {
    id: "lettres",
    label: "Lettres & Sc. Humaines",
    icon: "📚",
    description:
      "La FLSH rassemble les disciplines des lettres modernes, histoire, géographie, philosophie, sociologie et langues. Elle joue un rôle central dans la préservation du patrimoine culturel tchadien et la production scientifique en sciences humaines.",
    programs: [
      "Lettres Modernes",
      "Histoire & Archéologie",
      "Géographie",
      "Langues Étrangères Appliquées",
    ],
  },
  {
    id: "sciences",
    label: "Sciences Exactes & Appliquées",
    icon: "🔬",
    description:
      "La FSEA propose des formations en mathématiques, physique, chimie, biologie et informatique. Ses laboratoires soutiennent des recherches en ressources naturelles, énergie solaire et modélisation environnementale adaptées au contexte sahélien.",
    programs: [
      "Mathématiques-Physique",
      "Chimie-Biologie",
      "Informatique",
      "Sciences de l'Environnement",
    ],
  },
  {
    id: "sante",
    label: "Sciences de la Santé",
    icon: "🏥",
    description:
      "La Faculté de Médecine et des Sciences de la Santé, implantée sur le campus de Farcha, forme médecins, pharmaciens et chirurgiens-dentistes. Elle est dotée d'un hôpital universitaire et collabore étroitement avec les structures de santé nationales.",
    programs: [
      "Médecine Générale",
      "Pharmacie",
      "Chirurgie Dentaire",
      "Médecine Vétérinaire (FVMA)",
    ],
  },
  {
    id: "eco",
    label: "Sciences Économiques",
    icon: "📊",
    description:
      "La FASEG propose des formations en économie, gestion, comptabilité et finance, orientées vers les réalités du marché africain. Les étudiants bénéficient de stages en entreprise et de partenariats avec des institutions régionales et internationales.",
    programs: [
      "Économie Générale",
      "Gestion des Entreprises",
      "Finance & Comptabilité",
      "Commerce International",
    ],
  },
  {
    id: "education",
    label: "Éducation & Formation",
    icon: "🎓",
    description:
      "La Faculté des Sciences de l'Éducation prépare les futurs enseignants et inspecteurs du système éducatif tchadien. Elle développe des approches pédagogiques innovantes adaptées aux contextes multiculturels et multilingues du pays.",
    programs: [
      "Sciences de l'Éducation",
      "Psychologie de l'Enfant",
      "Formation des Formateurs",
      "Didactique des Langues",
    ],
  },
];

const NEWS_ITEMS = [
  {
    date: "2024-06-18",
    title:
      "Résultats du Baccalauréat 2024 : taux de réussite en hausse",
    excerpt:
      "L'UDN félicite les nouveaux bacheliers et annonce l'ouverture des inscriptions pour l'année académique 2024–2025 dès le 1er juillet.",
  },
  {
    date: "2024-06-10",
    title:
      "Conférence internationale sur le développement durable au Sahel",
    excerpt:
      "L'Université de N'Djamena accueille du 15 au 17 juin 2024 une conférence réunissant chercheurs de 12 pays autour des enjeux climatiques et hydrologiques du bassin du lac Tchad.",
  },
  {
    date: "2024-05-28",
    title:
      "Signature d'un accord de co-diplômation avec l'Université de Bordeaux",
    excerpt:
      "Un partenariat stratégique ouvre la voie à des doubles diplômes en droit et en sciences de l'environnement pour les étudiants des deux établissements.",
  },
  {
    date: "2024-05-15",
    title:
      "Lancement du programme de bourses d'excellence 2024–2025",
    excerpt:
      "50 bourses de mérite intégrales sont disponibles pour les étudiants tchadiens inscrits en Master. Les dossiers sont à déposer avant le 30 juin.",
  },
];

const EVENTS = [
  {
    date: "1–5 juil.",
    name: "Inscriptions Licence 1",
    location: "Campus Toukra",
  },
  {
    date: "15 juil.",
    name: "Journée Portes Ouvertes",
    location: "Tous les campus",
  },
  {
    date: "2 sept.",
    name: "Rentrée académique 2024–2025",
    location: "Amphi Central",
  },
  {
    date: "18–20 sept.",
    name: "Colloque : Langues nationales",
    location: "Campus Ardep-Djoumal",
  },
  {
    date: "14 oct.",
    name: "Forum Emploi & Entrepreneuriat",
    location: "Campus Toukra",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "L'UDN m'a donné les outils intellectuels pour comprendre le droit international et défendre les droits des communautés rurales du Tchad.",
    author: "Fatimé Mahamat Saleh",
    role: "Diplômée en Droit, promotion 2021 — Avocate au Barreau de N'Djamena",
  },
  {
    quote:
      "Nos recherches sur la déforestation dans le bassin du Lac Tchad ont été rendues possibles grâce aux laboratoires et aux partenariats internationaux de l'université.",
    author: "Dr. Ibrahim Adoum Founé",
    role: "Maître de conférences en Sciences de l'Environnement, FSEA",
  },
  {
    quote:
      "La formation en médecine à l'UDN est rigoureuse et profondément ancrée dans les réalités sanitaires africaines. C'est une école de l'excellence et de l'humanité.",
    author: "Achta Djibert",
    role: "Interne en Médecine, Hôpital La Renaissance — Promotion 2023",
  },
];

// ─── Slides — each has a distinct academic photo ─────────────────────────────
const SLIDES = [
  {
    title: "Excellence Académique depuis 1971",
    body: "Première université du Tchad, l'UDN forme depuis plus de cinquante ans les cadres, chercheurs et leaders qui bâtissent la nation. Rejoignez une communauté de 30 000 étudiants répartis sur trois campus.",
    cta: "Découvrir l'université",
    badge: "Fondée en 1971",
    image: imgCeremonial,
    position: "center 60%",
  },
  {
    title: "Candidatez pour 2024–2025",
    body: "Les inscriptions en Licence, Master et Doctorat sont ouvertes. Frais de scolarité à partir de 50 000 FCFA/an. Des bourses de mérite et des aides sociales sont disponibles pour les étudiants méritants.",
    cta: "Déposer mon dossier",
    badge: "Admissions ouvertes",
    image: imgLaboratory,
    position: "center 40%",
  },
  {
    title: "Recherche & Innovation au Cœur du Sahel",
    body: "Nos équipes de recherche travaillent sur des défis propres à l'Afrique centrale : eau, santé tropicale, langues nationales, droit coutumier et développement durable. Plus de 30 partenaires internationaux.",
    cta: "Explorer la recherche",
    badge: "30+ partenaires mondiaux",
    image: imgTechnology,
    position: "center 50%",
  },
];

// ─── HeroSlideshow ────────────────────────────────────────────────────────────
//
// Strategy: render ALL slide backgrounds stacked. The active slide sits on top
// with opacity:1; every other slide is opacity:0. CSS transition handles the
// cross-fade automatically — no manual "prev" tracking needed.
//
function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [contentVisible, setContentVisible] = useState(true);
  const timer = useRef<ReturnType<typeof setInterval> | null>(
    null,
  );

  const goTo = (idx: number) => {
    if (idx === current) return;
    // Brief content fade-out, then swap slide + fade back in
    setContentVisible(false);
    setTimeout(() => {
      setCurrent(idx);
      setContentVisible(true);
    }, 350);
  };

  const startTimer = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => {
      setCurrent((c) => {
        const next = (c + 1) % SLIDES.length;
        setContentVisible(false);
        setTimeout(() => setContentVisible(true), 350);
        return next;
      });
    }, 6000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  const slide = SLIDES[current];

  return (
    <section
      className="text-white relative overflow-hidden"
      style={{ minHeight: 460 }}
    >
      {/* ── All background images stacked; only active one is visible ── */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${s.image}')`,
            backgroundSize: "cover",
            backgroundPosition: s.position,
            opacity: i === current ? 1 : 0,
            transition: "opacity 800ms ease-in-out",
            zIndex: i === current ? 1 : 0,
          }}
        />
      ))}

      {/* Navy tint — darker at top for header readability */}
      <div
        className="absolute inset-0"
        style={{ background: BRAND.hero.overlay, zIndex: 2 }}
      />

      {/* Gold diagonal texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, ${GOLD} 0, ${GOLD} 1px, transparent 0, transparent 50%)`,
          backgroundSize: "20px 20px",
          opacity: 0.04,
          zIndex: 3,
        }}
      />

      {/* ── Blue gradient subnav floating on top of the hero image ── */}
      <div
        className="h-4 md:h-6"
        style={{ zIndex: 10, position: "relative" }}
      />
      <div style={{ zIndex: 10, position: "relative" }}>
        <HeroSubnav />
      </div>

      {/* ── Content ── */}
      <div
        className="max-w-6xl mx-auto px-4 py-16 md:py-24 relative"
        style={{ zIndex: 4 }}
      >
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-5 border"
            style={{
              background: "rgba(200,168,75,0.18)",
              borderColor: "rgba(200,168,75,0.5)",
              color: LIGHT_GOLD,
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible
                ? "translateY(0)"
                : "translateY(6px)",
              transition:
                "opacity 400ms ease, transform 400ms ease",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: GOLD }}
            />
            {slide.badge}
          </div>

          {/* Headline */}
          <h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-5"
            style={{
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible
                ? "translateY(0)"
                : "translateY(10px)",
              transition:
                "opacity 400ms ease 60ms, transform 400ms ease 60ms",
            }}
          >
            {slide.title.split(" ").map((word, i) =>
              [
                "Excellence",
                "Innovation",
                "2024–2025",
                "Recherche",
              ].includes(word) ? (
                <span key={i} style={{ color: GOLD }}>
                  {word}{" "}
                </span>
              ) : (
                <span key={i}>{word} </span>
              ),
            )}
          </h1>

          {/* Body */}
          <p
            className="text-lg text-white/80 leading-relaxed mb-8"
            style={{
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible
                ? "translateY(0)"
                : "translateY(10px)",
              transition:
                "opacity 400ms ease 120ms, transform 400ms ease 120ms",
            }}
          >
            {slide.body}
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-3"
            style={{
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible
                ? "translateY(0)"
                : "translateY(10px)",
              transition:
                "opacity 400ms ease 180ms, transform 400ms ease 180ms",
            }}
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded text-sm"
              style={{
                background: `linear-gradient(${LIGHT_GOLD} 10%, ${GOLD} 90%)`,
                color: "#1a2a3a",
                border: "1px solid #a88a35",
                boxShadow:
                  "1px 1px 1px rgba(0,0,0,0.1), inset 0 0 5px rgba(255,255,255,0.3)",
              }}
            >
              {slide.cta}
              <ChevronRight className="w-4 h-4" />
            </a>
            <Link
              to="/portail-etudiant"
              className="inline-flex items-center gap-2 border text-white font-semibold px-6 py-3 rounded hover:bg-white/20 transition-colors text-sm"
              style={{
                background: "rgba(255,255,255,0.1)",
                borderColor: "rgba(255,255,255,0.3)",
              }}
            >
              Portail étudiant
            </Link>
          </div>
        </div>
      </div>

      {/* ── Dots ── */}
      <div
        className="absolute bottom-5 left-0 right-0 flex items-center justify-center gap-3"
        style={{ zIndex: 5 }}
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (timer.current) clearInterval(timer.current);
              goTo(i);
              startTimer();
            }}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? 24 : 8,
              height: 8,
              background:
                i === current ? GOLD : "rgba(255,255,255,0.35)",
            }}
          />
        ))}
      </div>

      {/* ── Slide thumbnails strip ── */}
      <div
        className="absolute bottom-4 right-4 hidden md:flex gap-2 items-center"
        style={{ zIndex: 5 }}
      >
        {SLIDES.map((s, i) => (
          <button
            key={i}
            onClick={() => {
              if (timer.current) clearInterval(timer.current);
              goTo(i);
              startTimer();
            }}
            className="rounded overflow-hidden transition-all duration-300"
            style={{
              width: 56,
              height: 36,
              backgroundImage: `url('${s.image}')`,
              backgroundSize: "cover",
              backgroundPosition: s.position,
              outline:
                i === current
                  ? `2px solid ${GOLD}`
                  : "2px solid rgba(255,255,255,0.2)",
              outlineOffset: 1,
              opacity: i === current ? 1 : 0.55,
            }}
          />
        ))}
      </div>
    </section>
  );
}

// ─── Widget shell ─────────────────────────────────────────────────────────────
function Widget({
  title,
  icon,
  moreHref = "#",
  moreLabel = "Plus",
  children,
}: {
  title: string;
  icon: string;
  moreHref?: string;
  moreLabel?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="bg-white"
      style={{
        borderTop: `4px solid ${GOLD}`,
        padding: "1.25em",
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <h2
          className="font-bold text-lg"
          style={{
            color: "#444",
            fontFamily: "Georgia, serif",
          }}
        >
          <span className="mr-2 text-base">{icon}</span>
          {title}
        </h2>
        <a
          href={moreHref}
          className="text-xs font-semibold flex items-center gap-0.5 hover:underline"
          style={{ color: NAVY }}
        >
          {moreLabel} <ChevronRight className="w-3 h-3" />
        </a>
      </div>
      {children}
    </div>
  );
}

// ─── Homepage ─────────────────────────────────────────────────────────────────
export default function Homepage() {
  const [activeTab, setActiveTab] = useState("droit");
  const activeFaculty = FACULTIES.find(
    (f) => f.id === activeTab,
  )!;

  return (
    <>
      <HeroSlideshow />

      {/* Introduction strip */}
      <div
        style={{
          background: BRAND.strip.bg,
          color: BRAND.strip.text,
          fontSize: "16px",
          padding: "8px 12px 6.4px",
          borderTop: `1px solid ${BRAND.strip.borderTop}`,
          borderBottom: `1px solid ${BRAND.strip.borderBottom}`,
          lineHeight: "28px",
          fontWeight: "400",
        }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 flex-wrap">
          <p style={{ margin: 0, lineHeight: "28px" }}>
            L'Université de N'Djamena forme les cadres de la
            nation depuis 1971.{" "}
            <a
              href="#"
              style={{
                color: LIGHT_GOLD,
                textDecoration: "underline",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              En savoir plus →
            </a>
          </p>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "16px", fontWeight: "400", lineHeight: "28px" }} className="hidden md:block">
            Toukra · Farcha · Ardep-Djoumal
          </span>
        </div>
      </div>

      {/* Quick-access widgets */}
      <div
        style={{
          background: "#f6f6f6",
          borderBottom: "1px solid #d0d0d0",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                icon: "📝",
                title: "Inscription",
                body: "Les admissions 2024–2025 sont ouvertes. Suivez les étapes pour déposer votre dossier en ligne.",
                link: "S'inscrire maintenant",
              },
              {
                icon: "🎓",
                title: "Portail étudiant",
                body: "Accédez aux notes, relevés, emplois du temps et services financiers via le portail sécurisé.",
                link: "Se connecter",
                to: "/portail-etudiant",
              },
              {
                icon: "📖",
                title: "Bibliothèques",
                body: "40 000 ouvrages, bases de données académiques, revues scientifiques et salles de lecture.",
                link: "Rechercher",
              },
              {
                icon: "💼",
                title: "Emploi & Stage",
                body: "Connectez-vous avec des recruteurs, trouvez des stages et développez votre réseau professionnel.",
                link: "Voir les offres",
              },
            ].map((w) => (
              <div
                key={w.title}
                className="bg-white"
                style={{
                  borderTop: `4px solid ${GOLD}`,
                  padding: "1.1em",
                }}
              >
                <h2
                  className="font-bold text-base mb-2"
                  style={{
                    color: "#444",
                    fontFamily: "Georgia, serif",
                  }}
                >
                  <span className="mr-1.5">{w.icon}</span>
                  {w.title}
                </h2>
                <p className="text-sm text-[#646464] mb-2 leading-relaxed">
                  {w.body}
                </p>
                {w.to ? (
                  <Link
                    to={w.to}
                    className="text-sm font-semibold hover:underline"
                    style={{ color: NAVY }}
                  >
                    {w.link}
                  </Link>
                ) : (
                  <a
                    href="#"
                    className="text-sm font-semibold hover:underline"
                    style={{ color: NAVY }}
                  >
                    {w.link}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Facultés */}
      <section
        style={{
          borderBottom: "1px solid #d0d0d0",
          background: "#fff",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2
            className="text-xs font-bold uppercase tracking-widest mb-5"
            style={{ color: NAVY }}
          >
            Nos Facultés & Formations
          </h2>
          <div
            className="flex flex-wrap gap-0 mb-8"
            style={{ borderBottom: "1px solid #d0d0d0" }}
          >
            {FACULTIES.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveTab(f.id)}
                className="px-4 py-2.5 text-sm font-semibold transition-colors -mb-px"
                style={{
                  borderBottom:
                    activeTab === f.id
                      ? `2px solid ${NAVY}`
                      : "2px solid transparent",
                  color: activeTab === f.id ? NAVY : "#646464",
                  background:
                    activeTab === f.id
                      ? "#f0f4f8"
                      : "transparent",
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <div className="text-4xl mb-3">
                {activeFaculty.icon}
              </div>
              <h3
                className="text-xl font-bold mb-3"
                style={{
                  color: "#1a1a1a",
                  fontFamily: "Georgia, serif",
                }}
              >
                {activeFaculty.label}
              </h3>
              <p className="text-[#646464] leading-relaxed mb-5 text-[15px]">
                {activeFaculty.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {activeFaculty.programs.map((p) => (
                  <a
                    key={p}
                    href="#"
                    className="inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded transition-colors border hover:opacity-80"
                    style={{
                      color: NAVY,
                      background: "#f0f4f8",
                      borderColor: "#c8d8e8",
                    }}
                  >
                    {p}
                  </a>
                ))}
              </div>
            </div>
            <div
              className="rounded border p-6"
              style={{
                background:
                  "linear-gradient(#f9fbfc 10%, #e8f0f8 90%)",
                borderColor: "#c8d8e8",
              }}
            >
              <h3
                className="text-base font-bold mb-3 pb-2"
                style={{
                  color: NAVY,
                  borderBottom: `2px solid ${GOLD}`,
                  fontFamily: "Georgia, serif",
                }}
              >
                Catalogue des formations
              </h3>
              <p className="text-sm text-[#555] leading-relaxed mb-4">
                L'UDN propose un système LMD
                (Licence–Master–Doctorat) aligné sur les
                standards internationaux. Nos diplômes sont
                reconnus par l'État tchadien et plusieurs
                organismes d'accréditation régionaux.
              </p>
              <div className="flex flex-col gap-2">
                {[
                  "Catalogue complet des formations 2024–2025",
                  "Calendrier des examens & soutenances",
                  "Annuaire des enseignants-chercheurs",
                  "Emplois du temps (Toukra · Farcha · Ardep-Djoumal)",
                ].map((lk) => (
                  <a
                    key={lk}
                    href="#"
                    className="text-sm hover:underline underline-offset-2"
                    style={{ color: "#3a6691" }}
                  >
                    {lk}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Actualités & Événements */}
      <section
        style={{
          background: "#f6f6f6",
          borderBottom: "1px solid #d0d0d0",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Widget
              title="Actualités de l'UDN"
              icon="📰"
              moreLabel="Toutes les actualités"
            >
              <div style={{ borderTop: "1px solid #e6e8ea" }}>
                {NEWS_ITEMS.map((item, i) => (
                  <article
                    key={i}
                    className="py-3"
                    style={{
                      borderBottom: "1px solid #e6e8ea",
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="shrink-0 text-xs text-[#646464] mt-0.5 w-24"
                        style={{ fontFamily: "monospace" }}
                      >
                        {item.date}
                      </div>
                      <div>
                        <a
                          href="#"
                          className="font-semibold hover:underline text-[15px] leading-snug"
                          style={{ color: NAVY }}
                        >
                          {item.title}
                        </a>
                        <p className="text-sm text-[#646464] mt-1 leading-relaxed">
                          {item.excerpt}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </Widget>
          </div>
          <div>
            <Widget
              title="Agenda académique"
              icon="📅"
              moreLabel="Plus"
            >
              <div style={{ borderTop: "1px solid #e6e8ea" }}>
                {EVENTS.map((ev, i) => (
                  <div
                    key={i}
                    className="py-2.5"
                    style={{
                      borderBottom: "1px solid #e6e8ea",
                    }}
                  >
                    <div
                      className="text-xs text-[#646464] mb-0.5"
                      style={{ fontFamily: "monospace" }}
                    >
                      {ev.date}
                    </div>
                    <a
                      href="#"
                      className="font-semibold hover:underline text-sm leading-snug"
                      style={{ color: NAVY }}
                    >
                      {ev.name}
                    </a>
                    <div className="text-xs text-[#646464] mt-0.5">
                      {ev.location}
                    </div>
                  </div>
                ))}
              </div>
            </Widget>
          </div>
        </div>
      </section>

      {/* Témoignages & Recherche */}
      <section
        style={{
          background: "#fff",
          borderBottom: "1px solid #d0d0d0",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-6">
          <Widget
            title="Témoignages"
            icon="💬"
            moreLabel="Plus de témoignages"
          >
            {TESTIMONIALS.map((t, i) => (
              <blockquote
                key={i}
                className="mb-4 pb-4"
                style={{
                  borderBottom:
                    i < TESTIMONIALS.length - 1
                      ? "1px solid #e6e8ea"
                      : "none",
                }}
              >
                <p className="text-sm italic text-[#444] leading-relaxed mb-2">
                  "{t.quote}"
                </p>
                <footer>
                  <span
                    className="font-semibold text-xs"
                    style={{ color: NAVY }}
                  >
                    {t.author}
                  </span>
                  <span className="text-xs text-[#646464]">
                    {" "}
                    — {t.role}
                  </span>
                </footer>
              </blockquote>
            ))}
          </Widget>
          <Widget
            title="Axes de Recherche…"
            icon="🔭"
            moreLabel="Tous les projets"
          >
            <ul
              className="space-y-2.5"
              style={{
                borderTop: "1px solid #e6e8ea",
                paddingTop: "0.75em",
              }}
            >
              {[
                {
                  label: "Ressources en eau & Lac Tchad",
                  tags: ["Hydrologie", "Climatologie", "SIG"],
                },
                {
                  label: "Santé tropicale & épidémiologie",
                  tags: [
                    "Paludisme",
                    "Choléra",
                    "Médecine communautaire",
                  ],
                },
                {
                  label: "Langues & patrimoines nationaux",
                  tags: [
                    "Arabe Tchadien",
                    "Sara",
                    "Toubou",
                    "Moundang",
                  ],
                },
                {
                  label: "Droit coutumier & gouvernance",
                  tags: [
                    "Droit local",
                    "Décentralisation",
                    "Genre",
                  ],
                },
                {
                  label:
                    "Énergie solaire & développement durable",
                  tags: [
                    "Photovoltaïque",
                    "Biomasse",
                    "Agro-écologie",
                  ],
                },
              ].map((item) => (
                <li key={item.label}>
                  <span className="font-semibold text-sm text-[#444]">
                    {item.label} :{" "}
                  </span>
                  <span className="text-sm">
                    {item.tags.map((tag) => (
                      <a
                        key={tag}
                        href="#"
                        className="text-xs font-semibold px-2 py-0.5 rounded mr-1 hover:opacity-80 transition-opacity"
                        style={{
                          color: NAVY,
                          background: "#e8f0f8",
                          border: "1px solid #c8d8e8",
                        }}
                      >
                        {tag}
                      </a>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </Widget>
        </div>
      </section>

      {/* UDN Foundation block */}
      <div
        style={{
          background:
            "linear-gradient(#e8f0f8 10%, #d0e2f0 90%)",
          borderTop: "1px solid #c8d8e8",
          borderBottom: "1px solid #a8c0d8",
          padding: "1.5em",
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-6">
          <svg
            width="56"
            height="56"
            viewBox="0 0 100 100"
            className="shrink-0"
          >
            <path
              d="M50 8 L88 24 L88 56 C88 76 70 90 50 96 C30 90 12 76 12 56 L12 24 Z"
              fill={NAVY}
              stroke={GOLD}
              strokeWidth="3"
            />
            <rect
              x="20"
              y="38"
              width="60"
              height="7"
              fill={GOLD}
            />
            <path
              d="M34 50 L50 46 L50 72 L34 76 Z"
              fill="#fff"
              opacity="0.9"
            />
            <path
              d="M66 50 L50 46 L50 72 L66 76 Z"
              fill="#e8e0d0"
              opacity="0.9"
            />
            <line
              x1="50"
              y1="46"
              x2="50"
              y2="72"
              stroke={GOLD}
              strokeWidth="1.5"
            />
          </svg>
          <div className="flex-1">
            <h2
              className="text-lg font-bold mb-1"
              style={{
                color: NAVY,
                fontFamily: "Georgia, serif",
              }}
            >
              <span style={{ color: GOLD }}>›</span>{" "}
              <a href="#" className="hover:underline">
                Université de N'Djamena — Conseil
                d'Administration
              </a>
            </h2>
            <p className="text-sm text-[#555] leading-relaxed mb-3">
              La mission du Conseil d'Administration de l'UDN
              est de promouvoir l'excellence académique, de
              préserver le patrimoine institutionnel et de
              soutenir la réussite étudiante au service du
              développement national et de la coopération
              internationale.{" "}
              <a
                href="#"
                className="font-semibold hover:underline"
                style={{ color: NAVY }}
              >
                En savoir plus
              </a>
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Conseil d'Administration",
                "Fonds de Dotation",
                "Plan Stratégique 2024–2028",
              ].map((btn) => (
                <a
                  key={btn}
                  href="#"
                  className="inline-flex items-center px-3 py-1.5 text-xs font-normal rounded-[6px] whitespace-nowrap transition-colors"
                  style={{
                    color: "#4d4d4d",
                    background: `linear-gradient(${LIGHT_GOLD} 10%, ${GOLD} 90%)`,
                    border: "1px solid #a88a35",
                    boxShadow:
                      "1px 1px 1px rgba(0,0,0,0.05), inset 0 0 5px rgba(255,255,255,0.5)",
                    textShadow:
                      "1px 1px 1px rgba(255,255,255,0.3)",
                  }}
                >
                  {btn}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}