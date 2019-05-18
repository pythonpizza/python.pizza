module.exports = {
  plugins: {
    'postcss-nested': {},
    'postcss-custom-media': {
      importFrom: './src/components/layout/breakpoints.css',
    },
  },
};
