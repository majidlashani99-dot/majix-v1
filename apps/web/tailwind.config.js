/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#FFE57F',
          DEFAULT: '#FFC107',
          dark: '#FF8F00',
        },
        dark: {
          bg: '#0b0e14',
          card: '#161b22',
          surface: '#1e2430',
        }
      }
    },
  },
  plugins: [],
}
