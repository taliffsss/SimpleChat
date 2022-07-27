const { resolve, join } = require('path')
const dotenv = require('dotenv').config()
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const APP_DIR = resolve(__dirname, '..', './src')
const BUILD_DIR = resolve(__dirname, '..', './build')

module.exports = {
  entry: join(APP_DIR, 'index.tsx'),
  resolve: {
    extensions: ['.css', '.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: ['node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      title: 'HoLo',
      template: resolve(__dirname, '..', './public/index.html'),
      favicon: resolve(__dirname, '..', './public/favicon.ico'),
    }),
    new DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed),
    }),
  ],
  stats: 'errors-only',
}
