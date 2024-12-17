/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#9538E2",
        "secondary-color": "#09080F99",
      },
    },
  },
  plugins: [require("daisyui")],
};

