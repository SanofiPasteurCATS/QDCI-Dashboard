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

function IrritantForm(props) {
  const { onChange } = props;
  const classes = useStyles();

  const handleDateChange = (date, name) => {
    const { onChange } = props;
    onChange({
      target: { value: date.toLocaleDateString(), name: name }
    });
  };

  const { description, date } = props.irritant;
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

IrritantForm.defaultProps = {
  irritant: null
};

export default IrritantForm;
