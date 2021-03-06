
import React from 'react'
import { Link } from 'react-router'
import { getPost, destroyPost, changeMessage, changeMode } from '../actions'
import markdown from '../util/markdown'
import { colors } from '../util/styles'
import Main from '../components/Main'
import A from '../components/A'
import Button from '../components/Button'
import BtnLink from '../components/BtnLink'

class DeletePost extends React.Component {

  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    let id = parseFloat(this.props.params.id)
    this.props.dispatch(getPost(id))
    this.props.dispatch(changeMode('danger'))
  }

  componentWillUnmount() {
    this.props.dispatch(changeMode('default'))
  }

  handleSubmit(e) {
    e.preventDefault()
    let { dispatch, router } = this.props
    let id = parseFloat(e.target.id.value)
    if (process.env.NODE_ENV === 'development') {
      dispatch(destroyPost(id))
        .then(
          () => {
            dispatch(changeMessage({
              text: 'Post deleted',
              mode: 'danger'
            }))
            router.transitionTo('home', {}, { m: true })
          }
        )
    } else {
      dispatch(destroyPost(id))
      dispatch(changeMessage({
        text: 'Post deleted',
        mode: 'danger'
      }))
      router.transitionTo('home', {}, { m: true })
    }
  }

  render() {
    let { post } = this.props
    let { title, id, date, content } = post
    let html = markdown.render(content)

    let s = {
      h1: {
      }
    }

    if (!id) {
      return (
        <div>Loading...</div>
      )
    }

    return (
      <Main>
        <h1 style={s.h1}>Delete</h1>
        <h2>Are you sure you want to delete {title}?</h2>
        <form
          method='POST'
          action={`/${id}?_method=DELETE`}
          onSubmit={this.handleSubmit}>
          <input type='hidden' name='id' value={post.id} />
          <Button text='Delete' color={colors.red[3]} />
          <BtnLink to='post' params={{ id: id }} text='Cancel' />
        </form>
      </Main>
    )
  }

}

DeletePost.defaultProps = {
  post: {}
}


export default DeletePost

