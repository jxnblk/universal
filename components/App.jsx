
import React from 'react'
import { RouteHandler } from 'react-router'
import PostStore from '../stores/PostStore'
import Header from './Header'

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

    return (
      <div>
        <Header />
        <RouteHandler {...props} {...state} />
      </div>
    )
  }

}

export default App

