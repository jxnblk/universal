
import path from 'path'
import express from 'express'
import React from 'react'
import Router from 'react-router'
import Iso from 'iso'
import routes from './routes'
import alt from './alt'
import reactViews from 'express-react-views'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'
import webpackstats from './util/webpack-stats'
import posts from './api/posts'

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.engine('jsx', reactViews.createEngine())

if (app.get('env') === 'production') {
  app.use(express.static(path.join(__dirname, 'public')))
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
// app.use(methodOverride(function(req, res){
//   if (req.body && typeof req.body === 'object' && '_method' in req.body) {
//     var method = req.body._method
//     delete req.body._method
//     return method
//   }
// }))

if (app.get('env') === 'development') {
  require('./server')
}

app.use('/api/posts', posts)

app.use('/api/*', function (req, res, next) {
  res.json(res.locals.data)
})

app.use('/', posts)
app.use('/', function (req, res, next) {
  let posts = res.locals.data || []
  res.locals.PostStore = {
    posts: posts
  }
  next()
})

app.use('/:id', function (req, res, next) {
  let post = res.locals.data || {}
  res.locals.PostStore = {
    post: post
  }
  next()
})

app.use(function(req, res, next) {

  var scripts = [ '/bundle.js' ]
  if (process.env.NODE_ENV === 'development') {
    scripts = webpackstats.get('scripts')
  }

  alt.bootstrap(JSON.stringify(res.locals || {}))
  const iso = new Iso()
  Router.run(routes, req.url, function (Handler, state) {
    if (!state.pathname) {
      next()
    }
    var html = React.renderToString(<Handler {...state} />)
    iso.add(html, alt.flush())
    res.render('root', {
      scripts: scripts,
      html: iso.render()
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

app.listen('3000', function () {
  console.log('Express server listening on port 3000')
})

