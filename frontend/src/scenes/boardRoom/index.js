// -----------------------------------------------------------------------------
//                          BOARDROOM SCENE
//                      Organization: Sanofi Pasteur
//                         Author: Kyle Thatcher
//                           Date: 08JUL2019
//
//
//          * The boardroom is the landing page for all dashboards
//                  * Parent of all boardroom components
//               * Contains pillar widgets and action tables
//         * This component makes ALL GET request for Boardroom data
// -----------------------------------------------------------------------------

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
import Carousel from "../../core/components/ui/Carousel";

// NATIVE COMPONENTS
import PillarBar from "./components/PillarBar";
import ActionPlan from "./components/ActionPlan";
import HeatCheck from "../../core/components/d3charts/HeatCheck";

class Boardroom extends Component {
  constructor(props) {
    super(props);
    this.resetHeat = this.resetHeat.bind(this);
  }
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

  resetHeat() {
    const { updateHeat, heat } = this.props;
    for (let i in heat) {
      let h = { ...heat[i] };
      h.value = 0;
      updateHeat(h, h.id);
    }
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
      updateHeat
    } = this.props;
    const { id } = this.props.match.params;

    // If there is no current dashboard show the loading screen

    if (currentDashboard == null) {
      return <LoadingScreen />;
    }

    const color = currentDashboard.background;

    return (
      <div
        className="container-fluid h-100"
        style={{
          padding: 0,
          background: color,
          height: `${100}%`
        }}
      >
        <div className="row" style={{ margin: 0 }}>
          <div className="col-lg-2 p-0">
            <div className="card card-body ml-4 mt-4 mr-2 mb-4">
              <PillarBar kpis={kpis} dashboardId={id} />
            </div>
          </div>
          <div className="col-lg-10 p-0">
            <div className="row m-0">
              <div className="col-lg-12 mt-4">
                <div className="row">
                  <div className="col-lg-6">
                    <Carousel images={currentDashboard.images}></Carousel>
                  </div>
                </div>
              </div>

              <ActionPlan
                tables={actionTables}
                audits={audits}
                wins={wins}
                dashboards={dashboards}
              />
            </div>
            <div className="col-lg-6 p-0">
              <div className="card card-body ml-2 mt-4 mr-2 mb-4">
                <div className="row" style={{ padding: "0px 1rem" }}>
                  <h5 className="mt-3"> Heat Check</h5>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm mb-1 ml-auto"
                    onClick={this.resetHeat}
                  >
                    Reset
                  </button>
                </div>

                <HeatCheck heat={heat} onClick={updateHeat}></HeatCheck>
              </div>
            </div>
          </div>
        </div>
      </div>
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
)(Boardroom);
