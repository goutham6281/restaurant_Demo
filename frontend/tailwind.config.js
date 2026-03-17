/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B0000', // Dark Red
        secondary: '#FFA500', // Orange
        accent: '#FFD700', // Gold
        light: '#FFFFFF', // White
        dark: '#1a1a1a', // Dark Gray for text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
