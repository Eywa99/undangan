import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#FAF8F5",
          50: "#FFFFFF",
          100: "#FAF8F5",
          200: "#F2ECE1",
          300: "#EAE0CD",
        },
        champagne: {
          DEFAULT: "#E8D8B4",
          light: "#F4EBD7",
          dark: "#D6C092",
        },
        sage: {
          DEFAULT: "#A8B5A2",
          light: "#C5D1C0",
          dark: "#83927D",
        },
        olive: {
          DEFAULT: "#4F5B4A",
          light: "#697763",
          dark: "#353D32",
          deep: "#242A22",
        },
        gold: {
          DEFAULT: "#C8A45D",
          light: "#E5C889",
          dark: "#A4813A",
          accent: "#DFB86C",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-poppins)", "sans-serif"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(79, 91, 74, 0.08)",
        "glass-gold": "0 8px 32px 0 rgba(200, 164, 93, 0.15)",
        luxury: "0 20px 40px -15px rgba(0, 0, 0, 0.07)",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
