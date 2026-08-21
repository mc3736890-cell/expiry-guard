/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F5F7F6',
        ink: '#16211F',
        primary: {
          DEFAULT: '#2F6F62',
          dark: '#204C43',
          light: '#DCEAE6',
        },
        amber: {
          DEFAULT: '#E08A3C',
          light: '#FBEADA',
        },
        danger: {
          DEFAULT: '#C1443A',
          light: '#F6DEDC',
        },
        line: '#DDE3E0',
        muted: '#5C6B68',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        card: '14px',
      },
    },
  },
  plugins: [],
}