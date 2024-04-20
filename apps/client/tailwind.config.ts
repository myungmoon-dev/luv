import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        HSBombaram3: ["HSBombaram3_Regular", "sans-serif"],
      },
      colors: {
        "pink-100": "#DFC7C7",
        "pink-200": "#892122",
        "pink-300": "#EAE3E1",
        "blue-400": "#41C9E2",
        "blue-500": "#3490DE",
      },
    },
  },
  plugins: [],
};
export default config;
