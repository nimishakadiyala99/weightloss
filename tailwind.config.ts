import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blush: "#F9E3EA",
        sage: "#CFE3D2",
        lavender: "#E6DDFB",
        cream: "#FFF8EF",
        beige: "#F5ECDD"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(40, 34, 29, 0.08)"
      }
    },
  },
  plugins: [],
} satisfies Config;
