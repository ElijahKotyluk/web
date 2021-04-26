// Config
let config = require("./webpack.config.js")

// Webpack
const webpack = require("webpack")
const webpackConfig = require("./webpack.dev.js")
const WebpackDevServer = require("webpack-dev-server")

// Dev server
const compiler = webpack(webpackConfig)
const devServerOptions = Object.assign({}, webpackConfig.devServer)
const server = new WebpackDevServer(compiler, devServerOptions)

server.listen(config.port)
