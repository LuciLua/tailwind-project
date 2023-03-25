/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary-dark-opacity75': '#191919d5',
      'primary-dark': '#191919',
      'secondary-dark': '#313131',
      'terciary-dark': '#3e3e3e',

      'primary-contrast': '#8a8a8a',
      'secondary-contrast': '#e6e6e6',
      'terciary-contrast': '#ff3e48',

      'primary': '#f17728',
      'secondary': '#2d3dec',
      'terciary': '#dbd6f3',
      'quartenary': '#176a80'
    },
    extend: {},
  },
  plugins: [],
}
