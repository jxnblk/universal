
var path = require('path')

function Cache (stats) {

  var self = this

  this.cache = {
    scripts: [
      'http://localhost:3001/public/bundle.js'
    ]
  }

  this.set = function (stats) {
    var publicPath = this.options.output.publicPath
    var json = stats.toJson()

    function getChunks(name, ext) {
      ext = ext || 'js'
      var chunk = json.assetsByChunkName[name]
      if (!(Array.isArray(chunk))) {
        chunk = [chunk]
      }
      return chunk
        .filter(function (chunkName) {
          return path.extname(chunkName) === '.' + ext
        })
        .map(function(chunkName) {
          return publicPath + chunkName
        })
    }

    var scripts = getChunks('main', 'js')

    self.cache.scripts = scripts
  }

  this.get = function (key) {
    return this.cache[key]
  }

  return this

}

module.exports = new Cache()

