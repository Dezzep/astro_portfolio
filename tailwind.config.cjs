/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        purpMain: {
          50: '#c770f0',
          1: '#c770f0 60%',
        },
      },
    },
  },
  plugins: [],
};
