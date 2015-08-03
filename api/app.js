
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import posts from './posts'

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/posts', posts)

app.use('/', function (req, res, next) {
  res.json(res.locals.data)
})

app.use(function(err, req, res, next) {
  console.log(err)
  res.status(err.status || 500)
  res.json(err)
})

app.set('port', '3030')

app.listen(app.get('port'), function () {
  console.log('Express API server listening on port ' + app.get('port'))
})

