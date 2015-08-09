
import React from 'react'
import { futura, scale, colors } from '../util/styles'
import Logo from './Logo'

class Banner extends React.Component {

  render() {
    let s = {
      root: {
        textAlign: 'center',
        paddingTop: scale[11],
        paddingBottom: scale[11],
        paddingLeft: scale[6],
        paddingRight: scale[6],
        color: 'white',
        backgroundColor: colors.blue[2]
      },
      logo: {
        color: colors.blue[5]
      },
      h1: {
        fontFamily: futura,
        fontWeight: 'normal',
        textTransform: 'uppercase',
        letterSpacing: '.2em',
        marginRight: '-.2em'
      },
      sub: {
        fontFamily: futura,
        fontSize: scale[2],
        fontWeight: 'normal',
        textTransform: 'uppercase',
        letterSpacing: '.1em'
      }
    }
    return (
      <div style={s.root}>
        <Logo style={s.logo} />
        <h1 style={s.h1}>Universal</h1>
        <div style={s.sub}>
          Server + Client + Static
        </div>
      </div>
    )
  }

}

export default Banner

