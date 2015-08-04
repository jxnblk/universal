
import React from 'react'
import PostForm from './PostForm'
import PostActions from '../actions/PostActions'
import PostStore from '../stores/PostStore'
import ModeActions from '../actions/ModeActions'
import MessageActions from '../actions/MessageActions'

class NewPost extends React.Component {

  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    PostActions.clearPost()
    ModeActions.update('success')
  }

  componentWillUnmount() {
    ModeActions.update('default')
  }

  handleSubmit(e) {
    e.preventDefault()
    let router = this.props.router
    let post = {
      title: e.target.title.value,
      content: e.target.content.value,
    }
    PostStore.create(post)
      .then(function () {
        post = PostStore.getState().post
        MessageActions.update({
          text: 'Post created',
          mode: 'success'
        })
        router.transitionTo('post', { id: post.id }, { m: true })
      })
      .catch(function (err) {
        MessageActions.update({
          text: err,
          mode: 'danger'
        })
      })
  }

  render() {
    return (
      <div>
        <h1>New Post</h1>
        <PostForm {...this.props}
          method='POST'
          action='/'
          onSubmit={this.handleSubmit} />
      </div>
    )
  }

}

export default NewPost

