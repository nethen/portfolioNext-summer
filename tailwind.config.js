/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl' : '1920px',
        '4xl' : '2560px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'theme': '#615245',
        'theme-caption' : '#BAAFA6',
        'theme-placeholder' : '#DBD3CD',
        'theme-background': '#EFEDEB'
      }
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}
