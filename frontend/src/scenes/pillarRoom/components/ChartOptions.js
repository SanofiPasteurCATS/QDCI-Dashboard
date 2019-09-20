// DEPENDANCIES
import React, { Fragment, Component } from "react";

class ChartOptions extends Component {
  onChange = e => {
    const { selectKpi, selectSeries, deselect } = this.props;
    selectKpi(e.target.value);
    selectSeries(null);
    deselect();
  };

  componentDidUpdate(prevProps) {
    const { selectKpi } = this.props;
    if (!prevProps.kpis[0] && this.props.kpis[0]) {
      selectKpi(this.props.kpis[0].id);
    }
  }

  openKpiNew = () => {
    $("#newKpi").modal("show");
  };

  render() {
    const { kpis, changeMenu, menuMode, kpi } = this.props;

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
          className={"btn btn-success btn-sm mt-auto ml-3"}
          style={{ padding: "1px 8px" }}
          onClick={this.openKpiNew}
        >
          <i
            className="im im-plus"
            style={{ lineHeight: "1.5", fontSize: "20px" }}
          ></i>
        </button>
        {kpi && (
          <>
            <button
              type="button"
              className={`btn btn-sm mt-auto ml-auto ${
                menuMode ? "btn-secondary" : "btn-primary"
              }`}
              onClick={() => changeMenu(false)}
              style={{ padding: "1px 8px" }}
              disabled={menuMode ? false : true}
            >
              <i
                className="im im-line-chart-up"
                style={{ lineHeight: "1.5", fontSize: "20px" }}
              ></i>
            </button>
            <button
              type="button"
              className={`btn btn-sm mt-auto ml-2 ${
                menuMode ? "btn-primary" : "btn-secondary"
              }`}
              onClick={() => changeMenu(true)}
              style={{ padding: "1px 8px" }}
              disabled={menuMode ? true : false}
            >
              <i
                className="im im-gear"
                style={{ lineHeight: "1.5", fontSize: "20px" }}
              ></i>
            </button>{" "}
          </>
        )}
      </Fragment>
    );
  }
}
export default ChartOptions;
