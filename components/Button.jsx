
import React from 'react'
import { scale, colors, radius } from '../util/styles'

class Button extends React.Component {

  render() {
    let { props } = this
    let { text, children, color } = props

    let s = {
      button: {
        fontFamily: 'inherit',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 1,
        padding: scale[2],
        cursor: 'pointer',
        border: 'none',
        borderRadius: radius,
        color: 'white',
        backgroundColor: color ? color : colors.blue[4]
      }
    }

    text = text || children

    return (
      <button {...props}
        style={s.button}>
        {text}
      </button>
    )
  }

}

export default Button

