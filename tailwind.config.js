/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        pc: "1920px",
        lg: "1000px",
        sm: "725px",
        upad: "625px",
        phone: "450px",
        phoneSm: "501px",
      },
    },
  },
  plugins: [],
};
