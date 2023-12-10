/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#17245B",
        "header-color": "#14121D",
        "card-color": "#17245B",
        "contact-form": "#14121E",
      },
      height: {
        "50vh": "50vh",
      },
    },
  },
  plugins: [],
};
