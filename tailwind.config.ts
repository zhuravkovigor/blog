import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "3rem",
      screens: {
        lg: "800px",
      },
    },
    extend: {
      colors: {
        body: "#1E1E1E",
        primary: "#5C87F6",
      },
    },
  },
  plugins: [],
} satisfies Config;
