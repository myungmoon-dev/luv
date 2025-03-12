import { Config } from "tailwindcss";

import { colors } from "./theme/colors";
import { fontFamily } from "./theme/fonts";

export const tailwindConfig: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors,
      fontFamily,
    },
    screens: {
      sm: "540px",
      md: "820px",
      lg: "1280px",
    },
  },
};
