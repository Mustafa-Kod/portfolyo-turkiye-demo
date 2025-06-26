/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0ff1ce",      // Futuristic cyan
        secondary: "#1a1a2e",    // Deep dark blue
        accent: "#232946",       // Slightly lighter dark
        neon: "#f900bf",         // Neon pink
        grayish: "#b8c1ec",      // Soft gray-blue
      },
      fontFamily: {
        futuristic: ['"Orbitron"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #232946 0%, #0ff1ce 100%)',
      },
    },
  },
  plugins: [],
}