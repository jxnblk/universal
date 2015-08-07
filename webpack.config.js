
var path = require('path')
var webpack = require('webpack')

module.exports = {

  entry: [
    './client.js',
  ],

  output: {
    filename: 'bundle.js',
    publicPath: '/public',
    path: __dirname + '/public'
  },

  module: {
    loaders: [
      {
        test: /(\.js$|\.jsx?$)/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },

  node: {
    fs: 'empty'
  }

}

