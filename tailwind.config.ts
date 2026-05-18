import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0a0f1f",
          soft: "#475569",
          mute: "#64748b",
          inverse: "#0b0c1a",
        },
        accent: {
          DEFAULT: "#2f5bff",
          50: "#eef2ff",
          100: "#dfe7ff",
          500: "#2f5bff",
          600: "#1f43d6",
          700: "#1733a6",
          purple: "#7c5cff",
        },
        bg: {
          DEFAULT: "#ffffff",
          soft: "#f6f7fb",
          dark: "#0b0c1a",
        },
      },
      fontFamily: {
        serif: ["var(--font-instrument-serif)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
      },
      letterSpacing: {
        "eyebrow": "0.18em",
      },
      animation: {
        "mesh-drift": "meshDrift 18s ease-in-out infinite",
        "mesh-drift-slow": "meshDrift 28s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3.5s ease-in-out infinite",
      },
      keyframes: {
        meshDrift: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "33%": { transform: "translate3d(6%, -4%, 0) scale(1.08)" },
          "66%": { transform: "translate3d(-5%, 5%, 0) scale(0.95)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.85" },
          "50%": { opacity: "1" },
        },
      },
      boxShadow: {
        "premium": "0 30px 80px -30px rgba(15, 23, 42, 0.25)",
        "premium-hover": "0 40px 100px -30px rgba(47, 91, 255, 0.35)",
        "chip": "0 1px 0 rgba(15,23,42,0.06), 0 6px 16px -8px rgba(15,23,42,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
