
import React from 'react'
import PostStore from '../stores/PostStore'
import markdown from '../util/markdown'
import A from './A'
import BtnLink from './BtnLink'

class Posts extends React.Component {

  componentDidMount() {
    PostStore.getPosts()
  }

  render() {
    let { posts } = this.props
    let s = {
      ul: {
        listStyle: 'none',
        paddingLeft: 0
      },
      postlink: {
        marginTop: 0,
        marginBottom: 0,
      }
    }

    return (
      <div>
        <h2>Posts</h2>
        <ul style={s.ul}>
          {posts.map(function (post, i) {
            let html = markdown.render(post.content)
            return (
              <li key={i}>
                <BtnLink to='post'
                  params={{ id: post.id }}
                  flush
                  text={(
                    <h2 style={s.postlink}>
                      {post.title}
                    </h2>
                  )} />
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

