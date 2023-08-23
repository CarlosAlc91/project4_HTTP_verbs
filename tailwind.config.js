/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'bg-input': '#F9FAFC',
      'brdr-input': '#BDBDBD',
      'bg-modal': '#020617',
      'bg-form': '#FFFFFF',
      'button': '#555A88',
      'delete': '#D93F3F',
      'edit': '#F6F6F6',
      'card': '#E5E5E5',
      'main': '#FFFFFF'
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif']
    }
  },
  plugins: [],
}