
import _ from 'lodash'
import fs from 'fs'
import path from 'path'
import express from 'express'
import graymatter from 'gray-matter'

const router = express.Router()
const POSTDIR = path.join(__dirname, '..', 'data', 'posts/')

let index = 0
let postsCache = readPosts()

router.route('/')
  .get(function (req, res, next) {
    res.locals.data = readPosts()
    next()
  })
  .post(function (req, res, next) {
    console.log('create post', req.body)
    createPost(req.body, function (err, result) {
      console.log(err, result)
      res.redirect('.')
    })
  })

router.route('/:id*')
  .get(function (req, res, next) {
    if (req.params.id === 'new') {
      next('route')
    } else {
      res.locals.data = getPost(parseFloat(req.params.id))
      next()
    }
  })
  .put(function (req, res, next) {
    console.log('PUT req.body', req.body)
    updatePost(req.params.id, req.body, function () {
      res.redirect('.')
    })
  })

// FS IO
function readPosts () {
  let filenames = fs.readdirSync(POSTDIR)
    .filter(function (filename) {
      return filename.match(/\.md$/)
    })
  postsCache = filenames.map(function (filename) {
    let raw = fs.readFileSync(POSTDIR + filename, 'utf8')
    let matter = graymatter(raw)
    return {
      title: matter.data.title,
      id: matter.data.id,
      date: matter.data.date,
      content: matter.content
    }
  })
  return postsCache
}

function getPost (id) {
  let post = _.find(postsCache, { id: id })
  return post
}

function createPost (data, done) {
  let ids = readPosts().map(function (post) {
    return post.id
  })
  let newId = _.max(ids) + 1
  if (!data.title) {
    done('No title provided')
  }
  let filename = _.kebabCase(data.title)
  let md = graymatter(data.content, {
    title: data.title,
    id: newId,
    date: Date.now().toDateString()
  })
  fs.writeFileSync(POSTDIR + filename, md)
  done && done(null, md)
}

function updatePost (id, data, done) {
  console.log('update', id, data)
  done && done()
}

function destroyPost (id) {
  console.log('TO DO: destroy post', id)
}

export default router

