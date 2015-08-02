
import React from 'react'
import Root from './root'

export default class Err extends React.Component {

  render() {
    return (
      <Root {...this.props}>
        <h1>Error</h1>
        <pre>{JSON.stringify(this.props, null, '  ')}</pre>
      </Root>
    )
  }

}

