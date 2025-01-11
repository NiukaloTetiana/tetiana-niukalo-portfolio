/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "sm-max": { max: "374.99px" },
      md: "768px",
      lg: "1280px",
    },
    extend: {
      colors: {
        accentColor: "var(--accent-color)",
        whiteColor: "var(--white-color)",
        lightColor: "var(--light-color)",
        hoverColor: "var(--hover-color)",
        textColor: "var(--text-color)",
        secondTextColor: "var(--second-text-color)",
        borderColor: "var(--border-color)",
        bgFirstColor: "var(--bg-first-color)",
        bgSecondColor: "var(--bg-second-color)",
        bgBodyColor: "var(--bg-body-color)",
      },
      boxShadow: {
        default: "0 4px 6px var(--shadow-color)",
        sm: "0 4px 6px var(--shadow-color-light)",
        md: "0 0 4px var(--shadow-color)",
        lg: "0 0 32px var(--shadow-color)",
      },
      fontFamily: {
        fontPrimary: ["Mona Sans", "sans-serif"],
        fontSecondary: ["Druk Cyr", "sans-serif"],
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    ({ addComponents }) => {
      addComponents({
        ".container": {
          minWidth: "320px",
          maxWidth: "375px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "20px",
          paddingRight: "20px",
          "@screen md": {
            paddingLeft: "36px",
            paddingRight: "36px",
            maxWidth: "768px",
          },
          "@screen lg": {
            paddingLeft: "100px",
            paddingRight: "100px",
            maxWidth: "1280px",
          },
        },
        ".link": {
          position: "relative",
          "&::after": {
            content: "''",
            position: "absolute",
            left: "0",
            bottom: "0",
            width: "100%",
            height: "2px",
            backgroundColor: "#72b63b",
            transition: "transform 0.7s",
            transformOrigin: "right",
            transform: "scaleX(0)",
          },
          "&:hover::after": {
            transform: "scaleX(1)",
            transformOrigin: "left",
          },
        },
        ".custom-transition": {
          transition: "all 0.3s ease-in",
        },
      });
    },
  ],
};
