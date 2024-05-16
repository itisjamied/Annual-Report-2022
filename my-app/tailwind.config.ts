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
        "afh-pink": "#E64599",
        "afh-purple": "#7024D6",
        customPink: "#F92C9B",
        customYellow: "#FFDA05",
        customPurple: "#62359E",
        customPinkDark: "#D41D7F",
        customPurpleDark: "#4E2586",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        customShadow: "0px 4px 0px 4px #D41D7F",
        customHoverShadow: "0 2px #D41D7F",
      },
    },
  },
  plugins: [],
};
export default config;
