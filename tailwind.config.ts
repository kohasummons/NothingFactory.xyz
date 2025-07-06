import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        secondary: "hsl(var(--secondary))",
        "muted-foreground": "hsl(var(--muted-foreground))",
      },
      fontFamily: {
        'ibm-mono': ["IBM Plex Mono", "monospace"]
      }
    },
  },
  plugins: [],
};
export default config;
