import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./content/**/*.{mdx,json}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background-color)",
        surface: "var(--surface-color)",
        border: "var(--border-color)",
        text: "var(--text-color)",
        muted: "var(--muted-color)",
        dim: "var(--dim-color)",
        lime: "var(--lime-color)",
        red: "var(--red-color)",
      },
      fontFamily: {
        sans: ["var(--font-space)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        none: "none",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "6%": { opacity: "0.82" },
          "7%": { opacity: "1" },
          "22%": { opacity: "0.9" },
          "23%": { opacity: "1" },
          "61%": { opacity: "0.94" },
          "62%": { opacity: "1" },
        },
        drift: {
          "0%": { transform: "translate3d(-2%, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(2%, -3%, 0) scale(1.04)" },
          "100%": { transform: "translate3d(-1%, 2%, 0) scale(1)" },
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.25" },
          "50%": { opacity: "0.85" },
        },
        grainShift: {
          "0%": { transform: "translate(0, 0)" },
          "20%": { transform: "translate(-2%, 1%)" },
          "40%": { transform: "translate(1%, -1%)" },
          "60%": { transform: "translate(-1%, 2%)" },
          "80%": { transform: "translate(2%, -2%)" },
          "100%": { transform: "translate(0, 0)" },
        },
      },
      animation: {
        drift: "drift 22s linear infinite",
        flicker: "flicker 4s linear infinite",
        pulseLine: "pulseLine 3s ease-in-out infinite",
        grainShift: "grainShift 0.6s steps(4) infinite",
      },
    },
  },
  plugins: [],
}

export default config
