module.exports = {
  mode: 'jit',
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),],
}
