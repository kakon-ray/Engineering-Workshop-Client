const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    colors: {
      primary: "#e52727",
      secondary: "#19D3AE",
      accent: "#3A4256",
      neutral: "#03B8D7",
      "base-100": "#ffffff",
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
    },
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
};
