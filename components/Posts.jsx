
import React from 'react'
import { Link } from 'react-router'
import PostStore from '../stores/PostStore'

class Posts extends React.Component {

  componentDidMount() {
    PostStore.getPosts()
  }

  render() {
    let { posts } = this.props

    return (
      <div>
        <h2>Posts</h2>
        <ul>
          {posts.map(function (post, i) {
            return (
              <li key={i}>
                {post.id})
                <h2>
                  <Link to='post' params={{ id: post.id }}>
                    {post.title}
                  </Link>
                </h2>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </li>
            )
          }.bind(this))}
        </ul>
      </div>
    )
  }

}

Posts.defaultProps = {
  posts: []
}

export default Posts

