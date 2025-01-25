import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        paraizo: {
          cyan: "#739DAB",
          whiteLines: "#F9F9FB", 
          background: "#F3F6F9",
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
