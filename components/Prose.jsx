
import React from 'react'
import { sans, monospace, serif, scale, darken } from '../util/styles'

const css = (`
.Prose { }
.Prose h1,
.Prose h2,
.Prose h3,
.Prose h4,
.Prose h5,
.Prose h6 {
  font-family: ${sans};
}
.Prose code,
.Prose pre {
  font-size: 75%;
  font-family: ${monospace};
}
.Prose pre {
  padding-left: ${scale[3]}px;
  border-left: 3px solid;
  border-left-color: ${darken[1]};
}
`).replace(/\n/g, '')
  .replace('  ', ' ')

class Prose extends React.Component {

  render() {
    let { children } = this.props

    let s = {
      root: {
        fontFamily: serif,
        fontSize: scale[4] + 2
      }
    }

    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: css }} />
        <div
          {...this.props}
          className='Prose'
          style={s.root}
          children={children} />
      </div>
    )
  }

}

export default Prose

