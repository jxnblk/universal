
import React from 'react'
import Main from '../components/Main'

class AppState extends React.Component {

  render() {
    const snapshot = this.props

    const s = {
      pre: {
        overflow: 'auto'
      }
    }

    return (
      <Main>
        <h1>Application State</h1>
        <pre style={s.pre}>{JSON.stringify(snapshot, null, '  ')}</pre>
      </Main>
    )
  }

}

export default AppState

