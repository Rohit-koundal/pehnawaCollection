module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        wine: '#282C3F',
        rose: '#FF3F6C',
        blush: '#FFEAF0',
        ivory: '#F5F5F6',
        gold: '#FF905A',
        charcoal: '#282C3F',
        brand: {
          soft: '#FFEAF0',
          primary: '#FF3F6C',
          rose: '#FF6F91',
          gold: '#FF905A'
        }
      },
      boxShadow: {
        soft: '0 18px 50px rgba(15, 23, 42, 0.08)'
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
