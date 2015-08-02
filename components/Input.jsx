
import React from 'react'
import styles from '../util/styles'
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
        padding: styles.scale[0]
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

