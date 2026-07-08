/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#2C3E3E',
        'warm-paper': '#F5F3F0',
        'warm-accent': '#B8956A',
      },
    },
  },
  plugins: [],
}
