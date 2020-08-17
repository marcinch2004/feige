// tailwind.config.js
module.exports = {
  theme: {
    typography: {
      default: {
        css: {
          color: '#333',
          strong: {
            fontWeight: '800',
          },
          // ...
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}