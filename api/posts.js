
import _ from 'lodash'
import fs from 'fs'
import path from 'path'
import express from 'express'
import graymatter from 'gray-matter'

import data from './data'

const router = express.Router()

router.route('/')
  .get(function (req, res, next) {
    res.locals.data = data.readPosts()
    next()
  })
  .post(function (req, res, next) {
    data.createPost(req.body, function (err, result) {
      if (err) {
        console.log(err, result)
        next()
      }
      res.locals.data = result
      next()
    })
  })

router.route('/:id*')
  .get(function (req, res, next) {
    if (req.params.id === 'new') {
      next('route')
    } else {
      res.locals.data = data.getPost(req.params.id)
      next()
    }
  })
  .put(function (req, res, next) {
    console.log('api update post')
    data.updatePost(req.params.id, req.body, function (err, response) {
      console.log('api updated', response)
      res.locals.data = response
      next()
    })
  })
  .delete(function (req, res, next) {
    data.destroyPost(req.params.id, function(err) {
      res.locals.message = 'Post deleted'
      next()
    })
  })


export default router

