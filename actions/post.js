
export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const CREATE_POST_FAILED = 'CREATE_POST_FAILED'
export const UPDATE_POST = 'UPDATE_POST'
export const DESTROY_POST = 'DESTROY_POST'

export function getPosts() {
  return (dispatch) => {
    console.log('get posts')
    dispatch({ type: GET_POSTS })

    return req().then (
      (result) => dispatch({ type: GET_POSTS_SUCCESS, result }),
      (error) => dispatch({ type: GET_POSTS_FAILED, error })
    )
  }
}

export function createPost(post) {
  console.log('create post')
  return { type: CREATE_POST, post }
}

export function updatePost(post) {
  console.log('update post')
  return { type: UPDATE_POST, post }
}

export function destroyPost(index) {
  console.log('destroy post')
  return { type: DESTROY_POST, post }
}

