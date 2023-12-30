/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#5454D4",
      },
      fontFamily: {
        nunito: "Nunito Sans",
      },
    },
  },
  plugins: [],
};
