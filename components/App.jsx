
import React from 'react'
import { RouteHandler } from 'react-router'
import Header from './Header'

class App extends React.Component {

  render() {
    let { props } = this

    return (
      <div>
        <Header />
        <RouteHandler {...props} />
      </div>
    )
  }

}

export default App

