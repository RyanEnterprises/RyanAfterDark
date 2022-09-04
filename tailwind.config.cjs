module.exports = {
  content: ['index.html', 'src/**/*.svelte', 'src/lib/**/*.svelte'],
  theme: {
    fontFamily: {
      primary: ['Raleway', 'sans-serif'],
      secondary: ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        'primary': '#201191',
        'secondary': '#FF9F00',
        'tertiary': '#197278',
      },
    }
  },
}