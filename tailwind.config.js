/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {

      },
      backgroundImage: {
        'hero-pattern': 'url(/images/banner_cart.jpg)'
      },
      screens: {
        'medium': '990px'
      }
    },
    fontFamily: {
      'body': ['Poppins', 'sans-serif']
    }
  },
  plugins: []
}