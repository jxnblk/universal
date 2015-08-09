
import { findIndex } from 'lodash'
import React from 'react'
import Router from 'react-router'
import { store } from './store'
import render from './render'
import data from './api/data'

import {
  setRouter,
  setBaseUrl,
  getPosts,
  getPost,
  clearPost,
  createPost,
  updatePost,
  destroyPost
} from './actions'

store.dispatch(setBaseUrl('/universal'))
store.dispatch(getPosts())
const scripts = [ '/universal/bundle.js' ]
const posts = data.readPosts()
const { baseUrl } = store.getState()

if (typeof window !== 'undefined') {
  render(Router.HistoryLocation, scripts, function (component) {
    React.render(component, document)
  })
}

module.exports = function (locals, callback) {

  if (typeof locals.path !== 'undefined') {
    var id = parseFloat(locals.path.split(/\//)[1]) || -1
    var index = findIndex(posts, { id: id })
    if (index > -1) {
      store.dispatch(getPost(id))
    }

    render(baseUrl + locals.path, scripts, function (component) {
      var html = React.renderToString(component)
      callback(null, '<!DOCTYPE html>' + html)
    })

  }

}

