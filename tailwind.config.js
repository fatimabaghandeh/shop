const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  darkMode: "class ",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
    colors:{
    uniq:'#164F46',
    gray: '#f3f4f6'
    }
  },
  plugins: [],
});

//#f58497


