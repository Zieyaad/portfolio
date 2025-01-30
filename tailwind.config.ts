import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
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
        },
      },
      colors: {
        text: "rgb(var(--text) / <alpha-value>)",
        background: "rgb(var(--background) / <alpha-value>)",
        navbar: "rgb(var(--navbar) / <alpha-value>)",
        "violet-vortex": "rgb(var(--violet-vortex) / <alpha-value>)",
        "skyward-blue": "rgb(var(--skyward-blue) / <alpha-value>)",
        "clouded-slate": "rgb(var(--clouded-slate) / <alpha-value>)",
        "lavender-mist": "rgb(var(--lavender-mist) / <alpha-value>)",
        "frosted-lilac": "rgb(var(--frosted-lilac) / <alpha-value>)",
        "icy-periwinkle": "rgb(var(--icy-periwinkle) / <alpha-value>)",
        "midnight-charcoal": "rgb(var(--midnight-charcoal) / <alpha-value>)",
      },
      backgroundImage: {
        gradient: "var(--gradient)",
      },
      fontFamily: {
        acorn: ["var(--font-acorn)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
