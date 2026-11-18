/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nx: {
          bg: "#050816",
          bg2: "#080D1C",
          card: "rgba(8,13,28,0.85)",
          border: "rgba(198,255,54,0.25)",
          lime: "#C6FF36",
          green: "#A3FF12",
          white: "#FFFFFF",
          grey: "#A0A5B5",
          grey2: "#6B7280",
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', "monospace"],
        sans: ['"Inter"', "sans-serif"],
        display: ['"Orbitron"', '"Space Grotesk"', "sans-serif"],
      },
      boxShadow: {
        "lime": "0 0 20px rgba(198,255,54,0.45), 0 0 40px rgba(198,255,54,0.2)",
        "lime-sm": "0 0 10px rgba(198,255,54,0.35)",
        "lime-lg": "0 0 40px rgba(198,255,54,0.6), 0 0 80px rgba(198,255,54,0.25)",
        "green": "0 0 15px rgba(163,255,18,0.4), 0 0 30px rgba(163,255,18,0.2)",
        "card": "0 8px 32px 0 rgba(0,0,0,0.6), inset 0 1px 0 rgba(198,255,54,0.08)",
        "inset-lime": "inset 0 0 30px rgba(198,255,54,0.05)",
      },
      backgroundImage: {
        "grid-nx": "linear-gradient(rgba(198,255,54,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(198,255,54,0.04) 1px, transparent 1px)",
        "hero-glow": "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(198,255,54,0.12) 0%, transparent 70%)",
        "lime-gradient": "linear-gradient(135deg, #C6FF36 0%, #A3FF12 100%)",
      },
      animation: {
        "pulse-lime": "pulseLime 2.5s infinite ease-in-out",
        "float": "float 4s ease-in-out infinite",
        "glitch": "glitch 1s infinite alternate",
        "scan": "scan 8s linear infinite",
        "shimmer": "shimmer 2s infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        pulseLime: {
          "0%, 100%": { opacity: "0.5", filter: "drop-shadow(0 0 8px rgba(198,255,54,0.5))" },
          "50%": { opacity: "1", filter: "drop-shadow(0 0 20px rgba(198,255,54,0.9))" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
