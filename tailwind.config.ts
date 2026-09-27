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
        "moph-green": "#00694E",
        "moph-green-dark": "#005540",
        "moph-green-light": "#E8F5E9",
        "text-primary": "#0F172A",
        "text-secondary": "#475569",
        "bg-alt": "#F6F7F5",
        emergency: "#C8102E",
        border: "#E5E7EB",
        pending: "#FEF9C3",
        "pending-border": "#FDE68A",
        "pending-text": "#92400E",
      },
      fontFamily: {
        sans: ['"Noto Sans Thai"', "sans-serif"],
      },
      fontSize: {
        body: ["17px", { lineHeight: "1.7" }],
        "body-lg": ["18px", { lineHeight: "1.7" }],
        "body-xl": ["20px", { lineHeight: "1.7" }],
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        DEFAULT: "8px",
      },
      spacing: {
        "4.5": "18px",
        "13": "52px",
        "15": "60px",
        "18": "72px",
      },
    },
  },
  plugins: [],
};
export default config;
