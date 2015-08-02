
import React from 'react'
import PostStore from '../stores/PostStore'
import PostForm from './PostForm'
import A from './A'

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
        <code>{id} {date}</code>
        <PostForm {...this.props}
          method='POST'
          action={`/${id}?_method=PUT`}/ >
        <hr />
        <A to='delete-post'
          params={{ id: id }}
          text='Delete' />
      </div>
    )
  }

}

EditPost.defaultProps = {
  post: {}
}


export default EditPost

