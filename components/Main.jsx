
import React from 'react'
import { scale } from '../util/styles'

class Main extends React.Component {

  render() {
    let s = {
      root: {
        paddingTop: scale[7],
        paddingBottom: scale[7],
        paddingLeft: scale[5],
        paddingRight: scale[5],
        flex: '1 0 auto'
      },
      inner: {
        maxWidth: 640,
        margin: 'auto'
      }
    }
    return (
      <main style={s.root}>
        <div style={s.inner}
          children={this.props.children} />
      </main>
    )
  }
}

export default Main

