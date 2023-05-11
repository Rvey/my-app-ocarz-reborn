/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      ...require('tailwindcss/colors'),
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#000000',
      'white': '#ffffff',
      'primary': '#006cff',
      'primary-light': '#eaf1ff',
      'pink': '#ff0084',
      'secondary-light': '#eaecee',
      'secondary': '#414141',
      'warning': '#fff8c6',
      'yellow': '#ffcc00',
      'red':'#FF0000',
      'primary-normal': '#b8c8ea',
      
    },
  },
  plugins: [],
}
