/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'q-indigo': '#12063e',
        'q-lila': '#e0b3ff',
        'q-violeta': '#1c124d',
        'q-cian': '#75e6da',
        'q-magenta': '#d46de7',
        'q-dorado': '#d4af37',
        'q-blanco-calido': '#f8f7f2',
        'q-gris': '#a1a1aa',
      },
      fontFamily: {
        'sans-clean': ['var(--font-inter)', 'sans-serif'],
        'serif-elegant': ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
};
