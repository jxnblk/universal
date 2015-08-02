// Webpack dev server

var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.dev.config')

new WebpackDevServer(webpack(config), {
  contentBase: `http://localhost:3001`,
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3001, 'localhost', function (err, result) {
  if (err) {
    console.log(err)
  }

  console.log('Listening at localhost:3001')
})

