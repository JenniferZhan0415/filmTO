import { nextui } from "@nextui-org/theme";
// import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    require("@tailwindcss/typography"),
    nextui({
      themes: {
        light: {
          layout: {},
          colors: {},
        },
        dark: {
          layout: {},
          colors: {
            primary: {
              DEFAULT: "#F7B750",
            },
          },
        },
        modern: {
          extend: "light",
          colors: {
            background: "#FEFCE8",
            foreground: "#06B7DB",
            primary: {
              50: "#F0FCFF",
              100: "#E6FAFE",
              200: "#D7F8FE",
              300: "#C3F4FD",
              400: "#A5EEFD",
              500: "#7EE7FC",
              600: "#06B7DB",
              700: "#09AACD",
              800: "#0E8AAA",
              900: "#053B48",
              DEFAULT: "#FAA0BF",
              foreground: "#ffffff",
            },
            focus: "#BEF264",
          },
        },
      },
    }),
  ],
};
