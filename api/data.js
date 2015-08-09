
import _ from 'lodash'
import fs from 'fs'
import path from 'path'
import graymatter from 'gray-matter'
import postsJson from './posts.json'

const POSTDIR = path.join(__dirname, '..', 'data', 'posts/')
const TRASHDIR = path.join(__dirname, '..', 'data', 'trash/')

let CACHE = postsJson || []

const Data = {

  readPosts: function () {
    try {
      let filenames = fs.readdirSync(POSTDIR)
        .filter(function (filename) {
          return filename.match(/\.md$/)
        })
      CACHE = filenames.map(function (filename) {
        let raw = fs.readFileSync(POSTDIR + filename, 'utf8')
        let matter = graymatter(raw)
        return {
          title: matter.data.title,
          id: matter.data.id,
          filename: filename,
          date: matter.data.date,
          updated: matter.data.updated,
          excerpt: matter.data.excerpt,
          draft: matter.data.draft || false,
          content: matter.content
        }
      })
      .sort(function (a, b) {
        return a.index - b.index
      })
      fs.writeFileSync(path.join(__dirname, 'posts.json'), JSON.stringify(CACHE))
    } catch (e) {
      console.log('Static read from memory', CACHE.length)
      CACHE = CACHE
        .sort(function (a, b) {
          return a.index - b.index
        })
    }
    return CACHE
  },

  getPost: function(id) {
    id = parseFloat(id)
    let post = _.find(CACHE, { id: id })
    return post
  },

  createPost: function(data, done) {
    let ids = CACHE.map(function (post) {
      return post.id
    })
    let newId = _.max(ids) + 1
    if (!data.title.length) {
      done('Post must have a title')
    }
    let filename = _.kebabCase(data.title)
    let post = {
      title: data.title,
      id: newId,
      filename: filename,
      excerpt: data.excerpt || null,
      updated: new Date(),
      date: new Date()
    }
    let content = data.content.replace(/^M/, '\n').trim()
    let md = graymatter.stringify(content, post)
    post.content = data.content
    try {
      fs.writeFileSync(POSTDIR + filename + '.md', md)
      Data.readPosts()
    } catch (e) {
      console.log('Create post in memory')
      CACHE.push(post)
    }
    done && done(null, post)
    return post
  },

  updatePost: function(id, data, done) {
    id = parseFloat(id)
    let post = _.find(CACHE, { id: id })
    if (!data.title.length) {
      done('Post must have a title')
    }
    post = _.assign(post, data)
    post.updated = new Date()
    let content = post.content.trim()
    delete post.content
    post.id = id
    let md = graymatter.stringify(content, post)
    try {
      fs.writeFileSync(POSTDIR + post.filename, md)
      Data.readPosts()
    } catch (e) {
      console.log('Update post in memory')
      // let index = _.findIndex(CACHE, { id: id })
    }
    post.content = content
    done && done(null, post)
    return post
  },

  destroyPost: function(id, done) {
    id = parseFloat(id)
    let post = _.find(CACHE, { id: id })
    try {
      fs.renameSync(POSTDIR + post.filename, TRASHDIR + post.filename)
      Data.readPosts()
    } catch (e) {
      console.log('Destroy post in memory')
      let index = _.findIndex(CACHE, { id: id })
      CACHE.splice(index, 1)
    }
    done && done(null, 'Post deleted ' + id)
  }

}

Data.readPosts()

export default Data

