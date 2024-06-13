/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'game-pattern': "url('/background-mnpg.png')",
        'game-image1' : "url('/gameimage1.png')",
        'game-image2' : "url('/gameimage2.png')",
        'game-image3' : "url('/gameimage3.png')",
        'game-image4' : "url('/gameimage4.png')",
      }
    },
  },
  plugins: [],
}

