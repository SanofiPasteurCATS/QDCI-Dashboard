import React, { Fragment } from "react";
import DataInfo from "./DataInfo";
import DataForm from "./DataForm";
import DataTable from "./DataTable";
import { DATAPOINT_TABLE_HEADERS } from "../../../common/dashboardOptions";

const DataOptions = props => {
  const { series } = props;
  const data = series
    ? series
    : {
        name: "Error",
        plot_type: "Error",
        color: "Error",
        kpi: "Error",
        entries: [],
        id: "Error"
      };
  return (
    <Fragment>
      <div
        className="modal fade"
        id="dataOptions"
        role="dialog"
        aria-labelledby="dataOptionsLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title" id="dataOptionsLabel">
                <span
                  className="im im-archive"
                  style={{ fontSize: `${2.5}rem`, verticalAlign: "-0.1em" }}
                />
                {"  "}
                Edit {data.name}
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
                <div className="card-header">
                  <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#infoData"
                      >
                        Info
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#viewData"
                      >
                        View Data
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#importData"
                      >
                        Import
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#exportData"
                      >
                        Export
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <div
                    className="tab-content"
                    style={{
                      maxHeight: `${550}px`,
                      overflow: "auto",
                      overflowX: "auto"
                    }}
                  >
                    <DataInfo />

                    <div id="viewData" className="tab-pane fade show active">
                      <h5 className="card-title">Your Data</h5>
                      <DataTable
                        data={data.entries}
                        header={DATAPOINT_TABLE_HEADERS}
                      />
                    </div>
                    <div id="exportData" className="tab-pane fade">
                      <h5 className="card-title">WIP</h5>
                    </div>
                    <div id="importData" className="tab-pane fade">
                      <h5 className="card-title">WIP</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DataOptions;
