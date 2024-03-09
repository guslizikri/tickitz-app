/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center: true,
    },
    extend: {
      colors: {
        primary: "#1D4ED8",
        secondary: "#0F172A",
      },
      backgroundImage: {
        'login-bg': "url('/src/assets/img/bg-sign.png')",
        'hero-result': "url('/src/assets/img/bg-result.png')",
        'profile': "url('/src/assets/img/profile.png')",
        'loyalty': "url('/src/assets/img/loyalpoint.png')",
        'home-hero1': "url('/src/assets/img/hero1.png')",
        'home-hero2': "url('/src/assets/img/hero2.png')",
        'home-hero3': "url('/src/assets/img/hero3.png')",
        'home-hero4': "url('/src/assets/img/hero4.png')",
      },
      boxShadow: {
        'shadow-blur': "inset 0 0 0 2000px rgba(27, 27, 27, 0.5)",
      }
    },
  },
  plugins: [],
}

