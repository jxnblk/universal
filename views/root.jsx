
import React from 'react'

class Root extends React.Component {

  render() {
    let { html, children, scripts } = this.props

    let s = {
      body: {
        margin: 0
      }
    }

    return (
      <html>
        <head>
          <title>iso-hot</title>
          <meta name='viewport' content='width=device-width,initial-scale=1' />
        </head>
        <body style={s.body}>
          <div id='app'
            dangerouslySetInnerHTML={{ __html: html }} />
          {children}
          {scripts.map((src, i) => <script key={i} src={src} />)}
        </body>
      </html>
    )
  }

}

export default Root

