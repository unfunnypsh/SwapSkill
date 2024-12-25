/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the paths to match your project structure
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          500: "#38b2ac",
          600: "#319795",
        },
        blue: {
          600: "#3182ce",
        },
        gray: {
          300: "#e2e8f0",
        },
        primary: "#1E293B",
        secondary: "#334155",
        accent: "#3B82F6",
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
    },
  },
};
