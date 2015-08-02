
import React from 'react'
import { Link } from 'react-router'
import { scale, colors, radius } from '../util/styles'

class BtnLink extends React.Component {

  render() {
    let { props } = this
    let { text, children, color, flush } = props

    let s = {
      button: {
        fontFamily: 'inherit',
        fontWeight: 'bold',
        fontSize: scale[3],
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
      <Link {...props}
        style={s.button}>
        {text}
      </Link>
    )
  }

}

export default BtnLink

