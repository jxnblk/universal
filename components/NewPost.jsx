
import React from 'react'
import PostForm from './PostForm'

class NewPost extends React.Component {

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

