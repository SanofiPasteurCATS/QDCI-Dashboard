// -----------------------------------------------------------------------------
//                            REGISTER COMPONENT
//                      Organization: Sanofi Pasteur
//                         Author: Kyle Thatcher
//                           Date: 08JUL2019
//
//
//            * Register component privides a form to create a new account
//            * Apon succesful completion the user will be auto logged in
// -----------------------------------------------------------------------------

import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../../../core/actions/auth";
import { createMessage } from "../../../../core/actions/messages";

/**
 * Register component privides a form to create a new account
 * Apon succesful completion the user will be auto logged in
 */

export class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password2: ""
  };

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    createMessage: PropTypes.func.isRequired
  };

  onSubmit = e => {
    e.preventDefault();
    // Need current field values to create a new user instance
    const { username, email, password, password2 } = this.state;
    const { createMessage, register } = this.props;

    // Check password consitancy
    if (password !== password2) {
      createMessage({ passwordsNotMatch: "Passwords Do Not Match" });
    } else {
      const newUser = {
        username,
        password,
        email
      };

      // Create new user
      register(newUser);
    }
  };

  onChange = e => {
    // Update state to relfect current field values
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { isAuthenticated } = this.props;
    // Redirect users whom already have valid Auth tokens
    if (isAuthenticated) {
      return <Redirect to="/" />;
    }

    // Need these state values to update form fields
    const { username, email, password, password2 } = this.state;
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Register Your Department</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={this.onChange}
                value={username}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                onChange={this.onChange}
                value={email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.onChange}
                value={password}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password2">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="password2"
                onChange={this.onChange}
                value={password2}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <p>
              Already have an account? 
              {' '}
              <Link to="/login"> Login!</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { register, createMessage }
)(Register);
