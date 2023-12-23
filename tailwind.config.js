/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkColor: "#222222",
        background: "#FEFCFB;",
        background2: "#F7F8FC",
        supportingRed: "#EA001B",
        paragraph: "#666666",
        colorB1: "#444444",
      },
    },
  },
  plugins: [],
};
