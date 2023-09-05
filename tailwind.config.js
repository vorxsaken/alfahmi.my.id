/** @type {import('tailwindcss').Config} */
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
  plugins: [],
}

