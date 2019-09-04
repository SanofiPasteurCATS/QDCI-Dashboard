// DEPENDANCIES
import React, { Fragment, Component } from "react";

class ChartOptions extends Component {
  onChange = e => {
    this.props.selectKpiHook(e.target.value);
    this.props.selectSeriesHook(null);
    this.props.deselectHook();
  };

  componentDidUpdate(prevProps) {
    if (!prevProps.kpis[0] && this.props.kpis[0]) {
      this.props.selectKpiHook(this.props.kpis[0].id);
    }
  }
  render() {
    const { active, kpis } = this.props;

    return (
      <Fragment>
        <h4
          style={{
            height: "fit-content",
            marginBottom: 0,
            lineHeight: 1.4
          }}
          className="mt-auto mb-auto"
        >
          KPI:{" "}
        </h4>
        <select
          className="form-control ml-2 mt-auto mb-auto"
          style={{ width: `${200}px` }}
          onChange={this.onChange}
        >
          {kpis.map(kpi => (
            <option key={`choice-${kpi.id}`} value={kpi.id}>
              {kpi.name}
            </option>
          ))}
        </select>
        <button
          type="button"
          className="btn btn-primary mt-auto ml-2"
          data-toggle="modal"
          data-target="#manageKpi"
        >
          Manage KPI
        </button>
        {/*
        {kpis[0] ? (
          <button
            type="button"
            className="btn btn-primary mt-auto ml-2"
            data-toggle="modal"
            data-target="#seriesOptions"
          >
            Manage Series
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-secondary mt-auto ml-2"
            data-toggle="modal"
            data-target="#seriesOptions"
            disabled
          >
            Manage Series
          </button>
        )}

        {active ? (
          <button
            type="button"
            className="btn btn-primary mt-auto ml-auto"
            data-toggle="modal"
            data-target="#dataOptions"
          >
            Edit Selected
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-secondary mt-auto ml-auto"
            disabled
          >
            Edit Selected
          </button>
        )} */}
      </Fragment>
    );
  }
}
export default ChartOptions;
