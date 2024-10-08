/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'weatherVibe-color': 'linear-gradient(45deg, #04f1dd, #057cfb)',
        'weatherVibe-img': 'url("./assets/images/weatherVibe.png")',
        'weatherVibe-img2': 'url("./assets/images/weatherVibe2.png")',
        'weatherVibe-img3': 'url("./assets/images/weatherVibe3.png")',
        'flugel-img': 'url("./assets/images/flugel.png")',
        'paradox-img': 'url("./assets/images/paradox.png")',
        'buddy-img': 'url(./assets/images/buddy.png)',
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}

