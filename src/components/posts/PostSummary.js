import React from 'react';

const PostSummary = ({post}) => {
  return (
    <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{ post.title }</span>
          <p>Posted by Rodri</p>
          <p className="grey-text"> 3erd September, 2am</p>
        </div>
      </div>
  )
}

export default PostSummary;
