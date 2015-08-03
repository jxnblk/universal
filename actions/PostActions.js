
import alt from '../alt'

class PostActions {
  constructor() {
    this.generateActions(
      'updatePosts',
      'updatePost',
      'updated',
      'clearPost',
      'create',
      'destroy',
      'error'
    )
  }
}

export default alt.createActions(PostActions)

