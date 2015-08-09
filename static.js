
import { findIndex } from 'lodash'
import React from 'react'
import Router from 'react-router'
import render from './render'
import { store } from './store'
import data from './api/data'

import {
  setRouter,
  getPosts,
  getPost,
  clearPost,
  createPost,
  updatePost,
  destroyPost
} from './actions'

store.dispatch(getPosts())
const scripts = [ '/bundle.js' ]
const posts = data.readPosts()

if (typeof window !== 'undefined') {
  render(Router.HistoryLocation, scripts, function (component) {
    React.render(component, doument)
  })
}

module.exports = function render(locals, callback) {

  if (typeof locals.path !== 'undefined') {
    var id = parseFloat(locals.path.split(/\//)[1]) || -1
    var index = findIndex(posts, { id: id })
    if (index > -1) {
      store.dispatch(getPost(id))
    }

    render(locals.path, scripts, function (component) {
      var html = React.renderToString(component)
      callback(null, '<!DOCTYPE html>' + html)
    })

  }

}

