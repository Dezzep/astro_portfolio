/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    // container: {
    //   padding: {
    //     DEFAULT: '1rem',
    //     sm: '2rem',
    //     lg: '4rem',
    //     xl: '5rem',
    //     '2xl': '6rem',
    //   },
    // },
    extend: {
      colors: {
        purpMain: {
          50: '#c770f0',
          1: '#c770f0 60%',
        },
      },
      screens: {
        '3xl': '1600px',
        '4xl': '1900px',
      },
    },
  },
  plugins: [],
};
