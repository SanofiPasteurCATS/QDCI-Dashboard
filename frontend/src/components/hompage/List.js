import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getDashboards, deleteDashboard } from "../../actions/dashboards";
import DashboardDisplayCard from "../common/ui/DashboardDisplayCard";
import NewDashboardCard from "../common/ui/NewDashboardCard";
import DashboardOptions from "./DashboardOptions";

class List extends Component {
  static propTypes = {
    dashboards: PropTypes.array.isRequired,
    getDashboards: PropTypes.func.isRequired,
    deleteDashboard: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getDashboards();
  }
  newDashboardClick = () => {
    $("#dashboardOptions").modal("show");
  };
  render() {
    const { dashboards, deleteDashboard } = this.props;
    return (
      <Fragment>
        <div className="row">
          {dashboards.map(dashboard => (
            <div key={dashboard.id} className="col-lg-4 col-sm-12">
              <DashboardDisplayCard dashboard={dashboard} />
            </div>
          ))}

          <div className="col-lg-4 col-sm-12">
            <NewDashboardCard handleClick={this.newDashboardClick} />
          </div>
        </div>
        <DashboardOptions />
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  dashboards: state.dashboards.dashboards
});
export default connect(
  mapStateToProps,
  { getDashboards, deleteDashboard }
)(List);
