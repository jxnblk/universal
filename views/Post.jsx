
import React from 'react'
import { Link } from 'react-router'
import { clearPost, getPost } from '../actions'
import markdown from '../util/markdown'
import Main from '../components/Main'
import Prose from '../components/Prose'
import A from '../components/A'
import BtnLink from '../components/BtnLink'
import { scale, serif } from '../util/styles'

class Post extends React.Component {

  componentDidMount() {
    let id = parseFloat(this.props.params.id)
    this.props.dispatch(getPost(id))
  }

  componentWillUnmount() {
    this.props.dispatch(clearPost())
  }

  render() {
    let { post } = this.props
    let { title, id, date, updated, excerpt, content } = post
    let html = markdown.render(content)

    let s = {
      root: {
      },
      h1: {
        // marginBottom: 0
      },
      excerpt: {
        fontFamily: serif,
        fontSize: scale[5]
      },
      flex: {
        display: 'flex',
        marginTop: scale[8],
        marginBottom: scale[8]
      },
      meta: {
        flex: '1 0 auto',
        fontSize: 14,
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
      <Main>
        <h1 style={s.h1}>{title}</h1>
        {excerpt ? <div style={s.excerpt}>{excerpt}</div> : false}
        <Prose dangerouslySetInnerHTML={{ __html: html }} />
        <div style={s.flex}>
          <p style={s.meta}>{new Date(updated).toDateString()}</p>
          <BtnLink to='edit-post'
            params={{ id: id }}
            flush>
            Edit
          </BtnLink>
        </div>
      </Main>
    )
  }

}

Post.defaultProps = {
  post: {}
}


export default Post

