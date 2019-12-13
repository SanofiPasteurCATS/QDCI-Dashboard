import React, { Component } from "react";
import PropTypes from "prop-types";

// REDUX
import { connect } from "react-redux";
import { addDashboard } from "../../../core/actions/dashboards";

// MATERIAL-UI
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

//THIRD PARTY
import { ChromePicker } from "react-color";

//CONFIG
import {
  LEVEL_CHOICES,
  DASHBOARD_TYPE_CHOICES
} from "../../../core/config/dashboardConfig";

const styles = theme => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  nameInput: {
    fontSize: "20px"
  },
  textField: {
    width: 200,
    margin: theme.spacing(3)
  },
  flexContainer: {
    display: "flex",
    justifyContent: "center"
  },
  formContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(7)
  }
});

function getSteps() {
  return [
    "Name your board",
    "Select board settings",
    "Choose a background color"
  ];
}

class DashboardBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      title: "",
      dashboard_type: 0,
      level: 1,
      author: "",
      background: "#ffffff"
    };
  }

  render() {
    const { classes } = this.props;
    const { activeStep, background } = this.state;
    const steps = getSteps();

    return (
      <div className={classes.root} style={{ background: background }}>
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          style={{ background: background }}
        >
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed
              </Typography>
            </div>
          ) : (
            <div>
              <Grid container className={classes.flexContainer}>
                <Grid container className={classes.formContainer}>
                  <form onSubmit={this.handleFormSubmit}>
                    {this.getStepContent(activeStep)}
                  </form>
                </Grid>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Grid>

              <div></div>
            </div>
          )}
        </div>
      </div>
    );
  }

  getStepContent = stepIndex => {
    switch (stepIndex) {
      case 0:
        return this.firstForm();
      case 1:
        return this.secondForm();
      case 2:
        return this.thirdForm();
      default:
        return "Unknown stepIndex";
    }
  };

  /**
   * Handler for transition to next step.
   * Will submit form if the current step was the last step in the process.
   */
  handleNext = () => {
    const steps = getSteps();
    const { activeStep } = this.state;
    this.setState({ activeStep: activeStep + 1 });
    if (activeStep + 1 === steps.length) {
      this.handleFormSubmit();
    }
  };

  /**
   * Handler for when the user transitions to previous step.
   */
  handleBack = () => {
    this.setState({ activeStep: this.state.activeStep - 1 });
  };

  /**
   * Handler for when a input field is changed.
   * Will update the component state to reflect this change.
   */
  handleFieldChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  /**
   * Handler for when the active step must be reset
   */
  handleReset = () => {
    this.setState({ activeStep: 0 });
  };

  /**
   * Handler for form submition. This method also validates each step to ensure
   * the form is complete. If validation fails than the user is redirected to the
   * correct step to fix. Otherwise, creates Redux action.
   */
  handleFormSubmit = () => {
    const { title, author, dashboard_type, level, background } = this.state;
    const { onCreate, addDashboard } = this.props;
    if (!title) {
      this.setState({ activeStep: 0 });
      return;
    } else if (!author || isNaN(dashboard_type) || isNaN(level)) {
      this.setState({ activeStep: 1 });
      return;
    } else if (!background) {
      this.setState({ activeStep: 2 });
      return;
    } else {
      const dashboard = {
        title,
        author,
        dashboard_type,
        level,
        background
      };
      addDashboard(dashboard);
      onCreate();
    }
  };

  handleChangeColor = color => {
    this.handleFieldChange({
      target: {
        name: "background",
        value: color.hex
      }
    });
  };

  /**
   * Returns jsx for first form content
   */
  firstForm = () => {
    const { classes } = this.props;
    const { name } = this.state;
    return (
      <TextField
        required
        id="title"
        label="Title"
        className={classes.textField}
        name="title"
        value={name}
        onChange={this.handleFieldChange}
      />
    );
  };

  /**
   * Returns the jsx for second form content
   */
  secondForm = () => {
    const { classes } = this.props;
    const { author, level, dashboard_type } = this.state;
    return (
      <>
        <TextField
          required
          id="author"
          label="Author"
          className={classes.textField}
          onChange={this.handleFieldChange}
          value={author || ""}
          name="author"
        />

        <FormControl className={classes.textField}>
          <InputLabel id="demo-customized-select-label">Type</InputLabel>
          <Select
            required
            id="dashboard_type"
            onChange={this.handleFieldChange}
            value={dashboard_type}
            name="dashboard_type"
          >
            {DASHBOARD_TYPE_CHOICES.map(choice => (
              <MenuItem value={choice.id} key={choice.id}>
                {choice.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl className={classes.textField}>
          <InputLabel id="demo-customized-select-label">Type</InputLabel>
          <Select
            required
            id="level"
            onChange={this.handleFieldChange}
            value={level}
            name="level"
          >
            {LEVEL_CHOICES.map(choice => (
              <MenuItem value={choice.id} key={choice.id}>
                {choice.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </>
    );
  };

  /**
   * Returns the jsx for third form content
   */
  thirdForm = () => {
    const { background } = this.state;

    return (
      <ChromePicker
        color={background}
        onChangeComplete={this.handleChangeColor}
      />
    );
  };
}

DashboardBuilder.propTypes = {
  onCreate: PropTypes.func.isRequired,

  addDashboard: PropTypes.func.isRequired,

  classes: PropTypes.object.isRequired
};

export default connect(null, { addDashboard })(
  withStyles(styles)(DashboardBuilder)
);
