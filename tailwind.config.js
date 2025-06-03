/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./internals/templates/**/*.{templ,html}",
    "./cmd/**/*.go",
    "./internals/**/*.go",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
