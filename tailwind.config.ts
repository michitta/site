import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['"Manrope"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        black: "#0F0F0F",
        white: "#F0F0F0",
        background: {
          "0-t": "#0A0A0A99",
          "1-t": "#1A1A1A99",
          "2-t": "#2A2A2A99",
          "3-t": "#39393999",
          "4-t": "#47474799",
          "5-t": "#57575799",
          "6-t": "#66666699",
          "0-t-w": "#F0EFEF99",
          "1-t-w": "#E0E0E099",
          "2-t-w": "#D1D1D199",
          "3-t-w": "#C2C2C299",
          "4-t-w": "#B2B2B299",
          "5-t-w": "#A3A3A399",
          "6-t-w": "#94949499",
        },
        label: {
          2: "#ebebf599",
          3: "#ebebf54d",
          4: "#ebebf52e",
          5: "#ebebf51a",
          "1-w": "#303030",
          "2-w": "#303030B3",
          "3-w": "#30303066",
          "4-w": "#30303047",
          "5-w": "#30303033",
        },
        indigo: {
          default: "#B8B8E5",
          hover: "#CCCCFF",
          true: "#7B79FF",
        },
        red: {
          default: "#E5B8B8",
          hover: "#FFCCCC",
          true: "#EE5E52",
        },
        green: {
          default: "#CFE5DE",
          hover: "#E6FFF7",
          true: "#5CB176",
        },
        purple: {
          default: "#D7B8E5",
        },
      },
      borderRadius: {
        default: "24px",
        small: "12px",
      },
    },
  },
  plugins: [],
};
export default config;
