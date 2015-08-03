
import axios from 'axios'
import PostActions from '../actions/PostActions'

const api = 'http://localhost:3030'

axios.interceptors.response.use(function (response) {
  return response.data
})

const PostSource = {

  getPosts: {
    remote(state) {
      return axios.get(`${api}/posts`)
    },
    success: PostActions.updatePosts,
    error: PostActions.error
  },

  getPost: {
    remote(state, id) {
      return axios.get(`${api}/posts/${id}`)
    },
    success: PostActions.updatePost,
    error: PostActions.error
  },

  create: {
    remote(state, data) {
      return axios.post(`${api}/posts`, data)
    },
    success: PostActions.create,
    error: PostActions.error
  },

  update: {
    remote(state, id, data) {
      return axios.put(`${api}/posts/${id}`, data)
    },
    success: PostActions.updated,
    error: PostActions.error
  },

  destroy: {
    remote(state, id) {
      return axios.delete(`${api}/posts/${id}`)
    },
    success: PostActions.destroy,
    error: PostActions.error
  }

}

export default PostSource

