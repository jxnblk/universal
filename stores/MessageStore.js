
import alt from '../alt'
import MessageActions from '../actions/MessageActions'

class MessageStore {
  constructor() {
    this.message = null
    this.bindActions(MessageActions)
  }

  onUpdate(message) {
    this.message = message
  }

  onClear() {
    this.message = null
  }

}

export default alt.createStore(MessageStore, 'MessageStore')

