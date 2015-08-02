
import alt from '../alt'
import ModeActions from '../actions/ModeActions'

class ModeStore {
  constructor() {
    this.mode = 'default'
    this.bindActions(ModeActions)
  }

  onUpdate(mode) {
    this.mode = mode
  }

}

export default alt.createStore(ModeStore, 'ModeStore')

