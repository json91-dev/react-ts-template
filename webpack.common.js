const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const absolute_path = dir => path.resolve(__dirname, dir)
const { APP_STAGE } = process.env

module.exports = {
  name: 'lotte-front',
  resolve: {
    extensions: ['.tsx', '.js'],
    alias: {
      '@': absolute_path('src'),
      '@assets': absolute_path('src/assets'),
    },
  },

  entry: {
    app: ['./src/index.tsx'],
  }, // 입력

  module: {
    rules: [
      {
        test: /\.tsx?$/,

        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'es2015',
        },
      },
      {
        test: /\.s?css$/,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        type: 'javascript/auto',
        test: /\.(glb|png|svg|jpe?g|gif|hdr|json|mp3|mov|woff|woff2|eot|ttf|otf|mp4|webm|ico|usdz)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          // name: '[name].[ext]',
          outputPath: 'assets/',
          esModule: false,
        },
      },
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ debug: true }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/assets',
          to: 'assets',
          globOptions: {
            ignore: ['**/models2'],
          },
        },
      ],
    }),
    new webpack.DefinePlugin({
      APP_STAGE: JSON.stringify(APP_STAGE),
    }),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
}
