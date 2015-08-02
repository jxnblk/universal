
import React from 'react'
import { Route, DefaultRoute } from 'react-router'
import App from './components/App'
import Posts from './components/Posts'
import Post from './components/Post'
import About from './components/About'
import Default from './components/Default'

const routes = (
  <Route name='app' path='/' handler={App}>
    <Route name='about' path='about' handler={About} />
    <Route name='post' path=':id' handler={Post} />
    <DefaultRoute handler={Posts} />
  </Route>
)

export default routes

