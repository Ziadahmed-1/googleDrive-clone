/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  plugins: [require("tailwind-scrollbar")],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        mainBg: "#F8FAFD",
        mainFont: "#444746",
      },
      boxShadow: {
        "custom-light": "0 4px 6px rgba(0, 0, 0, 0.1)",
        "custom-medium": "1px 4px 10px 1px rgba(0, 0, 0, 0.2)",
        "custom-dark": "0 10px 20px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
