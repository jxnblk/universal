
import _ from 'lodash'
import fs from 'fs'
import path from 'path'
import graymatter from 'gray-matter'

const POSTDIR = path.join(__dirname, '..', 'data', 'posts/')
const TRASHDIR = path.join(__dirname, '..', 'data', 'trash/')

let postsCache

const data = {

  readPosts: function () {
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
  },

  getPost: function(id) {
    let post = _.find(postsCache, { id: id })
    return post
  },

  createPost: function(data, done) {
    let ids = postsCache.map(function (post) {
      return post.id
    })
    let newId = _.max(ids) + 1
    if (!data.title.length) {
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
  },

  updatePost: function(id, data, done) {
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
  },

  destroyPost: function(id, done) {
    id = parseFloat(id)
    let post = _.find(postsCache, { id: id })
    fs.renameSync(POSTDIR + post.filename, TRASHDIR + post.filename)
    postsCache = readPosts()
    done && done()
  }

}

postsCache = data.readPosts()

export default data

