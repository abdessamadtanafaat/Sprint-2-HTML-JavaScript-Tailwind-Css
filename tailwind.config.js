/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./*.html", "./js/*.js"], // Analyse les fichiers HTML et JS pour détecter les classes Tailwind
  theme: {
    extend: {},
  },
  plugins: [],
}

