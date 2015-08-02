
import React from 'react'
import BtnLink from './BtnLink'
import { scale, colors } from '../util/styles'

class Header extends React.Component {

  render() {
    let { mode } = this.props

    let s = {
      root: {
        padding: scale[0],
        borderTopStyle: 'solid',
        borderTopWidth: 1,
        borderTopColor: colors.gray[9]
      }
    }

    return (
      <footer style={s.root}>
        <BtnLink to='home' text='iso-hot' />
        <BtnLink to='new-post' text='New Post' />
        <BtnLink to='about' text='About' />
      </footer>
    )
  }

}

export default Header

