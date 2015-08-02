
import React from 'react'
import { Route, DefaultRoute } from 'react-router'
import App from './components/App'
import Posts from './components/Posts'
import Post from './components/Post'
import NewPost from './components/NewPost'
import EditPost from './components/EditPost'
import DeletePost from './components/DeletePost'
import About from './components/About'
import Default from './components/Default'

const routes = (
  <Route name='app' path='/' handler={App}>
    <Route name='about' path='about' handler={About} />
    <Route name='new-post' path='new' handler={NewPost} />
    <Route name='edit-post' path=':id/edit' handler={EditPost} />
    <Route name='delete-post' path=':id/delete' handler={DeletePost} />
    <Route name='post' path=':id' handler={Post} />
    <DefaultRoute handler={Posts} />
  </Route>
)

export default routes

