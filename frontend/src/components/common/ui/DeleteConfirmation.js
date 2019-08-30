import React, { Component } from "react";
import PropTypes from "prop-types";
class DeletetionConformation extends Component {
  static propTypes = {
    deletionItem: PropTypes.string.isRequired,
    deletionName: PropTypes.string.isRequired
  };
  render() {
    const { deletionItem, deletionName } = this.props;
    return (
      <div
        className="modal fade"
        id="deletionConfirmation"
        role="dialog"
        aria-labelledby="deletionConfirmationLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          role="document"
          style={{ maxWidth: "fit-content" }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title" id="deletionConfirmationLabel">
                <span
                  className="im im-line-chart-up"
                  style={{ fontSize: `${2.5}rem`, verticalAlign: "-0.1em" }}
                />
                {"  "}
                {`Are you absolutely sure?`}
              </h1>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body" style={{ padding: 0 }}>
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    {`This action cannot be undone. This will permanently delete ${deletionName} and all associated data.`}{" "}
                  </p>
                  <div className="form-group">
                    <label for="password">
                      Please enter dashboard password
                    </label>
                    <input type="password" className="form-control"></input>
                  </div>
                  <div className="form-group">
                    <label for="export">Do you want to export data?</label>
                    <input
                      type="checkbox"
                      name="export"
                      className="form-control"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label for="name">{`Please type in the name of the ${deletionItem} to confirm`}</label>
                    <input type="text" className="form-contorl"></input>
                  </div>
                  <button type="submit">
                    I understand the consequences, delete this item
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
