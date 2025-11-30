import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto Condensed', 'sans-serif'],
      },
      colors: {
        teal: {
          50: '#e6f2f2',
          100: '#cce6e6',
          200: '#99cccc',
          300: '#66b3b3',
          400: '#339999',
          500: '#004d4d',
          600: '#004d4d',
          700: '#003d3d',
          800: '#002e2e',
          900: '#001f1f',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
