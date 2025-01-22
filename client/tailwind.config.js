/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-bar': '#EDF1F7',
        'background' : '#EDF1F7',
        'txt': "#012970",
        'hover' : "#4154F1",
      },
    },
  },
  plugins: [],
};
