// DEPENDANCIES
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

// COMPONENTS
import SeriesView from "./series/SeriesView";
import KpiView from "./kpis/KpiView";

export const KPI_VIEW = 0;
export const SERIES_VIEW = 1;

class MenuView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSeries: null,
      view: 0
    };
    this.onSeriesSelect = this.onSeriesSelect.bind(this);
    this.setViewState = this.setViewState.bind(this);
    this.onSeriesBack = this.onSeriesBack.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { kpi, setMenuState, resetKpiSelect } = this.props;
    if (!kpi) {
      setMenuState(false);
      resetKpiSelect();
      return;
    }
    if (
      prevProps.kpi.id !== kpi.id ||
      prevProps.kpi.series.length !== kpi.series.length
    ) {
      this.setState({ view: KPI_VIEW });
    }
  }

  onSeriesSelect = id => {
    this.setState({ selectedSeries: id });
    this.setViewState(SERIES_VIEW);
  };

  setViewState = view => {
    this.setState({ view: view });
  };

  onSeriesBack = () => {
    this.setState({ view: KPI_VIEW });
  };

  onDelete = deleteItem => {
    const { onDelete } = this.props;
    onDelete(deleteItem);
  };

  render() {
    const { kpi, setMenuState } = this.props;
    if (!kpi) {
      setMenuState(false);
      return <div></div>;
    }
    const { selectedSeries, view } = this.state;

    const series = selectedSeries
      ? kpi.series.filter(s => {
          return s.id === selectedSeries;
        })[0]
      : null;

    switch (view) {
      case KPI_VIEW:
        return (
          <KpiView
            kpi={kpi}
            onSeriesSelect={this.onSeriesSelect}
            onDelete={this.onDelete}
          ></KpiView>
        );
      case SERIES_VIEW:
        return (
          <SeriesView
            series={series}
            onBack={this.onSeriesBack}
            onDelete={this.onDelete}
          ></SeriesView>
        );
      default:
        return "404";
    }
  }
}

export default MenuView;
