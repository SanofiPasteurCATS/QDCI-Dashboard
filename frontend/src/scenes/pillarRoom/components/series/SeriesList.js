// DEPENDANCIES
import React, { Component } from "react";
import { connect } from "react-redux";
import SeriesCard from "./SeriesCard";
import Grid from "@material-ui/core/Grid";

// REDUX
import { addSeries } from "../../../../core/actions/dashboards";

// CORE COMPONENTS
import NewCard from "../../../../core/components/ui/NewCard";

class SeriesList extends Component {
  onNewSeriesClick = e => {
    const { addSeries, kpiId } = this.props;
    addSeries({
      kpi: kpiId,
      color: "#000",
      name: "My Series",
      plot_type: "li"
    });
  };

  render() {
    const { series, onClick } = this.props;
    if (!series) return <div></div>;
    return (
      <Grid container spacing={3}>
        {series.map(series => (
          <Grid key={series.id} item lg={3}>
            <SeriesCard onClick={onClick} series={series} />
          </Grid>
        ))}
        <Grid item lg={3}>
          <NewCard handleClick={this.onNewSeriesClick} text="Series" />
        </Grid>
      </Grid>
    );
  }
}

export default connect(null, { addSeries })(SeriesList);
