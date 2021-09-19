module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "red-hat": ['"Red Hat Display"', "sans-serif"],
      },
      colors: {
        primary: {
          pale: "hsl(225, 100%, 94%)",
          bright: "hsl(245, 75%, 52%)",
        },
        neutral: {
          pale: "hsl(225, 100%, 98%)",
          desaurated: "hsl(224, 23%, 55%)",
          dark: "hsl(223, 47%, 23%)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
