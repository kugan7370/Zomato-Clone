/** @type {import('tailwindcss').Config} */


module.exports = {

  content: ["./App.{js,jsx,ts,tsx}",
    "./Screens/**/*.{js,jsx,ts,tsx}",
    "./Components/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: {
          100: "#E42021",
        },
      },
      fontFamily: {
        poppins: ["Poppins_500Medium"],
        poppinsBold: ["Poppins_700Bold"],
        poppinsSemiBold: ["Poppins_600SemiBold"],
      }


    }
  },
  plugins: [],
}
