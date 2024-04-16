/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        1: "#23b5d3", //pacific cyan
        2: "#9448bc", //purpureus
        3: "#75abbc", //moonstone
        4: "#ecfeaa", //mindaro
        5: "#071013" //richblack
      },
      boxShadow: {
        '3xl': '0 5px 40px 10px rgba(0, 0, 0, 0.3)'
      },
    }
  },
  plugins: [],
}

