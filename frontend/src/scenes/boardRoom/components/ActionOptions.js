import React from "react";
import PropTypes from "prop-types";
import ActionForm from "./ActionForm";

const ActionOptions = props => {
  const { action } = props;
  return (
    <div
      className="modal fade"
      id="actionOptions"
      role="dialog"
      aria-labelledby="actionOptionsLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog"
        role="document"
        style={{ maxWidth: "fit-content" }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title" id="actionOptionsLabel">
              <span
                className="im im-pin"
                style={{ fontSize: `${2.5}rem`, verticalAlign: "-0.1em" }}
              />
              {"  "}
              Edit Action
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
                <ActionForm action={action} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ActionOptions.propTypes = {
  action: PropTypes.object
};

export default ActionOptions;
