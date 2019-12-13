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

//CORE COMPONENTS
import { AUDIT_TABLE_HEADERS } from "../../../core/config/dashboardConfig";
import {
  updateAudit,
  deleteAudit,
  addAudit
} from "../../../core/actions/dashboards";

// NATIVE COMPONENTS
import AuditForm from "./AuditForm";

class AuditView extends Component {
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
          title="Audits"
          onClickDelete={this.delete}
          onClickEdit={this.edit}
          onClickAdd={this.insert}
          data={data}
          tableMeta={AUDIT_TABLE_HEADERS}
        />

        <Dialog
          open={open}
          onClose={this.handleToggleOpen(false)}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit Audit</DialogTitle>
          <DialogContent>
            <AuditForm audit={formState} onChange={this.onChange}></AuditForm>
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
    const { addAudit, dashboardId } = this.props;
    const audit = {
      description: null,
      end_date: null,
      start_date: null,
      dashboard: dashboardId
    };
    addAudit(audit);
  }

  delete(selection) {
    const { deleteAudit } = this.props;
    for (const i in selection) deleteAudit(selection[i]);
  }

  update(current, id) {
    const { updateAudit } = this.props;
    updateAudit(current, id);
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
    const { updateAudit } = this.props;
    const { formState } = this.state;
    const audit = {
      ...formState
    };

    updateAudit(audit, audit.id);
    this.setState({
      formState: {
        description: "",
        start_date: "",
        end_date: ""
      }
    });
  };
}

export default connect(null, { updateAudit, deleteAudit, addAudit })(AuditView);

AuditView.defaultProps = {
  hoverable: false,
  editable: false,
  deletable: false,
  appendable: false,
  rowClick: null
};
