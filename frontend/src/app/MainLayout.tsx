import { useState, type CSSProperties } from "react";
import { Search, Menu, X, ChevronDown, ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router";
import { BRAND } from "./brand";

interface NavItem {
  label: string;
  href: string;
  links?: { label: string; href?: string }[];
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "L'Université",
    href: "#",
    links: [
      { label: "Histoire & Mission" },
      { label: "Mot du Recteur" },
      { label: "Gouvernance" },
      { label: "Chiffres clés" },
      { label: "Partenariats" },
    ],
  },
  {
    label: "Admissions",
    href: "#",
    links: [
      { label: "Conditions d'accès" },
      { label: "Inscription en ligne" },
      { label: "Frais de scolarité" },
      { label: "Bourses & aides" },
      { label: "Calendrier académique" },
    ],
  },
  {
    label: "Formations",
    href: "#",
    links: [
      { label: "Droit & Sciences Politiques" },
      { label: "Lettres & Sciences Humaines" },
      { label: "Sciences Exactes & Appliquées" },
      { label: "Sciences de la Santé" },
      { label: "Sciences Économiques & Gestion" },
    ],
  },
  {
    label: "Recherche",
    href: "#",
    links: [
      { label: "Laboratoires & centres" },
      { label: "Publications" },
      { label: "Appels à projets" },
      { label: "Coopération internationale" },
    ],
  },
  {
    label: "Campus",
    href: "#",
    links: [
      { label: "Vie estudiantine" },
      { label: "Bibliothèques" },
      { label: "Résidences" },
      { label: "Actualités" },
    ],
  },
];

function UDNCrest({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-label="UDN crest"
      className="shrink-0"
    >
      <path
        d="M50 8 L88 24 L88 56 C88 76 70 90 50 96 C30 90 12 76 12 56 L12 24 Z"
        fill="#1a3a5c"
        stroke="#c8a84b"
        strokeWidth="3"
      />
      <rect x="20" y="38" width="60" height="7" fill="#c8a84b" />
      <path d="M34 50 L50 46 L50 72 L34 76 Z" fill="#fff" opacity="0.9" />
      <path d="M66 50 L50 46 L50 72 L66 76 Z" fill="#e8e0d0" opacity="0.9" />
      <line x1="50" y1="46" x2="50" y2="72" stroke="#c8a84b" strokeWidth="1.5" />
      <rect x="47" y="18" width="6" height="16" rx="2" fill="#c8a84b" />
      <ellipse cx="50" cy="16" rx="5" ry="7" fill="#f5c518" opacity="0.9" />
    </svg>
  );
}

const T1 = BRAND.navType;
const tier1LinkStyle: CSSProperties = {
  fontFamily: T1.fontFamily,
  fontSize: T1.tier1Size,
  fontWeight: 400,
  letterSpacing: T1.tier1LetterSpacing,
  lineHeight: T1.tier1LineHeight,
  padding: T1.tier1Padding,
  color: BRAND.nav.link,
};
const tier2LinkStyle: CSSProperties = {
  fontFamily: T1.fontFamily,
  fontSize: T1.tier2Size,
  fontWeight: 400,
  lineHeight: T1.tier2LineHeight,
  padding: T1.tier2Padding,
  color: BRAND.nav.dropdownLink,
};
const topBarLinkStyle = (active = false): CSSProperties => ({
  fontFamily: T1.fontFamily,
  fontSize: T1.topBarSize,
  fontWeight: 400,
  lineHeight: T1.baseLineHeight,
  padding: T1.topBarPadding,
  color: active ? BRAND.nav.topBarLinkActive : BRAND.nav.topBarLink,
});

