/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        orange: '#FF8251',
        pale: '#EEEEEE',
        primary: '#242D3A',
        accent: '#0E3B43',
        secondary: '#FF8251',
        error: '#FF4747',
        success: '#00CA2C',
        neutral: '#E5E5E5',
        white: '#FFFFFF',
        profile: '#00BABA',
        light_shade_yellow: '#FFF0D2',
        shade_yellow: '#FFC451',
        dark: '#262627',
        yellow: '#F7BC2E'
      },
      screens: {
        'xs': '470px',
        'lg-2x': '1250px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}

