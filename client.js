
import React from 'react'
import Router from 'react-router'

import {
  combineReducers,
  applyMiddleware,
  createStore
} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import routes from './routes'
import { setRouter } from './actions'
import * as reducers from './reducers'
import render from './render'

// const init = document.querySelector('#init').innerHTML

// const reducer = combineReducers(reducers)
// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
// const store = createStoreWithMiddleware(reducer, JSON.parse(init))

console.log('client', process.env.NODE_ENV)

// const router = Router.create({
//   routes: routes,
//   location: Router.HistoryLocation
// })

let scripts = [ '/bundle.js' ]

if (process.env.NODE_ENV === 'development') {
  scripts = [
    'http://localhost:3001/public/bundle.js'
  ]
}

// store.dispatch(setRouter(router))

render(Router.HistoryLocation, scripts, function (component) {
  console.log('client render', component)
  React.render(component, document)
})
  //.then((component) => {
  //})

/*
router.run(function (Handler, state) {
  React.render(
    <Provider store={store}>
      {() => <Handler routerState={state} scripts={scripts} />}
    </Provider>
    ,
    document
  )
})
*/

