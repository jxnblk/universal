
import React from 'react'
import A from './A'
import BtnLink from './BtnLink'
import { scale, colors } from '../util/styles'

class Header extends React.Component {

  render() {
    let { mode } = this.props

    let color = colors.gray[2]
    if (mode == 'danger') {
      color = colors.red[5]
    }

    let s = {
      root: {
        padding: scale[0],
        color: 'white',
        backgroundColor: color,
        transition: 'background-color .2s ease-out'
      },
      h1: {
        fontSize: scale[5],
        margin: 0
      }
    }

    return (
      <header style={s.root}>
        <BtnLink to='home'>
          <h1 style={s.h1}>
            iso-hot
          </h1>
        </BtnLink>
        <BtnLink to='new-post' text='New Post' />
        <BtnLink to='about' text='About' />
      </header>
    )
  }

}

export default Header

