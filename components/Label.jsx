
import React from 'react'
import styles from '../util/styles'

class Label extends React.Component {

  render() {
    let { text, children } = this.props
    let s = {
      label: {
        fontSize: styles.scale[2],
        fontWeight: 'bold',
        display: 'block',
        width: '100%',
        marginBottom: styles.scale[0]
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

