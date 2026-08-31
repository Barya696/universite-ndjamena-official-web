import { useState, type CSSProperties } from "react";
import { Search, Menu, X, ChevronDown, ChevronRight, ArrowLeft, GraduationCap, UserCircle, BookOpen, FileCheck, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Link, useLocation } from "react-router";
import { BRAND } from "./Utils/brand";

const GOLD = BRAND.gold;

interface NavLink {
  label: string;
  href?: string;
  links?: NavLink[];
}

interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  links?: NavLink[];
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "À propos",
    href: "/universite/a-propos",
    links: [
      { label: "Histoire & Mission", href: "/universite/a-propos" },
      { label: "Mot du Recteur", href: "/universite/a-propos" },
      { label: "Gouvernance", href: "/universite/a-propos" },
      { label: "Chiffres clés", href: "/universite/a-propos" },
      { label: "Nos Politiques", href: "/universite/a-propos" },
      { label: "Personels", href: "/universite/a-propos" },
    ],
  },
  {
    label: "Formations",
    href: "/universite/formations",
    links: [
      { label: "Resources academique", href: "/universite/formations" },
      { label: "License", href: "/universite/formations" },
      { label: "Master", href: "/universite/formations" },
      { label: "Doctorat", href: "/universite/formations" },
    ],
  },
  {
    label: "International",
    href: "/universite/international",
    links: [
      { label: "Partenariats internationaux", href: "/universite/international" },
      { label: "Programmes d'échange", href: "/universite/international" },
      { label: "Coopération & doubles diplômes", href: "/universite/international" },
      { label: "Étudiants internationaux", href: "/universite/international" },
    ],
  },
  {
    label: "Actualités",
    href: "/universite/nouvelles-evenements",
    links: [
      { label: "Nouvelles", href: "/universite/nouvelles-evenements" },
      { label: "Événements", href: "/universite/nouvelles-evenements" },
      { label: "Calendrier académique", href: "/universite/nouvelles-evenements" },
      { label: "Communiqués", href: "/universite/nouvelles-evenements" },
    ],
  },
  {
    label: "Recherches",
    href: "/universite/recherches",
    links: [
      { label: "Laboratoires & centres", href: "/universite/recherches" },
      { label: "Publications", href: "/universite/recherches" },
      { label: "Appels à projets", href: "/universite/recherches" },
      { label: "Axes de recherche", href: "/universite/recherches" },
    ],
  },
];

