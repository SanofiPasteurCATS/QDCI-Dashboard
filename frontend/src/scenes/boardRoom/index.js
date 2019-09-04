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
  getActionTable
} from "../../core/actions/dashboards";
import LoadingScreen from "../../core/components/layout/LoadingScreen";

// NATIVE COMPONENTS
import PillarBar from "./components/PillarBar";
import ActionPlan from "./components/ActionPlan";

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
      getDashboards
    } = this.props;

    // Fetch data from server
    // Source of ALL data for boardroom
    const { id } = this.props.match.params;
    getDashboards();
    getADashboard(id);
    getActionTable(id);
    getKpis(id);
  }

  render() {
    const { currentDashboard, kpis, actionTables, dashboards } = this.props;
    const { id } = this.props.match.params;

    // If there is no current dashboard show the loading screen

    if (currentDashboard == null) {
      return <LoadingScreen />;
    }

    const color = currentDashboard.background;

    return (
      <div>
        <div
          className="container-fluid h-100"
          style={{
            padding: 0,
            background: color,
            height: `${100}%`
          }}
        >
          <div className="row" style={{ margin: 0 }}>
            <div className="col-lg-2">
              <div className="card card-body m-4">
                <PillarBar kpis={kpis} dashboardId={id} />
              </div>
            </div>
            <div className="col-lg-10">
              <ActionPlan tables={actionTables} dashboards={dashboards} />
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
  currentDashboard: state.dashboards.currentDashboard
});

export default connect(
  mapStateToProps,
  {
    getKpis,
    getDashboards,
    getADashboard,
    clearKpis,
    getActionTable
  }
)(Boardroom);
