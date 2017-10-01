const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  devtool: 'inline-source-map', // Compile with source maps for easy debugging
  devServer: {
    contentBase: './dist', // Public folder for dev server
    port: '80',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});