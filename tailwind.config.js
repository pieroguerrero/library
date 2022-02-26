module.exports = {
  mode: 'jit',
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'bar-background': '#f5cb5c',
        'bar-text': '#333533',
        'searchbox-border': "#333533",
        'main-content-background': '#e7ecef',//'#e7ecef',
        'card-background': '#ffffff',
        'card-text': '#242423',
        'card-border': '#333533',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}
