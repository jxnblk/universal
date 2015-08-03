
import React from 'react'
import Router from 'react-router'
import Iso from 'iso'
import alt from './alt'
import routes from './routes'

// import router from './router'

const router = Router.create({
  routes: routes,
  location: Router.HistoryLocation
})

Iso.bootstrap(function (state, _, container) {
  alt.bootstrap(state)
  router.run(function (Handler, routerState) {
    React.render(<Handler {...routerState} router={router} />, container)
  })
})

