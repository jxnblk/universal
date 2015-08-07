
import axios from 'axios'

export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILED = 'GET_POSTS_FAILED'

export const GET_POST = 'GET_POST'
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS'
export const GET_POST_FAILED = 'GET_POST_FAILED'

export const CLEAR_POST = 'CLEAR_POST'

export const CREATE_POST = 'CREATE_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const DESTROY_POST = 'DESTROY_POST'

export const PING = 'PING'

export function getPosts() {
  return dispatch => {
    return axios.get('http://localhost:3030/posts')
      .then(
        (response) => dispatch(getPostsSuccess(response)),
        (error) => dispatch(getPostsFailed(error))
      )
  }
}

export function getPostsSuccess(response) {
  return { type: GET_POSTS_SUCCESS, posts: response.data }
}

export function getPostsFailed(error) {
  return { type: GET_POSTS_FAILED, error: error }
}

export function getPost(id) {
  return dispatch => {
    return axios.get(`http://localhost:3030/posts/${id}`)
      .then(
        (response) => dispatch(getPostSuccess(response)),
        (error) => dispatch(getPostFailed(error))
      )
  }
}

export function getPostSuccess(response) {
  return { type: GET_POST_SUCCESS, post: response.data }
}

export function getPostFailed(error) {
  return { type: GET_POST_FAILED, error: error }
}

export function clearPost() {
  return { type: CLEAR_POST }
}

export function ping(data) {
  console.log('ping')
  return { type: PING, data }
}

export function createPost(post) {
  console.log('create post')
  return { type: CREATE_POST, post }
}

export function updatePost(post) {
  console.log('update post')
  return { type: UPDATE_POST, post }
}

export function destroyPost(index) {
  console.log('destroy post')
  return { type: DESTROY_POST, post }
}

