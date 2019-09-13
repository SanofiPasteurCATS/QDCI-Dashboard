import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import SeriesList from "../series/SeriesList";
import KpiEdit from "./KpiEdit";

// ACTIONS
import { deleteKpi } from "../../../../core/actions/dashboards";

class KpiView extends Component {
  constructor(props) {
    super(props);
    this.onSubmitDelete = this.onSubmitDelete.bind(this);
  }

  componentDidMount() {
    const { onDelete, kpi } = this.props;
    onDelete({ type: "kpi", item: kpi, onSubmit: this.onSubmitDelete });
  }

  componentDidUpdate(prevProps) {
    const { kpi, onDelete } = this.props;
    if (prevProps.kpi !== kpi);
    onDelete({ type: "kpi", item: kpi, onSubmit: this.onSubmitDelete });
  }
  onDelete = () => {
    $("#deleteConfirmation").modal("show");
  };

  onSubmitDelete = state => {
    const { kpi, deleteKpi } = this.props;
    if (state.name === kpi.name) {
      deleteKpi(kpi.id);
      return true;
    } else return false;
  };

  render() {
    const { kpi, onSeriesSelect } = this.props;

    return (
      <Fragment>
        <h3>Properties</h3>
        <div className="d-flex">
          <KpiEdit kpi={kpi} />
        </div>
        <hr />
        <h3 className="mt-4">Series</h3>
        <SeriesList
          kpiId={kpi.id}
          onClick={onSeriesSelect}
          series={kpi.series}
        />

        <div className="d-flex justify-content-end">
          <button className="btn btn-danger" onClick={this.onDelete}>
            Delete Kpi
          </button>
        </div>
      </Fragment>
    );
  }
}

export default connect(
  null,
  { deleteKpi }
)(KpiView);
