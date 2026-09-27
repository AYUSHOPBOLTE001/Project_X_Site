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
        "px-black": "#000000",
        "px-dark": "#0a0a0a",
        "px-gray": {
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
        "px-accent": "#0078D4",
        "px-accent-light": "#1a8cff",
        "px-accent-glow": "rgba(0, 120, 212, 0.3)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
        "slide-left": "slideLeft 0.8s ease-out forwards",
        "slide-right": "slideRight 0.8s ease-out forwards",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "gradient": "gradient 8s ease infinite",
        "counter": "counter 2s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 120, 212, 0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 120, 212, 0.4)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(ellipse at center, rgba(0, 120, 212, 0.15) 0%, transparent 70%)",
      },
      backgroundSize: {
        "grid-60": "60px 60px",
      },
    },
  },
  plugins: [],
};

export default config;
