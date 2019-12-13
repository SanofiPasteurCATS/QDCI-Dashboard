// DEPENDANCIES
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import KpiForm from "./KpiForm";

// ACTIONS
import { addKpi } from "../../../../core/actions/dashboards";

// MATERIAL-Ui
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";

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
        threshold_type: 0,
        leader: "",
        unit: ""
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
    const { addKpi, pillar, dashboard, handleToggleOpen } = this.props;
    const {
      name,
      frequency,
      safe_deviation,
      danger_deviation,
      warning_margin,
      kpi_type,
      leader,
      threshold_type
    } = this.state;
    const global_target = this.state.global_target || null;
    const isPercentage = global_target ? false : true;
    const unit = this.state.unit || null;
    const k = {
      name,
      danger_deviation,
      safe_deviation,
      frequency,
      kpi_type,
      warning_margin,
      dashboard,
      leader,
      pillar,
      global_target,
      threshold_type,
      unit,
      isPercentage
    };

    addKpi(k);
    this.setState({
      name: "",
      danger_deviation: 75,
      safe_deviation: 25,
      frequency: 0,
      warning_margin: -50,
      kpi_type: 0,
      leader: "",
      global_target: "",
      unit: ""
    });
    handleToggleOpen(false)();
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { pillar, open, handleToggleOpen } = this.props;

    return (
      <Dialog
        open={open}
        onClose={handleToggleOpen(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New KPI</DialogTitle>
        <DialogContent>
          <KpiForm
            onChange={this.onChange}
            values={this.state}
            pillar={pillar}
            editFrequency
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleToggleOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={this.onSubmit} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default connect(null, { addKpi })(KpiNew);
