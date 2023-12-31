import type { Config } from "tailwindcss";

const config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      animation: {
        bounce: "bounce 4s infinite",
      },

      maxWidth: {
        "7xl": "1248px",
      },

      fontFamily: {
        poppins: "var(--Poppins)",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      padding: {
        "clamped-section": "clamp(16px,3vw,24px)",
      },

      colors: {
        purpleDark: "#edfesfd",
        "purple-heart": {
          "50": "#edf0ff",
          "100": "#dee4ff",
          "200": "#c3ccff",
          "300": "#9faaff",
          "400": "#797dff",
          "500": "#625afa",
          "600": "#523cef",
          "700": "#4831d4",
          "800": "#3829aa",
          "900": "#322986",
          "950": "#1f184e",
        },

        sulu: {
          "50": "#f8fee7",
          "100": "#edfbcc",
          "200": "#dbf89e",
          "300": "#ccf381",
          "400": "#a7e437",
          "500": "#88ca18",
          "600": "#69a10f",
          "700": "#507b10",
          "800": "#416113",
          "900": "#375215",
          "950": "#1b2e05",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
} satisfies Config;
export default config;
