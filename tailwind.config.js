/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'portfolio-gold': '#FFC107', // Bright Golden Yellow
        'portfolio-dark': '#212121', // Dark Charcoal
        'portfolio-muted': '#757575', // Muted Text
        'portfolio-light': '#F9F9F9', // Light Background
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
