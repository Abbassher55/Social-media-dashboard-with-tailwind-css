/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./dist/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        "custom-blue": "#388FE7",
        "custom-green": "#40DB82",
        "custom-dark-green": "#1EB589",
        "custom-gray": "#848BAB",
        "custom-slate": "#63687D",
        "custom-purple": "#8C98C6",
        "custom-dark": "#1D1F29",
        "card-dark-bg": "#252B42",
        "card-light-bg": "#F1F3FA",
        // "youtube-border": "#C4032B",
        // "twitter-border": "#1DA1F2",
        // "facebook-border": "#178FF5",
        // "instagram-border-1": "#DF4896",
        // "instagram-border-2": "#EE877E",
        // "instagram-border-3": "#FDC366",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
