const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map', // eval
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, 'dist', 'index.html'),
      template: 'src/index.ejs',
      inject: true,
      hash: true,
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    host: '0.0.0.0', // Open every network Access.
    port: 8082,
    historyApiFallback: true,
  },
})
