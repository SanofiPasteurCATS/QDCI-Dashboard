import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addKpi } from "../../../actions/dashboards";
import { FREQUENCY_CHOICES } from "../../../common/dashboardOptions";

class KpiForm extends Component {
  state = {
    name: "",
    frequency: 0,
    safe: "",
    danger: "",
    dashboard: this.props.dashboardId
  };

  static propTypes = {
    addKpi: PropTypes.func.isRequired
  };

  onSubmit = e => {
    e.preventDefault();
    const { addKpi, pillarId } = this.props;
    const { name, frequency, safe, danger, dashboard } = this.state;
    const pillar = pillarId;
    const kpi = {
      name,
      pillar,
      danger,
      safe,
      frequency,
      dashboard
    };

    addKpi(kpi);
    this.setState({
      name: "",
      danger: "",
      safe: "",
      frequency: 0
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, frequency, safe, danger } = this.state;
    const { pillarId } = this.props;
    return (
      <Fragment>
        <form onSubmit={this.onSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              placeholder="..."
              value={name}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="pillar">Pillar</label>
            <input
              className="form-control"
              type="text"
              name="pillar"
              onChange={this.onChange}
              placeholder="..."
              value={pillarId}
              required
              disabled
            />
          </div>

          <div className="form-group">
            <label htmlFor="frequency">Frequency</label>
            <select
              className="form-control"
              type="text"
              name="frequency"
              onChange={this.onChange}
              placeholder="..."
              value={frequency}
              required
            >
              {FREQUENCY_CHOICES.map(choice => (
                <option key={`choice-${choice.id}`} value={choice.id}>
                  {choice.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="safe">Safe Range</label>
            <input
              className="form-control"
              type="text"
              name="safe"
              onChange={this.onChange}
              placeholder="..."
              value={safe}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="danger">Danger Range</label>
            <input
              className="form-control"
              type="text"
              name="danger"
              onChange={this.onChange}
              placeholder="..."
              value={danger}
              required
            />
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
              Create Kpi
            </button>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default connect(
  null,
  { addKpi }
)(KpiForm);
