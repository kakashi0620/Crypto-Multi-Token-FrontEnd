/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        green: "#F9FF38",
        gray: "#B5B5B5",
        green: "#4BB543",
        "light-white": "#F0F0F5",
        // "dark-white": "#29414B",
        "dark-white": "#000000",
        "light-blue": "#63FFFF",
        "light-blue2": "#4AC9FF",
        "light-blue3": "#3CA7F1",
        "light-blue4": "#9DE2FF",
        // "dark-black": "#040812",
        "dark-black": "#000000",
        // "dark-blue": "#0BAFF5",
        "dark-blue": "#000000",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100vw)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      scale: {
        101: "1.01",
        102: "1.02",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
