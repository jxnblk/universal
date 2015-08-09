
import React from 'react'
import Html from './Html'
import Main from '../components/Main'

export default class Err extends React.Component {

  render() {
    return (
      <Html {...this.props}>
        <Main>
          <h1>Error</h1>
          <pre>{JSON.stringify(this.props, null, '  ')}</pre>
        </Main>
      </Html>
    )
  }

}

