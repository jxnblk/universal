
import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  CREATE_POST_FAILED,
  UPDATE_POST,
  DESTROY_POST
} from '../actions/posts'

export function posts(state = [], action) {
  switch(action.type) {
    case GET_POSTS:
      return state
    case GET_POSTS_SUCCESS:
      return action.result
    case GET_POSTS_FAILED:
      return action.error
    default:
      return state
  }
}

