import React, { Component } from 'react';
import Notifications from './Notifications';
import PostList from '../posts/PostList';
import { connect } from 'react-redux'; // Connect the Dashboard component with Redux Store. It's a function that returns a HOC to take in the Dashboard
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

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
  console.log('state:', state);
  return {
    posts: state.firestore.ordered.posts
  }

}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'posts'}
  ])
 )(Dashboard);
// After passing mapStateToProps, we can acces to props.posts inside this component
