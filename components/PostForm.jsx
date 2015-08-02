
import React from 'react'
import Input from './Input'
import Textarea from './Textarea'

class PostForm extends React.Component {

  render() {
    let { post, children } = this.props
    let { title, id, date, content } = post
    let s = {
    }

    return (
      <form {...this.props}>
        {children}
        <input type='hidden' name='id' value={id} />
        <input type='hidden' name='date' value={date} />
        <Input
          name='title'
          label='Title'
          defaultValue={title}
        />
        <Textarea
          name='content'
          label='Content'
          defaultValue={content}
          rows={24}
        />
        <button>Save</button>
      </form>
    )
  }

}

export default PostForm

