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
import RemoveConfirmation from "../../../core/components/ui/RemoveConfirmation";

// NATIVE COMPONENTS
import DashboardOptions from "./DashboardOptions";

class DashboardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      removeItem: null
    };
    this.setRemove = this.setRemove.bind(this);
    this.onRemoveConfirmationSubmit = this.onRemoveConfirmationSubmit.bind(
      this
    );
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

  setRemove = removeItem => {
    this.setState({
      removeItem
    });
    $("#removeConfirmation").modal("show");
  };

  onRemoveConfirmationSubmit = state => {
    const { deleteDashboard } = this.props;
    const { removeItem } = this.state;
    if (state.name === removeItem.title) {
      deleteDashboard(removeItem.id);
      return true;
    } else return false;
  };

  render() {
    const { dashboards } = this.props;
    const { removeItem } = this.state;
    return (
      <Fragment>
        <div className="row">
          {dashboards.map(dashboard => (
            <div key={dashboard.id} className="col-lg-4 col-sm-12">
              <DashboardDisplayCard
                dashboard={dashboard}
                onRemoveClick={this.setRemove}
              />
            </div>
          ))}

          <div className="col-lg-4 col-sm-12">
            <NewCard text="Dashboard" handleClick={this.newDashboardClick} />
          </div>
        </div>
        <DashboardOptions />
        <RemoveConfirmation
          removeContext={{
            item: removeItem,
            type: "dashboard",
            onSubmit: this.onRemoveConfirmationSubmit
          }}
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
