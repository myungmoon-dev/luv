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
        Pretendard: ["Pretendard", "sans-serif"],
        HSBombaram3: ["HSBombaram3_Regular", "sans-serif"],
        Lora: ["Lora", "sans-serif"],
        Yanone: ["Yanone", "sans-serif"],
        SCoreDream: ["SCoreDream", "sans-serif"],
        Cormorant: ["Cormorant", "sans-serif"],
        NIXGONM: ["NIXGONM", "sans-serif"],
      },
      colors: {
        "pink-100": "#DFC7C7",
        "pink-200": "#892122",
        "pink-300": "#EAE3E1",
        "brown-100": "#FAE9BA",
        "brown-200": "#70635A",
        "green-100": "#D1E375",
        "blue-400": "#41C9E2",
        "blue-500": "#3490DE",
        "blue-600": "#2b66f6",
        "blue-700": "#eff5f9",
        "orange-400": "#F1B201",
        "orange-500": "#FF9843",
      },
    },
  },
  plugins: [],
};
export default config;
