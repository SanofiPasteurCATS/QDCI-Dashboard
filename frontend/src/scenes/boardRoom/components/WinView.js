import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Table from "./Table";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

import WinForm from "./WinForm";

import { WIN_TABLE_HEADERS } from "../../../core/config/dashboardConfig";
import { updateWin, deleteWin, addWin } from "../../../core/actions/dashboards";

class WinView extends Component {
  static propTypes = {
    data: PropTypes.array,
    editable: PropTypes.bool,
    rowClick: PropTypes.func,
    deletable: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.insert = this.insert.bind(this);
    this.state = {
      open: false,
      formState: {}
    };
  }

  render() {
    const { data } = this.props;
    const { open, formState } = this.state;
    return (
      <>
        <Table
          title="Wins"
          onClickDelete={this.delete}
          onClickEdit={this.edit}
          onClickAdd={this.insert}
          data={data}
          tableMeta={WIN_TABLE_HEADERS}
        />
        <Dialog
          open={open}
          onClose={this.handleToggleOpen(false)}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit Win</DialogTitle>
          <DialogContent>
            <WinForm win={formState} onChange={this.onChange}></WinForm>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleToggleOpen(false)} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleUpdate} color="primary">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }

  insert() {
    const { addWin, dashboardId } = this.props;
    const win = {
      description: null,
      participants: null,
      date: null,
      dashboard: dashboardId
    };
    addWin(win);
  }

  delete(selection) {
    const { deleteWin } = this.props;
    for (const i in selection) deleteWin(selection[i]);
  }

  update(current, id) {
    const { updateWin } = this.props;
    updateWin(current, id);
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
    const { updateWin } = this.props;
    const { formState } = this.state;
    const win = {
      ...formState
    };
    updateWin(win, win.id);
    this.setState({
      formState: {
        description: "",
        participants: ""
      }
    });
    this.setState({ open: false });
  };
}

export default connect(null, { updateWin, deleteWin, addWin })(WinView);

WinView.defaultProps = {
  hoverable: false,
  editable: false,
  deletable: false,
  appendable: false,
  rowClick: null
};
