
import _ from 'lodash'
import React from 'react'
import { RouteHandler } from 'react-router'
import PostStore from '../stores/PostStore'
import ModeStore from '../stores/ModeStore'
import MessageActions from '../actions/MessageActions'
import MessageStore from '../stores/MessageStore'
import Main from './Main'
import Header from './Header'
import Footer from './Footer'
import Message from './Message'
import { fontFamily, colors, scale, lineHeight } from '../util/styles'

class App extends React.Component {

  constructor() {
    super()
    this.state = _.assign(
      PostStore.getState(),
      ModeStore.getState(),
      MessageStore.getState()
    )
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount() {
    PostStore.listen(this.onChange)
    ModeStore.listen(this.onChange)
    MessageStore.listen(this.onChange)
  }

  componentWillUnmount() {
    PostStore.unlisten(this.onChange)
    ModeStore.unlisten(this.onChange)
    MessageStore.unlisten(this.onChange)
  }

  onChange(state) {
    this.setState(state)
  }

  static willTransitionTo(transition, params, query, done) {
    if (!query.m) {
      MessageActions.clear()
      setTimeout(function() {
        done()
      }, 10)
    } else {
      done()
    }
  }

  render() {
    let { props, state } = this
    let { snapshot } = props
    let backgroundColor = 'white'
    let color = colors.gray[1]
    switch (state.mode) {
      case 'danger':
        color = 'white'
        backgroundColor = colors.red[5]
        break
    }

    let s = {
      root: {
        fontFamily: fontFamily,
        lineHeight: lineHeight,
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
      <div style={s.root}>
        <Header {...props} {...state} />
        <div style={s.inner}>
          <Message {...state} />
          <Main>
            <RouteHandler
              {...props}
              {...state}
              key={props.pathname} />
          </Main>
        </div>
        <Footer />
        <script
          id='init'
          type='application/json'
          dangerouslySetInnerHTML={{ __html: snapshot }} />
      </div>
    )
  }

}

export default App

