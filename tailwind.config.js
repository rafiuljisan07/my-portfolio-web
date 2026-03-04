/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#8b5cf6",
        "background-light": "#f3f4f6",
        "background-dark": "#050505",
        "card-dark": "#0a0a0a",
        "card-border": "#1f1f1f",
        "text-gray": "#9ca3af"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.75rem",
        xl: "1rem",
      },
    },
  },
  plugins: [],
}