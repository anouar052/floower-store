/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pinyon: 'Pinyon Script',
        poppins: 'Poppins',
        italiana: 'Italiana',
      },
      colors: {
        brand: { 400: '#D3AF37', 500: '#8C7521' },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
