
import React from 'react'
import BtnLink from './BtnLink'
import NavItem from './NavItem'
import { scale, colors, darken } from '../util/styles'

class Header extends React.Component {

  render() {
    const { mode } = this.props

    const s = {
      root: {
        paddingLeft: scale[0],
        paddingRight: scale[0],
        display: 'flex',
        borderTopStyle: 'solid',
        borderTopWidth: 1,
        borderTopColor: darken[1]
      },
      spacer: {
        flex: '1 0 auto'
      }
    }

    return (
      <footer style={s.root}>
        <NavItem to='posts' text='Universal' />
        <NavItem to='state' text='App State' />
        <div style={s.spacer} />
        <NavItem href='//jxnblk.com' text='Made by Jxnblk' />
      </footer>
    )
  }

}

export default Header

