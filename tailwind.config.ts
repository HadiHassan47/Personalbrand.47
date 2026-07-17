import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#050816",
          secondary: "#0B1220",
          section: "#0F172A",
        },
        accent: {
          blue: "#38BDF8",
          purple: "#7C3AED",
          success: "#14F195",
          warning: "#FBBF24",
          error: "#EF4444",
        },
        ink: {
          heading: "#FFFFFF",
          paragraph: "#CBD5E1",
          muted: "#94A3B8",
        },
        glass: "rgba(255,255,255,0.06)",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        code: ["var(--font-jetbrains-mono)", "monospace"],
      },
      maxWidth: {
        site: "1440px",
        content: "1200px",
      },
      spacing: {
        "8": "8px",
        "16": "16px",
        "24": "24px",
        "32": "32px",
        "48": "48px",
        "64": "64px",
        "96": "96px",
        "128": "128px",
        "pad-desktop": "80px",
        "pad-tablet": "40px",
        "pad-mobile": "20px",
      },
      borderRadius: {
        sm: "12px",
        md: "20px",
        lg: "28px",
      },
      boxShadow: {
        premium: "0 20px 60px rgba(0,0,0,.35)",
      },
      backdropBlur: {
        glass: "24px",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        "aurora-drift": {
          "0%, 100%": { transform: "translate(0%, 0%) rotate(0deg)" },
          "50%": { transform: "translate(4%, -6%) rotate(6deg)" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
        float: "float 6s ease-in-out infinite",
        aurora: "aurora-drift 20s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
