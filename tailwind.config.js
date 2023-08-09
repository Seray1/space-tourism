/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        belleFair:['Bellefair', 'serif'],
        barlowCondensed:['Barlow Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


