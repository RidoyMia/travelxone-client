/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding: '2rem',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  
  daisyui: {
    themes: [ "cupcake"],
  },
}

