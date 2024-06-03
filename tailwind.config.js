module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://via.placeholder.com/2160x1080')",
      },
      colors: {
        'dark-bg': '#0A0A0A',
        'light-bg': '#1A1A1A',
        'primary': '#F97316',
      },
      keyframes: {
        slideInFromTop: {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        slideInFromTop: 'slideInFromTop 1s ease-out forwards',
        fadeIn: 'fadeIn 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}
