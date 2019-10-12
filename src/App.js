import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import PostDetails from './components/posts/PostDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreatePost from './components/posts/CreatePost';
import { connect } from 'react-redux';

import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';

function App(props) {
  const app = props.auth.isLoaded ?
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={ Dashboard } />
          <Route path='/posts/:id' component= {PostDetails} />
          <Route path='/signin' component= { SignIn } />
          <Route path='/signup' component= { SignUp }/>
          <Route path='/create' component= { CreatePost }/>
        </Switch>
      </div>
    </BrowserRouter>
    :
    null;

  return app;
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}
export default connect(mapStateToProps)(App);
