/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
// for dark mode daisyui
module.exports = {
  //...
  daisyui: {
    themes: ["light", "dark"],
  },
};
