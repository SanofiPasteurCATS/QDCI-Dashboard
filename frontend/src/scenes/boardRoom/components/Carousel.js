import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "100%",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    position: "relative"
  },
  header: {
    color: "white",
    display: "flex",
    alignItems: "center",
    height: 50,
    width: "100%",
    paddingLeft: theme.spacing(1),
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    position: "absolute",
    top: 0,
    left: 0
  },
  img: {
    display: "block",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "300px",
    maxWidth: "1500px",
    marginLeft: "auto",
    marginRight: "auto"
  },
  stepper: {
    position: "relative",
    top: -32,
    backgroundColor: "transparent"
  },
  buttonsContainer: {
    position: "absolute",
    height: "100%",
    width: "100%",
    padding: theme.spacing(3)
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
    alignItems: "center"
  },
  button: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    color: "white",
    margin: "0 8px"
  }
}));

function SwipeableTextMobileStepper(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { slides } = props;
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = slides.length;

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleStepChange(step) {
    setActiveStep(step);
  }

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        enableMouseEvents
      >
        {slides.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                className={classes.img}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>

      <div className={classes.buttonsContainer}>
        <div className={classes.buttons}>
          <IconButton
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            className={classes.button}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </IconButton>
          <IconButton
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            className={classes.button}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </IconButton>
        </div>
      </div>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        dotActive={{ color: "red" }}
        activeStep={activeStep}
        className={classes.stepper}
        backButton={<div />}
        nextButton={<div />}
      />
    </div>
  );
}

export default SwipeableTextMobileStepper;
