module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Poppins",
    },
    container: {
      padding: {
        DEFAULT: "30px",
        lg: "0",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#222222",
        secondary: "#F5E6E0",
      },
      backgroundImage: {
        // hero: "url('../src/assets/bg_hero.svg')",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilites = {
        ".scrollbar-thin": {
          scrollbarWidth: "thin",
          scrollbarColor: "rgb(160 160 160) white",
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "white",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgb(160 160 160)",
            borderRadius: "20px",
            border: "1px solid white",
          },
        },
      };

      addUtilities(newUtilites, ["responsive", "hover"]);
    },
  ],
  darkMode:"class",
};
