const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: 'js/[name].[hash].js',
    path: path.resolve(__dirname, '../../../output/client')
  },
  devServer: {
    port: 8080,
    compress: true,
    proxy: { context: ['/api', '/api'], target: 'http://localhost:8888' }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css'
    })
  ]
});
