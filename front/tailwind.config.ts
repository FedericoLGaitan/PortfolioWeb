import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "#537BC5",
        darkBg: "#131425",
      },
      backgroundImage: {
        "gradient-cover": 
          "linear-gradient(40deg, #031353, #031332, #03131f, #031332, #031353)"
      }
    },
  },
  plugins: [],
} satisfies Config;
