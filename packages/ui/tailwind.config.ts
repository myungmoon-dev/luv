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
      "gray-100": "#F3F3F4",
      "gray-200": "#F0F0F0",
      "gray-300": "#F8F8F8",
      "gray-400": "#4C4C4C",
      "blue-400": "#41C9E2",
      "blue-500": "#3490DE",
      "blue-600": "#00A8FF",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        HSBombaram3: ["HSBombaram3_Regular", "sans-serif"],
        Lora: ["Lora", "sans-serif"],
        Yanone: ["Yanone", "sans-serif"],
        SCoreDream: ["SCoreDream", "sans-serif"],
        Cormorant: ["Cormorant", "sans-serif"],
      },
    },
  },
  plugins: [],
  prefix: "ui-",
};
export default config;
