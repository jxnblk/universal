
import { assign, clone } from 'lodash'
import React from 'react'
import { colors } from '../util/styles'

const offset1 = 15
const offset2 = 45
const offset3 = 60
const rotationKeyframes = (
`
/* <![CDATA[ */
@-webkit-keyframes rotate1 {
    0% { -webkit-transform: rotate3d(0, 1, 1, ${  0 + offset1}deg) }
   50% { -webkit-transform: rotate3d(0, 1, 1, ${180 + offset1}deg) }
  100% { -webkit-transform: rotate3d(0, 1, 1, ${360 + offset1}deg) }
}
@keyframes rotate1 {
    0% { transform: rotate3d(0, 1, 1, ${  0 + offset1}deg) }
   50% { transform: rotate3d(0, 1, 1, ${180 + offset1}deg) }
  100% { transform: rotate3d(0, 1, 1, ${360 + offset1}deg) }
}

@-webkit-keyframes rotate2 {
    0% { -webkit-transform: rotate3d(1, 0, 1, ${  0 + offset2}deg) }
   50% { -webkit-transform: rotate3d(1, 0, 1, ${180 + offset2}deg) }
  100% { -webkit-transform: rotate3d(1, 0, 1, ${360 + offset2}deg) }
}
@keyframes rotate2 {
    0% { transform: rotate3d(1, 0, 1, ${  0 + offset2}deg) }
   50% { transform: rotate3d(1, 0, 1, ${180 + offset2}deg) }
  100% { transform: rotate3d(1, 0, 1, ${360 + offset2}deg) }
}

@-webkit-keyframes rotate3 {
    0% { -webkit-transform: rotate3d(1, 1, 0, ${  0 + offset3}deg) }
   50% { -webkit-transform: rotate3d(1, 1, 0, ${180 + offset3}deg) }
  100% { -webkit-transform: rotate3d(1, 1, 0, ${360 + offset3}deg) }
}
@keyframes rotate3 {
    0% { transform: rotate3d(1, 1, 0, ${  0 + offset3}deg) }
   50% { transform: rotate3d(1, 1, 0, ${180 + offset3}deg) }
  100% { transform: rotate3d(1, 1, 0, ${360 + offset3}deg) }
}
/* ]]> */
`
).replace(/\n/g, ' ').replace(/\s\s+/g, ' ')

class Logo extends React.Component {

  render() {
    const { style } = this.props

    const size = 128
    let c = size / 2
    let s1 = 5
    let r1 = size / 2 - s1
    let r2 = size * 2/5

    const ringStyles = {
      fill: 'none',
      stroke: 'currentcolor',
      display: 'block',
      strokeWidth: s1,
      vectorEffect: 'non-scaling-stroke',
      opacity: .5
    }

    const s = {
      svg: assign(style, {
        display: 'inline-block',
        fill: 'currentcolor'
      }),
      c1: assign({}, ringStyles, {
        WebkitAnimation: 'rotate1 2s linear 0s infinite',
        animation: 'rotate1 2s linear 0s infinite',
      }),
      c2: assign({}, ringStyles, {
        WebkitAnimation: 'rotate2 2s linear 0s infinite',
        animation: 'rotate2 2s linear 0s infinite',
      }),
      c3: assign({}, ringStyles, {
        WebkitAnimation: 'rotate3 2s linear 0s infinite',
        animation: 'rotate3 2s linear 0s infinite',
      })
    }

    return (
      <svg
        width={size}
        height={size}
        viewBox={[0,0, size, size].join(' ')}
        onClick={this.handleClick}
        className='Logo'
        style={s.svg}>
        <style dangerouslySetInnerHTML={{ __html: rotationKeyframes }} />
        <g transform={`translate(${c}, ${c})`}>
          <circle cx={0} cy={0} r={r1} style={s.c1} />
          <circle cx={0} cy={0} r={r1} style={s.c2} />
          <circle cx={0} cy={0} r={r1} style={s.c3} />
        </g>
      </svg>
    )
  }

}

export default Logo

