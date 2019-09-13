import React, { Component } from "react";
import PropTypes from "prop-types";

import Modal from "./modal/Modal";

class DeletetionConformation extends Component {
  constructor(props) {
    super(props);
    this.modalRef = React.createRef();
    this.state = {
      password: "",
      exported: false,
      name: ""
    };
  }
  static propTypes = {
    deletionContext: PropTypes.object
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { deletionContext } = this.props;
    const response = deletionContext.onSubmit(this.state);
    if (response) $("#deleteConfirmation").modal("hide");
  };

  render() {
    const { deletionContext } = this.props;
    if (!deletionContext)
      return (
        <Modal
          title="Are You Sure?"
          iconClass="im im-data-delete"
          id="deleteConfirmation"
        >
          {" "}
        </Modal>
      );
    const { type, item } = deletionContext;
    const { password, name, exported } = this.state;
    return (
      <Modal
        title="Are You Sure?"
        iconClass="im im-data-delete"
        id="deleteConfirmation"
        ref={this.modalRef}
      >
        <form onSubmit={this.onSubmit}>
          <p className="card-text">
            This action cannot be undone. This will permanently delete the{" "}
            <span style={{ color: "red", fontWeight: "bold" }}>
              {item ? item.name || item.title : "null"}
            </span>{" "}
            {`${type} and all associated data.`}{" "}
          </p>
          <div className="form-group">
            <label htmlFor="password">Please enter dashboard password</label>
            <input
              type="password"
              name="password"
              value={password}
              className="form-control"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">{`Please type in the name of the ${type} to confirm`}</label>
            <input
              type="text"
              name="name"
              value={name}
              className="form-control"
              onChange={this.onChange}
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              name="exported"
              className="form-check-input"
              onChange={this.onChange}
            />
            <label htmlFor="export" className="form-check-label mb-3">
              Do you want to export data?
            </label>
          </div>
          <button type="submit" className="btn btn-warning">
            I understand the consequences, delete this item
          </button>
        </form>
      </Modal>
    );
  }
}

export default DeletetionConformation;
