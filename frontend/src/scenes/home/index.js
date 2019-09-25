// DEPENDANCIES
import React, { Fragment, Component } from "react";
import { connect } from "react-redux";

// CORE COMPONENTS
import {
  clearCurrentDashboard,
  clearActionTables
} from "../../core/actions/dashboards";
import Modal from "../../core/components/ui/modal/Modal";

// NATIVE COMPONENTS
import DashboardList from "./components/DashboardList";
import DashboardOptions from "./components/DashboardOptions";

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
