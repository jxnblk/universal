
import React from 'react'
import { Link } from 'react-router'
import styles from '../util/styles'

class A extends React.Component {

  render() {
    let s = {
      link: {
        color: styles.colors.blue[3]
      }
    }
    return (
      <Link {...this.props}
        style={s.link} />
    )
  }
}

export default A

