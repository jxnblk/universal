
import axios from 'axios'

export const SET_ROUTER = 'SET_ROUTER'

export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILED = 'GET_POSTS_FAILED'

export const GET_POST = 'GET_POST'
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS'
export const GET_POST_FAILED = 'GET_POST_FAILED'

export const CLEAR_POST = 'CLEAR_POST'
export const CHANGE_POST = 'CHANGE_POST'

export const CREATE_POST = 'CREATE_POST'
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS'
export const CREATE_POST_FAILED = 'CREATE_POST_FAILED'

export const UPDATE_POST = 'UPDATE_POST'
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS'
export const UPDATE_POST_FAILED = 'UPDATE_POST_FAILED'

export const DESTROY_POST = 'DESTROY_POST'
export const DESTROY_POST_SUCCESS = 'DESTROY_POST_SUCCESS'
export const DESTROY_POST_FAILED = 'DESTROY_POST_FAILED'

export const CHANGE_MESSAGE = 'CHANGE_MESSAGE'
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE'

export const CHANGE_MODE = 'CHANGE_MODE'

export const PING = 'PING'

export function setRouter(router) {
  return { type: SET_ROUTER, router }
}

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

export function changePost(post) {
  return { type: CHANGE_POST, post }
}

export function ping(data) {
  console.log('ping')
  return { type: PING, data }
}

export function createPost(post) {
  return dispatch => {
    return axios.post('http://localhost:3030/posts', post)
      .then(
        (response) => dispatch(createPostSuccess(response)),
        (error) => dispatch(createPostFailed(error))
      )
  }
}

export function createPostSuccess(response) {
  return { type: CREATE_POST_SUCCESS, post: response.data }
}

export function createPostFailed(error) {
  return { type: CREATE_POST_FAILED, error: error }
}

export function updatePost(id, post) {
  return dispatch => {
    return axios.put(`http://localhost:3030/posts/${id}`, post)
      .then(
        (response) => dispatch(updatePostSuccess(response)),
        (error) => dispatch(updatePostFailed(error))
      )
  }
}

export function updatePostSuccess(response) {
  return { type: UPDATE_POST_SUCCESS, post: response.data }
}

export function updatePostFailed(error) {
  return { type: UPDATE_POST_FAILED, error: error }
}

export function destroyPost(id) {
  return dispatch => {
    return axios.delete(`http://localhost:3030/posts/${id}`)
      .then(
        (response) => dispatch(destroyPostSuccess(response)),
        (error) => dispatch(destroyPostFailed(error))
      )
  }
}

export function destroyPostSuccess(response) {
  return { type: DESTROY_POST_SUCCESS }
}

export function destroyPostFailed(error) {
  return { type: DESTROY_POST_FAILED, error: error }
}

export function changeMessage(message) {
  return { type: CHANGE_MESSAGE, message }
}

export function clearMessage() {
  return { type: CLEAR_MESSAGE }
}

export function changeMode(mode) {
  return { type: CHANGE_MODE, mode }
}

