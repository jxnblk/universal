
import React from 'react'
import A from './A'
import BtnLink from './BtnLink'
import { scale, colors } from '../util/styles'

class Header extends React.Component {

  render() {
    let { mode } = this.props

    let color = colors.gray[2]
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

    let s = {
      root: {
        padding: scale[0],
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        backgroundColor: color,
        transition: 'background-color .2s ease-out'
      },
      h1: {
        fontSize: scale[5],
        margin: 0
      },
      spacer: {
        flex: '1 0 auto'
      }
    }

    return (
      <header style={s.root}>
        <BtnLink to='posts'>
          <h1 style={s.h1}>
            iso-hot
          </h1>
        </BtnLink>
        <div style={s.spacer} />
        <BtnLink to='new-post' text='New Post' />
        <BtnLink to='about' text='About' />
      </header>
    )
  }

}

export default Header

