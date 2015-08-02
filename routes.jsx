
import React from 'react'
import { Route, DefaultRoute } from 'react-router'
import App from './components/App'
import Home from './components/Home'
import About from './components/About'
import Default from './components/Default'

const routes = (
  <Route name='app' path='/' handler={App}>
    <Route name='home' path='home' handler={Home} />
    <Route name='about' path='about' handler={About} />
    <DefaultRoute handler={Default} />
  </Route>
)

export default routes

