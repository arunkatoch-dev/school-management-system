/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primaryFont: ["sans-serif"],
        secondaryFont: ["sans-serif"],
      },
      colors: {
        primary: "#FFB6B9",
        primaryHover: "#FFC6B9",
        secondary: "#61C0BF",
        secondary2: "#BBDED6",
        primaryText: "#FFFFFF",
      },
    },
  },

  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
