
import alt from '../alt'

class PostActions {
  constructor() {
    this.generateActions(
      'updatePosts',
      'updatePost',
      'create',
      'destroy',
      'error'
    )
  }
}

export default alt.createActions(PostActions)

