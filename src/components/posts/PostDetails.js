import React from 'react'

const PostDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section post-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Post Title - {id} </span>
          <p>Lorem ipsum....</p>
        </div>
        <div className="card-action grey-ligthen-4 grey-text">
          <div>Posted by Rodri</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  )
}

export default PostDetails
