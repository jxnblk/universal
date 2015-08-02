
import React from 'react'
import { Link } from 'react-router'
import A from './A'

class Header extends React.Component {

  render() {
    return (
      <header>
        <h1>
          <A to='app'>iso-hot</A>
        </h1>
        <A to='new-post'>New Post</A>
        <A to='about'>About</A>
      </header>
    )
  }

}

export default Header

