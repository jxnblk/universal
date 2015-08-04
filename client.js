
import React from 'react'
import Router from 'react-router'
import alt from './alt'
import routes from './routes'

console.log('client', process.env.NODE_ENV)

const router = Router.create({
  routes: routes,
  location: Router.HistoryLocation
})

const init = document.querySelector('#init').innerHTML

let scripts = [ '/bundle.js' ]

if (process.env.NODE_ENV === 'development') {
  scripts = [
    'http://localhost:3001/public/bundle.js'
  ]
}

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

