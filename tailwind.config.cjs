/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Work: ['"Work Sans"', ...defaultTheme.fontFamily.sans],
        logo: ['"Press Start 2P"'],
      },
    },
  },
  plugins: [],
};
