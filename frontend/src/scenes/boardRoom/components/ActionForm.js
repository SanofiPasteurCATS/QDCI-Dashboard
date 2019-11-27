// DEPENDANCIES
import React from "react";
import { connect } from "react-redux";
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
    /*
      <Fragment>
        <h2>Edit Action</h2>
        <form onSubmit={this.onSubmit}>
          <div className="row justify-content-between">
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="letter">Letter</label>
                <input
                  className="form-control"
                  type="text"
                  name="letter"
                  onChange={this.onChange}
                  value={letter || ""}
                />
              </div>
              <div className="form-group">
                <label htmlFor="problem">Problem</label>
                <input
                  className="form-control"
                  type="text"
                  name="problem"
                  onChange={this.onChange}
                  value={problem}
                />
              </div>
              <div className="form-group">
                <label htmlFor="root_cause">Root Cause</label>
                <input
                  className="form-control"
                  type="text"
                  name="root_cause"
                  onChange={this.onChange}
                  value={root_cause}
                />
              </div>
              <div className="form-group">
                <label htmlFor="solution">Solution</label>
                <input
                  className="form-control"
                  type="text"
                  name="solution"
                  onChange={this.onChange}
                  value={solution}
                />
              </div>
            </div>
            <div className="col-sm-5">
              <div className="form-group">
                <label htmlFor="leader">Leader</label>
                <input
                  className="form-control"
                  type="text"
                  name="leader"
                  onChange={this.onChange}
                  value={leader}
                />
              </div>
              <div className="form-group">
                <label htmlFor="date" className="d-block">
                  Date
                </label>
                <DatePicker
                  className="form-control"
                  onChange={date => this.onDateChange(date)}
                  selected={date}
                  dateFormat="yyyy-MM-dd"
                />
              </div>
            </div>

            <div className="col-sm-12 d-flex justify-content-end">
              <button
                type="button"
                className="btn
            btn-danger mr-4"
                onClick={this.delete}
              >
                Delete
              </button>
              <button
                type="submit"
                className="btn
            btn-primary"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </Fragment>
      */
  );
}

ActionForm.defaultProps = {
  action: null
};

export default ActionForm;
