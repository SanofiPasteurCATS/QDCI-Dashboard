import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import { sidenavLinks } from "./NavbarUtils";
import { getWeekNumber } from "./NavbarUtils";
import { logout } from "../../actions/auth";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  appBar: {
    background: "#9BB0DB"
  },
  logo: {
    marginRight: theme.spacing(3)
  },
  date: {
    marginRight: theme.spacing(3)
  }
});

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidenavOpen: false,
      anchorEl: null,
      menuOpen: false,
      curTime: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate()
      ).toLocaleDateString(),
      weekNum: getWeekNumber(new Date())
    };
  }

  handleMenuOpen = event => {
    const { isAuthenticated } = this.props.auth;
    if (isAuthenticated) {
      this.setState({
        anchorEl: event.currentTarget,
        menuOpen: !this.state.menuOpen
      });
    } else {
      return <Redirect to="/login" />;
    }
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null, menuOpen: !this.state.menuOpen });
  };

  toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    this.setState({ sidenavOpen: open });
  };

  handleLogout = () => {
    const { logout } = this.props;
    this.handleMenuClose();
    logout();
  };

  renderDrawer = () => {
    const { classes } = this.props;
    return (
      <div
        className={classes.list}
        role="presentation"
        onClick={this.toggleDrawer(false)}
        onKeyDown={this.toggleDrawer(false)}
      >
        <List>
          {sidenavLinks.map((link, index) => (
            <Link to={link.link} key={`link-${index}`}>
              <ListItem button key={index}>
                <ListItemIcon>{link.icon}</ListItemIcon>
                <ListItemText primary={link.text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    );
  };

  render() {
    const { classes } = this.props;
    const { sidenavOpen, anchorEl, menuOpen, curTime, weekNum } = this.state;
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <img
              className={classes.logo}
              src="../../../../static/media/sms-logo.png"
              style={{
                height: "40px",
                width: "40px"
              }}
            />
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={this.toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              My Dashboards
            </Typography>
            <Hidden smDown>
              <Typography className={classes.date}>
                {curTime}, Week # {weekNum}
              </Typography>
            </Hidden>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={this.handleMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={menuOpen}
              onClose={this.handleMenuClose}
            >
              <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
              <MenuItem onClick={this.handleLogout}>Sign-out</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
        <Drawer open={sidenavOpen} onClose={this.toggleDrawer(false)}>
          {this.renderDrawer()}
        </Drawer>
      </div>
    );
  }
}

Navbar.propTypes = {
  auth: PropTypes.object,
  classes: PropTypes.object,
  currentDashboard: PropTypes.object
};

const mapStateToProps = state => ({
  auth: state.auth,
  currentDashboard: state.dashboards.currentDashboard
});

export default connect(
  mapStateToProps,
  { logout }
)(withStyles(styles)(Navbar));
