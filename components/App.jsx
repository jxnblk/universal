
import React from 'react'
import { RouteHandler } from 'react-router'
import Html from './Html'
import Main from './Main'
import Header from './Header'
import Footer from './Footer'
import Message from './Message'
import { fontFamily, colors, scale, lineHeight } from '../util/styles'

import { connect } from 'react-redux'

class App extends React.Component {

  static willTransitionTo(transition, params, query, done) {
    if (!query.m) {
      // MessageActions.clear()
      setTimeout(function() {
        done()
      }, 10)
    } else {
      done()
    }
  }

  render() {
    let { props } = this
    let { dispatch, scripts, mode } = props
    let backgroundColor = 'white'
    let color = colors.gray[1]
    switch (mode) {
      case 'danger':
        color = 'white'
        backgroundColor = colors.red[5]
        break
    }

    let s = {
      root: {
        fontFamily: fontFamily,
        lineHeight: lineHeight,
        margin: 0,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        color: color,
        backgroundColor: backgroundColor,
        transition: 'background-color .2s ease-out'
      },
      inner: {
        position: 'relative',
        flex: '1 0 auto'
      }
    }

    return (
      <Html style={s.root}>
        <Header {...props} />
        <div style={s.inner}>
          <Message />
          <Main>
            <RouteHandler
              {...props}
              key={props.pathname} />
          </Main>
        </div>
        <Footer />
        <script
          id='init'
          type='application/json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(props) }} />
        {scripts.map((src, i) => <script key={i} src={src} />)}
      </Html>
    )
  }

}

function select (state) {
  return state
}

export default connect(select)(App)

