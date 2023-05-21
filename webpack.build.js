const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const eight_wall_app_key = 'c5bSF8Vvjd1fQ15fFg5Ed0bJ7B1B3RGU3zF1KYOfZ5Y8jsrIHkmDFe8xSbw5Nz9s8DKpvK' // For intra

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map', // eval
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, 'dist', 'index.html'),
      template: 'src/index.ejs',
      templateParameters: { appKey: eight_wall_app_key },
      inject: true,
      hash: true,
    }),
  ],
})
