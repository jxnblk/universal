
import { assign, clone } from 'lodash'
import React from 'react'
import { Link } from 'react-router'
import { scale, colors, darken } from '../util/styles'

class BtnLink extends React.Component {

  render() {
    let { props } = this
    let { text, children, href, color } = props

    let Comp = href ? 'a' : Link
    let s = {
      button: {
        fontFamily: 'inherit',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 1,
        textDecoration: 'none',
        display: 'inline-block',
        padding: `${scale[4]}px ${scale[2]}px`, // scale[2] + 'px ' ,
        cursor: 'pointer',
        color: color ? color : 'inherit'
      }
    }

    text = text || children

    return (
      <Comp {...props}
        activeStyle={assign(clone(s.button), {
          backgroundColor: darken[2]
        })}
        style={s.button}>
        {text}
      </Comp>
    )
  }

}

export default BtnLink

