
import React from 'react'

export default class Err extends React.Component {

  render() {
    return (
      <div>
        <h1>Error</h1>
        <pre>{JSON.stringify(this.props, null, '  ')}</pre>
      </div>
    )
  }

}

