
import React from 'react'
import { scale, colors, radius } from '../util/styles'
import Label from './Label'

class Input extends React.Component {

  render() {
    let { props } = this
    let { type, name, label } = props

    let s = {
      input: {
        fontSize: 16,
        display: 'block',
        width: '100%',
        boxSizing: 'border-box',
        padding: scale[0],
        marginBottom: scale[3],
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: colors.gray[9],
        borderRadius: radius
      }
    }

    type = type || 'text'

    return (
      <div>
        <Label htmlFor={name} text={label} />
        <input
          {...props}
          type={type}
          name={name}
          style={s.input} />
      </div>
    )
  }

}

export default Input

