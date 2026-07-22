/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B8F3A',
          50:  '#E6F5EC',
          100: '#C2E4CF',
          200: '#9DD2B2',
          300: '#79C194',
          400: '#54AF77',
          500: '#0B8F3A',
          600: '#097F33',
          700: '#076F2C',
          800: '#055E25',
          900: '#034E1E',
        },
        secondary: {
          DEFAULT: '#FF7A00',
          50:  '#FFF3E6',
          100: '#FFE0BF',
          200: '#FFCD99',
          300: '#FFB973',
          400: '#FFA64D',
          500: '#FF7A00',
          600: '#E56E00',
          700: '#CC6200',
          800: '#B25500',
          900: '#994900',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0,0,0,0.12)',
        'glass-lg': '0 16px 48px rgba(0,0,0,0.18)',
        'glow-primary': '0 0 30px rgba(11,143,58,0.35)',
        'glow-secondary': '0 0 30px rgba(255,122,0,0.35)',
        'card': '0 4px 24px rgba(0,0,0,0.08)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.15)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0B8F3A 0%, #076F2C 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #FF7A00 0%, #E56E00 100%)',
        'gradient-hero': 'linear-gradient(135deg, #0a1628 0%, #0d2137 50%, #0a1628 100%)',
        'gradient-glass': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2.5s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'gradient': 'gradient 6s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'ripple': 'ripple 0.6s linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
