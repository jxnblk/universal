
import path from 'path'
import express from 'express'
import React from 'react'
import Router from 'react-router'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'
import routes from './routes'
import Err from './components/Err'

import { Provider } from 'react-redux'
import {
  setRouter,
  getPosts,
  getPost,
  clearPost,
  createPost,
  updatePost,
  destroyPost
} from './actions'

import { store } from './store'

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

if (app.get('env') === 'development') {
  require('./server') // Webpack dev server
}

app.route('/')
  .get(function (req, res, next) {
    store.dispatch(getPosts())
     .then(() => next())
  })
  .post(function (req, res, next) {
    store.dispatch(createPost(req.body))
     .then(
       () => {
         let post = store.getState().post
         res.redirect(`/${post.id}`)
       },
       (err) => {
         console.log('err', err)
         next()
       }
     )
  })

app.route('/:id*')
  .get(function (req, res, next) {
    if (req.params.id === 'new') {
      store.dispatch(clearPost())
      next()
    } else {
      store.dispatch(getPost(req.params.id))
        .then(() => next())
    }
  })
  .put(function (req, res, next) {
    store.dispatch(updatePost(req.params.id, req.body))
      .then((post) => {
        res.redirect(`/${req.params.id}`)
      }, (err) => {
        console.log('error', err)
        next()
      })
  })
  .delete(function (req, res, next) {
    store.dispatch(destroyPost(req.params.id))
      .then(
        () => res.redirect('/'),
        (err) => {
          console.log('error', err)
          next()
        }
      )
  })

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
  store.dispatch(setRouter(router))

  router.run(function (Handler, state) {
    var html = React.renderToString(
      <Provider store={store}>
        {() => <Handler routerState={state} scripts={scripts} />}
      </Provider>
    )
    res.send(html)
  })
})

app.use(function(err, req, res, next) {
  console.log(err)
  res.status(err.status || 500)
  var html = React.renderToString(<Err {...err} />)
  res.send(html)
})

app.set('port', 3000)

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'))
})

