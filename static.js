
import React from 'react'
import Router from 'react-router'
import { Provider } from 'react-redux'
import routes from './routes.jsx'
import { store } from './store'

import {
  setRouter,
  getPosts,
  getPost,
  clearPost,
  createPost,
  updatePost,
  destroyPost
} from './actions'

store.dispatch(getPosts())
const scripts = [ '/bundle.js' ]

if (typeof window !== 'undefined') {
  const router = Router.create({
    routes: routes,
    location: Router.HistoryLocation
  })
  store.dispatch(setRouter(router))
  router.run(function (Handler, state) {
    React.render(
    <Provider store={store}>
      {() => <Handler routerState={state} scripts={scripts} />}
    </Provider>,
    document
    )
  })

}

module.exports = function render(locals, callback) {

  const router = Router.create({
    routes: routes,
    location: locals.path
  })

  store.dispatch(setRouter(router))

  router.run(function (Handler, state) {
    var html = React.renderToString(
      <Provider store={store}>
        {() => <Handler routerState={state} scripts={scripts} />}
      </Provider>
    )
    callback(null, '<!DOCTYPE html>' + html)
  })

}

