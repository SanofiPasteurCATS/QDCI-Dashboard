// DEPENDANCIES
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// ACTIONS
import { logout } from "../../actions/auth";

/**
 * Header component for the site
 */
class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  };

  state = {
    curTime: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate()
    ).toLocaleDateString(),
    weekNum: 0
  };

  getWeekNumber(d) {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
    // Return array of year and week number
    return weekNo;
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        curTime: new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          new Date().getDate()
        ).toLocaleDateString()
      });
    }, 1000);
    this.setState({ weekNum: this.getWeekNumber(new Date()) });
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const { currentDashboard } = this.props;
    const { curTime, weekNum } = this.state;

    const authLinks = (
      <ul className="navbar-nav ml-auto mt-2">
        <li className="nav-item">
          <button
            onClick={this.props.logout}
            className="nav-link btn btn-info btn-sm text-light pl-2 pr-2"
          >
            Logout
          </button>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto mt-2">
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
      </ul>
    );
    return (
      <nav className="navbar navbar-expand-lg co-accent">
        <div className="container-fluid" style={{ fontSize: 18 + "px" }}>
          <img
            src="../../../../static/media/sms-logo.png"
            style={{
              height: "50px",
              width: "50px"
            }}
            className="mr-3 p-1"
          ></img>
          <a className="navbar-brand brand" href="#">
            +QDCI Boards
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  My Dashboards
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/contact">
                  Contact an Admin
                </a>
              </li>
            </ul>
            {currentDashboard && (
              <h4 className="m-auto">{currentDashboard.title}</h4>
            )}
            <h5 className="m-auto">
              {curTime}, Week # {weekNum}
            </h5>

            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  currentDashboard: state.dashboards.currentDashboard
});

export default connect(
  mapStateToProps,
  { logout }
)(Header);
