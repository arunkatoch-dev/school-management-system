/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primaryFont: ["Blinker", "sans-serif"],
        secondaryFont: ["Tilt Warp", "cursive"],
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
