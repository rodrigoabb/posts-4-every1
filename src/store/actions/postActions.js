// With thunk we return a function - We pause the dispatch
export const createPost = (post) => {
  return (dispatch, getState) => {
    // make asynch call to db
    dispatch({ type: 'CREATE_POST', post });
  }
}

// Without using thunk, we return the action (for example, as an object)
// export const createPost = (post) => {
//   return {
//     type: 'ADD_POST',
//     post: post
//   }
// }
