
import { assign } from 'lodash'
import React from 'react'
import { getPost, updatePost, changeMode, changeMessage } from '../actions'
import PostForm from '../components/PostForm'
import BtnLink from '../components/BtnLink'
import A from '../components/A'
import { scale, colors } from '../util/styles'

class EditPost extends React.Component {

  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    let id = parseFloat(this.props.params.id)
    this.props.dispatch(getPost(id))
    this.props.dispatch(changeMode('info'))
  }

  componentWillUnmount() {
    this.props.dispatch(changeMode('default'))
  }

  handleSubmit(e) {
    e.preventDefault()
    let { router, dispatch } = this.props
    let post = assign({}, this.props.post, {
      title: e.target.title.value,
      content: e.target.content.value,
    })
    if (process.env.NODE_ENV === 'development') {
      dispatch(updatePost(post.id, post))
        .then(
          () => {
            dispatch(changeMessage({
              text: 'Updated ' + post.title,
              mode: 'success'
            }))
            router.transitionTo('post', { id: post.id }, { m: true })
          },
          (err) => {
            dispatch(changeMessage({
              text: 'Error: ' + err,
              mode: 'danger'
            }))
          }
        )
    } else {
      dispatch(updatePost(post.id, post))
      dispatch(changeMessage({
        text: 'Updated ' + post.title,
        mode: 'success'
      }))
      router.transitionTo('post', { id: post.id }, { m: true })
    }
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

    if (!id) {
      return false
    }

    return (
      <div>
        <h1>Edit</h1>
        <PostForm
          {...this.props}
          post={post}
          method='POST'
          action={`/${id}?_method=PUT`}
          onSubmit={this.handleSubmit} />
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
  post: {
    id: false,
    title: '',
    content: '',
    date: Date.now()
  }
}


export default EditPost

