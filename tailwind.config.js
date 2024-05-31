/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  plugins: [],
}

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'datadogPurple' : '#724EEF',
        'datadogGreen': '#14D071',
        'datadogRed' : '#FF635A',
        'datadogGray' : '#443E48',
        'datadogGrayDark' : '#110617',
        'datadogStone' : '#868686'
      },
      fontFamily: {
        'sans': ['Natural', 'sans-serif'],
      },
    },
  },
};