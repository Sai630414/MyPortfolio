/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0B0B",
        surface: "#141414",
        primary: "#FFFFFF",
        secondary: "#CFCFCF",
        accent: "#7A7A7A",
        borderDark: "#3A3A3A",
        muted: "#9E9E9E",
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        garamond: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      animation: {
        'grain': 'grain 8s steps(10) infinite',
        'subtle-float': 'subtleFloat 6s ease-in-out infinite',
      },
      keyframes: {
        subtleFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
