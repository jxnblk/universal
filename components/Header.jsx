
import React from 'react'
import A from './A'
import BtnLink from './BtnLink'
import NavItem from './NavItem'
import { scale, colors } from '../util/styles'

class Header extends React.Component {

  render() {
    const { mode } = this.props

    let color = colors.blue[1]
    switch (mode) {
      case 'info':
        color = colors.blue[4]
        break
      case 'success':
        color = colors.green[3]
        break
      case 'danger':
        color = colors.red[4]
        break
    }

    const s = {
      root: {
        paddingLeft: scale[0],
        paddingRight: scale[0],
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        backgroundColor: color,
        transition: 'background-color .2s ease-out'
      },
      spacer: {
        flex: '1 0 auto'
      }
    }

    return (
      <header style={s.root}>
        <NavItem to='posts' text='Universal' />
        <div style={s.spacer} />
        <NavItem to='new-post' text='New Post' />
        <NavItem href='https://github.com/jxnblk/universal' text='GitHub' />
      </header>
    )
  }

}

export default Header

