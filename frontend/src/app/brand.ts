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
    link: "#ffffff",
    linkHover: "#ffffff",
    linkActiveBg:
      "linear-gradient(180deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.12) 100%)",
    dropdownBg: "linear-gradient(180deg, #fcfdfe 10%, #d6e5f2 90%)",
    dropdownBorder: "#89b4d9",
    dropdownLink: "rgba(51, 51, 51, 0.92)",
    dropdownLinkHover: "#1a1a1a",
    mobileBg: "linear-gradient(180deg, #3776ab 0%, #306998 100%)",
    mobileBorder: "rgba(255, 255, 255, 0.25)",
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
