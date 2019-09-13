// DEPENDANCIES
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// ACTIONS
import { deleteSeries } from "../../../../core/actions/dashboards";

// COMPONENTS
import SeriesEdit from "./SeriesEdit";
import DataTable from "../datapoints/DataTable";

class SeriesView extends Component {
  constructor(props) {
    super(props);
    this.onSubmitDelete = this.onSubmitDelete.bind(this);
  }

  componentDidMount() {
    const { onDelete, series } = this.props;
    onDelete({ type: "series", item: series, onSubmit: this.onSubmitDelete });
  }

  onDelete = () => {
    $("#deleteConfirmation").modal("show");
  };

  onSubmitDelete = state => {
    const { series, deleteSeries } = this.props;
    if (state.name === series.name) {
      deleteSeries(series.id);
      return true;
    } else return false;
  };

  render() {
    const { series, onBack } = this.props;
    if (!series) return <></>;
    return (
      <Fragment>
        <div className="im im-arrow-left mb-4 icon symbol" onClick={onBack}>
          {" "}
        </div>
        <h3>Properties</h3>
        <div className="d-flex">
          <SeriesEdit series={series} />
        </div>
        <hr />
        <h3 className="mt-4">Data</h3>
        <DataTable data={series.entries} />
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-danger"
            onClick={this.onDelete}
          >
            Delete Series
          </button>
        </div>
      </Fragment>
    );
  }
}

export default connect(
  null,
  { deleteSeries }
)(SeriesView);
