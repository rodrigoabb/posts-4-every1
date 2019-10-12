// With thunk we return a function - We pause the dispatch
export const createPost = (post) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make asynch call to db
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('posts').add({
      ...post,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date(),
    }).then(() => {
      dispatch({ type: 'CREATE_POST', post });
    }).catch((err) => {
      dispatch({type: 'CREATE_POST_ERROR', err })
    });
  }
}

// Without using thunk, we return the action (for example, as an object)
// export const createPost = (post) => {
//   return {
//     type: 'ADD_POST',
//     post: post
//   }
// }
