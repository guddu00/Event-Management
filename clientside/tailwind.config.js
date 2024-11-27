/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#ff4362",
        "secondary" : "#252d41",
      }
    },
  },
  plugins: [],
}