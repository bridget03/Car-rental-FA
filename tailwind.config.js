/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      orange: "#ff9d29",
      red: "#fa1d1d",
    },
    fontFamily: {
      Atkinson: ["Atkinson Hyperlegible", "sans-serif"],
      OpenSans: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
};
