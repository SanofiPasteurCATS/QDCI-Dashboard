import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import DashboardCard from "../../../core/components/ui/DashboardCard";
import { updateActionTable } from "../../../core/actions/dashboards";
import { accent_color } from "../../../core/config/styleConfig";

class EscalationOptions extends Component {
  static propTypes = {
    updateActionTable: PropTypes.func.isRequired,
    actionTable: PropTypes.isRequired,
    dashboards: PropTypes.isRequired,
    currentDashboard: PropTypes.isRequired
  };
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      selected: this.props.actionTable.parent_dashboard
        ? this.props.actionTable.parent_dashboard
        : null
    };
  }

  handleClick = id => {
    this.setState({ selected: id });
  };

  onSubmit = e => {
    const { updateActionTable, actionTable } = this.props;
    const { selected } = this.state;
    e.preventDefault();
    updateActionTable(actionTable, actionTable.id, selected);
  };

  render() {
    const { dashboards, currentDashboard } = this.props;
    const { selected } = this.state;

    return (
      <Fragment>
        <div
          className="modal fade"
          id="escalationOptions"
          role="dialog"
          aria-labelledby="escalationOptionsLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title" id="escalationOptionsLabel">
                  <span
                    className="im im-link"
                    style={{ fontSize: `${2.5}rem`, verticalAlign: "-0.1em" }}
                  />
                  {"  "}
                  Manage Escalation
                </h1>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body" style={{ padding: 0 }}>
                <div className="card">
                  <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-toggle="tab"
                          href="#options"
                        >
                          Options
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <div
                      className="tab-content"
                      style={{
                        maxHeight: `${550}px`,
                        overflow: "auto",
                        overflowX: "auto"
                      }}
                    >
                      <h5 className="card-title">Select a Parent Board</h5>
                      <form onSubmit={this.onSubmit}>
                        <div className="row">
                          {dashboards
                            .filter(dashboard => {
                              return dashboard.id !== currentDashboard.id;
                            })
                            .map(dashboard => (
                              <div className="col-lrg-3" key={dashboard.id}>
                                <DashboardCard
                                  dashboard={dashboard}
                                  selection={selected}
                                  handleClick={this.handleClick}
                                  key={dashboard.id}
                                />
                              </div>
                            ))}
                          <div
                            className="card m-3"
                            style={
                              selected == null
                                ? { border: `2px solid ${accent_color}` }
                                : { border: "1px solid rgba(0,0,0,.125)" }
                            }
                            onClick={() => {
                              this.handleClick(null);
                            }}
                          >
                            <div className="card-body">
                              <h5 className="card-title">None</h5>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="submit" className="btn btn-primary">
                            Confirm
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect(
  null,
  {
    updateActionTable
  }
)(EscalationOptions);
