/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{css,js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        pacifico: ['Pacifico'],
        festive: ['Festive'],
        kaushan: ['Kaushan Script']
      },
      colors: {
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        muted: 'rgb(var(--muted))',
        accent: 'rgb(var(--accent))',
        custom: 'rgb(var(--custom))',
      },
      backgroundImage: {
        'firefly-radial': 'radial-gradient(50% 50% at 50% 50%, rgba(253, 255, 80, 0.5) 0%, rgba(217, 217, 217, 0) 100%)',
      },
      boxShadow: {
        'glass-inset': 'inset 0 17px 5px -9px rgba(165, 55, 253, 0.05)',
        'glass-sm': '5px 5px 20px 0px rgba(165, 55, 253, 0.3)',
      },
      keyframes: {
        'spin-reverse': {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(-360deg)'},
        }
      },
      animation: {
        'spin-slow': 'spin 70s linear infinite',
        'spin-slow-reverse': 'spin-reverse 70s linear infinite',
      },
      screens: {
        xs: '480px'
      },
    },
  },
  plugins: [],
};
