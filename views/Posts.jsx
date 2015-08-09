
import React from 'react'
import { getPosts } from '../actions'
import Banner from '../components/Banner'
import Main from '../components/Main'
import A from '../components/A'
import BtnLink from '../components/BtnLink'
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
        <Banner />
        <Main>
          <h2>Posts</h2>
          <ul style={s.ul}>
            {posts.map(function (post, i) {
              return (
                <li key={i}>
                  <BtnLink to='post'
                    params={{ id: post.id }}
                    flush>
                      <h3 style={s.postlink}>
                        {post.title}
                      </h3>
                      <div style={s.postdate}>{new Date(post.date).toDateString()}</div>
                  </BtnLink>
                </li>
              )
            }.bind(this))}
          </ul>
        </Main>
      </div>
    )
  }

}

Posts.defaultProps = {
  posts: []
}

export default Posts

