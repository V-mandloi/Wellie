/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F8F8F8", // Background color
        secondary: "#F1E1E1", // Header color
        hometext: "#3E342C", // Home Text
        white: "#FFFFFF",
        black: "#000000",
        placeholder: "#6E7174",
        buttonBg: "#EDD4B9",
      },
      fontFamily: {
        custom: ["'Poppins'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
