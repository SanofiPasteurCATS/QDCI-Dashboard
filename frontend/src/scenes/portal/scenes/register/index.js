import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";

// REDUX
import { connect } from "react-redux";
import { register } from "../../../../core/actions/auth";
import { createMessage } from "../../../../core/actions/messages";

import { withStyles, ThemeProvider } from "@material-ui/core/styles";
import { primaryTheme } from "../../../../core/components/layout/Theme";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: theme.spacing(20)
  },
  textField: {
    marginBottom: theme.spacing(3),
    display: "block"
  },
  footer: {
    marginTop: theme.spacing(3)
  }
});

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

  render() {
    const { isAuthenticated, classes } = this.props;
    const inputFontSize = 20;
    // Redirect users whom already have valid Auth tokens
    if (isAuthenticated) {
      return <Redirect to="/" />;
    }

    // Need these state values to update form fields
    const { username, email, password, password2 } = this.state;
    return (
      <ThemeProvider theme={primaryTheme}>
        <form onSubmit={this.onSubmit}>
          <Grid container className={classes.root}>
            <Grid item md={6} className={classes.container}>
              <Typography variant="h3" color={"secondary"}>
                REGISTER
              </Typography>
              <TextField
                required
                id="username"
                label="Username"
                onChange={this.onChange}
                value={username || ""}
                name="username"
                className={classes.textField}
                fullWidth
                inputProps={{ style: { fontSize: inputFontSize } }} // font size of input text
                InputLabelProps={{ style: { fontSize: inputFontSize } }} // font size of input label
              />
              <TextField
                required
                id="email"
                label="Email"
                onChange={this.onChange}
                value={email || ""}
                className={classes.textField}
                name="email"
                fullWidth
                type="text"
                inputProps={{ style: { fontSize: inputFontSize } }} // font size of input text
                InputLabelProps={{ style: { fontSize: inputFontSize } }} // font size of input label
              />
              <TextField
                required
                id="password"
                label="Password"
                onChange={this.onChange}
                value={password || ""}
                className={classes.textField}
                name="password"
                fullWidth
                type="password"
                inputProps={{ style: { fontSize: inputFontSize } }} // font size of input text
                InputLabelProps={{ style: { fontSize: inputFontSize } }} // font size of input label
              />
              <TextField
                required
                id="password2"
                label="Comfirm Password"
                onChange={this.onChange}
                value={password2 || ""}
                className={classes.textField}
                name="password2"
                fullWidth
                type="password"
                inputProps={{ style: { fontSize: inputFontSize } }} // font size of input text
                InputLabelProps={{ style: { fontSize: inputFontSize } }} // font size of input label
              />
              <Button type="submit" variant="contained" color={"primary"}>
                Register
              </Button>

              <Typography color="textSecondary" className={classes.footer}>
                {" "}
                Already have an account? <Link to="/login"> Login!</Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </ThemeProvider>
    );
  }

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
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  createMessage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { register, createMessage }
)(withStyles(styles)(Register));
