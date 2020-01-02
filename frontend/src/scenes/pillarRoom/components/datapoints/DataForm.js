import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateDatapoint } from "../../../../core/actions/dashboards";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import parseISO from "date-fns/parseISO";
import format from "date-fns/format";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  textField: {
    marginBottom: theme.spacing(5),
    width: "100%"
  }
});

class DataForm extends Component {
  static propTypes = {
    datapoint: PropTypes.object,
    updateDatapoint: PropTypes.func.isRequired,
    series: PropTypes.number
  };

  handleDateChange = date => {
    const { onChange } = this.props;

    onChange({
      target: {
        name: "date",
        value: format(date, "yyyy-MM-dd")
      }
    });
  };

  render() {
    const { value, target, date } = this.props.datapoint;
    const { classes, onChange } = this.props;

    const parts = date.split("-");
    var newDate = new Date(parts[0], parts[1] - 1, parts[2]);

    return (
      <Fragment>
        <form onSubmit={this.onSubmit} noValidate>
          <TextField
            required
            fullWidth
            id="value"
            label="Value"
            className={classes.textField}
            onChange={onChange}
            value={value != null ? value : ""}
            name="value"
          />

          <TextField
            required
            fullWidth
            id="target"
            label="Target"
            className={classes.textField}
            onChange={onChange}
            value={target != null ? target : ""}
            name="target"
          />

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="yyyy-MM-dd"
              margin="normal"
              id="date"
              className={classes.textField}
              label="Date"
              value={newDate}
              onChange={date => {
                this.handleDateChange(date);
              }}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
          </MuiPickersUtilsProvider>
        </form>
      </Fragment>
    );
  }
}

DataForm.defaultProps = {
  datapoint: null,
  series: null
};

export default connect(null, { updateDatapoint })(withStyles(styles)(DataForm));
