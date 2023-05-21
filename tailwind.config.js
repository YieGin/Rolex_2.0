/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: "1000px",
        sm: "725px",
        upad: "625px",
        phone: "450px",
      },
    },
  },
  plugins: [],
};
