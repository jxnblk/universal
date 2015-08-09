
import React from 'react'
import { Route, DefaultRoute } from 'react-router'
import App from './views/App'
import Posts from './views/Posts'
import Post from './views/Post'
import NewPost from './views/NewPost'
import EditPost from './views/EditPost'
import DeletePost from './views/DeletePost'
import About from './views/About'
import Default from './views/Default'
import AppState from './views/AppState'

const routes = (
  <Route name='home' path='/' handler={App}>
    <Route name='posts' path='/' handler={Posts} />
    <Route name='about' path='about/?' handler={About} />
    <Route name='state' path='state/?' handler={AppState} />
    <Route name='new-post' path='new/?' handler={NewPost} />
    <Route name='edit-post' path=':id/edit/?' handler={EditPost} />
    <Route name='delete-post' path=':id/delete/?' handler={DeletePost} />
    <Route name='post' path=':id/?' handler={Post} />
    <DefaultRoute handler={Posts} />
  </Route>
)

export default routes

