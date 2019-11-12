import React, { Component } from "react";
import PropTypes from "prop-types";

// REDUX
import { connect } from "react-redux";
import { updateDashboard, addImage } from "../../../core/actions/dashboards";

// MATERIAL-UI
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";

import DashboardForm from "./DashboardForm";

const styles = theme => ({
  appBar: {
    position: "relative",
    background: "#9BB0DB"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class DashboardEditDialog extends Component {
  componentDidUpdate(prevProps) {
    const { dashboard } = this.props;
    if (dashboard != prevProps.dashboard) {
      this.update(dashboard);
    }
  }

  render() {
    const { dashboard, open, handleClose, classes } = this.props;
    return (
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {"Edit " + dashboard.title + " Dashboard"}
            </Typography>
            <Button autoFocus color="inherit" onClick={this.handleSave}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <form onSubmit={this.handleSubmit} className="w-100 mt-3">
          <DashboardForm
            showImageField
            onChange={this.handleChange}
            values={this.state}
            images={dashboard ? dashboard.images : null}
          />
        </form>
      </Dialog>
    );
  }

  /**
   *
   */
  update = dashboard => {
    this.setState({ ...dashboard });
  };

  /**
   * Handler for when input fields change.
   * This method will update the component state to reflect this change.
   */
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  /**
   * Handler for the save button. This method submits the form and closes the dialog
   */
  handleSave = () => {
    const { handleClose } = this.props;
    this.handleSubmit();
    handleClose();
  };

  /**
   * Handler for form submission. Creates a new dashboard from component state and creates a Redux action.
   * Also submits files attached to the form as images
   */
  handleSubmit = e => {
    e && e.preventDefault();
    const { updateDashboard, dashboard, addImage } = this.props;

    const {
      title,
      author,
      background,
      dashboard_type,
      level,
      image
    } = this.state;
    const newDashboard = {
      title,
      author,
      background,
      dashboard_type,
      level
    };

    newDashboard.id = dashboard.id;

    updateDashboard(newDashboard, newDashboard.id);
    if (image) {
      const newImage = {
        image: image,
        dashboard: dashboard.id
      };
      addImage(newImage);
    }
  };
}

DashboardEditDialog.propTypes = {
  dashboard: PropTypes.shape({
    title: PropTypes.string,

    author: PropTypes.string,

    level: PropTypes.number,

    dashboard_type: PropTypes.dashboard_type,

    id: PropTypes.number
  }),

  handleClose: PropTypes.func.isRequired,

  open: PropTypes.bool
};

export default connect(
  null,
  { updateDashboard, addImage }
)(withStyles(styles)(DashboardEditDialog));
