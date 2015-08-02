
import axios from 'axios'
import PostActions from '../actions/PostActions'

axios.interceptors.response.use(function (response) {
  return response.data
})

const PostSource = {

  getPosts: {
    remote(state) {
      return axios.get(`/api/posts`)
    },
    success: PostActions.updatePosts,
    error: PostActions.error
  },

  getPost: {
    remote(state, id) {
      return axios.get(`/api/posts/${id}`)
    },
    success: PostActions.updatePost,
    error: PostActions.error
  }

}

export default PostSource

