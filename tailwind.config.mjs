/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem'
    },
    animation: {
      none: 'none',
      spin: 'spin 1s linear infinite',
      ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      bounce: 'bounce 1s infinite'
    },
    keyframes: {
      spin: {
        to: {
          transform: 'rotate(360deg)'
        }
      },
      ping: {
        '75%, 100%': {
          transform: 'scale(2)',
          opacity: '0'
        }
      },
      pulse: {
        '50%': {
          opacity: '.5'
        }
      },
      bounce: {
        '0%, 100%': {
          transform: 'translateY(-25%)',
          animationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
        },
        '50%': {
          transform: 'none',
          animationTimingFunction: 'cubic-bezier(0,0,0.2,1)'
        }
      }
    },
    colors: {
      white: '#ffffff',
      primary: '#071D39',
      primaryLight: '#14B8FF',
      primaryLight2: '#0E3465',
      primaryLight3: '#113D76',
      primaryDark: '#082954'
    },
    fontFamily: {
      oswald: ['core-sanc-c', 'sans-serif'],
      primary: ['core-san']
    },
    extend: {
      width: {
        100: '35rem'
      },
      height: {
        100: '32rem'
      }
    }
  },
  plugins: [require('tailwindcss-animated')]
}
