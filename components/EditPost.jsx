
import React from 'react'
import PostStore from '../stores/PostStore'
import PostForm from './PostForm'
import BtnLink from './BtnLink'
import A from './A'
import { scale, colors } from '../util/styles'

class EditPost extends React.Component {

  componentDidMount() {
    let id = parseFloat(this.props.params.id)
    PostStore.getPost(id)
  }

  render() {
    let { post } = this.props
    let { title, id, date, content } = post
    let s = {
      flex: {
        display: 'flex'
      },
      meta: {
        flex: '1 0 auto',
        fontSize: 14
      }
    }

    return (
      <div>
        <h1>Edit {title}</h1>
        <PostForm {...this.props}
          method='POST'
          action={`/${id}?_method=PUT`}/ >
        <div style={s.flex}>
          <p style={s.meta}>Posted on {new Date(date).toDateString()}</p>
          <BtnLink to='delete-post'
            params={{ id: id }}
            flush
            color={colors.red[5]}
            text='Delete' />
        </div>
      </div>
    )
  }

}

EditPost.defaultProps = {
  post: {}
}


export default EditPost

