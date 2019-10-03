import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import LoadingScreen from "../layout/LoadingScreen";

/**
 * Component will check if user is authenticatd before preceding to mount component
 */
const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (auth.isLoading) {
        return <LoadingScreen />;
      }
      if (auth.isAuthenticated === false) {
        return <Redirect to="/login" />;
      }
      return <Component {...props} />;
    }}
  />
);
const mapStateToProps = state => ({
  auth: state.auth
});

PrivateRoute.propTypes = {
  component: PropTypes.object,
  auth: PropTypes.object
};

export default connect(mapStateToProps)(PrivateRoute);
