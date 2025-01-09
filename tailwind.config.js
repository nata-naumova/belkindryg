/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      colors: {
        darkBg: "#272121",
        accent: "#fc8507",
        title: "#F6E9E9",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
