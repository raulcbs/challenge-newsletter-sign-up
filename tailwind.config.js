/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        charcoal_grey: 'var(--charcoal-grey)',
        grey: 'var(--grey)',
        dark_slate_grey: 'var(--dark-slate-grey)',
      },
      fontFamily: {
        roboto: ['var(--font-roboto)'],
      },
    },
  },
  plugins: [],
}
