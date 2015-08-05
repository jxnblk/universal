
import path from 'path'
import express from 'express'
import React from 'react'
import Router from 'react-router'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'
import routes from './routes'
import Err from './components/Err'

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

if (app.get('env') === 'development') {
  // Webpack dev server
  require('./server')
}

/*
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
*/

/*
app.route('/:id*')
  .get(function (req, res, next) {
    if (req.params.id === 'new') {
      next()
    }
    PostStore.getPost(req.params.id)
      .then(next)
  })
  .put(function (req, res, next) {
    PostStore.update(req.params.id, req.body)
      .then(function(post) {
        res.redirect(`/${req.params.id}`)
      })
      .catch(function(err) {
        console.log('update catch', err)
      })
  })
  .delete(function (req, res, next) {
    PostStore.destroy(req.params.id)
      .then(function() {
        res.redirect('/')
      })
  })
*/

app.use(function(req, res, next) {

  let scripts = [ '/bundle.js' ]
  if (process.env.NODE_ENV === 'development') {
    scripts = [
      'http://localhost:3001/public/bundle.js'
    ]
  }

  const router = Router.create({
    routes: routes,
    location: req.url
  })

  router.run(function (Handler, state) {
    var html = React.renderToString(
      <Handler {...state} scripts={scripts} />
    )
    res.send(html)
  })
})

app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  var html = React.renderToString(<Err {...err} />)
  res.send(html)
})

app.set('port', 3000)

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'))
})

