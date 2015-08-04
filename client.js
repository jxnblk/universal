
import React from 'react'
import Router from 'react-router'
import alt from './alt'
import routes from './routes'
import webpackstats from './util/webpack-stats'

const router = Router.create({
  routes: routes,
  location: Router.HistoryLocation
})

const init = document.querySelector('#init').innerHTML

// let scripts = [ '/bundle.js' ]
let scripts = webpackstats.get('scripts')
// if (process.env.NODE_ENV === 'development') {
// }

router.run(function (Handler, state) {
  alt.bootstrap(init)
  React.render(
    <Handler {...state}
      snapshot={init}
      scripts={scripts}
      router={router} />,
    document
  )
})

