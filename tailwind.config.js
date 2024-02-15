/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {

      colors: {
        "black24": "#242424",
        "darkGrey": "#535050",
        "mediumGrey": "#262626",
        "thinGrey": "#D9D9D9",
        "lightGrey": "#ABABAB",
        "smoothGrey": "#EAEAEA",
        "whiteSlay": "#F4F4F4",
        "yellowLinear": "#BB7E2F",
        "footer": "#F8F8F8",
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