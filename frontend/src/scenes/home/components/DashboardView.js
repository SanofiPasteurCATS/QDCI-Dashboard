// DEPENDANCIES
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// ACTIONS
import {
  getDashboards,
  deleteDashboard
} from "../../../core/actions/dashboards";

// MATERIAL-UI
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import DashboardEditDialog from "./DashboardEditDialog";
import DashboardNewDialog from "./DashboardNewDialog";
import DashboardCard from "./DashboardCard";
import NewCard from "../../../core/components/ui/NewCard";
import { getItem } from "../../../core/helpers/Filters";
import RemoveConfirmation from "../../../core/components/ui/RemoveConfirmation";

const styles = {
  cardRoot: {
    flexBasis: "100%"
  }
};
class DashboardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      removeItem: null,
      editItem: null,
      editIsOpen: false,
      newIsOpen: false
    };
    this.RemoveConfirmation = React.createRef();
  }

  componentDidMount() {
    this.props.getDashboards();
  }

  render() {
    const { dashboards, classes } = this.props;
    const { removeItem, editItem, editIsOpen, newIsOpen } = this.state;
    let editableDashboard = {};
    if (editItem) editableDashboard = getItem(editItem.id, dashboards, "id");
    return (
      <Fragment>
        <Grid container spacing={2}>
          {dashboards.map(dashboard => (
            <Grid item md={4} key={dashboard.id} className={classes.cardRoot}>
              <DashboardCard
                dashboard={dashboard}
                onRemoveClick={this.setRemove}
                onEditClick={this.setEdit}
              ></DashboardCard>
            </Grid>
          ))}

          <Grid item md={4}>
            <NewCard text="Dashboard" handleClick={this.handleOpenNew} />
          </Grid>
        </Grid>
        <RemoveConfirmation
          removeContext={{
            item: removeItem,
            type: "dashboard",
            onSubmit: this.onRemoveConfirmationSubmit
          }}
          ref={this.RemoveConfirmation}
        />
        <DashboardEditDialog
          open={editIsOpen}
          handleClose={this.handleCloseEdit}
          dashboard={editableDashboard}
        ></DashboardEditDialog>
        <DashboardNewDialog
          open={newIsOpen}
          handleClose={this.handleCloseNew}
        ></DashboardNewDialog>
      </Fragment>
    );
  }

  setRemove = removeItem => {
    this.setState({
      removeItem
    });
    this.RemoveConfirmation.current.handleToggleOpen(true)();
  };

  setEdit = dashboard => {
    this.setState({
      editItem: dashboard,
      editIsOpen: true
    });
  };

  handleOpenNew = () => {
    this.setState({ newIsOpen: true });
  };

  handleCloseNew = () => {
    this.setState({ newIsOpen: false });
  };

  handleCloseEdit = () => {
    this.setState({ editIsOpen: false });
  };

  onRemoveConfirmationSubmit = state => {
    const { deleteDashboard } = this.props;
    const { removeItem } = this.state;
    if (state.name === removeItem.title) {
      deleteDashboard(removeItem.id);
      return true;
    } else return false;
  };
}

DashboardView.propTypes = {
  dashboards: PropTypes.array.isRequired,
  getDashboards: PropTypes.func.isRequired,
  deleteDashboard: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  dashboards: state.dashboards.dashboards
});
export default connect(mapStateToProps, { getDashboards, deleteDashboard })(
  withStyles(styles)(DashboardView)
);
