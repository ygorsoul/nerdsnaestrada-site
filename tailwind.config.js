/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50:  '#fdfcf9',
          100: '#faf8f3',
          200: '#f5f0e6',
          300: '#ede5d4',
          400: '#e0d4bc',
          500: '#cdbfa0',
        },
        earth: {
          700: '#5c4a2a',
          800: '#3d2f14',
          900: '#2a1f0a',
        },
        sage: {
          400: '#7a9e7e',
          500: '#5d8a62',
          600: '#4a7050',
          700: '#375438',
        },
        amber: {
          400: '#d4a853',
          500: '#b8892e',
          600: '#9a7020',
        },
        stone: {
          300: '#c8bfae',
          400: '#b0a390',
          500: '#8c7d6a',
          600: '#6b5d4a',
          700: '#4d4030',
          800: '#332c20',
          900: '#1e1a12',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'paper': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%':   { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-up':  'fadeUp 0.7s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}
