
import React from 'react'
import { Link } from 'react-router'
import PostStore from '../stores/PostStore'
import markdown from '../util/markdown'
import A from './A'

class Post extends React.Component {

  componentDidMount() {
    let id = parseFloat(this.props.params.id)
    PostStore.getPost(id)
  }

  render() {
    let { post } = this.props
    let { title, id, date, content } = post
    let html = markdown.render(content)

    if (!id) {
      return (
        <div>Loading...</div>
      )
    }

    return (
      <div>
        <h1>{title}</h1>
        <code>{id} {date}</code>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <A to='edit-post' params={{ id: id }}>
          Edit
        </A>
      </div>
    )
  }

}

Post.defaultProps = {
  post: {}
}


export default Post

