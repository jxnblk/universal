
import React from 'react'
import { scale, colors, radius } from '../util/styles'
import Label from './Label'

class Textarea extends React.Component {

  render() {
    let { props } = this
    let { type, name, label } = props

    let s = {
      input: {
        fontFamily: 'monospace',
        fontSize: 16,
        display: 'block',
        width: '100%',
        boxSizing: 'border-box',
        padding: scale[3],
        marginBottom: scale[3],
        whiteSpace: 'prewrap',
        borderColor: colors.gray[9],
        borderRadius: radius
      }
    }

    type = type || 'text'

    return (
      <div>
        <Label htmlFor={name} text={label} />
        <textarea
          {...props}
          type={type}
          name={name}
          style={s.input} />
      </div>
    )
  }

}

export default Textarea

