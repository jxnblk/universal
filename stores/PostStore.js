
import { findIndex, assign } from 'lodash'
import alt from '../alt'
import PostActions from '../actions/PostActions'
import PostSource from '../sources/PostSource'
import MessageActions from '../actions/MessageActions'

class PostStore {
  constructor() {
    this.posts = []
    this.post = {}
    this.msg = null
    this.err = null
    this.bindActions(PostActions)
    this.registerAsync(PostSource)
  }

  onUpdatePosts(posts) {
    this.posts = posts
  }

  onUpdatePost(post) {
    this.post = post
    // this.message = null
  }

  onClearPost() {
    this.post = {}
    // this.message = null
  }

  onCreate(post) {
    this.post = post
    let msg = {
      text: post.title + ' created',
      mode: 'success'
    }
    this.msg = msg
  }

  onDestroy(id) {
    console.log('destroy', id)
    this.post = {}
    this.msg = {
      text: 'Post #' + id + ' deleted',
      mode: 'danger'
    }
  }

  onUpdated(post) {
    console.log('post updated', post.id)
    this.msg = {
      text: post.title + ' updated',
      mode: 'info'
    }
  }

  onError(err) {
    console.log(err)
    this.msg = {
      text: 'Error: ' + err,
      mode: 'danger'
    }
    console.log('Error', err)
  }

}

export default alt.createStore(PostStore, 'PostStore')

