import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          900: '#0F3460',
          800: '#16437E',
          700: '#1C549C',
          600: '#2260B3',
          500: '#277CE0',
          400: '#4E94E6',
          300: '#75ABEC',
          200: '#9CC3F2',
          100: '#C2DAF8',
          50: '#E6F0FD',
        },
        amber: {
          900: '#7A590A',
          800: '#946B0C',
          700: '#AD7E0E',
          600: '#C79110',
          500: '#E6B325',
          400: '#EAC042',
          300: '#EFCD69',
          200: '#F4DA91',
          100: '#F9E8B8',
          50: '#FCF5DE',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'spin': 'spin 1s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;