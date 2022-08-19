{
  import('tailwindcss').Config
}
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {

    screens: {

      sm: '375px',
      md: '576px',
      lg: '768px',
      xl: '992px',
      '2xl': '1200px',

    },

    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#fff',
      break: '#000',
      red: {
        DEFAULT: '#EC5757',
        light: '#FF9797',
        

      },

      gray: {
        2: '#909C92',
        800: '#8bd0f9',
        700: '#141625',
        600: '#0C0E16',
        500: '#252945',
        400: '#E15C19',
        300: '#52C0FF',
        200: '#dedede',
        100: '#F8F8FB',
      },
    },
    extend: {
      backgroundImage: {
        'bg-img': "url('..//imgs/1.png')",
        'bg-img2': "url('..//imgs/flat.png')",
        'bg-img3': "url('..//imgs/33.png')",
      },


    }
  },
  plugins: [],
}