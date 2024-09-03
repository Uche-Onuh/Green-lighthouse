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
        alternate: "#FF7900",
        hover: "#F5EDE0",
      },
      fontFamily: {
        sans: ['"DM Sans"', "sans-serif"],
      },
      backgroundImage: {
        herobg: "url('/src/assets/herobg.jpg')",
        coursebg: "url('/src/assets/bg1.png')",
        faqbg: "url('/src/assets/bg2.png')",
        ctobg: "url('/src/assets/bg3.png')",
      },
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
