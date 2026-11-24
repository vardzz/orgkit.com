import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#F4F4F5",
        surface: "#FFFFFF",
        ink: {
          DEFAULT: "#18181B",
          secondary: "#3F3F46",
          muted: "#52525B",
        },
        muted: {
          DEFAULT: "#71717A",
        },
        line: {
          DEFAULT: "#E4E4E7",
          subtle: "rgba(228, 228, 231, 0.6)",
        },
        accent: {
          DEFAULT: "#059669",
          strong: "#047857",
          light: "#10B981",
          tint: "rgba(5, 150, 105, 0.08)",
        },
        amber: {
          DEFAULT: "#D97706",
          strong: "#B45309",
          soft: "#FEF3C7",
        },
        brand: {
          deep: "#054A38",
          tint: "rgba(5, 150, 105, 0.08)",
        },
        danger: "#DC2626",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      boxShadow: {
        floating: "0 20px 50px rgba(24, 24, 27, 0.08)",
        "floating-lg": "0 25px 60px rgba(24, 24, 27, 0.12)",
        button: "0 1px 3px rgba(24, 24, 27, 0.04)",
        "button-hover": "0 6px 18px rgba(24, 24, 27, 0.08)",
        card: "0 4px 20px -2px rgba(24, 24, 27, 0.05)",
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
        "4xl": "32px",
      },
      keyframes: {
        cardFadeIn: {
          from: { opacity: "0", transform: "translateY(6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        cardPopout: {
          "0%": { transform: "scale(0.96)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
      animation: {
        "card-fade-in": "cardFadeIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) both",
        "card-popout": "cardPopout 0.25s ease-out both",
        "pulse-slow": "pulseSlow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
