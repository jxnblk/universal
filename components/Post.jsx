
import React from 'react'
import { Link } from 'react-router'
import PostStore from '../stores/PostStore'
import markdown from '../util/markdown'
import Prose from './Prose'
import A from './A'
import BtnLink from './BtnLink'
import { scale } from '../util/styles'

class Post extends React.Component {

  componentDidMount() {
    let id = parseFloat(this.props.params.id)
    PostStore.getPost(id)
  }

  render() {
    let { post } = this.props
    let { title, id, date, content } = post
    let html = markdown.render(content)

    let s = {
      root: {
      },
      h1: {
        marginBottom: 0
      },
      date: {
        marginTop: scale[0],
        marginBottom: scale[0],
      }
    }

    if (!id) {
      return (
        <div>Loading...</div>
      )
    }

    return (
      <div>
        <h1 style={s.h1}>{title}</h1>
        <p style={s.date}>{new Date(date).toDateString()}</p>
        <Prose dangerouslySetInnerHTML={{ __html: html }} />
        <BtnLink to='edit-post'
          params={{ id: id }}
          flush>
          Edit
        </BtnLink>
      </div>
    )
  }

}

Post.defaultProps = {
  post: {}
}


export default Post

