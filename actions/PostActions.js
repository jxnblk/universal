
import alt from '../alt'

class PostActions {
  constructor() {
    this.generateActions(
      'update',
      'create',
      'destroy'
    )
  }
}

export default alt.createActions(PostActions)

