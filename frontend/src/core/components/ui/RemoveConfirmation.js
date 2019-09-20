import React, { Component } from "react";
import PropTypes from "prop-types";

import Modal from "./modal/Modal";

class RemoveConformation extends Component {
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
    removeContext: PropTypes.object
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { removeContext } = this.props;
    const response = removeContext.onSubmit(this.state);
    if (response) $("#removeConfirmation").modal("hide");
  };

  render() {
    const { removeContext } = this.props;
    if (!removeContext)
      return (
        <Modal
          title="Are You Sure?"
          iconClass="im im-data-remove"
          id="removeConfirmation"
        >
          {" "}
        </Modal>
      );
    const { type, item } = removeContext;
    const { password, name, exported } = this.state;
    return (
      <Modal
        title="Are You Sure?"
        iconClass="im im-data-remove"
        id="removeConfirmation"
        ref={this.modalRef}
      >
        <form onSubmit={this.onSubmit}>
          <p className="card-text">
            This action cannot be undone. This will permanently remove the{" "}
            <span style={{ color: "red", fontWeight: "bold" }}>
              {item ? item.name || item.title : "null"}
            </span>{" "}
            {`${type} and all associated data.`}{" "}
          </p>
          {/*
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
          */}
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
          {/*
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
          </div> */}
          <button type="submit" className="btn btn-warning">
            I understand the consequences, remove this item
          </button>
        </form>
      </Modal>
    );
  }
}

export default RemoveConformation;
