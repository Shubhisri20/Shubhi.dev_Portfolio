/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease forwards',
        fadeInUp: 'fadeInUp 1s ease forwards',
        fadeInRight: 'fadeInRight 1s ease forwards',
        fadeInLeft: 'fadeInLeft 1s ease forwards',
        pulse: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1.5s infinite',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};