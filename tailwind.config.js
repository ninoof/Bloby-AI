/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'ryokan-bg': '#f7efe6',
        'ryokan-surface': '#fcf5eb',
        'ryokan-sidebar': '#f2e3d2',
        'ryokan-accent': '#c97b45',
        'ryokan-text': '#4a3b2d',
      }
    },
  },
  plugins: [],
}