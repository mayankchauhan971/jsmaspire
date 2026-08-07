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
        navy: {
          DEFAULT: "#0A2A66",
          50: "#EBF1FF",
          100: "#D6E3FF",
          200: "#ADC7FF",
          300: "#85ABFF",
          400: "#4D80FF",
          500: "#1A56E8",
          600: "#0A2A66",
          700: "#082152",
          800: "#06183D",
          900: "#041029",
          950: "#020814",
        },
        gold: {
          DEFAULT: "#D4A017",
          50: "#FDFBF0",
          100: "#FAF4D6",
          200: "#F5E6A3",
          300: "#EFD570",
          400: "#E2BA37",
          500: "#D4A017",
          600: "#B5840F",
          700: "#8C630A",
          800: "#634406",
          900: "#3D2A03",
        },
        cream: {
          DEFAULT: "#FAF9F6",
          50: "#FFFFFF",
          100: "#FAF9F6",
          200: "#F5F3ED",
          300: "#EBE7DC",
        },
        charcoal: "#1A1A1A",
        surface: "#F5F5F5",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(212, 160, 23, 0.3)',
        'navy-glow': '0 0 25px -5px rgba(10, 42, 102, 0.4)',
        'card-hover': '0 20px 30px -10px rgba(10, 42, 102, 0.12), 0 10px 15px -5px rgba(212, 160, 23, 0.08)',
      },
      backgroundImage: {
        'navy-gold-gradient': 'linear-gradient(135deg, #0A2A66 0%, #06183D 60%, #1A1A1A 100%)',
        'gold-accent-gradient': 'linear-gradient(135deg, #D4A017 0%, #E2BA37 50%, #B5840F 100%)',
        'hero-gradient': 'radial-gradient(ellipse at top right, rgba(212, 160, 23, 0.15), transparent 50%), radial-gradient(ellipse at bottom left, rgba(10, 42, 102, 0.2), transparent 60%)',
      }
    },
  },
  plugins: [],
};
export default config;
