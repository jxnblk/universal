
import React from 'react'
import commonmark from 'commonmark'
import PostStore from '../stores/PostStore'

class Post extends React.Component {

  componentDidMount() {
    let id = parseFloat(this.props.params.id)
    PostStore.getPost(id)
  }

  render() {
    let { post } = this.props
    let { title, id, date, content } = post
    return (
      <div>
        <h1>{title}</h1>
        <code>{id} {date}</code>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    )
  }

}

Post.defaultProps = {
  post: {}
}


export default Post

