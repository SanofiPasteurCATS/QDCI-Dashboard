// DEPENDACIES
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

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
  updateHeat
} from "../../core/actions/dashboards";
import LoadingScreen from "../../core/components/layout/LoadingScreen";
//import Carousel from "../../core/components/ui/Carousel";

// NATIVE COMPONENTS
import PillarBar from "./components/PillarBar";
import WidgetView from "./components/WidgetView";
import Table from "./components/Table";
import Carousel from "./components/Carousel";

import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  rootContainer: {
    margin: 0,
    width: "100%",
    marginTop: theme.spacing(2)
  },
  carouselContainer: {
    display: "flex",
    justifyContent: "center",
    height: "fit-content"
  },
  nestedGrid: {
    display: "flex"
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
      classes
    } = this.props;
    const { id } = this.props.match.params;
    // If there is no current dashboard show the loading screen

    if (currentDashboard == null) {
      return <LoadingScreen />;
    }

    const color = currentDashboard.background;
    console.log(
      currentDashboard.images.map(image => {
        return { imgPath: image.image };
      })
    );
    const images = currentDashboard.images;
    return (
      <Grid container spacing={2} className={classes.rootContainer}>
        <Grid item lg={2}>
          <Card>
            <PillarBar kpis={kpis} dashboardId={id} />
          </Card>
        </Grid>
        <Grid item container lg={10} className={classes.nestedGrid}>
          <Grid item lg={12} className={classes.carouselContainer}>
            {images.length && (
              <Carousel
                slides={images.map(image => {
                  return { imgPath: image.image };
                })}
              ></Carousel>
            )}
          </Grid>
          <Grid item lg={6}>
            <Card>
              <Typography> This is placeholder</Typography>
              <Table></Table>
            </Card>
          </Grid>
          <Grid item lg={6}>
            <Card>
              <Typography> This is placeholder</Typography>
            </Card>
          </Grid>
          <Grid item lg={6}>
            <Card>
              <Typography> This is placeholder</Typography>
            </Card>
          </Grid>
          <Grid item lg={6}>
            <Card>
              <Typography> This is placeholder</Typography>
            </Card>
          </Grid>
        </Grid>
      </Grid>

      /*
          <div className="col-lg-2 p-0">
            <div className="card card-body ml-4 mt-4 mr-2 mb-4 border-pillars">
              <PillarBar kpis={kpis} dashboardId={id} />
            </div>
          </div>
          <div className="col-lg-10 p-0">
            <div className="row m-0">
              <div className="col-lg-12 mt-4">
                <div className="row">
                  {currentDashboard.images.length ? (
                    <div className="col-lg-6 mb-4">
                      <Carousel images={currentDashboard.images}></Carousel>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>

              <WidgetView
                tables={actionTables}
                audits={audits}
                wins={wins}
                heat={heat}
                dashboards={dashboards}
              />
            </div>
          </div>
        </div>
                  </div> */
    );
  }
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

export default connect(
  mapStateToProps,
  {
    getKpis,
    getDashboards,
    getADashboard,
    clearKpis,
    getActionTable,
    getAudits,
    getWins,
    getHeat,
    updateHeat
  }
)(withStyles(styles)(Boardroom));
