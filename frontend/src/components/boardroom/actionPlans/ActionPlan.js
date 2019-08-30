import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ActionTable from "./ActionTable";
import LoadingScreen from "../../layout/LoadingScreen";
import { ACTION_TABLE_HEADERS } from "../../../common/dashboardOptions";
import EscalationOptions from "./EscalationsOptions";
import ActionOptions from "./ActionOptions";

class ActionPlan extends Component {
  static propTypes = {
    tables: PropTypes.array.isRequired,
    dashboards: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentDashboard: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.rowClick = this.rowClick.bind(this);
    this.state = {
      currentActionId: null
    };
  }

  filterTables(title) {
    const { tables } = this.props;
    const payload = tables.filter(table => {
      return table.title === title;
    });
    return payload ? payload[0] : null;
  }

  rowClick(id) {
    this.setState({ currentActionId: id });
    $("#actionOptions").modal("show");
  }

  render() {
    const { tables, dashboards, currentDashboard } = this.props;
    const { currentActionId } = this.state;

    const actionQuery = tables
      .map(table => {
        return table.actions.filter(action => {
          return action.id === currentActionId;
        });
      })
      .flat();
    const currentAction = actionQuery ? actionQuery[0] : null;

    const ul = this.filterTables("Upper Level Escalation");
    const ll = this.filterTables("Lower Level Feed");
    const lt = this.filterTables("Long Term Action Plan");
    const st = this.filterTables("Short Term Action Plan");
    return (
      <Fragment>
        <ActionOptions action={currentAction} />
        <div className="row">
          <div className="col-lg-6">
            <div className="card m-4">
              <div className="card-body">
                {st ? (
                  <Fragment>
                    <h3> Short Term Action Plan</h3>
                    <ActionTable
                      data={st}
                      header={ACTION_TABLE_HEADERS}
                      appendable
                      rowClick={this.rowClick}
                    />
                  </Fragment>
                ) : (
                  <LoadingScreen />
                )}

                {lt ? (
                  <Fragment>
                    <h3 className="mt-3"> Long Term Action Plan</h3>
                    <ActionTable
                      data={lt}
                      header={ACTION_TABLE_HEADERS}
                      appendable
                      rowClick={this.rowClick}
                    />
                  </Fragment>
                ) : (
                  <LoadingScreen />
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card m-4">
              <div className="card-body">
                {ul ? (
                  <Fragment>
                    <div className="row" style={{ padding: "0 1rem" }}>
                      <div style={{ fontSize: 1.75 + "rem", fontWeight: 500 }}>
                        {" "}
                        Upper Level Escalation
                      </div>
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
                      rowClick={this.rowClick}
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
                    <h3 className="mt-3"> Lower Level Feed</h3>
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
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  currentDashboard: state.dashboards.currentDashboard
});

export default connect(mapStateToProps)(ActionPlan);
