import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import Slide from "@material-ui/core/Slide";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import EscalationCard from "./EscalationCard";

import { updateActionTable } from "../../../core/actions/dashboards";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const styles = theme => ({
  appBar: {
    position: "relative",
    background: "#9BB0DB"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  container: {
    padding: theme.spacing(4)
  }
});

class ActionView extends Component {
  static propTypes = {
    open: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }
  componentDidUpdate(prevProps) {
    const { actionTables } = this.props;
    if (prevProps.actionTables === actionTables) return;
    this.setDefaultSelected();
  }

  setDefaultSelected() {
    const { actionTables } = this.props;
    if (!actionTables) return;
    const parent = actionTables[0].parent_dashboard;
    this.setState({ selected: parent });
  }

  render() {
    const { open, dashboards, currentDashboard, classes } = this.props;
    const { selected } = this.state;

    return (
      <Dialog
        open={open}
        onClose={this.handleToggleOpen(false)}
        aria-labelledby="form-dialog-title"
        fullScreen
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={this.handleToggleOpen(false)}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Manage Escalation
            </Typography>
            <Button autoFocus color="inherit" onClick={this.handleUpdate}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <div className={classes.container}>
          <Grid container spacing={3}>
            {dashboards
              .filter(dashboard => {
                return dashboard.id !== currentDashboard.id;
              })
              .map(dashboard => (
                <Grid item lg={3} key={dashboard.id}>
                  <EscalationCard
                    dashboard={dashboard}
                    selected={selected}
                    handleClick={this.handleClick}
                    key={dashboard.id}
                  />
                </Grid>
              ))}
          </Grid>
        </div>
      </Dialog>
    );
  }

  handleClick = id => {
    this.setState({ selected: id });
  };
  filterTables(title) {
    const { actionTables } = this.props;
    const payload = actionTables.filter(table => {
      return table.title === title;
    });
    return payload ? payload[0] : null;
  }

  handleToggleOpen = state => () => {
    const { toggleOpen } = this.props;
    toggleOpen(state)();
    this.setDefaultSelected();
  };

  handleUpdate = () => {
    const { updateActionTable, toggleOpen } = this.props;
    const { selected } = this.state;
    const stap = this.filterTables("Short Term Action Plan");
    const ltap = this.filterTables("Long Term Action Plan");

    updateActionTable(stap, stap.id, selected, stap.title);
    updateActionTable(ltap, ltap.id, selected, ltap.title);

    toggleOpen(false)();
  };
}

export default connect(null, { updateActionTable })(
  withStyles(styles)(ActionView)
);

ActionView.defaultProps = {
  hoverable: false,
  editable: false,
  deletable: false,
  appendable: false,
  rowClick: null
};
