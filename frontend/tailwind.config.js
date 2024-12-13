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
        "pink-300": "#e6b9a6",
        "pink-400": "#f3a786"
      },
      "fontFamily": {
        "lexend-deca": "'Lexend Deca'",
        "dm-serif-display": "'DM Serif Display'"
      }
    },
  },
  plugins: [],
}