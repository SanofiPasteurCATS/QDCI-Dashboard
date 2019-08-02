import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LoadingScreen from "../layout/LoadingScreen";
import {
  getADashboard,
  getKpis,
  clearPillarKpis,
  clearKpis
} from "../../actions/dashboards";
import Pillar from "../common/d3charts/pillar";
import LineChart from "../common/d3charts/LineChart";
import KpiOptions from "./kpis/KpiOptions";
import SeriesOptions from "./series/SeriesOptions";
import SvgExporter from "../common/ui/svgExporter";
import ChartOptions from "./ChartOptions";
import DataOptions from "./series/DataOptions";
import { KPI_TABLE_HEADERS } from "../../common/dashboardOptions";
import Table from "../common/ui/table/Table";

class pillarRoom extends Component {
  static propTypes = {
    getADashboard: PropTypes.func.isRequired,
    kpis: PropTypes.array.isRequired,
    currentDashboard: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedSeries: null,
      selectedExport: "",
      selectedKpi: 0
    };

    this.selectSeriesHook = this.selectSeriesHook.bind(this);
    this.selectKpiHook = this.selectKpiHook.bind(this);
    this.updateExport = this.updateExport.bind(this);
  }

  selectSeriesHook(id) {
    this.setState({ selectedSeries: id });
  }

  selectKpiHook(id) {
    this.setState({ selectedKpi: id });
  }

  updateExport(target) {
    this.setState({ selectedExport: target });
  }

  componentDidMount() {
    const { getADashboard, getKpis, clearKpis } = this.props;
    const { dashboardId, pillarId } = this.props.match.params;
    clearKpis();
    getADashboard(this.props.match.params.dashboardId);
    getKpis(dashboardId, pillarId);
  }

  render() {
    const { kpis, currentDashboard } = this.props;
    const { pillarId, dashboardId } = this.props.match.params;
    const { selectedSeries, selectedKpi, selectedExport } = this.state;

    const kpi = kpis.filter(kpi => {
      return kpi.id == selectedKpi;
    })[0];

    const series = kpi ? kpi.series : [];
    const s = series
      ? series.filter(s => {
          return s.id == selectedSeries;
        })
      : [];
    if (currentDashboard == null) {
      return <LoadingScreen />;
    }
    return (
      <Fragment>
        <div className="row">
          <div className="col-lg-4">
            <div className="card ml-4 mt-4 mb-4 mr-4">
              <div className="card-body">
                <Pillar
                  kpis={kpis}
                  letter={pillarId}
                  dashboardId={dashboardId}
                  labeled
                />
              </div>
              <div className="card-footer" style={{ display: "flex" }}>
                <div className="row">
                  <div className="col-lg-12">
                    <Table
                      data={kpis}
                      header={KPI_TABLE_HEADERS}
                      fontSize={0.7 + "rem"}
                      summary={false}
                    />
                  </div>
                  <div className="col-lg-12" style={{ display: "flex" }}>
                    <button
                      type="button"
                      className="btn btn-primary mt-auto"
                      data-toggle="modal"
                      data-target="#kpiOptions"
                    >
                      Manage KPIs
                    </button>
                    <button
                      type="button"
                      className="btn btn-info mt-auto ml-auto"
                      data-toggle="modal"
                      data-target="#svgExporter"
                      onClick={() => {
                        this.updateExport("#chartPillar");
                      }}
                    >
                      Export Pillar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card ml-4 mt-4 mb-4 mr-4">
              <div className="card-body">
                <LineChart
                  kpis={kpis}
                  selectSeriesHook={this.selectSeriesHook}
                  selectedKpi={selectedKpi}
                />
              </div>

              <div
                className="card-footer"
                style={{ display: "flex", overflow: "auto" }}
              >
                <ChartOptions
                  active={selectedSeries}
                  selectKpiHook={this.selectKpiHook}
                  kpis={kpis}
                />
                <button
                  type="button"
                  className="btn btn-info mt-auto ml-lg-auto ml-s-2 ml-xs-2"
                  data-toggle="modal"
                  data-target="#svgExporter"
                  onClick={() => {
                    this.updateExport("#chart");
                  }}
                >
                  Export Chart
                </button>
              </div>
            </div>
          </div>
        </div>
        <KpiOptions dashboardId={dashboardId} kpis={kpis} pillarId={pillarId} />
        <DataOptions series={s[0]} />
        <SeriesOptions series={series} kpi={kpi} />
        <SvgExporter target={selectedExport} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  kpis: state.dashboards.kpis,
  currentDashboard: state.dashboards.currentDashboard
});

export default connect(
  mapStateToProps,
  { getADashboard, getKpis, clearPillarKpis, clearKpis }
)(pillarRoom);
