/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primarySoftOrange: "hsl(35, 77%, 62%)",
        primarySoftRed: "hsl(5, 85%, 63%)",
        neutralOffWhite: "hsl(36, 100%, 99%)",
        neutralGrayishBlue: "hsl(233, 8%, 79%)",
        neutralDarkGrayishBlue: "hsl(236, 13%, 42%)",
        neutralVeryDarkBlue: "hsl(240, 100%, 5%)",
      },
      fontSize: {
        "15": "15px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontWeight: {
        400: 400,
        700: 700,
        800: 800,
      },
    },
  },
  plugins: [],
} 