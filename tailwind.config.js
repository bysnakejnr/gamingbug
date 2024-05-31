/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'game-pattern': "url('../public/background-mnpg.png')",
        'game-image1' : "url('../public/gameimage1.png')",
        'game-image2' : "url('../public/gameimage2.png')",
        'game-image3' : "url('../public/gameimage3.png')",
        'game-image4' : "url('../public/gameimage4.png')",
      }
    },
  },
  plugins: [],
}

