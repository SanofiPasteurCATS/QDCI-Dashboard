// DEPENDANCIES
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

// CORE COMPONENTS
import { getItem } from "../../../core/helpers/Filters";

// NATIVE COMPONENTS
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
    this.setRemove = this.setRemove.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { kpi, changeMenu, resetKpiSelect } = this.props;
    if (!kpi) {
      changeMenu(false);
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

  setRemove = removeItem => {
    const { setRemove } = this.props;
    setRemove(removeItem);
  };

  render() {
    const { kpi, changeMenu, pillarId } = this.props;
    if (!kpi) {
      changeMenu(false);
      return <div></div>;
    }
    const { selectedSeries, view } = this.state;

    const series = getItem(selectedSeries, kpi.series, "id");
    switch (view) {
      case KPI_VIEW:
        return (
          <KpiView
            kpi={kpi}
            onSeriesSelect={this.onSeriesSelect}
            setRemove={this.setRemove}
            pillarId={pillarId}
          ></KpiView>
        );
      case SERIES_VIEW:
        return (
          <SeriesView
            series={series}
            kpi={kpi}
            onBack={this.onSeriesBack}
            setRemove={this.setRemove}
            pillarId={pillarId}
          ></SeriesView>
        );
      default:
        return "404";
    }
  }
}

export default MenuView;
