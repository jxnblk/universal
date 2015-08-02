
import commonmark from 'commonmark'
import marked from 'marked'

const reader = new commonmark.Parser()
const writer = new commonmark.HtmlRenderer()

export default {
  render: function (md) {
    if (!md) {
      return false
    }
    // return marked(md)

    const parsed = reader.parse(md)
    return writer.render(parsed)
  }
}

