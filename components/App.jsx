
import _ from 'lodash'
import React from 'react'
import { RouteHandler } from 'react-router'
import PostStore from '../stores/PostStore'
import ModeStore from '../stores/ModeStore'
import Main from './Main'
import Header from './Header'
import Footer from './Footer'
import { fontFamily, colors, scale, lineHeight } from '../util/styles'

class App extends React.Component {

  constructor() {
    super()
    this.state = _.assign(
      PostStore.getState(),
      ModeStore.getState()
    )
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount() {
    PostStore.listen(this.onChange)
    ModeStore.listen(this.onChange)
  }

  componentWillUnmount() {
    PostStore.unlisten(this.onChange)
    ModeStore.unlisten(this.onChange)
  }

  onChange(state) {
    this.setState(state)
  }

  render() {
    let { props, state } = this
    let s = {
      root: {
        fontFamily: fontFamily,
        lineHeight: lineHeight,
        color: colors.gray[1]
      }
    }

    return (
      <div style={s.root}>
        <Header {...props} {...state} />
        <Main>
          <RouteHandler {...props} {...state} />
        </Main>
        <Footer />
      </div>
    )
  }

}

export default App

