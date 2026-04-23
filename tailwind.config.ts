import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        accent: {
          DEFAULT: "#FF6B00",
          hover: "#E66000",
          light: "#FF8533",
        },
        highlight: "#CCFF00",
        dark: {
          DEFAULT: "#000000",
          soft: "#121212",
          muted: "#1A1A1A",
        },
        light: {
          DEFAULT: "#FFFFFF",
          soft: "#F5F5F5",
          muted: "#E5E5E5",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      animation: {
        'scroll-left': 'scroll-left 32s linear infinite',
        'scroll-right': 'scroll-right 32s linear infinite',
        'blink': 'blink 1s step-start infinite',
        'bob': 'bob 1.6s ease-in-out infinite',
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'bob': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
