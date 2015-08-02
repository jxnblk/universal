
import React from 'react'
import styles from '../util/styles'

class Label extends React.Component {

  render() {
    let { text, children } = this.props
    let s = {
      label: {
        fontSize: 14,
        fontWeight: 'bold',
        display: 'block',
        width: '100%',
        marginBottom: styles.scale[0] / 2
      }
    }

    text = text || children

    return (
      <label {...this.props}
        style={s.label}>
        {text}
      </label>
    )
  }

}

export default Label

