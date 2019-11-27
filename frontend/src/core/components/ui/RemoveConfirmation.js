import React, { Component } from "react";
import PropTypes from "prop-types";

import Modal from "./modal/Modal";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

class RemoveConfirmation extends Component {
  constructor(props) {
    super(props);
    this.modalRef = React.createRef();
    this.state = {
      password: "",
      exported: false,
      name: "",
      open: false
    };
  }

  render() {
    const { removeContext } = this.props;
    if (!removeContext) return <></>;
    const { type, item } = removeContext;
    const { name, open } = this.state;
    return (
      <Dialog
        open={open}
        onClose={this.handleToggleOpen(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Are You Sure?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This action cannot be undone. This will permanetly remove the{" "}
            <span style={{ color: "#3F51B5", fontWeight: "bold" }}>
              {item ? item.name || item.title : "null"}
            </span>{" "}
            {`${type} and all associated data.`}{" "}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Confirm name"
            type="text"
            fullWidth
            name="name"
            onChange={this.handleChange}
            value={name}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleToggleOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleSubmit} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleToggleOpen = state => () => {
    this.setState({ open: state });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { removeContext } = this.props;
    const response = removeContext.onSubmit(this.state);
    if (response) this.setState({ open: false });
  };
}

RemoveConfirmation.propTypes = {
  removeContext: PropTypes.object
};

export default RemoveConfirmation;
