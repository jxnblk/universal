
import _ from 'lodash'
import fs from 'fs'
import path from 'path'
import express from 'express'
import graymatter from 'gray-matter'

const router = express.Router()
const POSTDIR = path.join(__dirname, '..', 'data', 'posts/')
const TRASHDIR = path.join(__dirname, '..', 'data', 'trash/')

let index = 0
let postsCache = readPosts()

router.route('/')
  .get(function (req, res, next) {
    res.locals.data = readPosts()
    next()
  })
  .post(function (req, res, next) {
    createPost(req.body, function (err, result) {
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
      res.locals.data = getPost(parseFloat(req.params.id))
      next()
    }
  })
  .put(function (req, res, next) {
    updatePost(parseFloat(req.params.id), req.body, function () {
      res.redirect('/' + req.params.id)
    })
  })
  .delete(function (req, res, next) {
    destroyPost(req.params.id, function(err) {
      res.locals.message = 'Post deleted'
      res.redirect('/')
    })
  })

// FS IO
function readPosts () {
  let filenames = fs.readdirSync(POSTDIR)
    .filter(function (filename) {
      return filename.match(/\.md$/)
    })
  let posts = filenames.map(function (filename) {
    let raw = fs.readFileSync(POSTDIR + filename, 'utf8')
    let matter = graymatter(raw)
    return {
      title: matter.data.title,
      id: matter.data.id,
      filename: filename,
      date: matter.data.date,
      content: matter.content
    }
  })
  .sort(function (a, b) {
    return new Date(b.date) - new Date(a.date)
  })
  return posts
}

function getPost (id) {
  let post = _.find(postsCache, { id: id })
  return post
}

function createPost (data, done) {
  let ids = postsCache.map(function (post) {
    return post.id
  })
  let newId = _.max(ids) + 1
  if (!data.title) {
    done('No title provided')
  }
  let filename = _.kebabCase(data.title)
  let post = {
    title: data.title,
    id: newId,
    filename: filename,
    date: new Date() // .toDateString()
  }
  let content = data.content.replace(/^M/, '\n').trim()
  let md = graymatter.stringify(content, post)
  post.content = data.content
  fs.writeFileSync(POSTDIR + filename + '.md', md)
  postsCache = readPosts()
  done && done(null, post)
}

function updatePost (id, data, done) {
  id = parseFloat(id)
  let post = _.find(postsCache, { id: id })
  post = _.assign(post, data)
  let content = post.content.trim()
  delete post.content
  post.id = id
  let md = graymatter.stringify(content, post)
  fs.writeFileSync(POSTDIR + post.filename, md)
  postsCache = readPosts()
  done && done(null, post)
}

function destroyPost (id, done) {
  id = parseFloat(id)
  let post = _.find(postsCache, { id: id })
  fs.renameSync(POSTDIR + post.filename, TRASHDIR + post.filename)
  postsCache = readPosts()
  done && done()
}

export default router

