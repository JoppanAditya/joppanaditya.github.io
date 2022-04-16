module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        'dark': 'hsl(211, 97%, 13%)',
        'dark-2': 'hsl(211, 97%, 15%)',
        'light': 'hsl(213, 100%, 98%)',
        'light-2': 'hsl(213, 100%, 96%)',
        'main': '#429FFD',
        'btn-hover': '#347eca',
        'compliment': '#D8A31A',
        'dark-accent': '#717788',
        'accent': '#A5ABBD',
        'yt': '#FF0000',
        'ig': '#E4405F',
        'github': '#181717',
        'dark-green': '#007D55',
        'green': '#62ECBC',
        'dark-red': '#75243A',
        'alert-red': '#ff3972'
      },
      boxShadow: {
        'bottom': 'inset 0 -1px 0 0 rgba(0, 0, 0, .1)',
        'left': 'inset -1px 0 0 0 rgba(0, 0, 0, .1)',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/forms'),
  ],
}
