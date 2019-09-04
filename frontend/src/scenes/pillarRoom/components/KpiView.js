// DEPENDANCIES
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

// COMPONENTS
import SeriesList from "./SeriesList";
import KpiForm from "./kpis/KpiForm";
import SeriesView from "./SeriesView";

class KpiView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSeries: null
    };
    this.onSeriesSelect = this.onSeriesSelect.bind(this);
  }

  onSeriesSelect = id => {
    this.setState({ selectedSeries: id });
    $("#manageSeries").modal("show");
  };
  render() {
    const { kpi } = this.props;
    const { selectedSeries } = this.state;
    const series = kpi ? kpi.series : [];
    const s = series
      ? series.filter(s => {
          return s.id == selectedSeries;
        })[0]
      : [];
    if (!kpi)
      return (
        <div
          className="modal fade"
          id="manageKpi"
          role="dialog"
          aria-labelledby="manageKpiLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content"></div>
          </div>
        </div>
      );
    return (
      <Fragment>
        <div
          className="modal fade"
          id="manageKpi"
          role="dialog"
          aria-labelledby="manageKpiLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title" id="manageKpiLabel">
                  <span
                    className="im im-dashboard"
                    style={{ fontSize: `${2.5}rem`, verticalAlign: "-0.1em" }}
                  />
                  {"  "}
                  {`Manage KPI - ${kpi.name}`}
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
                    <h3>Properties</h3>
                    <div className="d-flex">
                      <KpiForm kpi={kpi} />
                    </div>
                    <hr></hr>
                    <h3 className="mt-4">Series</h3>
                    <SeriesList
                      onClick={this.onSeriesSelect}
                      series={kpi.series}
                    ></SeriesList>
                  </div>
                  <div className="card-footer">
                    <div className="d-flex justify-content-end">
                      <button className="btn btn-danger">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SeriesView series={s}></SeriesView>
      </Fragment>
    );
  }
}

export default KpiView;
