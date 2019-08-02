import React, { Fragment } from "react";
import KpiForm from "./KpiForm";
import KpiInfo from "./KpiInfo";
import KpiTable from "./KpiTable";
import { KPI_TABLE_HEADERS } from "../../../common/dashboardOptions";

const KpiOptions = props => {
  const kpiCopy = [];
  for (const i in props.kpis) {
    const copy = {};
    const entry = props.kpis[i];
    copy.name = entry.name;
    copy.pillar = entry.pillar;
    copy.frequency = entry.frequency;
    copy.safe = entry.safe;
    copy.danger = entry.danger;
    copy.id = entry.id;
    kpiCopy.push(copy);
  }
  const { pillarId } = props;
  return (
    <Fragment>
      <div
        className="modal fade"
        id="kpiOptions"
        role="dialog"
        aria-labelledby="kpiOptionsLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title" id="kpiOptionsLabel">
                <span
                  className="im im-dashboard"
                  style={{ fontSize: `${2.5}rem`, verticalAlign: "-0.1em" }}
                />
                {"  "}
                Manage KPIs
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
                        href="#info"
                      >
                        Info
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#list">
                        View KPIs
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#add">
                        Add KPI
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
                    <KpiInfo />
                    <div id="list" className="tab-pane fade">
                      <h5 className="card-title">Your KPIs</h5>
                      <KpiTable data={kpiCopy} header={KPI_TABLE_HEADERS} />
                    </div>
                    <div id="add" className="tab-pane fade">
                      <h5 className="card-title">Create A New KPI</h5>
                      <KpiForm
                        dashboardId={props.dashboardId}
                        pillarId={pillarId}
                      />
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

export default KpiOptions;
