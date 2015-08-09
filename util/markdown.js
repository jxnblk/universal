
import commonmark from 'commonmark'

const reader = new commonmark.Parser()
const writer = new commonmark.HtmlRenderer()

export default {
  render: function (md) {
    if (!md) {
      return false
    }

    const parsed = reader.parse(md)
    return writer.render(parsed)
  }
}

