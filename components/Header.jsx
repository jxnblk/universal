
import React from 'react'
import { Link } from 'react-router'

class Header extends React.Component {

  render() {
    return (
      <header>
        <h1>
          <Link to='app'>iso-hot</Link>
        </h1>
        <Link to='about'>About</Link>
      </header>
    )
  }

}

export default Header

