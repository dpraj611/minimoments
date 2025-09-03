/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#f8f4ff',
          100: '#f0e8ff',
          200: '#e4d4ff',
          300: '#d1b3ff',
          400: '#b885ff',
          500: '#9f57ff',
          600: '#8b2fff',
          700: '#7c1dff',
          800: '#6b1bb8',
          900: '#5a1a96',
        },
        gold: {
          50: '#fffdf0',
          100: '#fff9d6',
          200: '#fff2a8',
          300: '#ffe770',
          400: '#ffd836',
          500: '#ffc107',
          600: '#e6a700',
          700: '#cc9600',
          800: '#b38600',
          900: '#996f00',
        },
        brand: {
          purple: '#8b2fff',
          gold: '#ffc107',
          'purple-dark': '#5a1a96',
          'gold-dark': '#cc9600',
        }
      },
      fontFamily: {
        sans: ['Nunito', 'system-ui', 'sans-serif'],
        display: ['Fredoka', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'extra-wide': '0.1em',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'bounce-gentle': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 3s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(139, 47, 255, 0.1)',
        'soft-gold': '0 4px 20px rgba(255, 193, 7, 0.1)',
        'glow': '0 0 30px rgba(139, 47, 255, 0.3)',
        'glow-gold': '0 0 30px rgba(255, 193, 7, 0.3)',
      }
    },
  },
  plugins: [],
};