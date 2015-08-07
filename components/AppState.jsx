
import React from 'react'

class AppState extends React.Component {

  render() {
    const snapshot = this.props

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

