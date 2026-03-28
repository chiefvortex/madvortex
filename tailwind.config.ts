import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        surface: "#1A1A1A",
        border: "#333333",
        foreground: "#E8E8E8",
        muted: "#888888",
        dim: "#555555",
        lime: "#BFFF00",
        danger: "#FF0000",
      },
      borderRadius: {
        DEFAULT: "4px",
        sm: "2px",
        md: "4px",
        lg: "4px",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      fontSize: {
        "display": ["clamp(48px, 8vw, 140px)", { lineHeight: "1", letterSpacing: "-0.03em" }],
      },
      letterSpacing: {
        wide: "0.12em",
      },
      lineHeight: {
        relaxed: "1.65",
      },
      keyframes: {
        "scan-line": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "flicker": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        "pulse-gentle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "cursor-blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        "scan-line": "scan-line 2s ease-in-out",
        "flicker": "flicker 3s ease-in-out infinite",
        "pulse-gentle": "pulse-gentle 2s ease-in-out infinite",
        "cursor-blink": "cursor-blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
}

export default config
