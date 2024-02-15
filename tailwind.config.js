/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {

      colors: {
        "darkGrey": "#535050",
      },
      backgroundImage: {
        'hero-pattern': 'url(/images/banner.jpg)'
      },
      screens: {
        'medium': '990px'
      }
    },
    fontFamily: {
      'body': ['Poppins', 'sans-serif']
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ]
}