/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        graphite: "#111111",
        charcoal: "#191919",
        gold: "#d6aa4c",
        "gold-soft": "#f1d38a",
        ivory: "#f8f3e7",
        mist: "#a7a29a",
      },
      boxShadow: {
        gold: "0 24px 70px rgba(214, 170, 76, 0.16)",
        panel: "0 20px 60px rgba(0, 0, 0, 0.42)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
