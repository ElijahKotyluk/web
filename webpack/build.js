const webpack = require("webpack")
const webpackConfig = require("./webpack.prod.js")
const chalk = require("chalk")

process.stderr.write(chalk.blueBright.bold(` Webpack build has begun..... \n\n`))

webpack(webpackConfig)
