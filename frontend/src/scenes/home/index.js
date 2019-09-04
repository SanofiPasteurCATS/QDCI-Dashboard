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
      <div>
        <Fragment>
          <div className="container">
            <DashboardList />
          </div>
        </Fragment>
      </div>
    );
  }
}

export default connect(
  null,
  { clearCurrentDashboard, clearActionTables }
)(Dashboard);
