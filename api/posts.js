
import fs from 'fs'
import path from 'path'
import express from 'express'

const router = express.Router()
const POSTDIR = path.join(__dirname, '..', 'data/')

let index = 0

router.route('/')
  .get(function (req, res, next) {
    let filenames = fs.readdirSync(POSTDIR)
      .filter(function (filename) {
        return filename.match(/\.md$/)
      })
    let posts = filenames.map(function (filename) {
      return {
        title: 'API Test',
        id: index++,
        content: fs.readFileSync(POSTDIR + filename, 'utf8')
      }
    })
    res.locals.data = posts
    next()
  })

export default router

