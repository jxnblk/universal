
import React from 'react'
import PostForm from './PostForm'
import PostActions from '../actions/PostActions'
import PostStore from '../stores/PostStore'
import ModeActions from '../actions/ModeActions'

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

  componentDidUpdate() {
    let { router } = this.props
    let { id } = this.props.post
    if (id) {
      setTimeout(function () {
        router.transitionTo('post', { id: id })
      }, 200)
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    var post = {
      title: e.target.title.value,
      content: e.target.content.value,
    }
    PostStore.create(post)
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

