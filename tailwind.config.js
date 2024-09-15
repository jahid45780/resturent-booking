/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8ABA51",
        secondary: "#758888",

        base:"#E9EBF8"
      }
    },
    container: {
      center: true,
      screens: {
        "2xl": "1500px"
      }
    },
    fontFamily:{
      custom:["Sofadi One", "system-ui"],
      fontCustom:["Jacques Francois Shadow", "serif"],
      fontTitle:["Courgette", "cursive"]
    }
  },
  plugins: [],
}

 