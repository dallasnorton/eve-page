const isProd = process.env.NODE_ENV === 'production';

// for dev branch, to work with eve nginx server the assetPrefix should be ''
module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/eve-page/' : '',
  compress: false,
  optimization: {
    minimize: false,
  },
};
