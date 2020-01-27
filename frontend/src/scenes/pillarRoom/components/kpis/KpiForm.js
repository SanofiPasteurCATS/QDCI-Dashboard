// DEPENDANCIES
import React, { Component } from "react";
import PropTypes from "prop-types";

// CORE COMPONENTS
import DeviationSlider from "../../../../core/components/ui/slider/DeviationSlider";
import ThresholdSlider from "../../../../core/components/ui/slider/ThresholdSlider";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import { withStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";

// CONFIG
import {
  FREQUENCY_CHOICES,
  KPI_TYPE_CHOICES
} from "../../../../core/config/dashboardConfig";
import { THRESHOLD_TYPE_GREATER } from "../../../../core/config/dashboardConfig";

const styles = theme => ({
  textField: {
    marginBottom: "20px",
    paddingRight: theme.spacing(2)
  },
  formControl: {
    width: "100%",
    marginBottom: "20px"
  },
  heading: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    width: "100%"
  },
  paragraph: {
    marginBottom: theme.spacing(2)
  }
});

class KpiForm extends Component {
  constructor(props) {
    super(props);
    this.onSliderUpdate = this.onSliderUpdate.bind(this);
    this.slider = React.createRef();
  }

  componentDidMount() {
    const {
      danger_deviation,
      safe_deviation,
      kpi_type,
      warning_margin
    } = this.props.values;
    if (kpi_type === 0)
      this.updateSlider([0, safe_deviation, danger_deviation, 100]);
    else if (kpi_type === 1) this.updateSlider([0, warning_margin, 100]);
  }

  onSliderUpdate = update => {
    const { onChange } = this.props;
    onChange({ target: { name: "safe_deviation", value: update[1] } });
    onChange({ target: { name: "danger_deviation", value: update[2] } });
  };

  onThresholdSliderUpdate = update => {
    const { threshold_type } = this.props.values;
    const { onChange } = this.props;

    onChange({
      target: {
        name: "warning_margin",
        value: threshold_type === THRESHOLD_TYPE_GREATER ? update[0] : update[1]
      }
    });
  };

  onKpiTypeChange = (e, selection) => {
    const { onChange } = this.props;
    const {
      kpi_type,
      safe_deviation,
      warning_margin,
      danger_deviation
    } = this.props.values;

    if (kpi_type === 0)
      this.updateSlider([0, safe_deviation, danger_deviation, 100]);
    else if (kpi_type === 1) this.updateSlider([0, warning_margin, 100]);
    onChange({ target: { name: "kpi_type", value: selection.props.value } });
  };

  onGlobalTargetChange = e => {
    const { onChange } = this.props;
    const target = e.target.value;
    if (isNaN(target)) return;
    else onChange(e);
  };

  onThresholdTypeChange = (e, value) => {
    const { onChange } = this.props;
    if (value == 0) {
      this.updateSlider([-50, 0, 100]);
      onChange({ target: { name: "threshold_type", value: 0 } });
      onChange({ target: { name: "warning_margin", value: -50 } });
    }
    if (value == 1) {
      this.updateSlider([0, 50, 100]);
      onChange({ target: { name: "threshold_type", value: 1 } });
      onChange({ target: { name: "warning_margin", value: 50 } });
    }
  };

  updateSlider(values) {
    if (this.slider.current) this.slider.current.onChange(values);
  }

  deviationOptions = () => {
    const { safe_deviation, danger_deviation } = this.props.values;
    const { classes } = this.props;
    return (
      <>
        <Grid item lg={11}>
          <DeviationSlider
            disabledRail
            onUpdate={this.onSliderUpdate}
            ref={this.slider}
            danger_deviation={danger_deviation}
            safe_deviation={safe_deviation}
          ></DeviationSlider>
        </Grid>

        <Grid item lg={4}>
          <TextField
            fullWidth
            id="safe_deviation"
            label="Safe Limit"
            className={classes.textField}
            disabled
            value={safe_deviation || ""}
            name="safe_deviation"
          />
        </Grid>
        <Grid item lg={4}>
          <TextField
            fullWidth
            id="danger_deviation"
            label="Danger Limit"
            className={classes.textField}
            disabled
            value={danger_deviation || ""}
            name="danger_deviation"
          />
        </Grid>
      </>
    );
  };

