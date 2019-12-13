// DEPENDANCIES
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ChromePicker } from "react-color";

// CONFIG
import { PLOT_TYPE_CHOICES } from "../../../../core/config/dashboardConfig";

// ACTIONS
import { updateSeries } from "../../../../core/actions/dashboards";

// MATERIAL-UI
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
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";

const styles = theme => ({
  textField: {
    marginBottom: "40px",
    paddingRight: theme.spacing(2)
  },
  formControl: {
    width: "100%",
    marginBottom: "20px"
  }
});

class SeriesEdit extends Component {
  state = {
    name: "",
    color: "",
    plot_type: "li"
  };

  static propTypes = {
    updateSeries: PropTypes.func.isRequired
  };

  onChangeColor = color => {
    this.setState({ color: color.hex });
  };

  update = series => {
    this.setState({
      name: series.name,
      color: series.color,
      plot_type: series.plot_type
    });
  };

  componentDidMount() {
    const { series } = this.props;
    this.setState({
      name: series.name,
      color: series.color,
      plot_type: series.plot_type
    });
  }

  componentDidUpdate(prevProps) {
    const { series } = this.props;
    if (series !== prevProps.series) this.update(series);
  }

  onSubmit = e => {
    e.preventDefault();
    const { kpi, series, updateSeries } = this.props;
    const { name, color, plot_type } = this.state;
    const s = {
      name,
      color,
      plot_type,
      kpi
    };
    updateSeries(s, series.id);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, color, plot_type } = this.state;
    const { classes } = this.props;
    return (
      <Fragment>
        <form onSubmit={this.onSubmit} noValidate className="w-100">
          <Grid container spacing={4}>
            <Grid item sm={6}>
              <TextField
                fullWidth
                label="Name"
                className={classes.textField}
                type="text"
                name="name"
                onChange={this.onChange}
                placeholder="..."
                value={name}
                required
              ></TextField>
              <FormControl className={classes.formControl}>
                <InputLabel id="kpi_type">Type</InputLabel>
                <Select
                  type="text"
                  name="plot_type"
                  onChange={this.onChange}
                  placeholder="..."
                  value={plot_type}
                  fullWidth
                  required
                >
                  {PLOT_TYPE_CHOICES.map(choice => (
                    <MenuItem key={`choice-${choice.id}`} value={choice.id}>
                      {choice.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={4}>
              <FormControl className={classes.textField}>
                <label htmlFor="color">Color</label>
                <ChromePicker
                  color={color}
                  onChangeComplete={this.onChangeColor}
                />
              </FormControl>
            </Grid>
          </Grid>

          <Button
            type="submit"
            color="primary"
            variant="contained"
            startIcon={<SaveIcon />}
          >
            Save Series
          </Button>
        </form>
      </Fragment>
    );
  }
}

export default connect(null, { updateSeries })(withStyles(styles)(SeriesEdit));
