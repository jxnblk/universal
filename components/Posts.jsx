
import React from 'react'
import PostStore from '../stores/PostStore'
import markdown from '../util/markdown'
import A from './A'

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
            let html = markdown.render(post.content)
            return (
              <li key={i}>
                {post.id})
                <h2>
                  <A to='post' params={{ id: post.id }}>
                    {post.title}
                  </A>
                </h2>
                <div dangerouslySetInnerHTML={{ __html: html }} />
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

