import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050505",
        secondary: "#0F0F0F",
        accent: "#00FF94",
        highlight: "#00FF94",
        dark: "#050505",
        light: "#FFFFFF",
        muted: "#888888",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      backgroundImage: {

      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
};

export default config;
