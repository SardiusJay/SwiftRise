import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#171717",
        moss: "#4c6f49",
        leaf: "#88b66f",
        clay: "#d66b3d",
        cloud: "#f6f7f2",
        oat: "#ede5d4",
      },
      boxShadow: {
        soft: "0 20px 50px rgba(23, 23, 23, 0.12)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
