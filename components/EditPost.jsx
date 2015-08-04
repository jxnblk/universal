
import _ from 'lodash'
import React from 'react'
import PostStore from '../stores/PostStore'
import PostForm from './PostForm'
import ModeActions from '../actions/ModeActions'
import MessageActions from '../actions/MessageActions'
import BtnLink from './BtnLink'
import A from './A'
import { scale, colors } from '../util/styles'

class EditPost extends React.Component {

  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    let id = parseFloat(this.props.params.id)
    PostStore.getPost(id)
    ModeActions.update('info')
  }

  componentWillUnmount() {
    ModeActions.update('default')
  }

  handleSubmit(e) {
    e.preventDefault()
    let router = this.props.router
    let post = _.assign(this.props.post, {
      title: e.target.title.value,
      content: e.target.content.value,
    })
    PostStore.update(post.id, post)
      .then(function () {
        router.transitionTo('post', { id: post.id }, { m: true })
        MessageActions.update({
          text: 'Updated ' + post.title,
          mode: 'success'
        })
      })
      .catch(function (err) {
        MessageActions.update({
          text: err,
          mode: 'danger'
        })
      })
  }

  render() {
    let { post } = this.props
    let { title, id, date, content } = post
    let s = {
      flex: {
        display: 'flex'
      },
      meta: {
        flex: '1 0 auto',
        fontSize: 14
      }
    }

    if (!id) {
      return false
    }

    return (
      <div>
        <h1>Edit</h1>
        <PostForm {...this.props}
          method='POST'
          action={`/${id}?_method=PUT`}
          onSubmit={this.handleSubmit} />
        <div style={s.flex}>
          <p style={s.meta}>Posted on {new Date(date).toDateString()}</p>
          <BtnLink to='delete-post'
            params={{ id: id }}
            flush
            color={colors.red[5]}
            text='Delete' />
        </div>
      </div>
    )
  }

}

EditPost.defaultProps = {
  post: {}
}


export default EditPost

