/** @type {import('tailwindcss').Config} */
const tailwindMdBase = require('@geoffcodesthings/tailwind-md-base');
const defaultTheme = require('tailwindcss/resolveConfig')(
  require('tailwindcss/defaultConfig'),
).theme;

module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      markdownBase: {
        wrapperClass: 'markdown',
        img: {
          width: '100%',
          borderRadius: '5px'
        },
        li: {
          marginBottom: '6px',
          listStylePosition: 'outside'
        },
        strong: {
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          fontWeight: 400,
          textAlign: 'center',
          img: {
            width: '30%',
            height: 'auto',
            borderRadius: '5px'
          }
        }
      },
      colors: {
        'dark': '#191825',
        'bright': '#FCE9F1',
        'bright-second': '#F1D4E5',
        'bright-third': '#73BBC9'
      },
      fontFamily: {
        'bungee-shade': ['Bungee Shade'],
        'coiny': ['Coiny'],
        'inria-serif': ['Inria Serif']
      }
    },
  },
  plugins: [tailwindMdBase()],
}

