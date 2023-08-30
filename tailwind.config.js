/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'background-color': '#0D0D0D',
        'white-color': '#FFFFFF',
        'gray-color': '#D9D9D9'
      }
    }
  },
  plugins: []
};
