module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {

      colors : {
        yellow : {
          '600' : '#c0df34',
        }
      },

      padding : {
          '13' : '5rem',
          '14' : '4.5rem',
          '18' : '8rem',
      }

      

    },
  },
  plugins: [],
}
