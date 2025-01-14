/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans : ["poppins", "sans-serif"],
        fantasy: ['FantasyFont', 'cursive'],
        cambria: ['Cambria', 'serif'], 
        Playwrite: ['oswald', 'serif'],
      },
      keyframes: {
        moveXY: {
          '0%': { transform: 'translate(0, 0)', opacity:'0' },
          '50%': { transform: 'translate(0, 250px)', opacity:'100' },
          '100%': { transform: 'translate(0, 500px)', opacity:'0' },
        },
        growWidthMax: {
          '0%': { width: '0%' },
          '100%': { width: '83%' },
        },
        growWidthMaxed: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        growWidthMiddle: {
          '0%': { width: '0%' },
          '100%': { width: '66.66%' },
        },
        growWidthLow: {
          '0%': { width: '0%' },
          '100%': { width: '25%' },
        },
        growWidthL: {
          '0%': { width: '0%' },
          '100%': { width: '33%' },
        },
        growWidthM: {
          '0%': { width: '0%' },
          '100%': { width: '60%' },
        },
        growWidthlowest: {
          '0%': { width: '0%' },
          '100%': { width: '16.66%' },
        },
        loader: {
          '0%': { width: '0%' },
          '100%': { width: '100%'},
        },

      },
      animation: {
        moveXY: 'moveXY 5s infinite alternate',
        growWidthMax: 'growWidthMax 2s ease-in-out alternate',
        growWidthMaxed: 'growWidthMaxed 2s ease-in-out alternate',
        growWidthMiddle: 'growWidthMiddle 2s ease-in-out alternate',
        growWidthLow: 'growWidthLow 2s ease-in-out alternate',
        growWidthL: 'growWidthL 2s ease-in-out alternate',
        growWidthM: 'growWidthM 2s ease-in-out alternate',
        growWidthlowest: 'growWidthlowest 2s ease-in-out alternate',
        loader: 'loader 2s ease-in-out ',
      },
      screens: {
        'sm': '320px ',
        'lg': '1024px ',
        '2xl': '2560px',
      },
      colors: {
        'custom-blue': '#111D31',
        'custom-light-dark' : '#192937',
        'custom-gray-dark' : '#32414d',
        'custom-cyan' : '#36B5EF'
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
    },
  },
  plugins: [],
}

