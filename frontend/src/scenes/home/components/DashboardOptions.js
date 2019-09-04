// DEPENDANCIES
import React from "react";
import DashboardForm from "./DashboardForm";

const DashboardOptions = props => {
  return (
    <div
      className="modal fade"
      id="dashboardOptions"
      role="dialog"
      aria-labelledby="dashboardOptionsLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog"
        role="document"
        style={{ maxWidth: "fit-content" }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title" id="dashboardOptionsLabel">
              <span
                className="im im-computer"
                style={{ fontSize: `${2.5}rem`, verticalAlign: "-0.1em" }}
              />
              {"  "}
              Create New Dashboard
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
                <DashboardForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOptions;
