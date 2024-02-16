/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '_includes/**/*.html',
    '_layouts/**/*.html',
    '*.md',
    '*.markdown'
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Roboto']
      }
    },
  },
  plugins: [],
}

