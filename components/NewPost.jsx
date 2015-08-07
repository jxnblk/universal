
import React from 'react'
import PostForm from './PostForm'
import { clearPost, createPost } from '../actions'

class NewPost extends React.Component {

  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(clearPost())
    // ModeActions.update('success')
  }

  componentWillUnmount() {
    // ModeActions.update('default')
  }

  handleSubmit(e) {
    e.preventDefault()
    let router = this.props.router
    let post = {
      title: e.target.title.value,
      content: e.target.content.value,
    }
    this.props.dispatch(createPost(post))
      .then(() => {
        post = this.props.post
        router.transitionTo('post', { id: post.id }, { m: true })
      })
    /*
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
    */
  }

  render() {
    const { post, dispatch } = this.props
    return (
      <div>
        <h1>New Post</h1>
        <PostForm
          {...this.props}
          post={post}
          method='POST'
          action='/'
          onSubmit={this.handleSubmit} />
      </div>
    )
  }

}

export default NewPost

