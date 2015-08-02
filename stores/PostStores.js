
import alt from '../alt'
import PostActions from '../actions/PostActions'

class PostStore {
  constructor() {
    this.posts = []
    this.bindActions(PostActions)
  }

  onUpdatePosts(posts) {
    this.posts = posts
  }

}
