/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      kaushan: 'Kaushan Script',
      orienta: 'Orienta',
      overpass: 'Overpass'
    },
    extend: {
      colors: {
        momiji: '#F79B80'
      }
    }
  },
  plugins: []
}
