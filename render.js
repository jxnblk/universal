
import React from 'react'
import Router from 'react-router'
import { Provider } from 'react-redux'
import routes from './routes'
import { store } from './store'
import { setRouter } from './actions'

export default function render (location, scripts, done) {

  scripts = scripts || [ '/bundle.js' ]

  const router = Router.create({
    routes: routes,
    location: location
  })

  store.dispatch(setRouter(router))

  router.run(function (Handler, state) {
    const component = (
      <Provider store={store}>
      {() => <Handler routerState={state} scripts={scripts} />}
      </Provider>
    )
    done(component)
  })

}
