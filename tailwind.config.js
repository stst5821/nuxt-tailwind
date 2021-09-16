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
       transitionDuration: {
        '1100': '1100ms',
       }
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
  mode: "jit",
}
