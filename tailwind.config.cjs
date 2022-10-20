/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#00AD4D',
        secondary: '#C0D82C',
        tertiary: '#004D42',
      },
    },
  },
  plugins: [],
}
