
export const SET_ROUTER = 'SET_ROUTER'
export const SET_BASE_URL = 'SET_BASE_URL'

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

var actions = require('./static')
if (process.env.NODE_ENV === 'development') {
  console.log('dev actions')
  actions = require('./dev')
} else {
  console.log('Not dev')
  // actions = require('./static')
}

let {
  getPosts,
  getPost,
  createPost,
  updatePost,
  destroyPost,
} = actions

export {
  getPosts,
  getPost,
  createPost,
  updatePost,
  destroyPost,
}

export function setRouter(router) {
  return { type: SET_ROUTER, router }
}

export function setBaseUrl(url) {
  return { type: SET_BASE_URL, url }
}

export function clearPost() {
  return { type: CLEAR_POST }
}

export function changePost(post) {
  return { type: CHANGE_POST, post }
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

export function ping(data) {
  console.log('ping')
  return { type: PING, data }
}

