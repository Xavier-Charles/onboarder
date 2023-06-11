/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // https://coolors.co/ff66b3-177e89-084c61-ffc857-323031-14213d-f9f5ff
        pink: "#ff66b3", // rgb(255, 102, 179)
        teal: "#177e89", // rgb(23, 126, 137)
        midnightGreen: "#084C61", // rgb(8, 76, 97)
        sunglow: "#ffc857", // rgb(255, 200, 87)
        jetbrown: "#323031", // rgb(50, 48, 49)
        oxford: "#14213d", // rgb(20, 33, 61)
        slate: "#c8c8d4", // rgb(200, 200, 212)
        magwhite: "#f9f5ff", // rgb(249, 245, 255)
        alice: "#F4FAFF", // rgb(244, 250, 255)
      },
      fontFamily: {
        nunito: "'Nunito', sans-serif",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
