/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f3f9',
          100: '#e0e7f4',
          200: '#c2d0e9',
          300: '#a3b9de',
          400: '#85a2d3',
          500: '#668bc8',
          600: '#4874bd',
          700: '#3a5d98',
          800: '#2c4672',
          900: '#1e2f4c',
        },
      },
    },
  },
  plugins: [],
};