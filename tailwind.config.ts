import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme:{
    extend: {
      colors: {
        'surface-primary': '#FFFFFF',
        'surface-secondary': '#1A1A1A',
        'background-primary': '#1E1E2F',
        'background-secondary': '#2A2A3B',
        'text-primary': '#FFFFFF',
        'text-secondary': '#A0A0B2',
        'accent': '#4F46E5',
        'border': '#3E3E50',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },  
    }
  }
};
export default config;