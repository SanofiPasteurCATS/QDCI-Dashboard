import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// COMPONENTS
import ActionTable from "./ActionTable";
import LoadingScreen from "../../../core/components/layout/LoadingScreen";
import { ACTION_TABLE_HEADERS } from "../../../core/config/dashboardConfig";
import EscalationOptions from "./EscalationsOptions";
import ActionOptions from "./ActionOptions";
import AuditTable from "./AuditTable";
import Modal from "../../../core/components/ui/modal/Modal";
import AuditForm from "./AuditForm";
import WinTable from "./WinTable";
import WinForm from "./WinForm";
import HeatCheck from "../../../core/components/d3charts/HeatCheck";
import { updateHeat } from "../../../core/actions/dashboards";
import { CLEAR_CURRENT_DASHBOARD } from "../../../core/actions/types";

import Grid from "@material-ui/core/Grid";

class WidgetView extends Component {
  static propTypes = {
    tables: PropTypes.array.isRequired,
    dashboards: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentDashboard: PropTypes.object.isRequired,
    audit: PropTypes.array
  };

  constructor(props) {
    super(props);
    this.rowActionClick = this.rowActionClick.bind(this);
    this.rowAuditClick = this.rowAuditClick.bind(this);
    this.rowWinClick = this.rowWinClick.bind(this);
    this.resetHeat = this.resetHeat.bind(this);
    this.state = {
      currentActionId: null,
      currentWinId: null
    };
  }

  filterTables(title) {
    const { tables } = this.props;
    const payload = tables.filter(table => {
      return table.title === title;
    });
    return payload ? payload[0] : null;
  }

  rowActionClick(id) {
    this.setState({ currentActionId: id });
    $("#actionOptions").modal("show");
  }

  rowAuditClick(id) {
    this.setState({ currentAuditId: id });
    $("#auditOptions").modal("show");
  }

  rowWinClick(id) {
    this.setState({ currentWinId: id });
    $("#winOptions").modal("show");
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
      tables,
      dashboards,
      currentDashboard,
      audits,
      wins,
      heat,
      updateHeat
    } = this.props;
    const { currentActionId, currentAuditId, currentWinId } = this.state;

    const actionQuery = tables
      .map(table => {
        return table.actions.filter(action => {
          return action.id === currentActionId;
        });
      })
      .flat();
    const currentAction = actionQuery ? actionQuery[0] : null;

    const auditQuery = audits.filter(audit => {
      return audit.id === currentAuditId;
    });

    const winQuery = wins.filter(win => {
      return win.id === currentWinId;
    });

    const currentAudit = auditQuery ? auditQuery[0] : null;
    const currentWin = winQuery ? winQuery[0] : null;

    const ul = this.filterTables("Upper Level Escalation");
    const ll = this.filterTables("Lower Level Feed");
    const lt = this.filterTables("Long Term Action Plan");
    const st = this.filterTables("Short Term Action Plan");
    return (
      <Fragment>
        <ActionOptions action={currentAction} />
        <Modal title="Update Audit" id="auditOptions">
          <AuditForm audit={currentAudit}></AuditForm>
        </Modal>
        <Modal title="Update WIN" id="winOptions">
          <WinForm win={currentWin}></WinForm>
        </Modal>

        <div className="col-lg-6 p-0">
          <h2 className="ml-2 mb-1 color-text-action-plans">
            Action Plans<span className="im im-date-o ml-3"></span>
          </h2>
          <div className="card mt-1 ml-2 mr-2 border-action-plans">
            <div className="card-body">
              {st ? (
                <Fragment>
                  <h5> Short Term</h5>
                  <ActionTable
                    data={st}
                    header={ACTION_TABLE_HEADERS}
                    appendable
                    rowClick={this.rowActionClick}
                  />
                </Fragment>
              ) : (
                <LoadingScreen />
              )}

              {lt ? (
                <Fragment>
                  <h5 className="mt-3"> Long Term</h5>
                  <ActionTable
                    data={lt}
                    header={ACTION_TABLE_HEADERS}
                    appendable
                    rowClick={this.rowActionClick}
                  />
                </Fragment>
              ) : (
                <LoadingScreen />
              )}

              {ul ? (
                <Fragment>
                  <div className="row" style={{ padding: "0 1rem" }}>
                    <h5>Escalation</h5>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm mb-1 ml-auto"
                      onClick={e => {
                        $("#escalationOptions").modal("show");
                      }}
                    >
                      Manage Escalations
                    </button>
                  </div>

                  <ActionTable
                    data={ul}
                    header={ACTION_TABLE_HEADERS}
                    appendable
                    rowClick={this.rowActionClick}
                  />
                  <EscalationOptions
                    dashboards={dashboards}
                    currentDashboard={currentDashboard}
                    actionTable={this.filterTables("Upper Level Escalation")}
                  />
                </Fragment>
              ) : (
                <LoadingScreen />
              )}
              {ll ? (
                <Fragment>
                  <h5 className="mt-3"> Lower Level Feed</h5>
                  <ActionTable
                    data={ll}
                    header={ACTION_TABLE_HEADERS}
                    hoverable
                  />
                </Fragment>
              ) : (
                <LoadingScreen />
              )}
            </div>
          </div>
        </div>
        <div className="col-lg-6 p-0">
          <div className="row m-0">
            <div className="col-lg-6">
              <h2 className="ml-2 mb-1 color-text-audits">
                Audits<span className="im im-thumb-up ml-3"></span>
              </h2>
              <div className="card mt-1 ml-2 mr-2 border-audits">
                <div className="card-body">
                  <AuditTable
                    data={audits}
                    rowClick={this.rowAuditClick}
                    appendable
                    dashboardId={currentDashboard.id}
                  ></AuditTable>
                </div>
              </div>

              <h2 className="ml-2 mt-4 mb-1 color-text-heat-check">
                Heat Check<span className="im im-fire ml-3"></span>
              </h2>
              <div className="card card-body ml-2 mt-1 mr-2 mb-4 border-heat-check">
                <div className="row" style={{ padding: "0px 1rem" }}>
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
            <div className="col-lg-6">
              <h2 className="ml-2 mb-1 color-text-wins">
                Wins<span className="im im-trophy ml-3"></span>
              </h2>
              <div className="card mt-1 ml-2 mr-2 border-wins">
                <div className="card-body">
                  <WinTable
                    data={wins}
                    rowClick={this.rowWinClick}
                    appendable
                    dashboardId={currentDashboard.id}
                  ></WinTable>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  currentDashboard: state.dashboards.currentDashboard
});

export default connect(
  mapStateToProps,
  { updateHeat }
)(WidgetView);
