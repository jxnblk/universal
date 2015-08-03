
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
import PostStore from './stores/PostStore'

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

if (app.get('env') === 'development') {
  require('./server')
}


app.route('/')
  .get(function (req, res, next) {
    PostStore.getPosts()
      .then(next)
  })
  .post(function (req, res, next) {
    PostStore.create(req.body)
      .then(function() {
        let state = PostStore.getState()
        res.redirect(`/${state.post.id}`)
      })
  })

app.route('/:id*')
  .get(function (req, res, next) {
    if (req.params.id === 'new') {
      next()
    }
    PostStore.getPost(req.params.id)
      .then(next)
  })
  .put(function (req, res, next) {
    console.log('update')
    PostStore.update(req.params.id, req.body)
      .then(function(post) {
        console.log('updated', post)
        res.redirect(`/${req.params.id}`)
      })
      .catch(function(err) {
        console.log('update catch', err)
      })
  })
  .delete(function (req, res, next) {
    PostStore.destroy(req.params.id)
      .then(function() {
        console.log('redirect')
        res.redirect('/')
      })
  })

app.use(function(req, res, next) {

  var scripts = [ '/bundle.js' ]
  if (process.env.NODE_ENV === 'development') {
    scripts = webpackstats.get('scripts')
  }

  alt.bootstrap(JSON.stringify(res.locals || {}))
  const iso = new Iso()

  const router = Router.create({
    routes: routes,
    location: req.url
  })

  //Router.run(routes, req.url, function (Handler, state) {
  router.run(function (Handler, state) {
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

