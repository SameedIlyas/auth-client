/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Chronicle Display', 'serif'],
        'secondary': ['Gilroy', 'sans-serif'],
      },
      fontSize: {
        '10xl': '8rem',
      },
      backgroundColor: {
        'dark-blue': '#0B0D17',
      },
    },
  },
  plugins: [],
};
