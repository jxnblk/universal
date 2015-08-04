
import React from 'react'
import BtnLink from './BtnLink'
import { scale, colors, darken } from '../util/styles'

class Header extends React.Component {

  render() {
    let { mode } = this.props

    let s = {
      root: {
        padding: scale[0],
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
        <BtnLink to='posts' text='universal' />
        <BtnLink to='state' text='App State' />
        <div style={s.spacer} />
        <BtnLink href='//jxnblk.com'>Made by Jxnblk</BtnLink>
      </footer>
    )
  }

}

export default Header

