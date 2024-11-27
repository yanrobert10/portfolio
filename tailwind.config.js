/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
   extend: {
    colors: {
      'y-gray-500': '#737994',
      'y-blue-500': '#8CAAEE',
      'y-blue-900': '#303446',
    },
    width: {
      120: '30rem',
      125: '31.25rem',
    },
    height: {
      125: '31.25rem',
    },
   }
  },
  plugins: [],
}
