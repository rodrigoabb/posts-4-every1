import React, { Component } from 'react';
import Notifications from './Notifications';
import PostList from '../posts/PostList';
import { connect } from 'react-redux'; // Connect the Dashboard component with Redux Store
// Connect is a function that returns a HOC to take in the Dashboard

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    const { posts } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <PostList posts={ posts }/>
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

// Map our State from the Store to the Props of this Component
// Returns an object that represents which properties are attached to the props of this component
const mapStateToProps = (state) => {
  return {
    posts: state.post.posts
  }

}

export default connect(mapStateToProps)(Dashboard);
// After passing mapStateToProps, we can acces to props.posts inside this component
