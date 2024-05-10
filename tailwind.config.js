/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          red: '#E73D3D',
          darkRed: '#5E1717'
        },
        secondary:{
          black: '#0D0D0D',
          grey: {
            dark: '4D4D4D',
          }
        }
      }
    },
  },
  plugins: [],
}

