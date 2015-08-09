
var webpack = require('webpack')

module.exports = {

  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3001',
    'webpack/hot/only-dev-server',
    './client.js',
  ],

  output: {
    filename: 'bundle.js',
    publicPath: 'http://localhost:3001/public/',
    path: __dirname + '/public'
  },

  module: {
    loaders: [
      {
        test: /(\.js$|\.jsx?$)/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel-loader'
        ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ],
    noParse: [
      /js\-yaml/,
      // /coffee\-script/,
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"development"'
      }
    }),
    new webpack.ProgressPlugin(function(percentage, message) {
      var MOVE_LEFT = new Buffer("1b5b3130303044", "hex").toString()
      var CLEAR_LINE = new Buffer("1b5b304b", "hex").toString()
      process.stdout.write(CLEAR_LINE + Math.round(percentage * 100) + "% :" + message + MOVE_LEFT)
    })
  ],

  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    alias: {
      'toml': 'empty-module',
      'coffee-script': 'empty-module'
    }
  },

  node: {
    fs: 'empty'
  }

}

