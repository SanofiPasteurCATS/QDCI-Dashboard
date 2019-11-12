// DEPENDANCIES
import React, { Component } from "react";
import PropTypes from "prop-types";

// REDUX
import { connect } from "react-redux";
import {
  clearCurrentDashboard,
  clearActionTables
} from "../../core/actions/dashboards";

// MATERIAL-UI
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

// NATIVE COMPONENTS
import DashboardView from "./components/DashboardView";

const styles = theme => ({
  root: {
    marginTop: theme.spacing(6)
  }
});

class Dashboard extends Component {
  componentDidMount() {
    const { clearCurrentDashboard, clearActionTables } = this.props;
    clearCurrentDashboard();
    clearActionTables();
  }

  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="lg" className={classes.root}>
        <DashboardView />
      </Container>
    );
  }
}

Dashboard.propType = {
  classes: PropTypes.object
};

export default connect(
  null,
  { clearCurrentDashboard, clearActionTables }
)(withStyles(styles)(Dashboard));
