const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1140px',
        xl: '1440px',
        '2xl': '1800px'
      }
    },
    backgroundImage:{
      wrapperBg: "url('assets/images/wrapperBackground.svg')",
    },
    extend: {
      colors: {
        royalBlue:'#4169e1',
        darkBlue: '#0d1117',
        dark: '#0d1117'
      }
    },
  },
  plugins: [],
})