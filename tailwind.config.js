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
        'gray50': '#FFFFFF',
        'gray100': '#F2F2F2',
        'gray200': '#828282',
        'gray500': '#4F4F4F',
        'gray950': '#000000',
        
        'purple50': '#E9E9FF',
        'purple500': '#9B51E0',
        'purple950': '#070417',
        'orange500': '#FFA656',
        'pink500': '#FD5B71',
        'green500': '#07E092',
      }
    },
  },
  plugins: [],
}

