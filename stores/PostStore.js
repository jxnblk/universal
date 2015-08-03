
import { findIndex, assign } from 'lodash'
import alt from '../alt'
import PostActions from '../actions/PostActions'
import PostSource from '../sources/PostSource'
import MessageActions from '../actions/MessageActions'

class PostStore {
  constructor() {
    this.posts = []
    this.post = {}
    this.err = null
    this.bindActions(PostActions)
    this.registerAsync(PostSource)
  }

  onUpdatePosts(posts) {
    this.posts = posts
  }

  onUpdatePost(post) {
    this.post = post
  }

  onClearPost() {
    this.post = {}
  }

  onCreate(post) {
    this.post = post
  }

  onDestroy(id) {
    this.post = {}
  }

  onUpdated(post) {
    this.post = post
  }

  onError(err) {
    console.log('Error', err)
  }

}

export default alt.createStore(PostStore, 'PostStore')

