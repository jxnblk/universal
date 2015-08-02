
import { findIndex, assign } from 'lodash'
import alt from '../alt'
import PostActions from '../actions/PostActions'
import PostSource from '../sources/PostSource'

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

  onCreate(post) {
    console.log('create', post)
  }

  onDestroy(id) {
    console.log('destroy', id)
  }

  onError(err) {
    this.err = err
  }

}

export default alt.createStore(PostStore, 'PostStore')

