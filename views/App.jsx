
import React from 'react'
import { RouteHandler } from 'react-router'
import Html from './Html'
import Main from '../components/Main'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Message from '../components/Message'
import { clearMessage } from '../actions'
import { fontFamily, colors, scale, lineHeight } from '../util/styles'

import { connect } from 'react-redux'

class App extends React.Component {

  static willTransitionTo(transition, params, query, done) {
    console.log('willTransitionTo', transition, this.props.dispatch)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.routerState.query.m && !this.props.routerState.query.m) {
      this.props.dispatch(clearMessage())
    }
  }

  render() {
    let { props } = this
    let { dispatch, scripts, message, mode } = props
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
          <Message dispatch={dispatch} message={message} />
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