export function UDNCrest({ size = 36 }: { size?: number }) {
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

const TOPBAR_NAV_ITEMS: NavItem[] = [
  {
    label: "Université",
    href: "/",
    icon: <GraduationCap className="w-4 h-4 shrink-0" />,
    links: [
      {
        label: "À propos",
        href: "/universite/a-propos",
        links: [
          { label: "Histoire & Mission", href: "/universite/a-propos" },
          { label: "Mot du Recteur", href: "/universite/a-propos" },
          { label: "Gouvernance", href: "/universite/a-propos" },
          { label: "Chiffres clés", href: "/universite/a-propos" },
          { label: "Nos Politiques", href: "/universite/a-propos" },
          { label: "Personels", href: "/universite/a-propos" },
        ],
      },
      {
        label: "Formations",
        href: "/universite/formations",
        links: [
          { label: "Resources academique", href: "/universite/formations" },
          { label: "License", href: "/universite/formations" },
          { label: "Master", href: "/universite/formations" },
          { label: "Doctorat", href: "/universite/formations" },
        ],
      },
      {
        label: "Recherches",
        href: "/universite/recherches",
        links: [
          { label: "Laboratoires & centres", href: "/universite/recherches" },
          { label: "Publications", href: "/universite/recherches" },
          { label: "Appels à projets", href: "/universite/recherches" },
          { label: "Axes de recherche", href: "/universite/recherches" },
        ],
      },
      {
        label: "International",
        href: "/universite/international",
        links: [
          { label: "Partenariats internationaux", href: "/universite/international" },
          { label: "Programmes d'échange", href: "/universite/international" },
          { label: "Coopération & doubles diplômes", href: "/universite/international" },
          { label: "Étudiants internationaux", href: "/universite/international" },
        ],
      },
      {
        label: "Nouvelles & Événements",
        href: "/universite/nouvelles-evenements",
        links: [
          { label: "Nouvelles", href: "/universite/nouvelles-evenements" },
          { label: "Événements", href: "/universite/nouvelles-evenements" },
          { label: "Calendrier académique", href: "/universite/nouvelles-evenements" },
          { label: "Communiqués", href: "/universite/nouvelles-evenements" },
        ],
      },
    ],
  },
  {
    label: "Portail_Etudiant",
    href: "/portail-etudiant",
    icon: <UserCircle className="w-4 h-4 shrink-0" />,
  },
  {
    label: "Bibliothèque Numérique",
    href: "/bibliotheque",
    icon: <BookOpen className="w-4 h-4 shrink-0" />,
  },
  {
    label: "Candidature",
    href: "/candidature",
    icon: <FileCheck className="w-4 h-4 shrink-0" />,
  },
];

function TopBarDropdown({
  item,
  active,
  compact = false,
}: {
  item: NavItem;
  active?: boolean;
  compact?: boolean;
}) {
  const compactPadding = compact ? { padding: "0.25em 0.7em 0.22em" } : {};
  const hasDropdown = item.links && item.links.length > 0;
  return (
    <div className={`${hasDropdown ? "relative group " : ""}flex items-center`}>
      <Link
        to={item.href}
        className="flex items-center gap-1.5 whitespace-nowrap rounded transition-all duration-200 hover:text-white"
        style={{
          ...topBarLinkStyle(active),
          ...compactPadding,
          borderRadius: "6px",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.color = "#ffffff";
          el.style.background = "rgba(255,255,255,0.08)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.color = active
            ? BRAND.nav.topBarLinkActive
            : BRAND.nav.topBarLink;
          el.style.background = "transparent";
        }}
      >
        {item.icon}
        {item.label}
      </Link>

      {hasDropdown && (
        <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-150 z-50">
          <div
            className="min-w-[14em] border-t rounded-b"
            style={{
              background: BRAND.nav.dropdownBg,
              borderTopColor: BRAND.nav.dropdownBorder,
              boxShadow: "0 0.5em 0.5em rgba(0,0,0,0.25)",
            }}
          >
            {item.links?.map((link, idx) => {
              const hasSub = link.links && link.links.length > 0;
              return (
                <div key={link.label} className={`${hasSub ? "relative group/sub " : ""}block`}>
                  <Link
                    to={link.href ?? "#"}
                    className="flex items-center justify-between whitespace-nowrap transition-colors"
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
                    <span>{link.label}</span>
                    {hasSub && <ChevronRight className="w-3.5 h-3.5 ml-2 shrink-0 opacity-70" />}
                  </Link>

                  {hasSub && (
                    <div className="absolute left-full top-[-1px] opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-opacity duration-150 z-50">
                      <div
                        className="min-w-[15em] overflow-hidden shadow-xl"
                        style={{
                          background: BRAND.nav.dropdownBg,
                          filter: "brightness(1.30)",
                          border: `1px solid ${BRAND.nav.dropdownBorder}`,
                          borderLeft: `1px solid ${BRAND.nav.dropdownBorder}`,
                          boxShadow: "0 0.5em 0.5em rgba(0,0,0,0.25)",
                        }}
                      >
                        {link.links?.map((sublink, subidx) => (
                          <Link
                            key={sublink.label}
                            to={sublink.href ?? "#"}
                            className="block whitespace-nowrap transition-colors"
                            style={{
                              ...tier2LinkStyle,
                              paddingLeft: "1.2em",
                              borderTop:
                                subidx === 0
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
                            {sublink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Subnav ───────────────────────────────────────────────────────────────
// This is the site's MAIN navbar: sticky, rendered once from MainLayout's
// <header>, so it appears identically on every page. Content/placement is
// unchanged from before — it's just been pulled out into its own named
// component instead of living as inline JSX inside MainLayout.
function Subnav({ isStudentPortal }: { isStudentPortal: boolean }) {
  return (
    <div
      style={{
        background: BRAND.nav.topBarBg,
        borderBottom: `1px solid ${BRAND.nav.topBarBorder}`,
      }}
    >
      <div className="max-w-[75rem] mx-auto px-4 md:px-[50px] py-1 flex items-center justify-between gap-3">
        <div
          className="hidden md:block"
          style={{
            ...topBarLinkStyle(),
            color: "rgba(255,255,255,0.5)",
          }}
        >
          ▲ République du Tchad
        </div>

        <div className="flex-1 flex items-center justify-center gap-1 md:gap-3 flex-wrap">
          {TOPBAR_NAV_ITEMS.map((item, i) => (
            <TopBarDropdown key={item.label} item={item} active={i === 0} compact />
          ))}
        </div>

        {isStudentPortal ? (
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 rounded-[6px] font-semibold border transition-all duration-200 hover:brightness-105 text-xs sm:text-sm"
            style={{
              fontFamily: T1.fontFamily,
              padding: "0.22em 0.75em 0.2em",
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
              padding: "0.22em 0.75em 0.2em",
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
  );
}

// ─── NavDropdown ──────────────────────────────────────────────────────────
// Tier-1 item used inside HeroSubnav. Restyled: hover now reveals a slim
// gold underline instead of a solid background block, and the dropdown
// panel gets a soft glass look with a gold top accent + slide-in fade.
function NavDropdown({ item }: { item: NavItem }) {
  return (
    <div className="relative group h-full flex items-center">
      <Link
        to={item.href}
        className="relative flex items-center h-full whitespace-nowrap transition-colors duration-200"
        style={{ ...tier1LinkStyle, color: "rgba(255,255,255,0.85)" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "#ffffff";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "rgba(255,255,255,0.85)";
        }}
      >
        {item.label}
        {/* gold underline indicator */}
        <span
          className="absolute left-4 right-4 bottom-1.5 h-[2px] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center"
          style={{ background: GOLD }}
        />
      </Link>

      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
        <div
          className="min-w-[15em] rounded-lg"
          style={{
            background: "rgba(20,36,56,0.97)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 12px 28px rgba(0,0,0,0.35)",
          }}
        >
          <div className="h-[3px]" style={{ background: `linear-gradient(90deg, ${GOLD}, rgba(200,168,75,0.3))` }} />
          <div className="py-1.5">
            {item.links?.map((link) => {
              const hasSub = link.links && link.links.length > 0;
              return (
                <div key={link.label} className={`${hasSub ? "relative group/sub " : ""}block`}>
                  <Link
                    to={link.href ?? "#"}
                    className="flex items-center justify-between whitespace-nowrap transition-all duration-150"
                    style={{
                      ...tier2LinkStyle,
                      color: "rgba(255,255,255,0.75)",
                      borderLeft: "2px solid transparent",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                      e.currentTarget.style.color = "#ffffff";
                      e.currentTarget.style.borderLeftColor = GOLD;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "rgba(255,255,255,0.75)";
                      e.currentTarget.style.borderLeftColor = "transparent";
                    }}
                  >
                    <span className="flex items-center gap-2">{link.label}</span>
                    {hasSub && <ChevronRight className="w-3.5 h-3.5 ml-2 shrink-0 opacity-60" />}
                  </Link>

                  {hasSub && (
                    <div className="absolute left-full top-[-1px] opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-opacity duration-150 z-50">
                      <div
                        className="min-w-[15em] rounded-r rounded-b overflow-hidden shadow-xl"
                        style={{
                          background: "rgba(20,36,56,0.97)",
                          backdropFilter: "blur(10px)",
                          filter: "brightness(1.12)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          boxShadow: "0 12px 28px rgba(0,0,0,0.35)",
                        }}
                      >
                        <div className="h-[2px]" style={{ background: `linear-gradient(90deg, ${GOLD}, rgba(200,168,75,0.3))` }} />
                        <div className="py-1.5">
                          {link.links?.map((sublink) => (
                            <Link
                              key={sublink.label}
                              to={sublink.href ?? "#"}
                              className="flex items-center gap-2 whitespace-nowrap transition-all duration-150"
                              style={{
                                ...tier2LinkStyle,
                                paddingLeft: "1.4em",
                                color: "rgba(255,255,255,0.75)",
                                borderLeft: "2px solid transparent",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                                e.currentTarget.style.color = "#ffffff";
                                e.currentTarget.style.borderLeftColor = GOLD;
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = "transparent";
                                e.currentTarget.style.color = "rgba(255,255,255,0.75)";
                                e.currentTarget.style.borderLeftColor = "transparent";
                              }}
                            >
                              {sublink.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

interface MainLayoutProps {
  children: React.ReactNode;
}

// ─── HeroSubnav ───────────────────────────────────────────────────────────
// The Homepage-only subnav (Formation / Recherche / International /
// Candidature), rendered next to the crest in the hero. Restyled as a
// frosted glass pill with a gold hairline accent, cleaner hover states,
// and a refined search + mobile menu to match.
export function HeroSubnav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

  return (
    <div
      className="relative overflow-visible flex-1"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.14), rgba(255,255,255,0.05))",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: "1px solid rgba(255,255,255,0.22)",
        borderRadius: "16px",
        boxShadow:
          "0 10px 30px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.18)",
      }}
    >
      {/* thin gold hairline across the top edge */}
      <div
        className="absolute top-0 left-6 right-6 h-px pointer-events-none"
        style={{
          background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
          opacity: 0.7,
        }}
      />

      <div className="flex items-center justify-between h-14 gap-2 px-2 lg:px-3">
        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-stretch h-full flex-1 justify-center gap-1">
          {NAV_ITEMS.map((item) =>
            item.links ? (
              <NavDropdown key={item.label} item={item} />
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className="flex items-center whitespace-nowrap transition-colors duration-200"
                style={{ ...tier1LinkStyle, color: "rgba(255,255,255,0.85)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.85)")
                }
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-1.5 pr-2 mr-1" style={{ borderRight: `1px solid rgba(200,168,75,0.35)` }}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/12 transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/12 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/12 transition-colors"
            aria-label="X (Twitter)"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/12 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1.5 shrink-0 lg:pl-2 lg:border-l" style={{ borderColor: `rgba(200,168,75,0.35)` }}>
          {searchOpen ? (
            <div
              className="hidden md:flex items-center rounded-full border overflow-hidden w-52 transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.14)",
                borderColor: "rgba(255,255,255,0.28)",
              }}
            >
              <Search className="w-3.5 h-3.5 ml-3 shrink-0" style={{ color: GOLD }} />
              <input
                autoFocus
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                onBlur={() => !searchVal && setSearchOpen(false)}
                className="bg-transparent font-normal text-white placeholder:text-white/45 outline-none flex-1 min-w-0 pl-2 py-2"
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
              className="hidden md:flex p-2 rounded-full text-white/75 hover:text-white hover:bg-white/12 transition-colors"
              onClick={() => setSearchOpen(true)}
              aria-label="Rechercher"
            >
              <Search className="w-4 h-4" />
            </button>
          )}

          <button
            type="button"
            className="lg:hidden p-2 rounded-full text-white/85 hover:text-white hover:bg-white/12 transition-colors"
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
          className="lg:hidden overflow-hidden rounded-b-[16px]"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(15,28,45,0.92)",
            backdropFilter: "blur(14px)",
          }}
        >
          <div className="px-3 py-3">
            <div
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-full border mb-3"
              style={{
                background: "rgba(255,255,255,0.1)",
                borderColor: "rgba(255,255,255,0.22)",
              }}
            >
              <Search className="w-4 h-4 shrink-0" style={{ color: GOLD }} />
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
              <div key={item.label} className="border-b border-white/8 last:border-0">
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
                      <div className="pb-3 pl-3 space-y-1 border-l-2" style={{ borderColor: "rgba(200,168,75,0.4)" }}>
                        {item.links.map((link) => (
                          <Link
                            key={link.label}
                            to={link.href ?? "#"}
                            className="block pl-3 transition-colors"
                            style={{
                              ...tier2LinkStyle,
                              color: "rgba(255,255,255,0.75)",
                            }}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className="block text-white/90"
                    style={tier1LinkStyle}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Mainlayout({ children }: MainLayoutProps) {
  const HEADER_STACK_HEIGHT = "2.25rem";
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
        {/* Main navbar — sticky on every page */}
        <header className="sticky top-0 z-50">
          <div
            style={{
              background: BRAND.nav.topBarBg,
              borderBottom: `1px solid ${BRAND.nav.topBarBorder}`,
            }}
          >
            <div className="max-w-[75rem] mx-auto px-4 md:px-[50px] py-1 flex items-center justify-between gap-3">
              <div className="hidden md:block" style={{
                ...topBarLinkStyle(),
                color: "rgba(255,255,255,0.5)",
              }}>
                ▲ République du Tchad
              </div>

              <div className="flex-1 flex items-center justify-center gap-1 md:gap-3 flex-wrap">
                {TOPBAR_NAV_ITEMS.map((item, i) => (
                  <TopBarDropdown key={item.label} item={item} active={i === 0} compact />
                ))}
              </div>

              {isStudentPortal ? (
                <Link
                  to="/"
                  className="inline-flex items-center gap-1.5 rounded-[6px] font-semibold border transition-all duration-200 hover:brightness-105 text-xs sm:text-sm"
                  style={{
                    fontFamily: T1.fontFamily,
                    padding: "0.22em 0.75em 0.2em",
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
                    padding: "0.22em 0.75em 0.2em",
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
                { label: "Histoire & Mission", href: "/universite/a-propos" },
                { label: "Gouvernance", href: "/universite/a-propos" },
                { label: "Plan Stratégique", href: "/universite/a-propos" },
                { label: "Accréditations", href: "/universite/a-propos" },
                { label: "Partenariats", href: "/universite/international" },
              ],
            },
            {
              heading: "Formations",
              links: [
                { label: "Droit & Sciences Politiques", href: "/universite/formations" },
                { label: "Lettres & Sciences Humaines", href: "/universite/formations" },
                { label: "Sciences Exactes", href: "/universite/formations" },
                { label: "Sciences de la Santé", href: "/universite/formations" },
                { label: "Sciences Économiques", href: "/universite/formations" },
                { label: "Candidature 2024–2025", href: "/candidature" },
              ],
            },
            {
              heading: "Services",
              links: [
                { label: "Bibliothèques", href: "/bibliotheque" },
                { label: "Résidences", href: "#" },
                { label: "Service de santé", href: "#" },
                { label: "Orientation & Emploi", href: "#" },
                { label: "Alumni", href: "#" },
                { label: "Portail étudiant", href: "/portail-etudiant" },
              ],
            },
            {
              heading: "Contact & Médias",
              links: [
                { label: "Campus Toukra", href: "/universite/a-propos" },
                { label: "Campus Farcha", href: "/universite/a-propos" },
                { label: "Campus Ardep-Djoumal", href: "/universite/a-propos" },
                { label: "Presse & Médias", href: "/media" },
                { label: "Actualités", href: "/universite/nouvelles-evenements" },
                { label: "Inscription en ligne", href: "/inscription" },
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
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="hover:text-white/90 transition-colors"
                      style={{ fontSize: "16px", fontWeight: "400", lineHeight: "26px" }}
                    >
                      {link.label}
                    </Link>
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
