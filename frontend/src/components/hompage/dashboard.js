import React, { Fragment, Component } from "react";
import List from "./List";
import DashboardForm from "./DashboardForm";
import { clearCurrentDashboard } from "../../actions/dashboards";
import { clearActionTables } from "../../actions/dashboards";
import { connect } from "react-redux";

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
            <List />
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
