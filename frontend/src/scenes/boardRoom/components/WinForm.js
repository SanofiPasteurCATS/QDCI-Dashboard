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

function WinForm(props) {
  const { description, date, participants } = props.win;
  const { onChange } = props;
  const classes = useStyles();

  const handleDateChange = date => {
    const { onChange } = props;
    onChange({ target: { value: date.toLocaleDateString(), name: "date" } });
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
        <TextField
          required
          fullWidth
          id="participants"
          label="Participants"
          className={classes.textField}
          onChange={onChange}
          value={participants || ""}
          name="participants"
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
            label="Date"
            className={classes.textField}
            value={date}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
        </MuiPickersUtilsProvider>
      </Grid>
    </Grid>
  );
}
WinForm.propTypes = {
  win: PropTypes.object,
  updateWin: PropTypes.func.isRequired,
  deleteWin: PropTypes.func.isRequired
};

export default WinForm;
