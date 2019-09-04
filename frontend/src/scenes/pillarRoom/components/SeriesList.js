// DEPENDANCIES
import React, { Component } from "react";
import SeriesCard from "./SeriesCard";

// CORE COMPONENTS
import NewCard from "../../../core/components/ui/NewCard";

class SeriesList extends Component {
  render() {
    const { series, onClick } = this.props;
    return (
      <div className="row">
        {series.map(series => (
          <div className="col-sm-4">
            <SeriesCard onClick={onClick} series={series}></SeriesCard>
          </div>
        ))}
        <div className="col-sm-4">
          <NewCard text="Series"></NewCard>
        </div>
      </div>
    );
  }
}

export default SeriesList;
