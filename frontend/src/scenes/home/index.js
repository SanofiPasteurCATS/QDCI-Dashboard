// DEPENDANCIES
import React, { Fragment, Component } from "react";
import { connect } from "react-redux";

// CORE COMPONENTS
import {
  clearCurrentDashboard,
  clearActionTables
} from "../../core/actions/dashboards";

// NATIVE COMPONENTS
import DashboardList from "./components/DashboardList";

class Dashboard extends Component {
  componentDidMount() {
    const { clearCurrentDashboard, clearActionTables } = this.props;
    clearCurrentDashboard();
    clearActionTables();
  }

  render() {
    return (
      <div className="container mt-5">
        <DashboardList />
      </div>
    );
  }
}

export default connect(
  null,
  { clearCurrentDashboard, clearActionTables }
)(Dashboard);
