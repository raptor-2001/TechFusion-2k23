/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('src/assets/images/background.png')",
        img1: "url('https://source.unsplash.com/random?event')",
      },
      animation: {
        "bubble-float": "bubble 7s linear infinite",
      },
      keyframes: {
        bubble: {
          "0%": {
            transform: "translateY(0)",
            opacity: "0",
          },
          "50%": {
            opacity: "1",
          },
          "70%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateY(-80vh)",
            opacity: "0",
          },
        },
      },
    },
    screens: {
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
