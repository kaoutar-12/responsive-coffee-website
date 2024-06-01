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
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        firstcoloralt: "#2b1712",
        firstcolormedium: "#492d26",
        firstcolorlight: "#65463e",
        secondcolor: "#ddb66f",
        textcolor: "#2e2624",
        textcolorlight: "#5b4c48",
        titlecolor: "#847571",
        whitecolor: "#ffffff",
        bodycolor: "#ffefeb",
        containercolor: "#ffffff",
      },
      fontFamily: {
        pacifico: ["Pacifico"],
      },
    },
  },
  plugins: [],
};
export default config;
