
import React from 'react'
import alt from '../alt'

class AppState extends React.Component {

  render() {
    const snapshot = JSON.parse(alt.takeSnapshot())

    const s = {
      pre: {
        overflow: 'auto'
      }
    }

    return (
      <div>
        <h1>Application State</h1>
        <pre style={s.pre}>{JSON.stringify(snapshot, null, '  ')}</pre>
      </div>
    )
  }

}

export default AppState

