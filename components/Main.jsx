
import React from 'react'
import { scale } from '../util/styles'

class Main extends React.Component {

  render() {
    let s = {
      root: {
        padding: scale[5],
        minHeight: '70vh'
      }
    }
    return (
      <main
        children={this.props.children}
        style={s.root} />
    )
  }
}

export default Main

