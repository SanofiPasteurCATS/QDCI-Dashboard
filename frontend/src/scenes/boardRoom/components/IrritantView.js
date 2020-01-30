import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Table from "./Table";

// MATERIAL-UI
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import IrritantForm from "./IrritantForm";

//CORE COMPONENTS
import { IRRITANT_TABLE_HEADERS } from "../../../core/config/dashboardConfig";
import {
  updateIrritant,
  deleteIrritant,
  addIrritant
} from "../../../core/actions/dashboards";
import IrritantTable from "./IrritantTable";

// NATIVE COMPONENTS
import AuditForm from "./AuditForm";

class IrritantView extends Component {
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
        <IrritantTable
          title="Irritants"
          onClickDelete={this.delete}
          onClickEdit={this.edit}
          onClickAdd={this.insert}
          onClickVote={this.vote}
          onClickDownVote={this.downVote}
          data={data}
          tableMeta={IRRITANT_TABLE_HEADERS}
        />

        <Dialog
          open={open}
          onClose={this.handleToggleOpen(false)}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit Irritant</DialogTitle>
          <DialogContent>
            <IrritantForm irritant={formState} onChange={this.onChange} />
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
    const { addIrritant, dashboardId } = this.props;
    const irritant = {
      description: null,
      end_date: null,
      start_date: null,
      dashboard: dashboardId
    };
    addIrritant(irritant);
  }

  delete(selection) {
    const { deleteIrritant } = this.props;
    for (const i in selection) deleteIrritant(selection[i]);
  }

  update(current, id) {
    const { updateIrritant } = this.props;
    updateIrritant(current, id);
  }

  edit = selection => {
    this.setState({
      open: true,
      formState: selection
    });
  };

  vote = selection => {
    const { updateIrritant } = this.props;
    updateIrritant({ ...selection, votes: selection.votes + 1 }, selection.id);
  };

  downVote = selection => {
    const { updateIrritant } = this.props;
    updateIrritant(
      { ...selection, votes: Math.max(selection.votes - 1, 0) },
      selection.id
    );
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
    const { updateIrritant } = this.props;
    const { formState } = this.state;
    const irritant = {
      ...formState
    };

    updateIrritant(irritant, irritant.id);
    this.setState({
      formState: {
        description: "",
        date: null
      }
    });
  };
}

export default connect(null, { updateIrritant, deleteIrritant, addIrritant })(
  IrritantView
);

IrritantView.defaultProps = {
  hoverable: false,
  editable: false,
  deletable: false,
  appendable: false,
  rowClick: null
};
