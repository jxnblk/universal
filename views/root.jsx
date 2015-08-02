
import React from 'react'

class Root extends React.Component {

  render() {
    let { html, children } = this.props
    const { scripts } = this.props

    return (
      <html>
        <head>
          <title>iso-hot</title>
        </head>
        <body>
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

