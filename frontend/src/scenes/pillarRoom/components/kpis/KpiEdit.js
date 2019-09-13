// DEPENDANCIES
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// NATIVE COMPONENTS
import KpiForm from "./KpiForm";

// ACTIONS
import { updateKpi } from "../../../../core/actions/dashboards";

class KpiEdit extends Component {
  constructor(props) {
    super(props);
    if (props.kpi)
      this.state = {
        ...props.kpi
      };
    else
      this.state = {
        name: "",
        danger_deviation: "",
        safe_deviation: "",
        warning_margin: 0.5,
        frequency: "",
        kpi_type: 0,
        global_target: "",
        threshold_type: 0
      };
  }

  static propTypes = {
    updateKpi: PropTypes.func.isRequired
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
    const { updateKpi, kpi } = this.props;
    const {
      name,
      frequency,
      safe_deviation,
      danger_deviation,
      warning_margin,
      dashboard,
      kpi_type,
      threshold_type
    } = this.state;
    const global_target = this.state.global_target || null;
    const k = {
      name,
      danger_deviation,
      safe_deviation,
      warning_margin,
      frequency,
      dashboard,
      kpi_type,
      threshold_type,
      global_target
    };
    updateKpi(k, kpi.id);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { pillarId } = this.props;
    return (
      <form onSubmit={this.onSubmit} className="w-100 mt-3">
        <KpiForm
          onChange={this.onChange}
          pillar={pillarId}
          values={this.state}
        />
        <button type="submit" className="btn btn-success mb-4 mt-3">
          Save Changes
        </button>
      </form>
    );
  }
}

export default connect(
  null,
  { updateKpi }
)(KpiEdit);
