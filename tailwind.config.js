const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
    colors:{
    uniq:'#164F46',
    primaryy: '#FCD9B0'
    }
  },
  plugins: [],
});

//#f58497


