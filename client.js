
import React from 'react'
import Router from 'react-router'
import routes from './routes'

import {
  combineReducers,
  applyMiddleware,
  createStore
} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {
  getPosts,
  getPost
} from './actions'
import * as reducers from './reducers'

const init = document.querySelector('#init').innerHTML

const reducer = combineReducers(reducers)
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(reducer, JSON.parse(init))

console.log('client', process.env.NODE_ENV)

const router = Router.create({
  routes: routes,
  location: Router.HistoryLocation
})

let scripts = [ '/bundle.js' ]

if (process.env.NODE_ENV === 'development') {
  scripts = [
    'http://localhost:3001/public/bundle.js'
  ]
}

router.run(function (Handler, state) {
  React.render(
    <Provider store={store}>
      {() => <Handler {...state} scripts={scripts} router={router} />}
    </Provider>
    ,
    document
  )
})

