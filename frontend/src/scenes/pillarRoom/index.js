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
import Modal from "../../core/components/ui/modal/Modal";
import { getItem } from "../../core/helpers/Filters";

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
import RemoveConformation from "../../core/components/ui/RemoveConfirmation";
import Tooltip from "./components/Tooltip";

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
      removeContext: null,
      toolTipData: null,
      toolTipShow: false
    };

    this.selectSeries = this.selectSeries.bind(this);
    this.selectKpi = this.selectKpi.bind(this);
    this.setRemove = this.setRemove.bind(this);
    this.resetKpiSelect = this.resetKpiSelect.bind(this);
    this.showTooltip = this.showTooltip.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.kpis != this.props.kpis) {
      // this.selectSeriesHook(null);
    }
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

  setRemove = removeContext => {
    this.setState({ removeContext: removeContext });
  };

  showTooltip = (show, data = null) => {
    this.setState({ toolTipShow: show });

    if (!data) return;
    if (data.payload) {
      this.setState({ toolTipData: data.payload });
    }
  };

  resetKpiSelect = () => {
    const { kpis } = this.props;
    if (!kpis[0]) return;
    this.setState({ selectedKpi: kpis[0].id });
  };

  selectSeries(id) {
    this.setState({ selectedSeries: id });
  }

  selectKpi(id) {
    this.setState({ selectedKpi: id });
  }

  deselect = () => {
    d3.selectAll(".line").attr("stroke-width", 1.8);
    d3.selectAll(".dot").attr("r", 3);
    d3.selectAll(`.legend`)
      .attr("font-weight", "normal")
      .attr("font-size", "17");
    this.selectSeries(null);
  };

  render() {
    const { kpis, currentDashboard } = this.props;
    const { pillarId, dashboardId } = this.props.match.params;
    const {
      selectedSeries,
      selectedKpi,
      menuMode,
      removeContext,
      toolTipData,
      toolTipShow
    } = this.state;

    const kpi = getItem(selectedKpi, kpis, "id");

    if (currentDashboard == null) {
      return <LoadingScreen />;
    }
    const color = currentDashboard.background;
    return (
      <div
        className="container-fluid"
        style={{
          padding: 0,
          background: color,
          height: `${100}%`,
          minHeight: "fit-content"
        }}
      >
        <Tooltip data={toolTipData} show={toolTipShow} />
        <div className="row m-0">
          <div className="col-lg-4">
            <div className="card ml-4 mt-4 mb-4 mr-4 h-95">
              <div className="card-body">
                <Pillar
                  kpis={kpis}
                  letter={pillarId === "Plus" ? "+" : pillarId}
                  dashboardId={dashboardId}
                  labeled
                  onHover={this.showTooltip}
                />
              </div>
              <div className="card-footer" style={{ display: "flex" }}>
                <div className="row w-100">
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
                    setRemove={this.setRemove}
                    changeMenu={this.setMenuState}
                    menuState={this.menuMode}
                    resetKpiSelect={this.resetKpiSelect}
                  ></MenuView>
                ) : (
                  <LineChart
                    kpis={kpis}
                    selectSeries={this.selectSeries}
                    selectedKpi={selectedKpi}
                  />
                )}
              </div>

              <div className="card-footer" style={{ display: "flex" }}>
                <ChartOptions
                  active={selectedSeries}
                  selectKpi={this.selectKpi}
                  selectSeries={this.selectSeries}
                  deselect={this.deselect}
                  kpis={kpis}
                  changeMenu={this.setMenuState}
                  menuMode={menuMode}
                  kpi={kpi}
                />
              </div>
            </div>
          </div>
        </div>

        <Modal id="newKpi" title="New KPI" iconClass="im im-dashboard">
          <KpiNew pillar={pillarId} dashboard={currentDashboard.id}></KpiNew>
        </Modal>
        <RemoveConformation removeContext={removeContext}></RemoveConformation>
      </div>
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
