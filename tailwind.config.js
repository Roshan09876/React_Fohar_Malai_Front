/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "850px",
      lg: "1024px",
      xl: "1280px",
      ["2xl"]: "2350px",
    },
    extend: {
      colors: {
        customgreenbg: '#2C7865'
      }
    },
  },
  plugins: [],
}

