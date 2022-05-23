const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    colors: {
      primary: "#e52727",
      secondary: "#ffb66d",
      accent: "#3A4256",
      hoverPrimary: "#c01111",
      white: "#ffffff",
      purpleColor: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahitiColor: "#3ab7bf",
      silver: "#ecebff",

      bermuda: "#78dcca",
    },
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
};
