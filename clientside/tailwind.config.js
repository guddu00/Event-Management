/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#ff4362",
        "btn-color": "#3d52a0",
        "secondary": "#7091e659",
        "tertiary": "rgb(230 235 244)",
      },
      scrollBehavior: ['smooth'],
      
      screens: {
        'sm': '640px', // Small devices (mobile)
        'md': '768px', // Medium devices (tablets)
        'lg': '1024px', // Large devices (laptops)
        'xl': '1280px', // Extra large devices (desktops)
        '2xl': '1536px', // 2x extra large devices (larger screens)

        // Custom breakpoints:
        'xs': '480px', // Example: Extra small screens (older devices)
        'xxl': '1920px', // Example: Larger screens (HD displays)
      }
    },
  },
  plugins: [],
}
