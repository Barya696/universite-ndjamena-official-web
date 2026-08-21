/** Brand palette aligned with python.org blues + yellow accent */
export const BRAND = {
  navy: "#306998",
  navyMid: "#3776ab",
  navyLight: "#4b8bbe",
  navyDeep: "#1e415e",
  gold: "#FFD43B",
  goldLight: "#ffe873",
  goldBright: "#ffdf5d",
  textMuted: "#646464",

  nav: {
    bg: "linear-gradient(180deg, #4b8bbe 0%, #3776ab 55%, #306998 100%)",
    borderTop: "#6aadde",
    border: "#306998",
    link: "#e8ecf0",
    linkActive: "#ffffff",
    linkHover: "#ffffff",
    linkActiveBg:
      "linear-gradient(180deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.12) 100%)",
    linkActiveBorderTop: "rgba(255, 255, 255, 0.35)",
    linkActiveBorderBottom: "rgba(26, 58, 92, 0.9)",
    dropdownBg: "linear-gradient(180deg, #bbd4e9 10%, #d6e5f2 90%)",
    dropdownBorder: "rgba(55, 118, 171, 0.25)",
    dropdownLink: "rgba(51, 51, 51, 0.9)",
    dropdownLinkActive: "rgba(34, 34, 34, 0.9)",
    dropdownLinkHover: "#222222",
    mobileBg: "linear-gradient(180deg, #3776ab 0%, #306998 100%)",
    mobileBorder: "rgba(255, 255, 255, 0.25)",
    topBarBg: "#1e2933",
    topBarBorder: "#1f3b47",
    topBarLink: "#999999",
    topBarLinkActive: "#ffffff",
  },

  /** python.org nav typography: 16px base, tier-1 1.125em, tier-2 0.875em */
  navType: {
    fontFamily:
      "SourceSansProRegular, 'Source Sans 3', 'Source Sans Pro', Arial, sans-serif",
    baseSize: "16px",
    baseLineHeight: "26px",
    tier1Size: "1.125em",
    tier1LetterSpacing: "0.01em",
    tier1Padding: "0.5em 0.875em 0.45em",
    tier1LineHeight: "1.625",
    tier2Size: "0.875em",
    tier2Padding: "0.5em 1.5em 0.4em 1em",
    tier2LineHeight: "1.625",
    topBarSize: "1em",
    topBarPadding: "0.5em 0.75em 0.4em",
  },

  hero: {
    overlay:
      "linear-gradient(180deg, rgba(15, 30, 46, 0.72) 0%, rgba(48, 105, 152, 0.52) 50%, rgba(55, 118, 171, 0.45) 100%)",
    headerShadow: "0 1px 4px rgba(0, 0, 0, 0.25)",
  },

  strip: {
    bg: "linear-gradient(180deg, #3776ab 0%, #306998 100%)",
    borderTop: "#4b8bbe",
    borderBottom: "#306998",
    text: "#e8f0f8",
  },
} as const;
