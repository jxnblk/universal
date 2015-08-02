
var path = require('path')

var statsCache = {
  scripts: [
    'http://localhost:3001/public/bundle.js'
  ]
}

module.exports = function (stats) {

  if (!stats) {
    console.log('return cache', statsCache)
    return statsCache
  }

  var publicPath = this.options.output.publicPath

  var json = stats.toJson()

  // get chunks by name and extensions
  function getChunks(name, ext) {
    ext = ext || 'js'
    var chunk = json.assetsByChunkName[name]

    // a chunk could be a string or an array, so make sure it is an array
    if (!(Array.isArray(chunk))) {
      chunk = [chunk]
    }

    return chunk
       // filter by extension
      .filter(function (chunkName) {
        return path.extname(chunkName) === '.' + ext
      })
      .map(function(chunkName) {
        return publicPath + chunkName
      })
  }

  var scripts = getChunks('main', 'js')
  //var css = getChunks('main', 'css')

  statsCache = {
    scripts: scripts,
    // css: css
  }

  // fs.writeFileSync(filepath, JSON.stringify(content))

}

