import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';
import M from 'materialize-css';

const PASSWORD_MINIMUM_LENGTH = 6;

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    errors: {
      email: '',
      password: ''
    },
    shouldValidate: {
      email: false,
      password: false,
    },
    authError: this.props.authError,
    isLoading: false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.validateFields();

    if (!this.state.errors.email && !this.state.errors.password) {
      const { email, password } = this.state;
      this.props.signIn({ email, password});
    }
  }

  onBlur = (e) => {
    if (e.target.id === 'email') {
      this.validateEmail();
    } else if (e.target.id === 'password') {
      this.validatePassword();
    }
  }

  validateFields = () => {
    this.validateEmail();
    this.validatePassword();
  }

  validateEmail = () => {
    const { errors, shouldValidate } = { ...this.state };
    let errorMessage = '';
    if (!this.state.email || this.state.email === '') {
      errorMessage = 'This field required!';
    } else if (!this.emailValidation(this.state.email)) {
      errorMessage = 'Invalid email';
    }
    errors.email = errorMessage;
    shouldValidate.email = true;
    this.setState({
      errors,
      shouldValidate
    });
  }

  validatePassword = () => {
    const { errors, shouldValidate } = { ...this.state };
    let errorMessage = '';
    if (!this.state.password || this.state.password === '') {
      errorMessage = 'This field required!';
    } else if (this.state.password.length < PASSWORD_MINIMUM_LENGTH) {
      errorMessage = `Password needs to be at least ${PASSWORD_MINIMUM_LENGTH} characters`;
    }
    errors.password = errorMessage;
    shouldValidate.password = true;
    this.setState({
      errors,
      shouldValidate
    });
  }

  onFocus = () => {
    if (this.state.authError) {
      this.clearFields();
      this.setState({
        authError: '',
      })
    }
  }

  clearFields = () => {
    this.setState({
      email: '',
      password: ''
    });
  }


  emailValidation = (value) => {
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const stringValue = `${value}`;
    const matchResult = stringValue.match(pattern);
    if (!matchResult) {
      return false;
    }
    return matchResult[0] === stringValue || false;
  };

  getClassName = (attr) => {
    let className = null;
    if (!this.state.shouldValidate[attr]) {
      className = ''
    } else if (!this.state.errors[attr]) {
      className = 'valid';
    } else {
      className = 'invalid';
    }
    return className;
  }

  render() {
    const { auth, authError } = this.props;
    const { errors } = this.state;
    if (auth.uid) return <Redirect to='/' />
    return (
      <div className="container">
        <form className="white" onSubmit={ this.handleSubmit }>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={ this.handleChange } className={ this.getClassName('email') } onBlur= { this.onBlur} onFocus= { this.onFocus }/>
            <span className="helper-text" data-error={ errors.email} data-success=""></span>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={ this.handleChange } className={ this.getClassName('password') } onBlur= { this.onBlur} onFocus= { this.onFocus }/>
            <span className="helper-text" data-error={ errors.password} data-success=""></span>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-dept-0">Log in</button>
            <div className="red-text center">
              { this.state.error || authError ? <p>{ (authError) }</p> : null }
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
