/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './App.tsx', './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        rubikRegular: ['Rubik_400Regular', 'Rubik-Regular', 'sans-serif'],
        rubikMedium: ['Rubik-Medium', 'Rubik_400Medium', 'sans-serif']
      },
      fontSize: {
        xxs: '14px',
        xs: '18px',
        sm: '20px',
        md: '22px',
        lg: '24px',
        xl: '32px',
      },
      colors: {
        gray: {
          50: '#FFFFFF',
          100: '#F2F2F2',
          200: '#828282',
          500: '#4F4F4F',
          950: '#000000',
        },
        purple: {
          50: '#E9E9FF',
          500: '#9B51E0',
          950: '#070417',
        },
        orange: {
          500: '#FFA656'
        },
        pink: {
          500: '#FD5B71',
        },
        green: {
          500: '#07E092',
        }
      }
    },
  },
  plugins: [],
}

