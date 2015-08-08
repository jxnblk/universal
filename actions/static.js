
import {
  GET_POSTS,
  GET_POST,
  CREATE_POST,
  UPDATE_POST,
  DESTROY_POST,
} from './index'

import data from '../api/data'

export function getPosts() {
  let posts = data.readPosts()
  return { type: GET_POSTS, posts }
}

export function getPost(id) {
  let post = data.getPost(id)
  return { type: GET_POST, post }
}

export function createPost(post) {
  post = data.createPost(post)
  return { type: CREATE_POST, post }
}

export function updatePost(id, post) {
  post = data.updatePost(id, post)
  return { type: UPDATE_POST, post }
}

export function destroyPost(id) {
  data.destroyPost(id)
  return { type: DESTROY_POST }
}

