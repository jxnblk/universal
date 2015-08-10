
import { assign, clone } from 'lodash'
import React from 'react'
import { colors } from '../util/styles'

class Logo extends React.Component {

  constructor() {
    super()
    this.state = {
      rot: 0,
      timer: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.incrementRotation = this.incrementRotation.bind(this)
  }

  incrementRotation() {
    let { rot } = this.state
    rot += 720
    this.setState({ rot })
    let timer = window.setTimeout(function () {
      this.incrementRotation()
    }.bind(this), 5000)
    this.setState({ timer })
  }

  componentDidMount() {
    this.incrementRotation()
  }

  componentWillUnmount() {
    let { timer } = this.state
    window.clearTimeout(timer)
  }

  handleClick(e) {
    console.log('click')
    let { rot } = this.state
    rot += 90
    this.setState({ rot })
  }

  render() {
    const { style } = this.props
    const { rot } = this.state

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
        display: 'block',
        strokeWidth: s1,
        vectorEffect: 'non-scaling-stroke',
        opacity: .5,
        WebkitTransformOrigin: '50% 50%',
        transformOrigin: '50% 50%',
        WebkitTransform: `rotate3d(0, 1, 1, ${rot}deg)`,
        transform:       `rotate3d(0, 1, 1, ${rot}deg)`,
        WebkitTransition: 'transform 5s linear',
        transition: 'transform 5s linear'
      },
      // c4: {
      //   opacity: .0
      // }
    }

    s.c2 = assign(clone(s.c1), {
      WebkitTransform: `rotate3d(1, 0, 0, ${-45+rot}deg)`,
      transform:       `rotate3d(1, 0, 0, ${-45+rot}deg)`,
    })

    s.c3 = assign(clone(s.c1), {
      WebkitTransform: `rotate3d(1, 0, 1, ${90+rot}deg)`,
      transform:       `rotate3d(1, 0, 1, ${90+rot}deg)`,
    })

    return (
      <svg
        width={size}
        height={size}
        viewBox={[0,0, size, size].join(' ')}
        onClick={this.handleClick}
        style={s.svg}>
        <circle cx={c} cy={c} r={r1} style={s.c1} />
        <circle cx={c} cy={c} r={r1} style={s.c2} />
        <circle cx={c} cy={c} r={r1} style={s.c3} />
      </svg>
    )
  }

}

export default Logo

