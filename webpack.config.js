const path = require('path'); // npm package for resolving file paths
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Webpack plugin as npm package
const CleanWebpackPlugin = require('clean-webpack-plugin'); // Webpack plugin as npm package

module.exports = {
  entry: { // Entry points/module definition for bundle.js
    index: './src/index.js',
    app: './src/index.js',
    print: './src/print.js'
  },
  devtool: 'inline-source-map', // Compile with source maps for easy debugging
  devServer: {
    contentBase: './dist', // Public folder for dev server
    port: '3000'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']), // Clear the dist folder on build
    new HtmlWebpackPlugin({ // Build Html files for Webpack, using all entry points by default or templates if defined
      title: 'Output Management'
    })
  ],
  output: {
    filename: 'bundle.js', // create monolithic bundle.js
    filename: '[name].bundle.js', // create bundle for including only each entry point
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [{
            loader: 'style-loader', // Add CSS in <style tags>
            options: {}
          },
          {
            loader: 'css-loader', // Move CSS files to dist on build/watch
            options: {}
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'file-loader', // Move image files to dist on build/watch.
          options: {
            // name: '[name].[ext]'
          }
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: 'file-loader', // Move font files to dist on build/watch.
          options: {
            // name: '[name].[ext]'
          }
        }]
      },
      {
        test: /\.(csv|tsv$)$/,
        use: [{
          loader: 'csv-loader' // Move csv files to dist on build.
        }]
      },
      {
        test: /\.xml$/,
        use: [{
          loader: 'xml-loader' // Move xml files to dist on build.
        }]
      }
    ]
  }
};