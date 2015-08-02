
import React from 'react'
import { serif, scale } from '../util/styles'

class Prose extends React.Component {

  render() {
    let { children } = this.props
    let s = {
      root: {
        fontFamily: serif,
        fontSize: scale[4]
      }
    }

    return (
      <div
        {...this.props}
        style={s.root}
        children={children} />
    )
  }

}

export default Prose

