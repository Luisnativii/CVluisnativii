/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#080A0F',
        panel: '#10151E',
        steel: '#9FB2C8',
        frost: '#DDE9F7',
        ember: '#D8A057',
        ocean: '#80B9D5',
      },
      boxShadow: {
        premium: '0 24px 80px rgba(0, 0, 0, 0.38)',
      },
    },
  },
  plugins: [],
};
