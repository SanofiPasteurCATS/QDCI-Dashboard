import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

// REDUX
import { connect } from "react-redux";
import { login } from "../../../../core/actions/auth";

// MATERIAL-UI
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

export class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    // Redirects users which are already authenticated to there homepage
    const { isAuthenticated, classes } = this.props;
    const inputFontSize = 20;

    if (isAuthenticated) {
      return <Redirect to="/" />;
    }

    // Need the current username and password to update the inputs
    const { username, password } = this.state;

    return (
      <ThemeProvider theme={primaryTheme}>
        <form onSubmit={this.onSubmit}>
          <Grid container className={classes.root}>
            <Grid item md={6} className={classes.container}>
              <Typography variant="h3" color={"secondary"}>
                LOGIN
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

              <Button type="submit" variant="contained" color={"primary"}>
                Sign In
              </Button>

              <Typography color="textSecondary" className={classes.footer}>
                {" "}
                Don't have an account?{" "}
                <Link to="/register">Sign up your department today!</Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </ThemeProvider>
    );
  }

  onSubmit = e => {
    // Dispatches a login action which will check credentials
    const { login } = this.props;
    const { username, password } = this.state;
    e.preventDefault();
    login(username, password);
  };

  onChange = e => {
    // Updates the local state with user input from form
    this.setState({ [e.target.name]: e.target.value });
  };
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(withStyles(styles)(Login));
