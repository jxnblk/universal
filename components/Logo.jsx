
import React from 'react'

class Logo extends React.Component {

  render() {
    const size = 128
    let c = size / 2
    let r1 = size / 2
    let r2 = size * 2/5

    let s = {
      svg: {
        display: 'inline-block',
        fill: 'currentcolor'
      },
      c1: {
        fill: 'none',
        stroke: 'currentcolor',
        strokeWidth: 2,
        vectorEffect: 'non-scaling-stroke'
      }
    }

    return (
      <svg
        width={size}
        height={size}
        viewBox={[0,0, size, size].join(' ')}
        style={s.svg}>
        <circle cx={c} cy={c} r={r1} style={s.c1} />

      </svg>
    )
  }

}

export default Logo

