
import _ from 'lodash'
import {
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILED,
  GET_POST_SUCCESS,
  GET_POST_FAILED,
  CLEAR_POST,
  CREATE_POST,
  UPDATE_POST,
  DESTROY_POST
} from '../actions'

export function posts(state = [], action) {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      return action.posts // _.assign({}, state, { posts: action.posts })
    case GET_POSTS_FAILED:
      return _assign({}, state, { error: action.error })
    default:
      return state
  }
}

export function post(state = {}, action) {
  switch (action.type) {
    case GET_POST_SUCCESS:
      return action.post
    case GET_POST_FAILED:
      return _assign({}, state, { error: action.error })
    case CLEAR_POST:
      return {}
    default:
      return state
  }
}