  winLoseOptions = () => {
    const { threshold_type, global_target } = this.props.values;
    const { classes } = this.props;

    return (
      <>
        <Grid item lg={12}>
          <Typography className={classes.paragraph}>
            Is green when value is:
          </Typography>
        </Grid>
        <Grid item lg={4}>
          <RadioGroup
            aria-label="threshold_type"
            name="threshold_type"
            value={threshold_type}
            onChange={this.onThresholdTypeChange}
          >
            <FormControlLabel
              value={0}
              control={<Radio />}
              label="Greater Than (or equal to)"
            />
            <FormControlLabel
              value={1}
              control={<Radio />}
              label="Less Than (or equal to)"
            />
          </RadioGroup>
        </Grid>
        <Grid item lg={4}>
          <TextField
            fullWidth
            id="global_target"
            label="Target"
            className={classes.textField}
            onChange={this.onGlobalTargetChange}
            value={global_target || ""}
            name="global_target"
            type="text"
            placeholder="..."
          />
        </Grid>
      </>
    );
  };

  thresholdOptions = () => {
    const { warning_margin, threshold_type, global_target } = this.props.values;
    const { onChange, classes } = this.props;
    return (
      <>
        <Grid item lg={11}>
          <ThresholdSlider
            threshold_type={threshold_type}
            disabledRail
            onUpdate={this.onThresholdSliderUpdate}
            ref={this.slider}
            warning_margin={warning_margin}
            target={global_target}
            domain={
              threshold_type === THRESHOLD_TYPE_GREATER
                ? [
                    global_target ? 0 : -100,
                    global_target ? parseInt(global_target) * 1.5 : 100
                  ]
                : [
                    parseInt(global_target) - parseInt(global_target) * 0.5 ||
                      -100,
                    global_target ? parseInt(global_target) * 2 : 100
                  ]
            }
          ></ThresholdSlider>
        </Grid>
        <Grid item lg={12}>
          <Typography className={classes.paragraph}>
            Is green when value is:
          </Typography>
        </Grid>
        <Grid item lg={3}>
          <RadioGroup
            aria-label="threshold_type"
            name="threshold_type"
            value={threshold_type}
            onChange={this.onThresholdTypeChange}
          >
            <FormControlLabel
              value={0}
              control={<Radio />}
              label="Greater Than (or equal to)"
            />
            <FormControlLabel
              value={1}
              control={<Radio />}
              label="Less Than (or equal to)"
            />
          </RadioGroup>
        </Grid>
        <Grid item lg={4}>
          <TextField
            fullWidth
            id="global_target"
            label="Target"
            className={classes.textField}
            onChange={this.onGlobalTargetChange}
            value={global_target || ""}
            name="global_target"
            type="text"
            placeholder="..."
          />
        </Grid>

        <Grid item lg={4}>
          <TextField
            fullWidth
            label="Warning Limit"
            className={classes.textField}
            onChange={onChange}
            value={`${warning_margin}${global_target ? "" : "%"}`}
            name="warning_margin"
            type="text"
            placeholder="..."
          />
        </Grid>
      </>
    );
  };

  renderSliderOptions() {
    const { kpi_type } = this.props.values;
    switch (kpi_type) {
      case 0:
        return this.deviationOptions();
      case 1:
        return this.winLoseOptions();
      case 2:
        return this.thresholdOptions();
    }
  }

  render() {
    const { onChange, pillar, editFrequency, classes } = this.props;
    const { name, frequency, kpi_type, leader, unit, year } = this.props.values;

    return (
      <>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <TextField
              fullWidth
              label="Name"
              className={classes.textField}
              type="text"
              name="name"
              onChange={onChange}
              placeholder="..."
              value={name}
              required
            />
            <FormControl className={classes.formControl}>
              <InputLabel id="kpi_type">Type</InputLabel>
              <Select onChange={this.onKpiTypeChange} value={kpi_type}>
                {KPI_TYPE_CHOICES.map(choice => (
                  <MenuItem key={`choice-${choice.id}`} value={choice.id}>
                    {choice.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="frequency">Frequency</InputLabel>
              <Select
                onChange={onChange}
                value={frequency}
                name="frequency"
                required
                disabled={!editFrequency}
              >
                {FREQUENCY_CHOICES.map(choice => (
                  <MenuItem key={`choice-${choice.id}`} value={choice.id}>
                    {choice.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item lg={6}>
            <TextField
              fullWidth
              label="Leader"
              className={classes.textField}
              type="text"
              name="leader"
              onChange={onChange}
              placeholder="..."
              value={leader}
              required
            />
            <TextField
              fullWidth
              label="Unit"
              className={classes.textField}
              type="text"
              name="unit"
              onChange={onChange}
              placeholder="..."
              value={unit || ""}
            />
            <TextField
              fullWidth
              label="Year"
              className={classes.textField}
              type="text"
              name="year"
              onChange={onChange}
              placeholder="..."
              value={year || ""}
            />
          </Grid>
          <Grid item container lg={12}>
            <Typography variant={"h4"} className={classes.heading}>
              Evaluation
            </Typography>
            {this.renderSliderOptions()}
          </Grid>
        </Grid>
      </>
    );
  }
}

KpiForm.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default withStyles(styles)(KpiForm);
