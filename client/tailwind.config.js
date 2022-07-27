module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      colors: {
        primary: '#11823b',
        bglight: '#F1F5F9',
        bgdarker: '#E8EEF4'
      },
      backgroundImage: {
        'login-image': "url('https://cdn.fivenapp.com/login-image/splash-image.jpeg')"
      }
    },
  },
  plugins: [],
}