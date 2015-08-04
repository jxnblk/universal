
import React from 'react'
import Router from 'react-router'
import alt from './alt'
import routes from './routes'

const router = Router.create({
  routes: routes,
  location: Router.HistoryLocation
})

const init = document.querySelector('#init').innerHTML

router.run(function (Handler, state) {
  alt.bootstrap(init)
  React.render(
    <Handler {...state} snapshot={init} router={router} />,
    document.querySelector('#app')
  )
})

