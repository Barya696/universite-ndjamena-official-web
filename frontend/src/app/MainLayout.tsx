import { useState, useRef, useEffect, type CSSProperties } from "react";
import { Search, Menu, X } from "lucide-react";
import { BRAND } from "./brand";

// ─── Types ────────────────────────────────────────────────────────────────────

interface DropdownLink {
  label: string;
}

interface NavLink {
  label: string;
  href: string;
  dropdown?: {
    links: DropdownLink[];
    panelTitle: string;
    panelBody: React.ReactNode;
  };
}

// ─── Shared button (matches python.org .button: 6px radius, grey gradient) ───

function PSButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="text-[#4d4d4d] font-normal whitespace-nowrap px-3 py-1.5 rounded-[6px] border-t border-r border-b border-l"
      style={{
        background: "linear-gradient(#d9d9d9 10%, #cccccc 90%)",
        borderTopColor: "#caccce",
        borderRightColor: "#caccce",
        borderBottomColor: "#999999",
        borderLeftColor: "#caccce",
        boxShadow:
          "1px 1px 1px rgba(0,0,0,0.05), inset 0 0 5px rgba(255,255,255,0.5)",
        textShadow: "1px 1px 1px rgba(255,255,255,0.3)",
      }}
    >
      {children}
    </button>
  );
}

// ─── Panel link helper ────────────────────────────────────────────────────────

