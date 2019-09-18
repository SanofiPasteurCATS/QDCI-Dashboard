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
import { CLEAR_CURRENT_DASHBOARD } from "../../../core/actions/types";

class ActionPlan extends Component {
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

  render() {
    const { tables, dashboards, currentDashboard, audits, wins } = this.props;
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
        <div className="row m-0">
          <div className="col-lg-6 p-0">
            <div className="card mt-4 ml-2 mr-2">
              <div className="card-body">
                {st ? (
                  <Fragment>
                    <h5> Short Term Action Plan</h5>
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
                    <h5 className="mt-3"> Long Term Action Plan</h5>
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
              </div>
            </div>
            <div className="card mt-4 ml-2 mr-2">
              <div className="card-body">
                <h5 className="mt-3">Audits</h5>
                <AuditTable
                  data={audits}
                  rowClick={this.rowAuditClick}
                  appendable
                ></AuditTable>
              </div>
            </div>
          </div>
          <div className="col-lg-6 p-0">
            <div className="card mt-4 ml-2 mr-2">
              <div className="card-body">
                {ul ? (
                  <Fragment>
                    <div className="row" style={{ padding: "0 1rem" }}>
                      <h5> Upper Level Escalation</h5>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm mb-1 ml-auto"
                        data-toggle="modal"
                        data-target="#escalationOptions"
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
            <div className="card mt-4 ml-2 mr-2">
              <div className="card-body">
                <h5 className="mt-3">WINS</h5>
                <WinTable
                  data={wins}
                  rowClick={this.rowWinClick}
                  appendable
                ></WinTable>
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

export default connect(mapStateToProps)(ActionPlan);
