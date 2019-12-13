// DEPENDACIES
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import HeatCheck from "../../core/components/d3charts/HeatCheck";

// CORE COMPONENTS
import {
  getKpis,
  getDashboards,
  getADashboard,
  clearKpis,
  getActionTable,
  getAudits,
  getWins,
  getHeat,
  updateHeat,
  addWin
} from "../../core/actions/dashboards";
import LoadingScreen from "../../core/components/layout/LoadingScreen";
//import Carousel from "../../core/components/ui/Carousel";

// NATIVE COMPONENTS
import PillarBar from "./components/PillarBar";
import AuditView from "./components/AuditView";
import WinView from "./components/WinView";
import Carousel from "./components/Carousel";
import ActionView from "./components/ActionView";

// MATERIAL-UI
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import ReplayIcon from "@material-ui/icons/Replay";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

const styles = theme => ({
  rootContainer: {
    margin: 0,
    width: "100%",
    paddingTop: theme.spacing(5)
  },
  carouselContainer: {
    display: "flex",
    justifyContent: "center",
    height: "fit-content"
  },
  nestedColumn: {
    marginTop: "-8px",
    flexDirection: "column",
    paddingRight: "0 !important"
  },
  pillarBarContainer: {
    width: "100%"
  },
  column: {
    flexDirection: "column"
  },
  mediaContainer: {
    justifyContent: "start"
  },
  card: {
    maxWidth: "100%"
  },
  stackedCard: {
    marginBottom: theme.spacing(4)
  },
  title: {
    flex: "1 1 100%",
    color: "rgba(0, 0, 0, 0.87)"
  },
  heatCheck: {
    width: "100%",
    marginBottom: theme.spacing(3)
  }
});

class Boardroom extends Component {
  static propTypes = {
    dashboards: PropTypes.array,
    kpis: PropTypes.array.isRequired,
    getDashboards: PropTypes.func.isRequired,
    getADashboard: PropTypes.func.isRequired,
    getKpis: PropTypes.func.isRequired,
    getActionTable: PropTypes.func.isRequired,
    currentDashboard: PropTypes.object,
    actionTables: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  componentDidMount() {
    const {
      getADashboard,
      getKpis,
      getActionTable,
      getDashboards,
      getAudits,
      getWins,
      getHeat
    } = this.props;

    // Fetch data from server
    // Source of ALL data for boardroom
    const { id } = this.props.match.params;
    getDashboards();
    getADashboard(id);
    getActionTable(id);
    getKpis(id);
    getAudits(id);
    getWins(id);
    getHeat(id);
  }

  render() {
    const {
      currentDashboard,
      kpis,
      actionTables,
      dashboards,
      audits,
      wins,
      heat,
      classes,
      updateHeat
    } = this.props;
    const { id } = this.props.match.params;
    // If there is no current dashboard show the loading screen

    if (currentDashboard == null) {
      return <LoadingScreen />;
    }

    const images = currentDashboard.images;
    return (
      <Grid
        container
        spacing={4}
        className={classes.rootContainer}
        style={{ background: currentDashboard.background }}
      >
        <Grid item lg={2} className={classes.pillarBarContainer}>
          <Card className={classes.card}>
            <PillarBar kpis={kpis} dashboardId={id} />
          </Card>
        </Grid>

        <Grid
          item
          container
          lg={10}
          spacing={1}
          className={classes.mediaContainer}
          alignContent="flex-start"
        >
          <Grid item lg={7} className={classes.carouselContainer}>
            {images.length ? (
              <Carousel
                slides={images.map(image => {
                  return { imgPath: image.image };
                })}
              />
            ) : null}
          </Grid>

          <Grid item lg={5} className={classes.heatCheck}>
            <Card className={classes.card}>
              <Toolbar>
                <Typography
                  className={classes.title}
                  variant="h6"
                  id="heatCheckTitle"
                  color="inherit"
                >
                  Heat Check
                </Typography>
                <Tooltip title="Reset">
                  <IconButton onClick={this.resetHeat} aria-label="reset">
                    <ReplayIcon />
                  </IconButton>
                </Tooltip>
              </Toolbar>

              <HeatCheck heat={heat} onClick={updateHeat}></HeatCheck>
            </Card>
          </Grid>

          <Grid item container spacing={4}>
            <Grid item container lg={7} className={classes.column} spacing={2}>
              <Card className={classes.card}>
                <ActionView
                  tables={actionTables}
                  dashboardId={currentDashboard.id}
                  dashboards={dashboards}
                  currentDashboard={currentDashboard}
                />
              </Card>
            </Grid>

            <Grid item container lg={5} className={classes.nestedColumn}>
              <Card className={classes.stackedCard}>
                <WinView data={wins} dashboardId={currentDashboard.id} />
              </Card>
              <Card>
                <AuditView data={audits} dashboardId={currentDashboard.id} />
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
  resetHeat = () => {
    const { updateHeat, heat } = this.props;
    for (let i in heat) {
      let h = { ...heat[i] };
      h.value = 0;
      updateHeat(h, h.id);
    }
  };
}

Boardroom.defaultProps = {
  dashboards: null,
  currentDashboard: null
};

const mapStateToProps = state => ({
  dashboards: state.dashboards.dashboards,
  kpis: state.dashboards.kpis,
  isAuthenticated: state.auth.isAuthenticated,
  actionTables: state.dashboards.actionTables,
  currentDashboard: state.dashboards.currentDashboard,
  audits: state.dashboards.audits,
  wins: state.dashboards.wins,
  heat: state.dashboards.heat
});

export default connect(mapStateToProps, {
  getKpis,
  getDashboards,
  getADashboard,
  clearKpis,
  getActionTable,
  getAudits,
  getWins,
  getHeat,
  updateHeat,
  addWin
})(withStyles(styles)(Boardroom));
