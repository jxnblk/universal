
import { assign } from 'lodash'
import {
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILED,
  GET_POST_SUCCESS,
  GET_POST_FAILED,
  CLEAR_POST,
  CHANGE_POST,
  CREATE_POST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILED,
  UPDATE_POST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILED,
  DESTROY_POST,
  DESTROY_POST_SUCCESS,
  DESTROY_POST_FAILED
} from '../actions'

export function posts(state = [], action) {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      return action.posts // _.assign({}, state, { posts: action.posts })
    case GET_POSTS_FAILED:
      return assign({}, state, { error: action.error })
    default:
      return state
  }
}

export function post(state = {}, action) {
  switch (action.type) {
    case GET_POST_SUCCESS:
    case CREATE_POST_SUCCESS:
    case UPDATE_POST_SUCCESS:
      return action.post
    case CHANGE_POST:
      return assign({}, state, action.post)
    case DESTROY_POST_SUCCESS:
    case CLEAR_POST:
      return {}
    case GET_POST_FAILED:
    case CREATE_POST_FAILED:
    case UPDATE_POST_FAILED:
    case DESTROY_POST_FAILED:
      return assign({}, state, { error: action.error })
    default:
      return state
  }
}

