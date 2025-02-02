import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "30px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          xxl: "1600px",
        },
      },
      colors: {
        paper: "rgb(var(--color-paper) / <alpha-value>)",
        "navy-300": "rgb(var(--color-navy-300) / <alpha-value>)",
        "navy-400": "rgb(var(--color-navy-400) / <alpha-value>)",
        "navy-500": "rgb(var(--color-navy-500) / <alpha-value>)",
        "navy-600": "rgb(var(--color-navy-600) / <alpha-value>)",
        "navy-700": "rgb(var(--color-navy-700) / <alpha-value>)",
        "navy-800": "rgb(var(--color-navy-800) / <alpha-value>)",
        text: "rgb(var(--text) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        background: "rgb(var(--background) / <alpha-value>)",
        navbar: "rgb(var(--navbar) / <alpha-value>)",
        leather: "rgb(var(--color-leather-1) / <alpha-value>)",
      },
      backgroundImage: {
        gradient: "var(--gradient)",
      },
      fontFamily: {
        acorn: ["var(--font-acorn)"],
        lato: ["var(--font-lato)"],
      },
      gridTemplateColumns: {
        "24": "repeat(24, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-24": "span 24 / span 24",
        "span-16": "span 16 / span 24",
        "span-15": "span 15 / span 24",
        "span-14": "span 14 / span 24",
      },
    },
  },
  plugins: [],
} satisfies Config;
