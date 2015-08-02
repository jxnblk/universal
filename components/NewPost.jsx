
import React from 'react'
import PostForm from './PostForm'
import PostActions from '../actions/PostActions'
import ModeActions from '../actions/ModeActions'

class NewPost extends React.Component {

  componentDidMount() {
    PostActions.clearPost()
    ModeActions.update('success')
  }

  componentWillUnmount() {
    ModeActions.update('default')
  }

  render() {
    return (
      <div>
        <h1>New Post</h1>
        <PostForm {...this.props}
          method='POST' action='/api/posts' />
      </div>
    )
  }

}

export default NewPost

