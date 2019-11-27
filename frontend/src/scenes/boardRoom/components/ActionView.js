import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ActionTable from "./ActionTable";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import EscalationView from "./EscalationView";

import ActionForm from "./ActionForm";

import { ACTION_TABLE_HEADERS } from "../../../core/config/dashboardConfig";
import {
  updateAction,
  deleteAction,
  addAction
} from "../../../core/actions/dashboards";

class ActionView extends Component {
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
      formState: {},
      escalationOpen: false
    };
  }

  filterTables(title) {
    const { tables } = this.props;
    const payload = tables.filter(table => {
      return table.title === title;
    });
    return payload ? payload[0] : null;
  }

  render() {
    const { open, formState, escalationOpen } = this.state;
    const { tables, dashboards, currentDashboard } = this.props;
    const stap = this.filterTables("Short Term Action Plan");
    const ltap = this.filterTables("Long Term Action Plan");
    return (
      <>
        <ActionTable
          title="Short Term Actions"
          onClickDelete={this.delete}
          onClickEdit={this.edit}
          onClickAdd={this.insert(stap)}
          onClickEscalate={this.escalate(stap)}
          onManageClick={this.toggleEscalationOpen(true)}
          data={stap ? stap.actions : []}
          tableMeta={ACTION_TABLE_HEADERS}
          currentDashboardId={currentDashboard.id}
        />
        <ActionTable
          title="Long Term Actions"
          onClickDelete={this.delete}
          onClickEdit={this.edit}
          onClickAdd={this.insert(ltap)}
          onClickEscalate={this.escalate(ltap)}
          onManageClick={this.toggleEscalationOpen(true)}
          data={ltap ? ltap.actions : []}
          tableMeta={ACTION_TABLE_HEADERS}
          currentDashboardId={currentDashboard.id}
        />

        <Dialog
          open={open}
          onClose={this.handleToggleOpen(false)}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit Action</DialogTitle>
          <DialogContent>
            <ActionForm
              action={formState}
              onChange={this.onChange}
            ></ActionForm>
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

        <EscalationView
          toggleOpen={this.toggleEscalationOpen}
          open={escalationOpen}
          actionTables={tables}
          dashboards={dashboards}
          currentDashboard={currentDashboard}
        ></EscalationView>
      </>
    );
  }

  insert = source => () => {
    if (!source) return;
    const { addAction } = this.props;
    const action = {
      tables: [source.id],
      source_id: source.id
    };
    addAction(action);
  };

  escalate = table => selection => {
    const { updateAction } = this.props;
    const action = {
      ...selection,
      tables: [...selection.tables, table.parent]
    };
    updateAction(action, action.id);
  };

  toggleEscalationOpen = state => () => {
    this.setState({ escalationOpen: state });
  };

  delete(selection) {
    const { deleteAction } = this.props;
    for (const i in selection) deleteAction(selection[i]);
  }

  update(current, id) {
    const { updateAction } = this.props;
    updateAction(current, id);
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
    const { updateAction } = this.props;
    const { formState } = this.state;
    const action = {
      ...formState
    };
    updateAction(action, action.id);
    this.setState({
      formState: {
        letter: "",
        problem: "",
        root_cause: "",
        solution: "",
        leader: ""
      }
    });
  };
}

export default connect(null, { updateAction, deleteAction, addAction })(
  ActionView
);

ActionView.defaultProps = {
  hoverable: false,
  editable: false,
  deletable: false,
  appendable: false,
  rowClick: null
};
