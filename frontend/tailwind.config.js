/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "whitesmoke": "#eeeded",
      },
      "fontFamily": {
        "lexend-deca": "'Lexend Deca'",
        "dm-serif-display": "'DM Serif Display'"
      }
    },
  },
  plugins: [],
}