const config = require('./webpack.config.js')
const base = require('./webpack.base.js')
const { merge } = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')

const dev = {
  mode: "development",
  entry: config.entry,
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    splitChunks: {
      minSize: 20000,
      maxAsyncRequests: 10,
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: "all",
          name: "common",
          priority: 10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  devServer: {
    open: true,
    contentBase: config.contentBase,
    publicPath: config.publicPath,
    compress: true,
    inline: true,
    noInfo: true,
    port: config.port,
    host: config.host,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
}

module.exports = merge(base, dev)