// -----------------------------------------------------------------------------
//                         BOARDROOM COMPONENT
//                      Organization: Sanofi Pasteur
//                         Author: Kyle Thatcher
//                           Date: 08JUL2019
// -----------------------------------------------------------------------------

import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getKpis,
  getDashboards,
  getADashboard,
  clearKpis
} from "../../actions/dashboards";
import LoadingScreen from "../layout/LoadingScreen";
import Sidebar from "./sidebar";
import Table from "../common/ui/table/Table";
import {
  ACTION_TABLE_DUMMY_DATA,
  ACTION_TABLE_HEADERS
} from "../../common/dashboardOptions";

class Boardroom extends Component {
  static propTypes = {
    dashboards: PropTypes.array.isRequired,
    kpis: PropTypes.array.isRequired,
    isAuthenticated: PropTypes.bool,
    getDashboards: PropTypes.func.isRequired,
    getADashboard: PropTypes.func.isRequired,
    getKpis: PropTypes.func.isRequired,
    clearKpis: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { getADashboard, getKpis } = this.props;
    const { id } = this.props.match.params;
    getADashboard(id);
    getKpis(id);
  }

  render() {
    const { currentDashboard, kpis } = this.props;
    if (currentDashboard == null) {
      return <LoadingScreen />;
    }
    const color = currentDashboard.background;
    return (
      <div>
        <Fragment>
          <div
            className="container-fluid"
            style={{
              padding: 0,
              background: color,
              height: `${100}%`
            }}
          >
            <div className="row" style={{ margin: 0 }}>
              <div className="col-lg-2">
                <div className="card card-body m-4">
                  <Sidebar
                    kpis={kpis}
                    dashboardId={this.props.match.params.id}
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="card m-4">
                  <div className="card-body">
                    <h1>Short Term Action Plan</h1>
                    <Table
                      data={ACTION_TABLE_DUMMY_DATA}
                      header={ACTION_TABLE_HEADERS}
                      editable={false}
                    />
                    <h1>Long Term Action Plan</h1>
                    <Table
                      data={ACTION_TABLE_DUMMY_DATA}
                      header={ACTION_TABLE_HEADERS}
                      editable={false}
                    />
                    <h1>Upper Level Escalation</h1>
                    <Table
                      data={ACTION_TABLE_DUMMY_DATA}
                      header={ACTION_TABLE_HEADERS}
                      editable={false}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      </div>
    );
  }
}

// Extracting data from state
const mapStateToProps = state => ({
  dashboards: state.dashboards.dashboards,
  kpis: state.dashboards.kpis,
  isAuthenticated: state.auth.isAuthenticated,
  currentDashboard: state.dashboards.currentDashboard
});
export default connect(
  mapStateToProps,
  {
    getKpis,
    getDashboards,
    getADashboard,
    clearKpis
  }
)(Boardroom);
