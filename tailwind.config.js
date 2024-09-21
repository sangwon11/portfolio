/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'weatherVibe-color': 'linear-gradient(45deg, #04f1dd, #057cfb)',
      }
    },
  },
  plugins: [],
}

