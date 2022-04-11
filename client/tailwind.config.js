module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        bg: "#F5F6F8",
        text1: "#222222",
        text2: "white",
        textSub1: "#8E8E8E",
        cardBG: "white",
        greyOverlay: "#F5F6F8",
        btnBG: "#A9E3C0",
        btnText1: "#0A1F44",
        btnText2: "#0A1F44",
      },
      borderRadius: {
        card: "15px",
        searchbar: "10px",
        btn: "10px",
      },
      // css shadows: https://getcssscan.com/css-box-shadow-examples
      boxShadow: {
        main: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
};
