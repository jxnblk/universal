
import alt from '../alt'

class MessageActions {
  constructor() {
    this.generateActions(
      'update',
      'clear'
    )
  }
}

export default alt.createActions(MessageActions)

