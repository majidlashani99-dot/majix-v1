/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          darkest: '#080705',
          card: '#12100C',
          cardElevated: '#1B1712',
          cardBorder: '#2E271D',
        },
        gold: {
          light: '#F8E8A2',
          DEFAULT: '#D4AF37',
          dark: '#997A15',
          glow: 'rgba(212, 175, 55, 0.25)',
        }
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FDE68A 0%, #D4AF37 50%, #997A15 100%)',
        'gold-glow': 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, rgba(8,7,5,0) 70%)',
        'card-gradient': 'linear-gradient(180deg, rgba(27,23,18,0.9) 0%, rgba(18,16,12,0.95) 100%)',
      }
    },
  },
  plugins: [],
}