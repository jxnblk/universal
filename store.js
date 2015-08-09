
import {
  combineReducers,
  applyMiddleware,
  createStore
} from 'redux'
import thunk from 'redux-thunk'
import * as reducers from './reducers'

let init = {}
if (typeof window !== 'undefined') {
  init = document.querySelector('#init').innerHTML
  init = JSON.parse(init)
}

export const reducer = combineReducers(reducers)
export const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
export const store = createStoreWithMiddleware(reducer, init)

