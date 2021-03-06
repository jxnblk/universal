
require('babel/register')
var path = require('path')
var webpack = require('webpack')
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var data = require('./api/data')

var baseUrl = '/universal'
var routes = [
  '/',
  '/new',
  '/state',
]

var posts = data.readPosts()

posts.forEach(function (post) {
  routes.push('/' + post.id)
  routes.push('/' + post.id + '/edit')
  routes.push('/' + post.id + '/delete')
})

module.exports = {

  entry: [
    './static.js',
  ],

  output: {
    filename: 'bundle.js',
    publicPath: baseUrl,
    path: __dirname + '/dist' + baseUrl,
    libraryTarget: 'umd'
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

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"static"'
      }
    }),
    new StaticSiteGeneratorPlugin('bundle.js', routes, {})
  ],

  node: {
    fs: 'empty'
  }

}

