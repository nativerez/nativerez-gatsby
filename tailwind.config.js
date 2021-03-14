const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    minHeight: {
      'full': '850px',
    },
    extend: {
      fontFamily: {
        display: ['Poppins', ...defaultTheme.fontFamily.sans],
        serif: ['DroidSerif-Regular', ...defaultTheme.fontFamily.serif]
       },
    },
    container: {
      center: true,
      padding: '2rem',
    },
  },
  plugins: [],
};
