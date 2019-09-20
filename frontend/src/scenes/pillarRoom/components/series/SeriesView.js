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
    this.onSubmitRemove = this.onSubmitRemove.bind(this);
  }

  componentDidMount() {
    const { setRemove, series } = this.props;
    setRemove({ type: "series", item: series, onSubmit: this.onSubmitRemove });
  }

  setRemove = () => {
    $("#removeConfirmation").modal("show");
  };

  onSubmitRemove = state => {
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
        <button
          className="mb-4 btn btn-sm btn-primary"
          onClick={onBack}
          style={{ padding: "1px 8px", position: "fixed", zIndex: 1000 }}
        >
          <i
            className="im im-arrow-left icon"
            style={{ lineHeight: 1.5, fontSize: "20px" }}
          ></i>
        </button>
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
            onClick={this.setRemove}
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
