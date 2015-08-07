
import React from 'react'
import { clearMessage } from '../actions'
import { scale, colors } from '../util/styles'

class Message extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.dispatch(clearMessage())
  }

  render() {
    let { props } = this
    let { message } = props
    if (!message) {
      return false
    }

    let color = colors.gray[3]

    switch(message.mode) {
      case 'blue':
      case 'info':
        color = colors.blue[4]
        break
      case 'red':
      case 'danger':
        color = colors.red[5]
        break
      case 'green':
      case 'success':
        color = colors.green[4]
        break
    }

    let s = {
      root: {
        fontWeight: 'bold',
        padding: scale[3],
        color: 'white',
        backgroundColor: color,
        cursor: 'pointer'
      }
    }

    return (
      <div style={s.root}
        onClick={this.handleClick}>
        {message.text}
      </div>
    )
  }

}

export default Message

