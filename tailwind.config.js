// tailwind.config.js
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.a-hover::before, .a-hover::after': {
          opacity: '0',
          transition: 'opacity 0.3s',
        },
        '.a-hover::before': {
          content: '""',
          position: 'absolute',
          top: '-50px',
          right: '17px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: 'transparent',
          boxShadow: '35px 35px 0 10px white',
        },
        '.a-hover::after': {
          content: '""',
          position: 'absolute',
          bottom: '-50px',
          right: '17px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: 'transparent',
          boxShadow: '35px -35px 0 10px white',
        },
        '.a-hover.active::before, .a-hover.active::after': {
          opacity: '1',
        },
      }, ['before', 'after', 'hover'])
    })
  ],
}
