
import React from 'react'
import Router from 'react-router'
import Iso from 'iso'
import routes from './routes'
// import alt from './alt'

// Iso.bootstrap(function (state, _, container) {
//   alt.bootstrap(state)
//   Router.run(routes, Router.HistoryLocation, function (Handler, routerState) {
//     React.render(<Handler {...routerState} />, container)
//   })
// })

Router.run(routes, Router.HistoryLocation, function (Handler, state) {
  React.render(<Handler {...state} />, document.querySelector('#app'))
})

