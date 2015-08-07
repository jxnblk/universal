
import React from 'react'
import { getPosts } from '../actions'
import markdown from '../util/markdown'
import A from './A'
import BtnLink from './BtnLink'
import { scale } from '../util/styles'

class Posts extends React.Component {

  componentDidMount() {
    this.props.dispatch(getPosts())
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
        marginBottom: scale[0],
      },
      postdate: {
        fontSize: scale[2],
        fontWeight: 'normal'
      }
    }

    return (
      <div>
        <h1>Posts</h1>
        <ul style={s.ul}>
          {posts.map(function (post, i) {
            let html = markdown.render(post.content)
            return (
              <li key={i}>
                <BtnLink to='post'
                  params={{ id: post.id }}
                  flush>
                    <h2 style={s.postlink}>
                      {post.title}
                    </h2>
                    <div style={s.postdate}>{new Date(post.date).toDateString()}</div>
                </BtnLink>
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

