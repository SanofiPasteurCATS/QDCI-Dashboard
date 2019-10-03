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
import Modal from "../../../core/components/ui/modal/Modal";
import { getItem } from "../../../core/helpers/Filters";

// NATIVE COMPONENTS
import DashboardNew from "./DashboardNew";
import DashboardEdit from "./DashboardEdit";

class DashboardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      removeItem: null,
      editItem: null
    };
    this.setRemove = this.setRemove.bind(this);
    this.onRemoveConfirmationSubmit = this.onRemoveConfirmationSubmit.bind(
      this
    );
    this.setEdit = this.setEdit.bind(this);
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
    $("#dashboardNew").modal("show");
  };

  setRemove = removeItem => {
    this.setState({
      removeItem
    });
    $("#removeConfirmation").modal("show");
  };

  setEdit = dashboard => {
    this.setState({
      editItem: dashboard
    });
    $("#dashboardEdit").modal("show");
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
    const { removeItem, editItem } = this.state;
    let editableDashboard = {};
    if (editItem) editableDashboard = getItem(editItem.id, dashboards, "id");
    return (
      <Fragment>
        <div className="row m-0">
          {dashboards.map(dashboard => (
            <div key={dashboard.id} className="col-lg-4 col-sm-12">
              <DashboardDisplayCard
                dashboard={dashboard}
                onRemoveClick={this.setRemove}
                onEditClick={this.setEdit}
              />
            </div>
          ))}

          <div className="col-lg-4 col-sm-12">
            <NewCard text="Dashboard" handleClick={this.newDashboardClick} />
          </div>
        </div>
        <RemoveConfirmation
          removeContext={{
            item: removeItem,
            type: "dashboard",
            onSubmit: this.onRemoveConfirmationSubmit
          }}
        />
        <Modal title="Edit Dashboard" id="dashboardEdit">
          <DashboardEdit dashboard={editableDashboard}></DashboardEdit>
        </Modal>
        <Modal title="New Dashboard" id="dashboardNew">
          <DashboardNew></DashboardNew>
        </Modal>
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
