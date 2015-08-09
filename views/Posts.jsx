
import React from 'react'
import { getPosts } from '../actions'
import Banner from '../components/Banner'
import Main from '../components/Main'
import A from '../components/A'
import BtnLink from '../components/BtnLink'
import { scale, sans, serif, lineHeight } from '../util/styles'

class Posts extends React.Component {

  componentDidMount() {
    this.props.dispatch(getPosts())
  }

  render() {
    let { props } = this
    let { posts } = props
    let s = {
      ul: {
        listStyle: 'none',
        paddingLeft: 0,
        marginBottom: scale[8]
      },
      li: {
        marginBottom: scale[6]
      },
      postlink: {
        marginTop: 0,
        marginBottom: scale[0],
      },
      excerpt: {
        fontFamily: serif,
        lineHeight: lineHeight,
        fontSize: scale[4],
        fontWeight: 'normal'
      },
      more: {
        fontFamily: sans,
        fontSize: 14,
        fontWeight: 'bold'
      },
      postdate: {
        fontSize: scale[2],
        fontWeight: 'normal'
      }
    }

    return (
      <div>
        <Banner {...props} />
        <Main>
          <ul style={s.ul}>
            {posts.map(function (post, i) {
              if (post.draft) {
                return false
              }
              return (
                <li key={i} style={s.li}>
                  <BtnLink to='post'
                    params={{ id: post.id }}
                    flush>
                      <h2 style={s.postlink}>
                        {post.title}
                      </h2>
                      <div style={s.excerpt}>
                        {post.excerpt} <div style={s.more}>(Read more...)</div>
                      </div>
                      {/*
                        <A to='post' params={{ id: post.id }} text='Read more...' />
                      <div style={s.postdate}>{new Date(post.date).toDateString()}</div>
                      */}
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

