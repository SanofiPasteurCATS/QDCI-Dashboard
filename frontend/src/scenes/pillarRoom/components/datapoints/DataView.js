import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Dialog from "@material-ui/core/Dialog";
import DialogDatapoints from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import DataTable from "./DataTable";

import DataForm from "./DataForm";

import { DATAPOINT_TABLE_HEADERS } from "../../../../core/config/dashboardConfig";
import { updateDatapoint } from "../../../../core/actions/dashboards";

class DatapointView extends Component {
  static propTypes = {
    data: PropTypes.array,
    editable: PropTypes.bool,
    rowClick: PropTypes.func,
    deletable: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.state = {
      open: false,
      formState: {}
    };
  }

  render() {
    const { open, formState } = this.state;
    const { series } = this.props;
    return (
      <>
        <DataTable
          title="Data"
          data={series.entries}
          tableMeta={DATAPOINT_TABLE_HEADERS}
          onRowClick={this.rowClick}
        />
        <Dialog
          open={open}
          onClose={this.handleToggleOpen(false)}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit Datapoint</DialogTitle>
          <DialogContent>
            <DataForm datapoint={formState} onChange={this.onChange}></DataForm>
          </DialogContent>
          <DialogDatapoints>
            <Button onClick={this.handleToggleOpen(false)} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleUpdate} color="primary">
              Confirm
            </Button>
          </DialogDatapoints>
        </Dialog>
      </>
    );
  }

  rowClick = datapoint => {
    const { open } = this.state;
    if (open) return;
    this.setState({ open: true, formState: { ...datapoint } });
  };

  update(current, id) {
    const { updateDatapoint } = this.props;
    updateDatapoint(current, id);
  }

  edit = selection => {
    this.setState({
      open: true,
      formState: selection
    });
  };

  handleToggleOpen = state => () => {
    this.setState({ open: state });
  };

  onChange = e => {
    this.setState({
      formState: { ...this.state.formState, [e.target.name]: e.target.value }
    });
  };

  handleUpdate = e => {
    this.setState({ open: false });
    const { updateDatapoint } = this.props;
    const { formState } = this.state;
    const datapoint = {
      ...formState
    };
    updateDatapoint(datapoint, datapoint.id);
  };
}

export default connect(null, {
  updateDatapoint
})(DatapointView);
