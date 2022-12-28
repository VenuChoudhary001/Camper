/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/*.{jsx,ts,js,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#434343",
        pink: "rgba(125, 78, 36, 0.09)",
        green: {
          DEFAULT: "#005B1F",
          100: "rgba(0, 91, 31, 0.06)",
        },
        light_gray: { DEFAULT: "#46533B", 100: "#828282" },
        black: "#212121",
        dark_gray: "#1E1E1E",
        brown: "#7D4E24",
        lightGreen: "#54B800",
      },
      fontFamily: {
        primary: "Poppins",
        heading: ["Bubblegum Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
