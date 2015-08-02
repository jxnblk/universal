
import React from 'react'
import { Link } from 'react-router'
import { scale, colors, radius } from '../util/styles'

class BtnLink extends React.Component {

  render() {
    let { props } = this
    let { text, children, href, color, flush } = props

    let Comp = href ? 'a' : Link
    let s = {
      button: {
        fontFamily: 'inherit',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 1,
        textDecoration: 'none',
        display: 'inline-block',
        padding: flush ? scale[2] + 'px 0' : scale[2],
        cursor: 'pointer',
        borderRadius: radius,
        color: color ? color : 'inherit'
      }
    }

    text = text || children

    return (
      <Comp {...props}
        style={s.button}>
        {text}
      </Comp>
    )
  }

}

export default BtnLink