function PanelLink({
  href = "#",
  children,
}: {
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-base hover:text-[#1e2933]"
      style={{ color: BRAND.navyLight }}
    >
      {children}
    </a>
  );
}

// ─── Nav data ─────────────────────────────────────────────────────────────────

// ─── Dropdown panel — auto-flips to right-aligned when it would overflow ──────

function DropdownPanel({
  children,
  onMouseEnter,
  onMouseLeave,
}: {
  children: React.ReactNode;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [align, setAlign] = useState<"left" | "right">("left");

  useEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    if (rect.right > window.innerWidth - 8) setAlign("right");
  }, []);

  return (
    <div
      ref={ref}
      className="absolute top-full z-50 flex border-t w-max"
      style={{
        left: align === "left" ? 0 : "auto",
        right: align === "right" ? 0 : "auto",
        borderTopColor: "#18334b",
        boxShadow: "0 0.5em 0.5em rgba(0,0,0,0.3)",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
}

const NAV_LINKS: NavLink[] = [
  {
    label: "À Propos",
    href: "#",
    dropdown: {
      links: [
        { label: "Histoire & Mission" },
        { label: "Mot du Recteur" },
        { label: "Gouvernance" },
        { label: "Conseil d'Administration" },
        { label: "Chiffres Clés" },
        { label: "Accréditations" },
        { label: "Plan Stratégique" },
        { label: "Partenariats" },
      ],
      panelTitle: "Université de N'Djamena",
      panelBody: (
        <>
          <p className="text-base text-[#444] leading-relaxed mb-4">
            Fondée en 1971, l'Université de N'Djamena est le
            principal établissement d'enseignement supérieur du
            Tchad, formant les cadres de la nation depuis plus
            de cinquante ans.
          </p>
          <div className="flex flex-col gap-2">
            <PanelLink>
              Télécharger la plaquette institutionnelle
            </PanelLink>
            <PanelLink>Rapport annuel 2023–2024</PanelLink>
            <PanelLink>
              Contactez le cabinet du Recteur
            </PanelLink>
          </div>
        </>
      ),
    },
  },
  {
    label: "Admissions",
    href: "#",
    dropdown: {
      links: [
        { label: "Conditions d'accès" },
        { label: "Procédure d'inscription" },
        { label: "Calendrier académique" },
        { label: "Frais de scolarité" },
        { label: "Bourses & Aides" },
        { label: "Étudiants étrangers" },
        { label: "Formation continue" },
        { label: "FAQ Admissions" },
      ],
      panelTitle: "Candidater pour 2024–2025",
      panelBody: (
        <>
          <PSButton>Dossier d'inscription en ligne</PSButton>
          <p className="text-base text-[#444] mt-4 leading-relaxed">
            Frais de scolarité à partir de{" "}
            <strong className="text-[#1e2933]">
              50 000 FCFA / an
            </strong>{" "}
            pour les filières générales.
          </p>
          <p className="text-base text-[#444] mt-3 leading-relaxed">
            Des bourses de mérite et bourses sociales sont
            disponibles.{" "}
            <PanelLink>
              Voir les critères d'attribution.
            </PanelLink>
          </p>
          <p className="text-base text-[#444] mt-3 leading-relaxed">
            Date limite de dépôt des dossiers :{" "}
            <strong>15 septembre 2024</strong>.
          </p>
        </>
      ),
    },
  },
  {
    label: "Facultés",
    href: "#",
    dropdown: {
      links: [
        { label: "Droit & Sciences Politiques" },
        { label: "Lettres & Sciences Humaines" },
        { label: "Sciences Exactes & Appliquées" },
        { label: "Sciences de la Santé" },
        { label: "Sciences Économiques & Gestion" },
        { label: "Éducation & Formation" },
        { label: "Théologie & Sciences Religieuses" },
        { label: "Institut Universitaire des Sciences" },
      ],
      panelTitle: "Nos formations",
      panelBody: (
        <>
          <p className="text-base text-[#444] leading-relaxed mb-3">
            L'université propose des cursus Licence, Master et
            Doctorat (système LMD) répartis sur trois campus :
            Toukra, Farcha et Ardep-Djoumal.
          </p>
          <div className="flex flex-col gap-2">
            <PanelLink>
              Catalogue complet des formations
            </PanelLink>
            <PanelLink>Calendrier des examens</PanelLink>
            <PanelLink>Emplois du temps 2024–2025</PanelLink>
            <PanelLink>Annuaire des enseignants</PanelLink>
          </div>
        </>
      ),
    },
  },
  {
    label: "Recherche",
    href: "#",
    dropdown: {
      links: [
        { label: "Laboratoires & Centres" },
        { label: "Publications" },
        { label: "Thèses & Mémoires" },
        { label: "Appels à projets" },
        { label: "Coopération internationale" },
        { label: "Revue scientifique UDN" },
        { label: "Prix de la Recherche" },
        { label: "Éthique & Déontologie" },
      ],
      panelTitle: "Recherche & Innovation",
      panelBody: (
        <>
          <p className="text-base text-[#444] leading-relaxed mb-3">
            Nos équipes de recherche travaillent sur des enjeux
            propres à l'Afrique centrale : ressources en eau,
            santé tropicale, droit coutumier, langues nationales
            et développement durable.
          </p>
          <div className="flex flex-col gap-2">
            <PanelLink>
              Base de données des publications
            </PanelLink>
            <PanelLink>
              Appels à communications en cours
            </PanelLink>
            <PanelLink>
              Partenaires de recherche internationaux
            </PanelLink>
          </div>
        </>
      ),
    },
  },
  {
    label: "Vie du Campus",
    href: "#",
    dropdown: {
      links: [
        { label: "Résidences universitaires" },
        { label: "Restauration" },
        { label: "Sport & Associations" },
        { label: "Bibliothèques" },
        { label: "Service de santé" },
        { label: "Handicap & Accessibilité" },
        { label: "Orientation & Emploi" },
        { label: "Alumni" },
      ],
      panelTitle: "La vie estudiantine",
      panelBody: (
        <>
          <p className="text-base text-[#444] leading-relaxed mb-3">
            Trois campus actifs, une bibliothèque centrale de 40
            000 ouvrages, des terrains de sport et un service
            médical universitaire à votre disposition.
          </p>
          <div className="flex flex-col gap-2">
            <PanelLink>
              Plan des campus (Toukra · Farcha · Ardep-Djoumal)
            </PanelLink>
            <PanelLink>Demande de logement étudiant</PanelLink>
            <PanelLink>
              Associations étudiantes reconnues
            </PanelLink>
          </div>
        </>
      ),
    },
  },
  {
    label: "Actualités",
    href: "#",
    dropdown: {
      links: [
        { label: "Communiqués de presse" },
        { label: "Événements à venir" },
        { label: "Galerie photos" },
        { label: "Vidéothèque" },
        { label: "Bulletin interne" },
        { label: "Presse & Médias" },
      ],
      panelTitle: "Dernières actualités",
      panelBody: (
        <>
          <p className="text-base text-[#444] leading-relaxed mb-3">
            Restez informés des temps forts de l'université :
            soutenances, conférences internationales, remises de
            diplômes et journées portes ouvertes.
          </p>
          <div className="flex flex-col gap-2">
            <PanelLink>S'abonner à la newsletter</PanelLink>
            <PanelLink>Fil d'actualité RSS</PanelLink>
            <PanelLink>Archives 2020–2024</PanelLink>
          </div>
        </>
      ),
    },
  },
  {
    label: "International",
    href: "#",
    dropdown: {
      links: [
        { label: "Conventions signées" },
        { label: "Programmes d'échange" },
        { label: "Campus France – Tchad" },
        { label: "Mobilité entrante" },
        { label: "Mobilité sortante" },
        { label: "Double diplômes" },
        { label: "Appels à candidatures" },
      ],
      panelTitle: "Ouverture internationale",
      panelBody: (
        <>
          <p className="text-base text-[#444] leading-relaxed mb-3">
            L'UDN entretient des partenariats avec plus de 30
            universités en Europe, en Afrique et dans les
            Amériques, offrant des opportunités de mobilité et
            de co-diplômation.
          </p>
          <div className="flex flex-col gap-2">
            <PanelLink>
              Liste des universités partenaires
            </PanelLink>
            <PanelLink>
              Formulaire de mobilité étudiante
            </PanelLink>
            <PanelLink>
              Visa & démarches administratives
            </PanelLink>
          </div>
        </>
      ),
    },
  },
];

// ─── UDN Crest ────────────────────────────────────────────────────────────────

function UDNCrest() {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 100 100"
      aria-label="UDN crest"
    >
      {/* Shield */}
      <path
        d="M50 8 L88 24 L88 56 C88 76 70 90 50 96 C30 90 12 76 12 56 L12 24 Z"
        fill="#1a3a5c"
        stroke="#c8a84b"
        strokeWidth="3"
      />
      {/* Gold horizontal bar */}
      <rect
        x="20"
        y="38"
        width="60"
        height="7"
        fill="#c8a84b"
      />
      {/* Book pages */}
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
        stroke="#c8a84b"
        strokeWidth="1.5"
      />
      {/* Torch */}
      <rect
        x="47"
        y="18"
        width="6"
        height="16"
        rx="2"
        fill="#c8a84b"
      />
      <ellipse
        cx="50"
        cy="16"
        rx="5"
        ry="7"
        fill="#f5c518"
        opacity="0.9"
      />
    </svg>
  );
}

// ─── Layout ───────────────────────────────────────────────────────────────────

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({
  children,
}: MainLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] =
    useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [openDropdown, setOpenDropdown] = useState<
    string | null
  >(null);
  const [activeSubLink, setActiveSubLink] = useState<
    string | null
  >(null);
  const closeTimer = useRef<ReturnType<
    typeof setTimeout
  > | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => {
      setOpenDropdown(null);
      setActiveSubLink(null);
    }, 150);
  };

  const handleOpen = (label: string, firstSubLink?: string) => {
    cancelClose();
    setOpenDropdown(label);
    if (firstSubLink) setActiveSubLink(firstSubLink);
  };

  const NAV_BG = BRAND.nav.bg;
  const NAV_BORDER_TOP = BRAND.nav.borderTop;
  const NAV_LINK_COLOR = BRAND.nav.link;
  const NAV_LINK_ACTIVE_BG = BRAND.nav.linkActiveBg;
  const NAV_ITEM_DIVIDER = BRAND.nav.divider;
  // Primary header (py-3 + crest) + nav bar (h-14)
  const HEADER_STACK_HEIGHT = "7.625rem";

  return (
    <div
      className="min-h-screen bg-white text-[#1a1a1a]"
      style={{
        fontFamily: "'Source Sans Pro', Arial, sans-serif",
        fontSize: "100%",
        lineHeight: 1.625,
      }}
    >
      {/* ── Top identity banner ── */}
      <div
        className="relative z-30 text-white text-center text-xs py-1.5 font-semibold tracking-widest uppercase"
        style={{ background: BRAND.gold, color: BRAND.navyDeep }}
      >
        République du Tchad &nbsp;·&nbsp; Ministère de
        l'Enseignement Supérieur
      </div>

      <div
        className="relative"
        style={
          {
            "--header-stack": HEADER_STACK_HEIGHT,
          } as CSSProperties
        }
      >
        {/* ── Primary header (transparent — hero shows through) ── */}
        <div
          className="relative z-20 py-3 px-4"
          style={{ textShadow: BRAND.hero.headerShadow }}
        >
          <div className="max-w-6xl mx-auto flex items-center gap-4">
            <UDNCrest />
            <div>
              <div className="text-white font-bold text-lg leading-tight tracking-wide">
                Université de N'Djamena
              </div>
              <div
                className="text-xs tracking-widest uppercase mt-0.5"
                style={{ color: BRAND.goldLight }}
              >
                Savoir · Excellence · Service
              </div>
            </div>
            <div className="ml-auto hidden md:flex flex-col items-end text-xs gap-0.5" style={{ color: "rgba(255,255,255,0.72)" }}>
              <span>📞 +235 22 51 44 52</span>
              <span>✉ contact@undt.edu.td</span>
            </div>
          </div>
        </div>

        {/* ── Navigation bar (python.org-style: inset, centered, rounded top) ── */}
      <div className="sticky top-0 z-50 px-4 md:px-[50px]">
        <header
          className="text-white mx-auto w-full max-w-[75rem] rounded-t-lg border-t"
          style={{
            background: NAV_BG,
            borderTopColor: NAV_BORDER_TOP,
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="flex items-center h-14 gap-2 px-1">
            {/* Desktop nav */}
            <nav className="hidden md:flex items-center flex-1 h-full">
              {NAV_LINKS.map((l, i) => {
                const isOpen = openDropdown === l.label;
                const activeLink = l.dropdown
                  ? (l.dropdown.links.find(
                      (s) => s.label === activeSubLink,
                    ) ?? l.dropdown.links[0])
                  : null;
                return (
                  <div
                    key={l.label}
                    className="h-full flex items-center relative border-l overflow-visible"
                    style={{
                      borderLeftColor:
                        i === 0
                          ? "transparent"
                          : NAV_ITEM_DIVIDER,
                    }}
                    onMouseEnter={() =>
                      l.dropdown &&
                      handleOpen(
                        l.label,
                        l.dropdown.links[0].label,
                      )
                    }
                    onMouseLeave={() =>
                      l.dropdown && scheduleClose()
                    }
                  >
                    <a
                      href={l.href}
                      className={`h-full flex items-center px-3.5 transition-colors whitespace-nowrap${
                        i === 0 ? " rounded-tl-[7px]" : ""
                      }`}
                      style={
                        isOpen
                          ? {
                              fontSize: "1.125em",
                              letterSpacing: "0.01em",
                              color: BRAND.nav.linkActive,
                              background: NAV_LINK_ACTIVE_BG,
                              borderTop: `1px solid ${BRAND.nav.linkActiveBorderTop}`,
                              borderBottom: `1px solid ${BRAND.nav.linkActiveBorderBottom}`,
                            }
                          : {
                              fontSize: "1.125em",
                              letterSpacing: "0.01em",
                              color: NAV_LINK_COLOR,
                            }
                      }
                    >
                      {l.label}
                    </a>

                    {/* Dropdown anchored under this nav item */}
                    {isOpen && l.dropdown && (
                      <DropdownPanel
                        onMouseEnter={cancelClose}
                        onMouseLeave={scheduleClose}
                      >
                        {/* Subnav link column */}
                        <div
                          style={{
                            background:
                              "linear-gradient(#bbd4e9 10%, #d6e5f2 90%)",
                            boxShadow:
                              "inset 0 0 20px rgba(55,118,171,0.15)",
                          }}
                        >
                          {l.dropdown.links.map((sub, idx) => {
                            const isActive =
                              activeLink?.label === sub.label;
                            const isLast =
                              idx ===
                              l.dropdown!.links.length - 1;
                            return (
                              <button
                                key={sub.label}
                                onMouseEnter={() =>
                                  setActiveSubLink(sub.label)
                                }
                                className="block w-full text-left whitespace-nowrap transition-colors"
                                style={{
                                  fontSize: "0.875em",
                                  padding:
                                    ".5em 1.5em .4em 1em",
                                  borderTop:
                                    "1px solid rgba(55,118,171,0.25)",
                                  borderBottom: isLast
                                    ? "1px solid rgba(55,118,171,0.25)"
                                    : "none",
                                  color: isActive
                                    ? "rgba(34,34,34,0.9)"
                                    : "rgba(51,51,51,0.9)",
                                  background: isActive
                                    ? "rgba(255,255,255,0.35)"
                                    : "transparent",
                                }}
                                onMouseOver={(e) => {
                                  if (!isActive)
                                    e.currentTarget.style.background =
                                      "rgba(255,255,255,0.35)";
                                }}
                                onMouseOut={(e) => {
                                  if (!isActive)
                                    e.currentTarget.style.background =
                                      "transparent";
                                }}
                              >
                                {sub.label}
                              </button>
                            );
                          })}
                        </div>

                        {/* Content panel */}
                        <div
                          className="w-[28em]"
                          style={{
                            padding: "1.5em 1.75em",
                            background:
                              "linear-gradient(#fcfdfe 10%, #d6e5f2 90%)",
                            border: "1px solid #89b4d9",
                            color: "#666666",
                          }}
                        >
                          <h3
                            className="mb-0"
                            style={{
                              color: BRAND.navyLight,
                              fontSize: "1.3125em",
                              lineHeight: "1.25em",
                              fontWeight: "normal",
                              marginBottom: "0.6em",
                            }}
                          >
                            {l.dropdown.panelTitle}
                          </h3>
                          {l.dropdown.panelBody}
                        </div>
                      </DropdownPanel>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Search field — always expanded on desktop */}
            <div className="ml-auto flex items-center gap-2 rounded-tr-[7px]">
              <div
                className="hidden md:flex items-center rounded-full border overflow-hidden w-60"
                style={{
                  height: 38,
                  background: "rgba(255,255,255,0.1)",
                  borderColor: "rgba(200,168,75,0.45)",
                  boxShadow:
                    "inset 0 2px 4px rgba(0,0,0,0.35), inset 0 1px 2px rgba(0,0,0,0.25)",
                }}
              >
                <input
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                  className="bg-transparent text-[15px] text-white placeholder:text-white/45 outline-none flex-1 min-w-0 pl-3.5"
                  placeholder="Rechercher…"
                />
                <button
                  type="submit"
                  className="w-[38px] h-[38px] flex items-center justify-center shrink-0"
                  aria-label="Rechercher"
                >
                  <Search
                    className="w-4 h-4"
                    style={{ color: BRAND.goldLight }}
                  />
                </button>
              </div>

              {/* Mobile search toggle */}
              <button
                className="md:hidden p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors rounded"
                onClick={() => setMobileSearchOpen((v) => !v)}
                aria-label="Rechercher"
              >
                {mobileSearchOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Search className="w-5 h-5" />
                )}
              </button>

              <button
                className="md:hidden p-2 text-white/80 hover:text-white"
                onClick={() =>
                  setMobileMenuOpen(!mobileMenuOpen)
                }
                aria-label="Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile search bar */}
          {mobileSearchOpen && (
            <div className="md:hidden pb-3 px-1">
              <div
                className="flex items-center gap-2 px-3.5 py-2 rounded-full border"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  borderColor: "rgba(200,168,75,0.45)",
                  boxShadow:
                    "inset 0 2px 4px rgba(0,0,0,0.35), inset 0 1px 2px rgba(0,0,0,0.25)",
                }}
              >
                <Search
                  className="w-4 h-4 shrink-0"
                  style={{ color: BRAND.goldLight }}
                />
                <input
                  autoFocus
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                  className="bg-transparent text-base text-white placeholder:text-white/45 outline-none w-full"
                  placeholder="Rechercher…"
                />
              </div>
            </div>
          )}

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div
              className="md:hidden border-t rounded-b-lg overflow-hidden"
              style={{
                borderColor: BRAND.nav.mobileBorder,
                background: BRAND.nav.mobileBg,
              }}
            >
              {NAV_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="block px-5 py-3 text-white/90 hover:bg-white/10 border-b border-white/5"
                  style={{
                    fontSize: "1.125em",
                    letterSpacing: "0.01em",
                  }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </header>
      </div>

        {/* ── Page content ── */}
        <main className="relative">{children}</main>
      </div>

      {/* ── Footer ── */}
      <footer
        style={{ background: BRAND.navyDeep }}
        className="text-white/60 text-sm"
      >
        <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              heading: "L'Université",
              links: [
                "Histoire & Mission",
                "Gouvernance",
                "Plan Stratégique",
                "Accréditations",
                "Partenariats",
              ],
            },
            {
              heading: "Formations",
              links: [
                "Droit & Sciences Politiques",
                "Lettres & Sciences Humaines",
                "Sciences Exactes",
                "Sciences de la Santé",
                "Sciences Économiques",
                "Formation continue",
              ],
            },
            {
              heading: "Services",
              links: [
                "Bibliothèques",
                "Résidences",
                "Service de santé",
                "Orientation & Emploi",
                "Alumni",
                "Portail étudiant",
              ],
            },
            {
              heading: "Contact",
              links: [
                "Campus Toukra",
                "Campus Farcha",
                "Campus Ardep-Djoumal",
                "Presse & Médias",
                "Plan d'accès",
              ],
            },
          ].map((col) => (
            <div key={col.heading}>
              <div
                className="font-bold text-xs uppercase tracking-widest mb-4"
                style={{ color: BRAND.gold }}
              >
                {col.heading}
              </div>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-white/90 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer bottom bar */}
        <div
          className="border-t py-5"
          style={{ borderColor: "rgba(200,168,75,0.25)" }}
        >
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
            <div className="flex items-center gap-3">
              <UDNCrest />
              <span>
                © 1971–2024 Université de N'Djamena · Tous
                droits réservés
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="hover:text-white/70 transition-colors"
              >
                Mentions légales
              </a>
              <a
                href="#"
                className="hover:text-white/70 transition-colors"
              >
                Politique de confidentialité
              </a>
              <a
                href="#"
                className="hover:text-white/70 transition-colors"
              >
                Accessibilité
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}