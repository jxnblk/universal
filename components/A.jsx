
import React from 'react'
import { Link } from 'react-router'
import styles from '../util/styles'

class A extends React.Component {

  render() {
    let { text, children } = this.props
    let s = {
      link: {
        color: styles.colors.blue[3]
      }
    }
    text = text || children

    return (
      <Link {...this.props}
        style={s.link}>
        {text}
      </Link>
    )
  }
}

export default A

