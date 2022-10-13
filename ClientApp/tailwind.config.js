/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "light-blue": "#E5F2FF",
        "dark-blue": "#1E3A8A",
      }
    },
  },
  plugins: [],
};
