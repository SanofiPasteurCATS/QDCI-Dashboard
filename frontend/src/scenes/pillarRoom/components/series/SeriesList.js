// DEPENDANCIES
import React, { Component } from "react";
import { connect } from "react-redux";
import SeriesCard from "./SeriesCard";

import { addSeries } from "../../../../core/actions/dashboards";
// CORE COMPONENTS
import NewCard from "../../../../core/components/ui/NewCard";

class SeriesList extends Component {
  onNewSeriesClick = e => {
    const { addSeries, kpiId } = this.props;
    addSeries({
      kpi: kpiId,
      color: "#000",
      name: "New Series",
      plot_type: "li"
    });
  };

  render() {
    const { series, onClick } = this.props;
    if (!series) return <div></div>;
    return (
      <div className="row">
        {series.map(series => (
          <div key={series.id} className="col-sm-3">
            <SeriesCard onClick={onClick} series={series} />
          </div>
        ))}
        <div className="col-sm-3">
          <NewCard handleClick={this.onNewSeriesClick} text="Series" />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addSeries }
)(SeriesList);
