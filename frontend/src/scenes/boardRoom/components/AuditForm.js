// DEPENDANCIES
import React, { Component } from "react";
import PropTypes from "prop-types";

// MATERIAL-UI
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  textField: {
    marginBottom: theme.spacing(5),
    width: "100%"
  }
}));

function AuditForm(props) {
  const { description, start_date, end_date } = props.audit;
  const { onChange } = props;
  const classes = useStyles();

  const handleDateChange = (date, name) => {
    const { onChange } = props;
    onChange({
      target: { value: date.toLocaleDateString(), name: name }
    });
  };
  return (
    <Grid container>
      <Grid item md={12} className={classes.container}>
        <TextField
          required
          fullWidth
          id="description"
          label="Description"
          className={classes.textField}
          onChange={onChange}
          value={description || ""}
          name="description"
        />
      </Grid>
      <Grid item md={12} className={classes.container}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            className={classes.textField}
            id="start_date"
            label="Start Date"
            value={start_date}
            onChange={date => {
              handleDateChange(date, "start_date");
            }}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
        </MuiPickersUtilsProvider>
      </Grid>
      <Grid item md={12} className={classes.container}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="end_date"
            className={classes.textField}
            label="End Date"
            value={end_date}
            onChange={date => {
              handleDateChange(date, "end_date");
            }}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
        </MuiPickersUtilsProvider>
      </Grid>
    </Grid>
  );
}

export default AuditForm;
