
import React from 'react'
import Router from 'react-router'
import routes from './routes'
import render from './render'

console.log('client', process.env.NODE_ENV)

let scripts = [ '/bundle.js' ]

if (process.env.NODE_ENV === 'development') {
  scripts = [
    'http://localhost:3001/public/bundle.js'
  ]
}

render(Router.HistoryLocation, scripts, function (component) {
  console.log('client render', component)
  React.render(component, document)
})

