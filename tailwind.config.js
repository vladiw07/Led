/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // <-- tell Tailwind where to scan
  ],
  theme: {
  extend: {
    
    clipPath: {
      heroClip: 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    animation: {
      slideDown: 'slideDown 0.3s ease-out',
    },
    keyframes: {
      slideDown: {
        '0%': {
          transform: 'translateY(-60px)',
          opacity: '0',
        },
        '100%': {
          transform: 'translateY(0)',
          opacity: '1',
        },
      },
    },
  },
  
},
  plugins: [
    require("daisyui"),
    require("tailwind-clip-path"),
    require('tailwind-scrollbar'),
    require('@tailwindcss/postcss'),
    require('autoprefixer'),
    
    function({ addUtilities }) {
      const newUtilities = {
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      }
      addUtilities(newUtilities);
    }
    
  ],
}
