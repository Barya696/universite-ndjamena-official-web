import { useState, type CSSProperties } from "react";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router";
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

function NavDropdown({ item }: { item: NavItem }) {
  return (
    <div className="relative group h-full flex items-center">
      <a
        href={item.href}
        className="flex items-center gap-1 px-3 py-2 text-[15px] font-medium tracking-wide rounded-sm transition-all duration-200 group-hover:text-white"
        style={{ color: BRAND.nav.link }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = BRAND.nav.linkActiveBg;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
        }}
      >
        {item.label}
        <ChevronDown className="w-3.5 h-3.5 opacity-70 transition-transform duration-200 group-hover:rotate-180" />
      </a>

      <div className="absolute left-0 top-full pt-1 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
        <div
          className="min-w-[15rem] py-1 shadow-lg"
          style={{
            background: BRAND.nav.dropdownBg,
            border: `1px solid ${BRAND.nav.dropdownBorder}`,
            boxShadow: "0 0.5em 0.5em rgba(0,0,0,0.25)",
          }}
        >
          {item.links?.map((link) => (
            <a
              key={link.label}
              href={link.href ?? "#"}
              className="block px-4 py-2 text-[14px] transition-colors"
              style={{ color: BRAND.nav.dropdownLink }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.45)";
                e.currentTarget.style.color = BRAND.nav.dropdownLinkHover;
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

export default function MainLayout({ children }: MainLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

  const HEADER_STACK_HEIGHT = "5.25rem";

  return (
    <div
      className="min-h-screen bg-white text-[#1a1a1a]"
      style={{
        fontFamily: "'Source Sans 3', 'Source Sans Pro', Arial, sans-serif",
        fontSize: "100%",
        lineHeight: 1.625,
      }}
    >
      <div
        className="relative"
        style={{ "--header-stack": HEADER_STACK_HEIGHT } as CSSProperties}
      >
        {/* Institutional strip */}
        <div
          className="relative z-40 text-center text-[11px] py-1.5 font-medium tracking-[0.18em] uppercase text-white/95"
          style={{
            background: "#1e4260",
            borderBottom: "1px solid rgb(31, 59, 71)",
          }}
        >
          République du Tchad · Ministère de l'Enseignement Supérieur
        </div>

        {/* Unified navbar — python.org blue gradient */}
        <header className="sticky top-0 z-50 px-4 md:px-[50px]">
          <div
            className="max-w-[75rem] mx-auto rounded-t-lg border-t"
            style={{
              background: BRAND.nav.bg,
              borderTopColor: BRAND.nav.borderTop,
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <div className="flex items-center justify-between h-14 gap-4 px-3 lg:px-4">
              {/* Brand */}
              <a href="/" className="flex items-center gap-3 min-w-0 group">
                <UDNCrest />
                <div className="min-w-0">
                  <div className="text-white font-bold text-[19px] leading-tight tracking-tight truncate group-hover:text-white/95 transition-colors">
                    Université de N'Djamena
                  </div>
                  <div
                    className="hidden sm:block text-[12px] tracking-[0.18em] uppercase mt-0.5 truncate"
                    style={{ color: BRAND.gold }}
                  >
                    Savoir · Excellence · Service
                  </div>
                </div>
              </a>

              {/* Desktop navigation */}
              <nav className="hidden lg:flex items-center h-full">
                {NAV_ITEMS.map((item) =>
                  item.links ? (
                    <NavDropdown key={item.label} item={item} />
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      className="px-3 py-2 text-[15px] font-medium tracking-wide transition-colors duration-200 hover:text-white"
                      style={{ color: BRAND.nav.link }}
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
                    className="hidden md:flex items-center rounded-full border overflow-hidden w-52"
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
                      className="bg-transparent text-[15px] text-white placeholder:text-white/40 outline-none flex-1 min-w-0 pl-3.5 py-2"
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
                    className="hidden md:flex p-2 rounded-full text-white/70 hover:text-white hover:bg-white/8 transition-colors"
                    onClick={() => setSearchOpen(true)}
                    aria-label="Rechercher"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                )}

                <Link
                  to="/portail-etudiant"
                  className="hidden sm:inline-flex items-center px-4 py-1.5 rounded-[6px] text-[13px] font-semibold uppercase tracking-[0.1em] transition-all duration-200 hover:brightness-105 border"
                  style={{
                    background: `linear-gradient(180deg, ${BRAND.goldLight} 10%, ${BRAND.gold} 90%)`,
                    color: "#1a1a1a",
                    borderColor: "#e6c200",
                    boxShadow:
                      "1px 1px 1px rgba(0,0,0,0.05), inset 0 0 5px rgba(255,255,255,0.5)",
                  }}
                >
                  Portail
                </Link>

                <button
                  type="button"
                  className="lg:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/8 transition-colors"
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
              className="lg:hidden border-t rounded-b-lg overflow-hidden"
              style={{
                borderColor: BRAND.nav.mobileBorder,
                background: BRAND.nav.mobileBg,
              }}
            >
              <div className="px-3 py-3">
                <div
                  className="flex items-center gap-2 px-3.5 py-2.5 rounded-full border mb-3"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    borderColor: BRAND.nav.dropdownBorder,
                  }}
                >
                  <Search className="w-4 h-4 shrink-0" style={{ color: BRAND.gold }} />
                  <input
                    value={searchVal}
                    onChange={(e) => setSearchVal(e.target.value)}
                    className="bg-transparent text-[15px] text-white placeholder:text-white/40 outline-none w-full"
                    placeholder="Rechercher…"
                  />
                </div>

                {NAV_ITEMS.map((item) => (
                  <div key={item.label} className="border-b border-white/5 last:border-0">
                    {item.links ? (
                      <>
                        <button
                          type="button"
                          className="flex w-full items-center justify-between py-3.5 text-left text-[15px] font-medium text-white/90"
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
                                className="block py-2 text-[14px] text-white/65 hover:text-white transition-colors"
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
                        className="block py-3.5 text-[15px] font-medium text-white/90"
                      >
                        {item.label}
                      </a>
                    )}
                  </div>
                ))}

                <Link
                  to="/portail-etudiant"
                  className="mt-4 flex items-center justify-center w-full py-2.5 rounded-[6px] text-xs font-semibold uppercase tracking-[0.1em] border"
                  style={{
                    background: `linear-gradient(180deg, ${BRAND.goldLight} 10%, ${BRAND.gold} 90%)`,
                    color: "#1a1a1a",
                    borderColor: "#e6c200",
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Portail étudiant
                </Link>
              </div>
            </div>
          )}
          </div>
        </header>

        <main className="relative">{children}</main>
      </div>

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
                    {link === "Portail étudiant" ? (
                      <Link
                        to="/portail-etudiant"
                        className="hover:text-white/90 transition-colors"
                      >
                        {link}
                      </Link>
                    ) : (
                      <a href="#" className="hover:text-white/90 transition-colors">
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
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
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
