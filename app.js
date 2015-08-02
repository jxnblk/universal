
// import http from 'http'
import path from 'path'
import express from 'express'
import React from 'react'
import Router from 'react-router'
import routes from './routes'

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

if (app.get('env') === 'production') {
  app.use(express.static(path.join(__dirname, 'public')))
}

// Use webpack server in dev
if (app.get('env') === 'development') {
  require('./server')
}

var webpackStats = {
  scripts: [
    '/bundle.js'
  ]
  //require('./util/stats-cache')()
}

// React router routing
app.use(function(req, res, next) {

  if (process.env.NODE_ENV === 'development') {
    webpackStats = require('./util/stats-cache')()
  }

  // alt.bootstrap(JSON.stringify(res.locals || {}))
  // var iso = new Iso()
  Router.run(routes, req.url, function (Handler, state) {
    if (!state.pathname) {
      next()
    }
    var html = React.renderToString(<Handler {...state} />)
    //iso.add(html, alt.flush())
    res.render('root', {
      scripts: webpackStats.scripts,
      html: html
      // html: iso.render()
    })
  })
})

app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  })
})

app.set('port', '3000')

// var server = http.createServer(app)

app.listen('3000', function () {
  console.log('Express server listening on port 3000')
})