function NavDropdown({ item }: { item: NavItem }) {
  return (
    <div className="relative group h-full flex items-center">
      <a
        href={item.href}
        className="block whitespace-nowrap transition-colors duration-200 group-hover:text-white"
        style={tier1LinkStyle}
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.color = BRAND.nav.linkActive;
          el.style.background = BRAND.nav.linkActiveBg;
          el.style.borderTop = `1px solid ${BRAND.nav.linkActiveBorderTop}`;
          el.style.borderBottom = `1px solid ${BRAND.nav.linkActiveBorderBottom}`;
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.color = BRAND.nav.link;
          el.style.background = "transparent";
          el.style.borderTop = "1px solid transparent";
          el.style.borderBottom = "1px solid transparent";
        }}
      >
        {item.label}
      </a>

      <div className="absolute left-0 top-full pt-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-150">
        <div
          className="min-w-[14em] border-t"
          style={{
            background: BRAND.nav.dropdownBg,
            borderTopColor: BRAND.nav.dropdownBorder,
            boxShadow: "0 0.5em 0.5em rgba(0,0,0,0.25)",
          }}
        >
          {item.links?.map((link, idx) => (
            <a
              key={link.label}
              href={link.href ?? "#"}
              className="block whitespace-nowrap transition-colors"
              style={{
                ...tier2LinkStyle,
                borderTop:
                  idx === 0
                    ? "none"
                    : `1px solid ${BRAND.nav.dropdownBorder}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.35)";
                e.currentTarget.style.color = BRAND.nav.dropdownLinkActive;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = BRAND.nav.dropdownLink;
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

interface MainLayoutProps {
  children: React.ReactNode;
}

export function HeroSubnav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

  return (
    <div className="px-4 md:px-[50px] relative z-10">
      <div
        className="max-w-[75rem] mx-auto border-t"
        style={{
          background: BRAND.nav.bg,
          borderTopColor: BRAND.nav.borderTop,
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="flex items-center justify-between h-14 gap-2 px-1 lg:px-2">
          {/* Brand */}
          <a href="/" className="flex items-center gap-3 min-w-0 group shrink-0">
            <UDNCrest />
            <div className="min-w-0 hidden md:block">
              <div
                className="truncate transition-colors"
                style={{
                  ...tier1LinkStyle,
                  padding: 0,
                  color: BRAND.nav.linkActive,
                }}
              >
                Université de N'Djamena
              </div>
            </div>
          </a>

          {/* Desktop navigation — python.org tier-1 */}
          <nav className="hidden lg:flex items-stretch h-full flex-1 justify-center">
            {NAV_ITEMS.map((item) =>
              item.links ? (
                <NavDropdown key={item.label} item={item} />
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center whitespace-nowrap transition-colors duration-200 hover:text-white"
                  style={tier1LinkStyle}
                >
                  {item.label}
                </a>
              ),
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 shrink-0">
            {searchOpen ? (
              <div
                className="hidden md:flex items-center rounded-sm border overflow-hidden w-52"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  borderColor: BRAND.nav.dropdownBorder,
                }}
              >
                <input
                  autoFocus
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                  onBlur={() => !searchVal && setSearchOpen(false)}
                  className="bg-transparent font-normal text-white placeholder:text-white/45 outline-none flex-1 min-w-0 pl-3.5 py-2"
                  style={{
                    fontFamily: T1.fontFamily,
                    fontSize: T1.tier2Size,
                    lineHeight: T1.tier2LineHeight,
                  }}
                  placeholder="Rechercher…"
                />
                <button
                  type="button"
                  className="px-3 py-2 text-white/60 hover:text-white transition-colors"
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchVal("");
                  }}
                  aria-label="Fermer la recherche"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                className="hidden md:flex p-2 rounded-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                onClick={() => setSearchOpen(true)}
                aria-label="Rechercher"
              >
                <Search className="w-4 h-4" />
              </button>
            )}

            <button
              type="button"
              className="lg:hidden p-2 rounded-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen((v) => !v)}
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

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div
            className="lg:hidden border-t overflow-hidden"
            style={{
              borderColor: BRAND.nav.mobileBorder,
              background: BRAND.nav.mobileBg,
            }}
          >
            <div className="px-3 py-3">
              <div
                className="flex items-center gap-2 px-3.5 py-2.5 rounded-sm border mb-3"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  borderColor: BRAND.nav.dropdownBorder,
                }}
              >
                <Search className="w-4 h-4 shrink-0" style={{ color: BRAND.gold }} />
                <input
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                  className="bg-transparent font-normal text-white placeholder:text-white/45 outline-none w-full"
                  style={{
                    fontFamily: T1.fontFamily,
                    fontSize: T1.tier2Size,
                    lineHeight: T1.tier2LineHeight,
                  }}
                  placeholder="Rechercher…"
                />
              </div>

              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="border-b border-white/5 last:border-0">
                  {item.links ? (
                    <>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between text-left text-white/90"
                        style={tier1LinkStyle}
                        onClick={() =>
                          setExpandedMobile((v) =>
                            v === item.label ? null : item.label,
                          )
                        }
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 text-white/50 transition-transform duration-200 ${
                            expandedMobile === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {expandedMobile === item.label && (
                        <div className="pb-3 pl-3 space-y-1">
                          {item.links.map((link) => (
                            <a
                              key={link.label}
                              href={link.href ?? "#"}
                              className="block transition-colors"
                              style={{
                                ...tier2LinkStyle,
                                color: "rgba(255,255,255,0.75)",
                              }}
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="block text-white/90"
                      style={tier1LinkStyle}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function MainLayout({ children }: MainLayoutProps) {
  const HEADER_STACK_HEIGHT = "2.875rem";
  const location = useLocation();
  const isStudentPortal = location.pathname === "/portail-etudiant";

  return (
    <div
      className="min-h-screen bg-white text-[#444444]"
      style={{
        fontFamily: T1.fontFamily,
        fontSize: T1.baseSize,
        lineHeight: T1.baseLineHeight,
        color: "#444444",
      }}
    >
      <div
        className="relative"
        style={{ "--header-stack": HEADER_STACK_HEIGHT } as CSSProperties}
      >
        {/* Top subnav — upper centered with 3 elements + Student Portal button */}
        <header className="sticky top-0 z-50">
          <div
            style={{
              background: BRAND.nav.topBarBg,
              borderBottom: `1px solid ${BRAND.nav.topBarBorder}`,
            }}
          >
            <div className="max-w-[75rem] mx-auto px-4 md:px-[50px] py-2 flex items-center justify-between gap-3">
              <div className="hidden md:block" style={{
                ...topBarLinkStyle(),
                color: "rgba(255,255,255,0.5)",
              }}>
                ▲ République du Tchad
              </div>

              <div className="flex-1 flex items-center justify-center gap-1 md:gap-3 flex-wrap">
                <a href="#" className="transition-colors duration-200 hover:text-white" style={topBarLinkStyle(true)}>
                  L'Université
                </a>
                <a href="#" className="transition-colors duration-200 hover:text-white" style={topBarLinkStyle()}>
                  Formations
                </a>
                <a href="#" className="transition-colors duration-200 hover:text-white" style={topBarLinkStyle()}>
                  Recherche
                </a>
              </div>

              {isStudentPortal ? (
                <Link
                  to="/"
                  className="inline-flex items-center gap-1.5 rounded-[6px] font-semibold border transition-all duration-200 hover:brightness-105 text-xs sm:text-sm"
                  style={{
                    fontFamily: T1.fontFamily,
                    padding: "0.35em 0.9em 0.3em",
                    background: `linear-gradient(180deg, ${BRAND.navyLight} 10%, ${BRAND.navyMid} 90%)`,
                    color: "#ffffff",
                    borderColor: "#306998",
                    boxShadow:
                      "1px 1px 1px rgba(0,0,0,0.05), inset 0 0 5px rgba(255,255,255,0.3)",
                  }}
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Retour à l'accueil
                </Link>
              ) : (
                <Link
                  to="/portail-etudiant"
                  className="inline-flex items-center rounded-[6px] font-semibold border transition-all duration-200 hover:brightness-105 text-xs sm:text-sm"
                  style={{
                    fontFamily: T1.fontFamily,
                    padding: "0.35em 0.9em 0.3em",
                    background: `linear-gradient(180deg, ${BRAND.goldLight} 10%, ${BRAND.gold} 90%)`,
                    color: "#4d4d4d",
                    borderColor: "#e6c200",
                    boxShadow:
                      "1px 1px 1px rgba(0,0,0,0.05), inset 0 0 5px rgba(255,255,255,0.5)",
                  }}
                >
                  Portail Étudiant
                </Link>
              )}
            </div>
          </div>
        </header>

        <main className="relative">{children}</main>
      </div>

      <footer
        style={{ background: BRAND.navyDeep }}
        className="text-white/60"
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
                className="font-bold mb-4"
                style={{ color: BRAND.gold, fontSize: "16px", fontWeight: "400", lineHeight: "26px" }}
              >
                {col.heading}
              </div>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    {link === "Portail étudiant" ? (
                      <Link
                        to="/portail-etudiant"
                        className="hover:text-white/90 transition-colors"
                        style={{ fontSize: "16px", fontWeight: "400", lineHeight: "26px" }}
                      >
                        {link}
                      </Link>
                    ) : (
                      <a href="#" className="hover:text-white/90 transition-colors" style={{ fontSize: "16px", fontWeight: "400", lineHeight: "26px" }}>
                        {link}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="border-t py-5"
          style={{ borderColor: "rgba(255, 212, 59, 0.3)" }}
        >
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-white/40" style={{ fontSize: "16px", fontWeight: "400", lineHeight: "26px" }}>
            <div className="flex items-center gap-3">
              <UDNCrest size={28} />
              <span>
                © 1971–2024 Université de N'Djamena · Tous droits réservés
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white/70 transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-white/70 transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-white/70 transition-colors">
                Accessibilité
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
