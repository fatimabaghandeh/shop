const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    colors:{
    primary:"#701C1C",
    primaryy:'#D99058'
    }
  },
  plugins: [],
});

//#f58497