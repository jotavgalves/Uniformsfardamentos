/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#0046B5',
        secondary: '#2563EB',
        accent: '#FF4A4A',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}