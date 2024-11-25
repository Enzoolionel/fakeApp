/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        cardMountBackground:
          "linear-gradient(90deg, hsla(0, 80%, 94%, 1) 0%, hsla(0, 0%, 85%, 1) 100%)",

        cardBackground:
          "linear-gradient(45deg, hsla(0, 80%, 99%, 1) 0%, hsla(0, 0%, 95%, 1) 100%)",
      },
    },
  },
  plugins: [],
};
