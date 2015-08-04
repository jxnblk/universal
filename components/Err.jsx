
import React from 'react'
import Html from './Html'

export default class Err extends React.Component {

  render() {
    return (
      <Html {...this.props}>
        <h1>Error</h1>
        <pre>{JSON.stringify(this.props, null, '  ')}</pre>
      </Html>
    )
  }

}

