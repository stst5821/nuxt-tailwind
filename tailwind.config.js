module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '10xl': '9rem',
       },
       lineHeight: {
        'leading-20': '8.625rem',
       }
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
  mode: "jit",
}