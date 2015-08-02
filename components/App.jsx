
import React from 'react'
import { RouteHandler } from 'react-router'
import PostStore from '../stores/PostStore'
import Header from './Header'
import styles from '../util/styles'

class App extends React.Component {

  constructor() {
    super()
    this.state = PostStore.getState()
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount() {
    PostStore.listen(this.onChange)
  }

  componentWillUnmount() {
    PostStore.unlisten(this.onChange)
  }

  onChange(state) {
    this.setState(state)
  }

  render() {
    let { props, state } = this
    let s = {
      root: {
        fontFamily: styles.fontFamily,
        color: styles.colors.gray[1]
      }
    }

    return (
      <div style={s.root}>
        <Header />
        <RouteHandler {...props} {...state} />
      </div>
    )
  }

}

export default App

