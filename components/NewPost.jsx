
import React from 'react'
import PostForm from './PostForm'
import PostActions from '../actions/PostActions'

class NewPost extends React.Component {

  componentDidMount() {
    PostActions.clearPost()
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

