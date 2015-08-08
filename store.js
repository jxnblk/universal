
import {
  combineReducers,
  applyMiddleware,
  createStore
} from 'redux'
import thunk from 'redux-thunk'
import * as reducers from './reducers'

export const reducer = combineReducers(reducers)
export const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
export const store = createStoreWithMiddleware(reducer)

