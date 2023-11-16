const { Nunito_Sans, Nunito } = require('next/font/google');
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'san': ['Nutino', 'sans-serif']
    },
    colors: {
      ...colors,
      primary: colors.purple,
      secondary: colors.pink,
    }
  },
  plugins: [],
}
