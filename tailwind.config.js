/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neutralSilver: "#f5f7fa",
        neutralDGray: "#4d4d4d",
        brandPrimary: "#4caf4f",
        neutralGray: "#717171",
        gray900: "#18191f",
      },
    },
  },
  plugins: [],
};
