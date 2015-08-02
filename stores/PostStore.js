
import { findIndex, assign } from 'lodash'
import alt from '../alt'
import PostActions from '../actions/PostActions'

class PostStore {
  constructor() {
    this.posts = []
    this.index = 0
    this.bindActions(PostActions)
  }

  updatePost(id, data) {
    let index = findIndex(this.posts, { id: id })
    let post = this.posts[index]
    post = assign(post, data)
  }

  onCreate(post) {
    post.id = this.index++
    this.posts.push(post)
  }

  onUpdate(obj) {
    let { id, data } = obj
    this.updatePost(id, data)
  }

  onDestroy(id) {
    let index = findIndex(this.posts, { id: id })
    if (index > -1) {
      this.posts.splice(index, 1)
    }
  }

}

export default alt.createStore(PostStore, 'PostStore')

