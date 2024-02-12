import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000000",
      white: "#FFFFFF",
      "pink-100": "#DFC7C7",
      "pink-200": "#892122",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        HSBombaram3: ["HSBombaram3_Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
