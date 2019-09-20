import React from "react";
import {
  KPI_TYPE_DEVIATION,
  KPI_TYPE_THRESHOLD,
  KPI_TYPE_WIN_LOSE
} from "../../../core/config/dashboardConfig";

const Tooltip = props => {
  console.log(props.show);
  if (!props.show || !props.data) return <></>;
  const {
    kpiName,
    warning_margin,
    target,
    date,
    value,
    kpi_type,
    x,
    y
  } = props.data;
  console.log(x);
  switch (kpi_type) {
    case KPI_TYPE_THRESHOLD:
      return (
        <div
          className="card p-2 qd-tooltip"
          style={{ left: x + "px", top: y + "px", display: "block" }}
        >
          <div className="card-body">
            <h5 style={{ lineHeight: 0.4 }}>{kpiName}</h5>
            <div className="card-text" style={{ lineHeight: 0.5 }}>
              <hr />
              <p>Value: {value}</p>
              <p>Target: {target}</p>
              <p>Date: {date} </p>
              <p>Warning Margin: {warning_margin} </p>
            </div>
          </div>
        </div>
      );
    case KPI_TYPE_DEVIATION:
      return (
        <div
          className="card p-2 qd-tooltip"
          style={{ left: x + "px", top: y + "px", display: "block" }}
        >
          <div className="card-body">
            <h5 style={{ lineHeight: 0.4 }}>{kpiName}</h5>
            <div className="card-text" style={{ lineHeight: 0.5 }}>
              <hr />
              <p>Value: {value}</p>
              <p>Target: {target}</p>
              <p>Date: {date} </p>
              <p>Deviation: {((value / target - 1) * 100).toFixed(2)}% </p>
            </div>
          </div>
        </div>
      );
    case KPI_TYPE_WIN_LOSE:
      return (
        <div
          className="card p-2 qd-tooltip"
          style={{ left: x + "px", top: y + "px", display: "block" }}
        >
          <div className="card-body">
            <h5 style={{ lineHeight: 0.4 }}>{kpiName}</h5>
            <div className="card-text" style={{ lineHeight: 0.5 }}>
              <hr />
              <p>Value: {value}</p>
              <p>Target: {target}</p>
              <p>Date: {date} </p>
            </div>
          </div>
        </div>
      );
  }
};

export default Tooltip;
