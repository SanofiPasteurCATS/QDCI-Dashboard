// DEPENDANCIES
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import KpiForm from "./KpiForm";

// ACTIONS
import { addKpi } from "../../../../core/actions/dashboards";

class KpiNew extends Component {
  constructor(props) {
    super(props);
    if (props.kpi)
      this.state = {
        ...props.kpi
      };
    else
      this.state = {
        name: "",
        kpi_type: 0,
        danger_deviation: 75,
        safe_deviation: 25,
        warning_margin: -50,
        frequency: 0,
        global_target: "",
        threshold_type: 0
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
    const { addKpi, pillar, dashboard } = this.props;
    const {
      name,
      frequency,
      safe_deviation,
      danger_deviation,
      warning_margin,
      kpi_type,
      threshold_type
    } = this.state;
    const global_target = this.state.global_target || null;
    const k = {
      name,
      danger_deviation,
      safe_deviation,
      frequency,
      kpi_type,
      warning_margin,
      dashboard,
      pillar,
      global_target,
      threshold_type
    };

    addKpi(k);
    this.setState({
      name: "",
      danger_deviation: "",
      safe_deviation: "",
      frequency: 0,
      warning_margin: -50,
      kpi_type: 0,
      global_target: ""
    });
    $("#newKpi").modal("hide");
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { pillar } = this.props;
    return (
      <form onSubmit={this.onSubmit} className="w-100 mt-3">
        <KpiForm onChange={this.onChange} values={this.state} pillar={pillar} />
        <button type="submit" className="btn btn-success mb-4 mt-3">
          Create
        </button>
      </form>
    );
  }
}

export default connect(
  null,
  { addKpi }
)(KpiNew);
