// DEPENDANCIES
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// ACTIONS
import {
  getDashboards,
  deleteDashboard
} from "../../../core/actions/dashboards";

// CORE COMPONENTS
import DashboardDisplayCard from "./DashboardDisplayCard";
import NewCard from "../../../core/components/ui/NewCard";
import DeleteConfirmation from "../../../core/components/ui/DeleteConfirmation";

// NATIVE COMPONENTS
import DashboardOptions from "./DashboardOptions";

class DashboardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deletionItem: "",
      deletionName: ""
    };
    this.deleteClick = this.deleteClick.bind(this);
  }
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
  deleteClick = (deletionItem, deletionName) => {
    this.setState({
      deletionItem: deletionItem,
      deletionName: deletionName
    });
    $("#deletionConfirmation").modal("show");
  };
  render() {
    const { dashboards, deleteDashboard } = this.props;
    const { deletionItem, deletionName } = this.state;
    return (
      <Fragment>
        <div className="row">
          {dashboards.map(dashboard => (
            <div key={dashboard.id} className="col-lg-4 col-sm-12">
              <DashboardDisplayCard
                dashboard={dashboard}
                deleteClick={this.deleteClick}
              />
            </div>
          ))}

          <div className="col-lg-4 col-sm-12">
            <NewCard text={"Dashboard"} handleClick={this.newDashboardClick} />
          </div>
        </div>
        <DashboardOptions />
        <DeleteConfirmation
          deletionItem={deletionItem}
          deletionName={deletionName}
        />
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
)(DashboardList);
