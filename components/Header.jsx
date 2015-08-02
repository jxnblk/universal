
import React from 'react'
import { Link } from 'react-router'

class Header extends React.Component {

  render() {
    return (
      <header>
        <h1>
          <Link to='app'>
            ISO HOT
            iso-hot
          </Link>
        </h1>
        <Link to='home'>Home</Link>
        <Link to='about'>About</Link>
      </header>
    )
  }

}

export default Header

