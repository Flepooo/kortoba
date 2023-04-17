/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: { max: "575px" }, // Mobile (iPhone 3 - iPhone XS Max).
      sm: { min: "576px", max: "897px" }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
      md: { min: "898px", max: "1199px" }, // Tablet (matches max: iPad Pro @ 1112px).
      lg: { min: "1200px" }, // Desktop smallest.
      xl: { min: "1600px" }, // Desktop wide.
      xxl: { min: "2200px" }, // Desktop widescreen.
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@gradin/tailwindcss-scrollbar")({
      size: "5px", // width or height, default '5px'
      track: {
        background: "transparent", // default '#f1f1f1'
        // add other css attributes here,
        // will be merged to ::-webkit-scrollbar-track
      },
      thumb: {
        background: "#334155", // default '#c1c1c1'
        borderRadius: "40px",

        // add other css attributes here,
        // will be merged to ::-webkit-scrollbar-thumb
      },
      hover: {
        background: "#64748B", // default '#a8a8a8'
        borderRadius: "40px",
        // add other css attributes here,
        // will be merged to ::-webkit-scrollbar-thumb:hover
      },
    }),
  ],
};
