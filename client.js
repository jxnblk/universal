
import React from 'react'
import Router from 'react-router'
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
  React.render(
    <Handler {...state}
      scripts={scripts}
      router={router} />,
    document
  )
})

