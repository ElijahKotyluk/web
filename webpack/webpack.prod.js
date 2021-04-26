const base = require('./webpack.base.js')
const config = require('./webpack.config.js')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const prod = {
  devtool: 'inline-cheap-source-map',
  mode: 'production',
  entry: config.entry,
  output: {
    path: `${config.outPath}/`,
    publicPath: './',
    filename: 'js/[name].js',
    chunkFilename: 'js/chunk.[name].js',
  },
  optimization: {
    minimize: true,
    splitChunks: {
      minSize: 20000,
      maxAsyncRequests: 10,
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'all',
          name: 'common',
          priority: 10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/build.[name].css'
    })
  ]
}

module.exports = merge(base, prod)