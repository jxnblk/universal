
import { assign } from 'lodash'
import React from 'react'

class Logo extends React.Component {

  render() {
    const { style } = this.props
    const size = 128
    let c = size / 2
    let s1 = 5
    let r1 = size / 2 - s1
    let r2 = size * 2/5

    let s = {
      svg: assign(style, {
        display: 'inline-block',
        fill: 'currentcolor'
      }),
      c1: {
        fill: 'none',
        stroke: 'currentcolor',
        strokeWidth: s1,
        vectorEffect: 'non-scaling-stroke',
        opacity: .5
      },
      c2: {
      }
    }

    return (
      <svg
        width={size}
        height={size}
        viewBox={[0,0, size, size].join(' ')}
        style={s.svg}>
        <circle cx={c} cy={c} r={r1} style={s.c1} />
        <circle cx={c} cy={c} r={r2} style={s.c2} />
      </svg>
    )
  }

}

export default Logo

