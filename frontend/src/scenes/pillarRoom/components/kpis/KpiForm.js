// DEPENDANCIES
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// CONFIG
import { FREQUENCY_CHOICES } from "../../../../core/config/dashboardConfig";

// ACTIONS
import { addKpi } from "../../../../core/actions/dashboards";

class KpiForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      frequency: "",
      safe: "",
      danger: "",
      dashboard: "",
      pillar: ""
    };
  }

  static propTypes = {
    addKpi: PropTypes.func.isRequired
  };

  update = kpi => {
    this.setState({ ...kpi });
  };

  componentDidUpdate(prevProps) {
    const { kpi } = this.props;
    if (kpi != prevProps.kpi) {
      this.update(kpi);
    }
  }

  onSubmit = e => {
    e.preventDefault();
    const { addKpi } = this.props;
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
    const { pillarId, kpi } = this.props;
    return (
      <Fragment>
        <form onSubmit={this.onSubmit} className="w-100 mt-3" noValidate>
          <div className="row">
            <div className="col-sm-4">
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
            </div>
            <div className="col-sm-4">
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
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <label htmlFor="pillar">Pillar</label>
                <input
                  className="form-control"
                  type="text"
                  name="pillar"
                  onChange={this.onChange}
                  placeholder="..."
                  value={kpi ? kpi.pillar : ""}
                  required
                  disabled
                />
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-success mb-4 mt-3">
            Save Changes
          </button>
        </form>
      </Fragment>
    );
  }
}

export default connect(
  null,
  { addKpi }
)(KpiForm);
