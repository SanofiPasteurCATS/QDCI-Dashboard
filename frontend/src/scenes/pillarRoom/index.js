// DEPENDACIES
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as d3 from "d3";
import PropTypes from "prop-types";
import Chart from "./components/Chart";

// CONFIG
import {
  KPI_TABLE_HEADERS,
  PLOT_TYPE_MAP
} from "../../core/config/dashboardConfig";

// CORE COMPONENTS
import LoadingScreen from "../../core/components/layout/LoadingScreen";
import Pillar from "../../core/components/d3charts/pillar";
import LineChart from "../../core/components/d3charts/LineChart";
import Table from "./components/Table";
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
import PillarPopover from "./components/PillarPopover";

// MATERIAl-UI
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  rootContainer: {
    margin: 0,
    width: "100%",
    overflow: "hidden",
    flex: 1
  },
  cardAction: {
    padding: "8px 25px",
    position: "sticky",
    marginTop: "auto",
    borderTop: "1px solid rgba(0, 0, 0, 0.14)"
  },
  card: {
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
    height: "100%",
    maxHeight: "100%"
  },
  chartCardContent: {
    overflow: "auto",
    flex: 1
  },
  gridItem: {
    maxHeight: "100%"
  },
  pillar: {
    margin: "0 20px !important"
  }
});

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
      toolTipData: {},
      toolTipShow: false,
      kpiNewOpen: false
    };

    this.selectSeries = this.selectSeries.bind(this);
    this.selectKpi = this.selectKpi.bind(this);
    this.setRemove = this.setRemove.bind(this);
    this.resetKpiSelect = this.resetKpiSelect.bind(this);
    this.showTooltip = this.showTooltip.bind(this);
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

  openKpiNew = state => () => {
    this.setState({ kpiNewOpen: state });
  };

  deselect = () => {
    d3.selectAll(".line").attr("stroke-width", 1.8);
    d3.selectAll(".dot").attr("r", 3);
    d3.selectAll(`.legend`)
      .attr("font-weight", "normal")
      .attr("font-size", "17");
    this.selectSeries(null);
  };

  render() {
    const { kpis, currentDashboard, classes } = this.props;
    const { pillarId, dashboardId } = this.props.match.params;
    const {
      selectedSeries,
      selectedKpi,
      menuMode,
      toolTipData,
      toolTipShow,
      kpiNewOpen
    } = this.state;

    const kpi = getItem(selectedKpi, kpis, "id");
    const chartSeries = [];
    const seriesColors = [];
    kpi &&
      kpi.series.forEach(series => {
        let data = [];

        series.entries.forEach(datapoint => {
          if (!datapoint.value) return;
          data.push({
            x: new Date(datapoint.date).getTime(),
            y: datapoint.value
          });
        });
        chartSeries.push({
          name: series.name,
          data: data,
          unit: "$",
          type: PLOT_TYPE_MAP[series.plot_type]
        });
        seriesColors.push(series.color);
      });

    if (currentDashboard == null) {
      return <LoadingScreen />;
    }
    const color = currentDashboard.background;

    return (
      <>
        <PillarPopover open={toolTipShow} data={toolTipData} />

        <Grid
          container
          spacing={4}
          className={classes.rootContainer}
          style={{ background: color }}
        >
          <Grid item lg={4} className={classes.gridItem}>
            <Card className={classes.card}>
              <CardContent>
                <Pillar
                  kpis={kpis}
                  letter={pillarId === "Plus" ? "+" : pillarId}
                  dashboardId={dashboardId}
                  labeled
                  className={classes.pillar}
                  onHover={this.showTooltip}
                />

                <CardActions>
                  <Table data={kpis} tableMeta={KPI_TABLE_HEADERS} />
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={8} className={classes.gridItem}>
            <Card className={classes.card}>
              <CardContent className={classes.chartCardContent}>
                {menuMode ? (
                  <MenuView
                    kpi={kpi}
                    setRemove={this.setRemove}
                    changeMenu={this.setMenuState}
                    menuState={this.menuMode}
                    resetKpiSelect={this.resetKpiSelect}
                    pillarId={pillarId}
                  ></MenuView>
                ) : (
                  <Chart
                    type={"line"}
                    series={chartSeries}
                    colors={seriesColors}
                  />
                  /*
                  <LineChart
                    kpis={kpis}
                    selectSeries={this.selectSeries}
                    selectedKpi={selectedKpi}
                  /> */
                )}
              </CardContent>
              <CardActions className={classes.cardAction}>
                <ChartOptions
                  active={selectedSeries}
                  selectKpi={this.selectKpi}
                  selectSeries={this.selectSeries}
                  deselect={this.deselect}
                  kpis={kpis}
                  changeMenu={this.setMenuState}
                  menuMode={menuMode}
                  kpi={kpi}
                  handleKpiNewOpen={this.openKpiNew}
                />
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        <KpiNew
          pillar={pillarId}
          dashboard={currentDashboard.id}
          open={kpiNewOpen}
          handleToggleOpen={this.openKpiNew}
        ></KpiNew>
      </>
    );
  }
}

const mapStateToProps = state => ({
  kpis: state.dashboards.kpis,
  currentDashboard: state.dashboards.currentDashboard
});

export default connect(mapStateToProps, { getADashboard, getKpis, clearKpis })(
  withStyles(styles)(pillarRoom)
);
