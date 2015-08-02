
import React from 'react'
import PostStore from '../stores/PostStore'
import PostForm from './PostForm'
import BtnLink from './BtnLink'
import A from './A'
import { colors } from '../util/styles'

class EditPost extends React.Component {

  componentDidMount() {
    let id = parseFloat(this.props.params.id)
    PostStore.getPost(id)
  }

  render() {
    let { post } = this.props
    let { title, id, date, content } = post

    return (
      <div>
        <h1>Edit {title}</h1>
        <PostForm {...this.props}
          method='POST'
          action={`/${id}?_method=PUT`}/ >
        <p>Posted on {date}</p>
        <BtnLink to='delete-post'
          params={{ id: id }}
          flush
          color={colors.red[5]}
          text='Delete' />
      </div>
    )
  }

}

EditPost.defaultProps = {
  post: {}
}


export default EditPost

