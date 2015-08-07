
import React from 'react'
import PostForm from './PostForm'
import { clearPost, createPost, changeMode, changeMessage } from '../actions'

class NewPost extends React.Component {

  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(clearPost())
    this.props.dispatch(changeMode('success'))
  }

  componentWillUnmount() {
    this.props.dispatch(changeMode('default'))
  }

  handleSubmit(e) {
    e.preventDefault()
    let { dispatch, router } = this.props
    let post = {
      title: e.target.title.value,
      content: e.target.content.value,
    }
    dispatch(createPost(post))
      .then(
        () => {
          post = this.props.post
          dispatch(changeMessage({
            text: 'Post created',
            mode: 'success'
          }))
          router.transitionTo('post', { id: post.id }, { m: true })
        },
        (err) => {
          dispatch(changeMessage({
            text: 'Error: ' + err,
            mode: 'danger'
          }))
        }
      )
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

