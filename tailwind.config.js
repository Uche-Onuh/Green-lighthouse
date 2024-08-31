/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00443F",
        secondary: "#00FF79",
        tertiary: "#ACD4CB",
        alternate: "#F5EDE0",
      },
      fontFamily: {
        poppins: ['"DM Sans"', "sans-serif"],
      },
      backgroundImage: {},
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
