const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    "./src/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      animation: {
        'pulse-fast': 'pulse 300ms linear infinite',
      }
    },
  },
  plugins: [],
}
