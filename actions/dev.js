
import axios from 'axios'

import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILED,
  GET_POST,
  GET_POST_SUCCESS,
  GET_POST_FAILED,
  CREATE_POST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILED,
  UPDATE_POST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILED,
  DESTROY_POST,
  DESTROY_POST_SUCCESS,
  DESTROY_POST_FAILED,
} from './index'

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

