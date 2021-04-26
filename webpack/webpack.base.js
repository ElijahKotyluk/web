let config = require('./webpack.config.js')

const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const { VueLoaderPlugin } = require("vue-loader")

module.exports = {
  output: {
    filename: "js/bundle.js",
    path: config.outPath,
    publicPath: "./",
    chunkFilename: "js/[name].js",
    library: "[name]_library",
  },
  resolve: {
    alias: {
      "@scss": path.join(config.root, "./src/style"),
      "@component": path.join(config.root, "./src/components"),
      vue: "@vue/runtime-dom",
    },
    modules: ["node_modules", "*"],
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".vue"],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: {
              appendTsSuffixTo: [/\.vue$/],
            },
          },
        ],
      },
      {
        test: /\.(sc|sa|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(gif|png|jpe?g|svg|ico)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: `assets/[name].[hash:5].[ext]`,
              limit: 200,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: `index.html`,
      template: config.root + "/webpack/index.html",
      title: "Elijah Kotyluk",
      prod: true,
      hash: true,
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        removeComments: true,
        removeEmptyAttributes: true,
      },
    }),
  ],
};