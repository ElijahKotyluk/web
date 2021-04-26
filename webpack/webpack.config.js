const path = require('path')

module.exports = {
  entry: [
    path.resolve(__dirname, "../src/main.ts"),
    path.resolve(__dirname, "../src/style/main.scss"),
  ],
  host:'0.0.0.0',
  outPath: path.resolve(__dirname, "../dist"),
  port: "8080",
  publicPath: "/",
  root: path.resolve(__dirname, "../"),
};