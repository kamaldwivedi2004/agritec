/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a5c2a',
        'primary-dark': '#144a22',
        'primary-light': '#e8f5e9',
        accent: '#e8c535',
        'accent-dark': '#d4b22e',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        cursive: ['Dancing Script', 'cursive'],
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'slideUp': 'slideUp 0.7s ease forwards',
        'fadeIn': 'fadeIn 0.5s ease forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
