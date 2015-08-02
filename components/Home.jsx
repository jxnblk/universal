
import React from 'react'
import PostActions from '../actions/PostActions'

class Home extends React.Component {

  handleSubmit(e) {
    e.preventDefault()
    PostActions.create({
      title: e.target.title.value
    })
    e.target.title.value = ''
  }

  delete(e) {
    let id = parseFloat(e.target.value)
    PostActions.destroy(id)
  }

  render() {
    let { posts } = this.props
    return (
      <div>
        <h2>Home</h2>
        <ul>
          {posts.map(function (post, i) {
            return (
              <li key={i}>
                {post.id})
                <h2>{post.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                <button value={post.id}>Edit</button>
                <button onClick={this.delete} value={post.id}>Remove</button>
              </li>
            )
          }.bind(this))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <h3>New Post</h3>
          <label htmlFor='title'>Title</label>
          <input ref='title' type='text' name='title' />
          <button>Add Post</button>
        </form>
      </div>
    )
  }

}

export default Home

