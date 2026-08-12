/** Shared UDN brand palette — navy + gold, tuned for hero-backed header */
export const BRAND = {
  navy: "#1a3a5c",
  navyMid: "#234a6e",
  navyLight: "#2a5080",
  navyDeep: "#0f1e2e",
  gold: "#c8a84b",
  goldLight: "#dbbe7a",
  goldBright: "#e8c96a",
  textMuted: "#c8d0d8",

  nav: {
    bg: "linear-gradient(180deg, rgba(42, 80, 128, 0.96) 0%, rgba(26, 58, 92, 0.98) 100%)",
    borderTop: "rgba(200, 168, 75, 0.45)",
    link: "#e8ecf0",
    linkActive: "#ffffff",
    linkActiveBg:
      "linear-gradient(180deg, rgba(200, 168, 75, 0.2) 0%, rgba(30, 69, 112, 0.85) 100%)",
    linkActiveBorderTop: "rgba(200, 168, 75, 0.35)",
    linkActiveBorderBottom: "rgba(26, 58, 92, 0.9)",
    divider: "rgba(255, 255, 255, 0.14)",
    mobileBg: "linear-gradient(180deg, #234a6e 0%, #1a3a5c 100%)",
    mobileBorder: "rgba(200, 168, 75, 0.25)",
  },

  hero: {
    overlay:
      "linear-gradient(180deg, rgba(12, 28, 45, 0.88) 0%, rgba(20, 45, 74, 0.72) 50%, rgba(26, 58, 92, 0.8) 100%)",
    headerShadow: "0 1px 4px rgba(0, 0, 0, 0.45)",
  },

  strip: {
    bg: "linear-gradient(180deg, #234a6e 0%, #1a3a5c 100%)",
    borderTop: "rgba(200, 168, 75, 0.35)",
    borderBottom: "rgba(15, 30, 46, 0.8)",
    text: "#d4dce4",
  },
} as const;
