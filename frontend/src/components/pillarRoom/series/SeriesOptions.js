import React, { Fragment } from "react";
import SeriesInfo from "./SeriesInfo";
import SeriesForm from "./SeriesForm";
import SeriesTable from "./SeriesTable";
import { SERIES_TABLE_HEADERS } from "../../../common/dashboardOptions";

const SeriesOptions = props => {
  const { series, kpi } = props;
  return (
    <Fragment>
      <div
        className="modal fade"
        id="seriesOptions"
        role="dialog"
        aria-labelledby="seriesOptionsLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title" id="seriesOptionsLabel">
                <span
                  className="im im-line-chart-up"
                  style={{ fontSize: `${2.5}rem`, verticalAlign: "-0.1em" }}
                />
                {"  "}
                Manage Series For {kpi ? kpi.name : "Null"}
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
                        className="nav-link active"
                        data-toggle="tab"
                        href="#infos"
                      >
                        Info
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#lists">
                        View Series
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#adds">
                        Add a Series
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
                    <SeriesInfo />
                    <div id="lists" className="tab-pane fade">
                      <h5 className="card-title">Your Series</h5>
                      <SeriesTable
                        data={series}
                        header={SERIES_TABLE_HEADERS}
                      />
                    </div>
                    <div id="adds" className="tab-pane fade">
                      <h5 className="card-title">Create A New Series</h5>
                      <SeriesForm kpi={kpi ? kpi.id : 0} />
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

export default SeriesOptions;
