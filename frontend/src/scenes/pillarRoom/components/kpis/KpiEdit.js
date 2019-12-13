// DEPENDANCIES
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// NATIVE COMPONENTS
import KpiForm from "./KpiForm";

// ACTIONS
import { updateKpi } from "../../../../core/actions/dashboards";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";

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
        threshold_type: 0,
        leader: "",
        unit: ""
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
      threshold_type,
      leader,
      unit
    } = this.state;
    const global_target = this.state.global_target || null;
    const isPercentage = global_target ? false : true;
    const k = {
      name,
      danger_deviation,
      safe_deviation,
      warning_margin,
      frequency,
      dashboard,
      kpi_type,
      threshold_type,
      global_target,
      leader,
      unit,
      isPercentage
    };
    updateKpi(k, kpi.id);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { kpi, onRemove } = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        <KpiForm
          onChange={this.onChange}
          pillar={kpi.pillar}
          values={this.state}
        />
        <div style={{ float: "right" }}>
          <Button
            color="primary"
            type="submit"
            variant="contained"
            style={{ marginRight: "15px" }}
            startIcon={<SaveIcon />}
          >
            Save Changes
          </Button>
          <Button
            color="secondary"
            variant="contained"
            onClick={onRemove}
            startIcon={<DeleteIcon />}
          >
            Delete Kpi
          </Button>
        </div>
      </form>
    );
  }
}

export default connect(null, { updateKpi })(KpiEdit);
