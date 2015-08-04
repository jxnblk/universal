
import React from 'react'

class Html extends React.Component {

  render() {
    let { children, style } = this.props

    return (
      <html>
        <head>
          <title>iso-hot</title>
          <meta name='viewport'
            content='width=device-width,initial-scale=1' />
        </head>
        <body style={style}>
          {children}
        </body>
      </html>
    )
  }

}

export default Html

