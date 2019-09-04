// DEPENDANCIES
import React, { Component } from "react";
import PropTypes from "prop-types";

// COMPONENTS
import SeriesForm from "./series/SeriesForm";
import DataTable from "./datapoints/DataTable";

class SeriesView extends Component {
  render() {
    const { series } = this.props;
    if (!series)
      return (
        <div
          className="modal fade"
          id="manageSeries"
          role="dialog"
          aria-labelledby="manageSeriesLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content"></div>
          </div>
        </div>
      );
    return (
      <div
        className="modal fade"
        id="manageSeries"
        role="dialog"
        aria-labelledby="manageSeriesLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title" id="manageSeriesLabel">
                <span
                  className="im im-chart"
                  style={{ fontSize: `${2.5}rem`, verticalAlign: "-0.1em" }}
                />
                {"  "}
                {`Manage Series - ${series.name}`}
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
                    <SeriesForm series={series} />
                  </div>
                  <hr></hr>
                  <h3 className="mt-4">Data</h3>
                  <DataTable data={series.entries}></DataTable>
                </div>
                <div className="card-footer">
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-primary">Back</button>
                    <button className="btn btn-danger">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SeriesView;
