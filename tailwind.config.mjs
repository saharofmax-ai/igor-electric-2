/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B5ED7',
          dark: '#083B8C',
          light: '#E7F0FF',
        },
        deep: '#0A2540',
        accent: {
          DEFAULT: '#FFB703',
          dark: '#D98E00',
        },
        surface: {
          DEFAULT: '#F5F7FA',
          2: '#EEF2F6',
        },
        border: '#DCE3EA',
        muted: '#475569',
        success: '#16A34A',
        error: '#DC2626',
      },
    },
  },
  plugins: [],
}