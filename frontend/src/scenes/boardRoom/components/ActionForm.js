// DEPENDANCIES
import React from "react";
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

function ActionForm(props) {
  const { onChange } = props;
  const classes = useStyles();

  const handleDateChange = (date, name) => {
    const { onChange } = props;
    onChange({
      target: { value: date.toLocaleDateString(), name: name }
    });
  };

  const { letter, problem, root_cause, solution, leader, date } = props.action;
  return (
    <Grid container>
      <Grid item md={12} className={classes.container}>
        <TextField
          required
          fullWidth
          id="letter"
          label="Letter"
          className={classes.textField}
          onChange={onChange}
          value={letter || ""}
          name="letter"
        />
      </Grid>
      <Grid item md={12} className={classes.container}>
        <TextField
          required
          fullWidth
          id="problem"
          label="Problem"
          className={classes.textField}
          onChange={onChange}
          value={problem || ""}
          name="problem"
        />
      </Grid>
      <Grid item md={12} className={classes.container}>
        <TextField
          required
          fullWidth
          id="root_cause"
          label="Root Cause"
          className={classes.textField}
          onChange={onChange}
          value={root_cause || ""}
          name="root_cause"
        />
      </Grid>
      <Grid item md={12} className={classes.container}>
        <TextField
          required
          fullWidth
          id="solution"
          label="Solution"
          className={classes.textField}
          onChange={onChange}
          value={solution || ""}
          name="solution"
        />
      </Grid>
      <Grid item md={12} className={classes.container}>
        <TextField
          required
          fullWidth
          id="leader"
          label="Leader"
          className={classes.textField}
          onChange={onChange}
          value={leader || ""}
          name="leader"
        />
      </Grid>
      <Grid item md={12} className={classes.container}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date"
            className={classes.textField}
            label="Due Date"
            value={date}
            onChange={date => {
              handleDateChange(date, "date");
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

ActionForm.defaultProps = {
  action: null
};

export default ActionForm;
