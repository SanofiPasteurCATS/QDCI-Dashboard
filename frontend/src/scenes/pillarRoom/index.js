// DEPENDACIES
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as d3 from "d3";
import PropTypes from "prop-types";

// CONFIG
import { KPI_TABLE_HEADERS } from "../../core/config/dashboardConfig";

// CORE COMPONENTS
import LoadingScreen from "../../core/components/layout/LoadingScreen";
import Pillar from "../../core/components/d3charts/pillar";
import LineChart from "../../core/components/d3charts/LineChart";
import Table from "../../core/components/ui/table/Table";
import SvgExporter from "../../core/components/ui/svgExporter";
import Modal from "../../core/components/ui/modal/Modal";

// ACTIONS
import {
  getADashboard,
  getKpis,
  clearKpis
} from "../../core/actions/dashboards";

// NATIVE COMPONENTS
import ChartOptions from "./components/ChartOptions";
import MenuView from "./components/MenuView";
import KpiNew from "./components/kpis/KpiNew";
import DeletetionConformation from "../../core/components/ui/DeleteConfirmation";

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
      selectedKpi: null,
      menuMode: false,
      deletionContext: null
    };

    this.selectSeriesHook = this.selectSeriesHook.bind(this);
    this.selectKpiHook = this.selectKpiHook.bind(this);
    this.updateExport = this.updateExport.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.resetKpiSelect = this.resetKpiSelect.bind(this);
    this.tooltip = React.createRef();
    this.showTooltip = this.showTooltip.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.kpis != this.props.kpis) {
      // this.selectSeriesHook(null);
    }
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

  setMenuState = menuMode => {
    this.setState({
      menuMode: menuMode
    });
  };

  onDelete = deletionContext => {
    this.setState({ deletionContext: deletionContext });
  };

  showTooltip = (show, data = null) => {
    const tooltipMarkdown = data => {
      return `<div className="card p-4">
          <div className="card-body">
          <h5 style="line-height:0.4">${data.kpiName}</h5>
          <div className="card-text" style="line-height:0.5">
            <hr/>
            <p>Value: ${data.value}</p>
            <p>Target: ${data.target}</p>
            <p>Date: ${data.date} </p>
            <p>Deviation: ${((data.value / data.target - 1) * 100).toFixed(
              2
            )}% </p>
          </div>
          </div>
        </div>`;
    };
    const tooltip = this.tooltip.current;
    if (show) {
      tooltip.style.display = "block";
      tooltip.style.opacity = 1;
    } else {
      tooltip.style.display = "none";
      tooltip.style.opacity = 0;
    }
    if (!data) return;
    if (data.payload) {
      tooltip.innerHTML = tooltipMarkdown(data.payload);
      tooltip.style.left = `${data.x + 24}px`;
      tooltip.style.top = `${data.y}px`;
    }
  };
  resetKpiSelect = () => {
    const { kpis } = this.props;
    if (!kpis[0]) return;
    this.setState({ selectedKpi: kpis[0].id });
  };
  deselect = () => {
    d3.selectAll(".line").attr("stroke-width", 1.8);
    d3.selectAll(".dot").attr("r", 3);
    d3.selectAll(`.legend`)
      .attr("font-weight", "normal")
      .attr("font-size", "17");
    this.selectSeriesHook(null);
  };

  render() {
    const { kpis, currentDashboard } = this.props;
    const { pillarId, dashboardId } = this.props.match.params;
    const {
      selectedSeries,
      selectedKpi,
      selectedExport,
      menuMode,
      deletionContext
    } = this.state;
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
    const color = currentDashboard.background;
    return (
      <Fragment>
        <div
          className="container-fluid"
          style={{
            padding: 0,
            background: color,
            height: `${100}%`,
            minHeight: "fit-content"
          }}
        >
          <div className="qd-tooltip" ref={this.tooltip}></div>
          <div className="row m-0">
            <div className="col-lg-4">
              <div className="card ml-4 mt-4 mb-4 mr-4 h-95">
                <div className="card-body">
                  <Pillar
                    kpis={kpis}
                    letter={pillarId === "Plus" ? "+" : pillarId}
                    dashboardId={dashboardId}
                    labeled
                    showTooltip={this.showTooltip}
                  />
                </div>
                <div className="card-footer" style={{ display: "flex" }}>
                  <div className="row">
                    <div className="col-lg-12">
                      <Table
                        data={kpis}
                        header={KPI_TABLE_HEADERS}
                        fontSize={`${0.7}rem`}
                        summary={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card ml-4 mt-4 mb-4 mr-4 h-90 mx-h-90">
                <div className="card-body scroll mx-vh-75">
                  {menuMode ? (
                    <MenuView
                      kpi={kpi}
                      onDelete={this.onDelete}
                      setMenuState={this.setMenuState}
                      menuState={this.menuMode}
                      resetKpiSelect={this.resetKpiSelect}
                    ></MenuView>
                  ) : (
                    <LineChart
                      kpis={kpis}
                      selectSeriesHook={this.selectSeriesHook}
                      selectedKpi={selectedKpi}
                    />
                  )}
                </div>

                <div className="card-footer" style={{ display: "flex" }}>
                  <ChartOptions
                    active={selectedSeries}
                    selectKpiHook={this.selectKpiHook}
                    selectSeriesHook={this.selectSeriesHook}
                    deselectHook={this.deselect}
                    kpis={kpis}
                    setMenuState={this.setMenuState}
                    menuMode={menuMode}
                  />
                </div>
              </div>
            </div>
          </div>

          <Modal id="newKpi" title="New KPI" iconClass="im im-dashboard">
            <KpiNew pillar={pillarId} dashboard={currentDashboard.id}></KpiNew>
          </Modal>
        </div>
        <DeletetionConformation
          deletionContext={deletionContext}
        ></DeletetionConformation>
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
  { getADashboard, getKpis, clearKpis }
)(pillarRoom);
