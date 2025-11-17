const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Momo Trust Display", "sans-serif"],
    },
    fontFamily:{
      mono: ["Fira Code", "monospace"],
    },
    extend: {},
  },
  plugins: [],
});
