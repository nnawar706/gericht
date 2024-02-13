/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          primary: "#0C0C0C"
        },
        gray: {
          200: "#AAAAAA",
          300: "#545454"
        },
        golden: {
          primary: "#DCCA87"
        },
        crimson: {
          primary: "#F5EFDB"
        }
      },
      fontFamily: {
        base: ["Cormorant Upright", "serif"],
        primary: ["Open Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

